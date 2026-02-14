const express = require('express')
const app = express()
const port = 3000

app.get('/api/shubham', (req, res) => {
    const data = [
        {name : 'shubham',
        salary: '40,000',}
    ]
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
