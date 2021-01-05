const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Test User",
    address: "Address",
    city: "San Francisco",
    state: "Delhi",
    country: "India"
  },
  items: [
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 0.12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 0.05
    }
  ],
  // subtotal: 200,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
