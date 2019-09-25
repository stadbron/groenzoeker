const fs = require('fs')
const path = require('path')
const https = require('https')
const dotenv = require('dotenv')

const env = dotenv.config().parsed
const basepath = [__dirname, 'src/assets/data']

if (!env.HOOFDGROENSTRUCTUUR_ENDPOINT) {
  return 0
}

https.get(env.HOOFDGROENSTRUCTUUR_ENDPOINT, res => {
  res.setEncoding('utf8')
  let body = ''
  res.on('data', data => {
    body += data
  })
  res.on('end', () => {
    fs.writeFile(path.join(...basepath, 'hoofdgroenstructuur.json'), body, error => {
      if (error) {
        console.error(error)
      }
    })
  })
})
