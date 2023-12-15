const express = require('express');
const app = express();

const routerWelcome = require('./routers/welcomeroute');
const routerQcm = require('./routers/qcmroute');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.use(routerWelcome);
app.use('/qcms', routerQcm);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
