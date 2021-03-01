const express = require('express');
const adminRoute = require('./routes/admin');

const app = express();

app.use(adminRoute);



app.listen(3000);  