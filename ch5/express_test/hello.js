// Expressのモジュールを取り込んで生成
const express = require('express')
const app = express()
const portNo = 3000

// アクセスがあった時
app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

// サーバーを起動
app.listen(portNo, () => {
  console.log('起動しました', `http://localhost:${portNo}`)
})
