import express, { request } from 'express'
import { logger } from './middlewares/logger.js'

const app = express()
const PORT = 3003

app.use(logger)
app.use(express.urlencoded({extended: true}))
app.use('/assets', express.static('assets'))

app.get('/', (request, response) => {
    response.render('./pages/index.ejs')
})
app.get('/add/:one/:two', (request, response) => {
    const x1 = parseInt(request.params.one)
    const x2 = parseInt(request.params.two)
    const result = x1 + x2
    response.send(`${x1} + ${x2} = ${result}`)
})
app.get('/average/:one/and/:two', (request, response) => {
    const number1 = parseInt(request.params.one)
    const number2 = parseInt(request.params.two)
    const average = (number1 + number2) / 2
    response.send(`The average of ${number1} and ${number2} is ${average}`)
})
app.get('/add', (request, response) => {
    response.render('./pages/calc.ejs')
})
app.post('/calc', (request, response) => {
    console.log(request.body)
    const number1 = parseInt(request.body.add1)
    const number2 = parseInt(request.body.add2)
    const res = number1 + number2
    console.log(number1, number2, res)
    response.send(`The sum of ${number1} and ${number2} is ${res}<br>
    <a href="/add">Do another addition</a>`)
})
app.get('/average', (request, response) => {
    response.render('./pages/average.ejs')
})
app.get('/about', (request, response) => {
    response.render('./pages/about.ejs')
})
app.get('/search', (request, response) => {
    const query = request.query.q
    response.send(`You searched for "${query}"<br>
    <a href="/">Do another search</a>`)
})
app.get('/user/:userslug/note/:noteslug', (request, response) => {
    const attr = "tasty"
    const subject = "cake"
    const thing = attr + " " + subject
    response.send(`Would you like to buy a ${thing}?`)
})

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}, click on http://localhost:${PORT} to go the page`)
})
