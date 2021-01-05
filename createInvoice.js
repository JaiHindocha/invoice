const fs = require("fs");
const PDFDocument = require("pdfkit");

function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  doc.registerFont('Roboto', 'font/Roboto/Roboto-Regular.ttf')
  doc.registerFont('Roboto-Bold', 'font/Roboto/Roboto-Bold.ttf')

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  // generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc
    .image("logo.jpeg", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("Grocamie", 110, 57)
    .fontSize(10)
    .text("Grocamie", 200, 50, { align: "right" })
    .text("Delhi", 200, 65, { align: "right" })
    .text("India", 200, 80, { align: "right" })
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Invoice", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  var subtotal = 0;
  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    subtotal = subtotal + (item.sp * item.quantity);
  }
  var balance = 0;
  if (invoice.paid == 0){
    balance = subtotal;
  }

  doc
    .fontSize(10)
    .text("Invoice Number:", 50, customerInformationTop)
    .font("Roboto-Bold")
    .text(invoice.invoice_nr, 150, customerInformationTop)
    .font("Roboto")
    .text("Invoice Date:", 50, customerInformationTop + 15)
    .text(formatDate(new Date()), 150, customerInformationTop + 15)
    
    .text("Balance Due:", 50, customerInformationTop + 30)
    .text(
      formatCurrency(balance),
      150,
      customerInformationTop + 30
    )

    .font("Roboto-Bold")
    .text(invoice.shipping.name, 300, customerInformationTop)
    .font("Roboto")
    .text(invoice.shipping.address, 300, customerInformationTop + 15)
    .text(
      invoice.shipping.city +
        ", " +
        invoice.shipping.state +
        ", " +
        invoice.shipping.country,
      300,
      customerInformationTop + 30
    )
    .moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 290;

  doc.font("Roboto-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Item",
    "MRP",
    "Discounted Price",
    "Price without Tax",
    "Quantity",
    "Total"
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Roboto");

  var invmrp = 0;
  var tax = 0;
  var subtotal = 0;
  var position = invoiceTableTop+30;
  // var height = doc.heightOfString(invoice.items[i].item, {width: 120});

  for (i = 0; i < invoice.items.length; i++) {

    if(position > doc.page.height-100){
      doc.addPage();
      position = 50;
    }
    const item = invoice.items[i];
    
    invmrp = invmrp + (item.mrp * item.quantity);
    subtotal = subtotal + (item.sp * item.quantity);
    tax = tax + (item.sp * (item.gst/100) * item.quantity);
    
    generateTableRow(
      doc,
      position,
      item.item,
      item.mrp,
      item.sp,
      item.sp * (1-(item.gst/100)),
      item.quantity,
      formatCurrency((item.sp * (1-(item.gst/100))) * item.quantity)
    );
    var height = doc.heightOfString(item.item, {width: 120});
    generateHr(doc, position + height + 10);
    position = position + height + 20;

  }
  position += 20;

  if(position > doc.page.height-100){
    doc.addPage();
    position = 50;
  }

  const subtotalfield = position;
  generateTableRow(
    doc,
    subtotalfield,
    "",
    "",
    "",
    "",
    "Subtotal",
    formatCurrency(subtotal - tax)
  );

  position += 20;

  if(position > doc.page.height-100){
    doc.addPage();
    position = 50;
  }
  
  const taxPrice = position;
  generateTableRow(
    doc,
    taxPrice,
    "",
    "",
    "",
    "",
    "GST",
    formatCurrency(tax)
  );
  doc.font("Roboto");

  position += 20;

  if(position > doc.page.height-100){
    doc.addPage();
    position = 50;
  }

  const duePosition = position;
  doc.font("Roboto-Bold");
  generateTableRow(
    doc,
    duePosition,
    "",
    "",
    "",
    "",
    "Grand Total",
    formatCurrency(subtotal)
  );
  doc.font("Roboto");

  position += 20;

  if(position > doc.page.height-100){
    doc.addPage();
    position = 50;
  }

  const savings = position;
  generateTableRow(
    doc,
    savings,
    "",
    "",
    "",
    "",
    "Savings",
    formatCurrency(invmrp - subtotal)
  );
}

// function generateFooter(doc) {
//   doc
//     .fontSize(10)
//     .text(
//       "Payment is due within 15 days. Thank you for your business.",
//       50,
//       780,
//       { align: "center", width: 500 }
//     );
// }

function generateTableRow(
  doc,
  y,
  item,
  mrp,
  sp,
  gst,
  quantity,
  total
) {
  doc
    .fontSize(10)
    .text(item, 50, y,{ width: 120, align: "left" })
    .text(mrp, 170, y, { width: 50, align: "right" })
    .text(sp, 220, y, { width: 100, align: "right" })
    .text(gst, 320, y, { width: 100, align: "right" })
    .text(quantity, 400, y, { width: 80, align: "right" })
    .text(total, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatCurrency(rupee) {
  return ['\u20b9'] + '  ' + (rupee).toFixed(2);
  // return (rupee).toFixed(2);

}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = {
  createInvoice
};
