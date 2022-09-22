const express = require('express');
const routerApi = require('./Routes');

const { errorHandler, boomErrorHandler, logError } = require('./middlewares/errorHandler')

const app = express();
const port = 3000;


app.use(express.json());

app.listen(port, () =>{
  console.log('listen on port ' + port);
})

routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);


