import wordcount from 'wordcount'
import * as types from '../constants/actionTypes'

const initialState = {
  markdown: '',
  html: '',
  filePath: null,
  fileName: null,
  wordCount: 0,
  edit: false,
  theme: 'ace/theme/github'
}

export default function markdown (state = initialState, action) {
  switch (action.type) {
    case types.FILE_LOADED:
      return {
        ...state,
        fileName: action.payload.fileName,
        filePath: action.payload.filePath
      }
    case types.MARKDOWN_CHANGED:
      return Object.assign({}, state, {
        markdown: action.payload.markdown,
        html: action.payload.html,
        wordCount: wordcount(action.payload.markdown || '')
      })
    case types.TOGGLE_EDIT:
      return Object.assign({}, state, {
        edit: !state.edit
      })
    case types.CHANGE_THEME:
      return Object.assign({}, state, {
        theme: action.payload.theme
      })
    default:
      return state
  }
}
