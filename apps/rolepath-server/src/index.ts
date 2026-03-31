import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3201

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Hello from Express API!' })
})

app.get('/api/health', (req: Request, res: Response) => {
	res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`)
})
