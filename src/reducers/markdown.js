import wordcount from "wordcount";
import * as types from "../constants/actionTypes";

const initialState = {
  markdown: "",
  html: "",
  filePath: null,
  fileName: null,
  wordCount: 0,
  edit: false
};

export default function markdown(state = initialState, action) {
  switch (action.type) {
    case types.FILE_LOADED:
      return {
        ...state,
        fileName: action.payload.fileName,
        filePath: action.payload.filePath
      };
    case types.MARKDOWN_CHANGED:
      return Object.assign({}, state, {
        markdown: action.payload.markdown,
        html: action.payload.html,
        wordCount: wordcount(action.payload.markdown || "")
      });
    case types.TOGGLE_EDIT:
      return Object.assign({}, state, {
        edit: !state.edit
      });
    default:
      return state;
  }
}
