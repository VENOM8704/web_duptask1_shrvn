const express = require('express')
const exphbs = require('express-handlebars')
const app = express();
const routes = require('./routes/taskRoutes')
app.engine('hbs', exphbs.engine({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use('/',routes)


app.listen(5000,()=>console.log("app started"))
