// ************ Requires ************
const express = require('express');
const methodOverride =  require('method-override'); 
const {chargeData} = require('./chargeProcess');
const cors = require('cors');
const {CHARGE_PROCESS}  = require('./credentials');
const app = express();

// ************ Middlewares ************
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); 

// ************ Route System ************
const mainRouter = require('./routes/mainRouter'); 
app.use('/api/v1', mainRouter);

// ************ Server ************
app.listen(process.env.PORT || 3000, function() {
  console.log("Server running in port 3000");
  if (CHARGE_PROCESS==="true"){chargeData();}
})

