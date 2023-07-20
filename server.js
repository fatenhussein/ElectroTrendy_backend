const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config({
  path: './config.env',
});

const DB = process.env.DATA_BASE.replace('<password>', process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connect to db'));

const app = require('./app');
const port = 7000;

app.listen(port, () => {
  console.log('runnnnnnn');
});
