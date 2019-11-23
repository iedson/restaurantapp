// Dependencies
// ===========================================================
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// Data
// ===========================================================
const rsvp = [
    {
        customerName: 'Izzy',
        customerEmail: 'izzy594@gmail.com',
        customerId: '2032825',
        phoneNUmber: '7737179915',
    },
    {
        customerName: 'Oriana',
        customerEmail: 'og3000@gmail.com',
        customerId: '3030303',
        phoneNUmber: '3085942767', 
    },

];

const waitlist = [
    {
        customerName: 'Scott',
        customerEmail: 'scottyk@gmail.com',
        customerId: '59876',
        phoneNUmber: '3992544056',  
    },
    {
        customerName: 'Rachael',
        customerEmail: 'rachturnup@gmail.com',
        customerId: '69857',
        phoneNUmber: '5967899989',  
    },
];




// Routes - req means request not require
// ===========================================================
// html route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, './Client Side/index.html'))
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, './Client Side/tables.html'))
  });
app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, './Client Side/form.html'))
  });

// api route
app.get('/api/rsvp', (req, res) => {
    return res.json(rsvp);
});

app.get('/api/waitlist', (req, res) => {
    return res.json(waitlist);
});

app.post('/api/tables', (req, res) => {
    /* getting the raw data from client */
    /* format for my database */
    if (rsvp.length < 5) {
      rsvp.push(req.body);
      res.json(true);
    } else {
      waitlist.push(req.body);
      res.json(false);
    }
  });
  app.post('/api/clear', (req, res) => {
    rsvp.length = 0;
    waitlist.length = 0;
    res.json(true);
  });







// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });