// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'UTF-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Blog does not exist' })
    }
    const blogData = JSON.parse(data)
    res.status(200).json(blogData)
  })
}
