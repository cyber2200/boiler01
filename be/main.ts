import express, { Request, Response } from 'express'
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

// Static and frontend
app.use(express.static('public'))
app.get('/*', async function (req: Request, res: Response) {
	res.sendFile(process.cwd() + '/public/index.html')
})

app.post('/*', async function (req: Request, res: Response) {
	const {Core} = require("./core/Core")
	const core = new Core()
	await core.run(req, res)
})

// Serving...
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})