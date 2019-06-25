require('dotenv').config();
require('./lib/utils/connect')();
const updateDb = require('./lib/service/updateDb');


console.log('proceesss is goo', process.env.TOKEN);

const app = require('./lib/app');

const PORT =  7891;

app.listen(PORT, () => {
  //eslint-disable-next-line no-console
  console.log(`listening on ${PORT}`);
});