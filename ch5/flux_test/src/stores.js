import {appDispatcher} from './appDispathcer.js'
import {ActionType} from './actions.js'

// 今回利用するStoreを用意
export const nameStore = {name: '', onChange: null}
export const messageStore = {message: '', onChange: null}

// ActionとStoreを結びつける
appDispatcher.register(payload => {
  if (payload.actionType === ActionType.CHANGE_NAME) {
    nameStore.name = payload.value
    nameStore.onChange()
  }
})
appDispathcer.register(payload => {
  if (payload.actionType === ActionType.SUBMIT_NAME) {
    messageStore.message = nameStore.name + 'さん、こんにちは。'
    messageStore.onChange()
  }
})
