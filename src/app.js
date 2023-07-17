
import express from 'express'
import handlebars from 'express-handlebars'
import productRouter from './routers/product.router.js'
import userRouter from './routers/user.router.js'
import compression from 'express-compression'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 app.engine('hbs', handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs'
    }))
    app.set('views', './src/views')
    app.set('view engine', 'hbs')
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

app.get('/stringlargo', compression(), (req, res) => {
    let string = 'Este string es muy largo para el request'
    for (let index = 0; index < 10e4; index++) {
        string += '<br>Estamos haciendo este string aun mas largo.'
    }
    res.send(string)
})

app.listen(8080, () => console.log('Server Up'))
