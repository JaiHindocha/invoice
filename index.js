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
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "Good days in my mind time to stress out cant be stressed now",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "Good days in my mind time to stress out cant be stressed now",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "Good days in my mind time to stress out cant be stressed now",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "Good days in my mind time to stress out cant be stressed now",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "Good days in my mind time to stress out cant be stressed now",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "Good days in my mind time to stress out cant be stressed now",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },
    {
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    },{
      item: "TC 100",
      mrp: 100,
      sp: 80,
      quantity: 2,
      gst: 12
    },
    {
      item: "USB_EXT",
      mrp: 200,
      sp: 160,      
      quantity: 1,
      gst: 5
    }
  ],
  // subtotal: 200,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
