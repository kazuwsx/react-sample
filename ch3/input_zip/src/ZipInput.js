import React, {Component} from 'react'

// 郵便番号を入力するコンポーネント
export default class ZipInput extends Component {
  constructor (props) {
    super(props) 
    const v = (this.props.value)
      ? this.props.value : ''
    // 状態を初期化
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }
  // パターンに合致するかチェック
  checkValue (s) {
    const zipPattern = /^\d{3}-\d{4}$/
    return zipPattern.test(s)
  }
  // 値がユーザーにより変更されたとき
  handleChange (e) {
    const v = e.target.value
    // 数値とハイフン以外を除外
    const newValue = v.replace(/[^0-9-]+/g, '')
    const newIsOK = this.checkValue(newValue)
    // 状態に設定
    this.setState({
      value: newValue,
      isOK: newIsOK
    })
    // イベントを実行する
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK
      })
    }
  }
  // プロパティが変更されたとき
  componentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }
  // 描画
  render () {
    const msg = this.renderStatusMessage()
    return (<div>
      <label>郵便番号: <br />
        <input type='text'
          placeholder='郵便番号を入力'
          value={this.state.value}
          onChange={e => this.handleChange(e)} />
        {msg}
      </label>
    </div>)
  }
  // 入力が正しいかどうかのメッセージ
  renderStatusMessage () {
    // メッセージ表示用の基本的なStyle
    const so = {
      margin: '8px',
      padding: '8px',
      color: 'white'
    }
    let msg =null
    if (this.state.isOK) { // OKのとき
      so.backgroundColor = 'green'
      msg = <span style={so}>OK</span>
    } else { // NGのとき （ただし空白のときは非表示）
      so.backgroundColor = 'red'
      msg = <span style={so}>NG</span>
    }
    return msg
  }
}