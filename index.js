const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const logger = require('morgan')
const mongoose = require('mongoose');
const methodOverride = require('method-override')

// Khai báo các routes
const loginRouter = require('./routes/login')
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));  
app.use(methodOverride('_method'))

mongoose.connect('mongodb+srv://admin:tai1892001@cluster0.pflnnvu.mongodb.net/?retryWrites=true&w=majority', {
        //No More Deprecation Warning Options in Mongoose 6
        //- these are no longer supported options in Mongoose 6 - only use it with old versions
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false
        useNewUrlParser: true, 
        useUnifiedTopology: true
})
.then(()=>{
    console.log('Connected to DB!!!!!!!');
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})
.catch((e)=>{
    console.log("Something went wrong", e);
})

app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);

module.exports = app;

