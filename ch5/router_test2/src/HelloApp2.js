import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// React Routerを使ったメインコンポーネントの定義
const HelloApp2 = () => (
  <Router>
    <div style={{margin: 20}}>
      <HelloHeader />
      <div>
        <Route exact path='/' component={HelloJapanese} />
        <Route path='/ja' component={HelloJapanese} />
        <Route path='/en' component={HelloEnglish} />
        <Route path='/cn' component={HelloChinese} />
      </div>
      <HelloFooter />
    </div>
  </Router>
)

// 固定ヘッダーの定義
const HelloHeader = () => (
  <div>
    <h3 style={styleHeader}>HelloApp v2</h3>
    <p>
      [<a href='/ja'>日本語</a>]
      [<a href='/en'>英語</a>]
      [<a href='/cn'>中国語</a>]
    </p>
  </div>
)

// 固定フッターの定義
const HelloFooter = () => (
  <div style={styleHeader}>
    挨拶をいろいろな言語で表示するアプリです。
  </div>
)

// 日本語画面を表すコンポーネントを定義
const HelloJapanese = () => (
  <div>
    <h1>こんにちは</h1>
    <p><a href='/'>戻る</a></p>
  </div>
)

// 英語画面を表すコンポーネントを定義
const HelloEnglish = () => (
  <div>
    <h1>Hello</h1>
    <p><a href='/'>Back</a></p>
  </div>
)

// 中国語画面を表すコンポーネントを定義
const HelloChinese = () => (
  <div>
    <h1>你好</h1>
    <p><a href='/'>返回</a></p>
  </div>
)

// スタイルの定義
const styleHeader = {
  backgroundColor: 'orange',
  color: 'white',
  padding: 8
}

export default HelloApp2
