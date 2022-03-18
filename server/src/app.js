import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'




console.log('hello')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT ||8081 )

app.get('/status', (req, res) => {
   res.send({
       message : `hello world`
   })
})

app.post('/register', (req, res) => {
    res.send({
        message : `your user was registred ${req.body.email}`
    })
 })