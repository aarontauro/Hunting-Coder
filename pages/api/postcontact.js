import * as fs from 'fs'

export default async function handler(req, res) {
    const data = req.body
    fs.promises.appendFile('contactData.json', JSON.stringify(data), 'UTF-8')
    res.status(200).json(data)
}