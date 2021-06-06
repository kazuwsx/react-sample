const express = require('express')
const app = express()
const portNo = 3000

// ルートへのアクセス
app.get('/', (req, res) => {
  if(!req.query) {
    res.send(
      '<p><a href="/dice/6">6面体のサイコロ</a><br />' +
      '<a href="/dice/12">12面体のサイコロ</a></p>'
    )
  } else {
    const q = parseInt(req.query.q, 10)
    res.send(
      '今回の値は...' + dice(q)
    )
  }  
})

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('起動しました', `http://localhost:${portNo}`)
})
