import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'

const app: Express = express()
const port: Number = 5002

app.use(bodyParser.urlencoded())
app.use("/public", express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req: Request, res: Response) => {
    res.render('../views/pages/index', {})
})

app.post('/submit', (req: Request, res: Response) => {
    const name1: string = req.body.name;
    const age1: number = req.body.age;
    console.log('Recieved the data:', name1, age1)
    res.send('Recieved.')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
