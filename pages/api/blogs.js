// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default async function handler(req, res) {
    const data = await fs.promises.readdir('blogdata', 'UTF-8')
    let blogData = []
    for (let index = 0; index < data.length; index++) {
      let blog = await fs.promises.readFile(`blogdata/${data[index]}`, 'UTF-8');
      blogData.push(JSON.parse(blog))
    }
    res.status(200).json(blogData)
}
