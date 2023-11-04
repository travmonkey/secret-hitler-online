import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { createServer } from 'node:http'
import { Server } from "socket.io"

const app: Express = express()
const server = createServer(app)
const io = new Server(server)

const port: Number = 5002

app.use(bodyParser.urlencoded())
app.use("/public", express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req: Request, res: Response) => {
    res.render('../../frontend/views/pages/index', {})
})

app.get('/message', (req: Request, res: Response) => {
    res.render('../../frontend/views/pages/messaging', {})
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

app.post('/submit', (req: Request, res: Response) => {
    const name1: string = req.body.name;
    const age1: Number = req.body.age;
    console.log('Recieved the data:', name1, age1)
    res.send('Recieved.')
})

server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
