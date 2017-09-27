import * as types from '../constants/actionTypes'
import parser from '../parser'

function updateMarkdown (markdown = '') {
  return {
    type: types.MARKDOWN_CHANGED,
    payload: {
      html: parser.render(markdown),
      markdown
    }
  }
}

export function convertMarkdown (markdown) {
  return updateMarkdown(markdown)
}

export function fileLoaded ({ fileName, filePath }) {
  return {
    type: types.FILE_LOADED,
    payload: {
      fileName,
      filePath
    }
  }
}

export function toggleEdit () {
  return {
    type: types.TOGGLE_EDIT
  }
}

export function changeTheme (theme) {
  return {
    type: types.CHANGE_THEME,
    payload: { theme }
  }
}
