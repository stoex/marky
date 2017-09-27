import * as actions from './actions'
import { ipcRenderer } from 'electron'

export default function configureIpcRenderer (store) {
  ipcRenderer.on('MD::file-loaded', (e, { file, fileName, filePath }) => {
    store.dispatch(actions.convertMarkdown(file))
    store.dispatch(actions.fileLoaded({ fileName, filePath }))
  })

  ipcRenderer.on('MD::ask-file-save', e => {
    const data = store.getState().markdown.markdown
    const filePath = store.getState().markdown.filePath
    if (!filePath) {
      ipcRenderer.send('MD::save-file-as', {
        data
      })
      return
    }
    ipcRenderer.send('MD::save-file', {
      data,
      filePath
    })
  })

  ipcRenderer.on('MD::ask-file-save-as', e => {
    const data = store.getState().markdown.markdown
    ipcRenderer.send('MD::save-file-as', {
      data
    })
  })

  ipcRenderer.on('MD::ask-export-html', e => {
    const data = store.getState().markdown.html
    ipcRenderer.send('MD::export-html', {
      data
    })
  })

  window.document.addEventListener('drop', e => {
    e.preventDefault()
    ipcRenderer.send('MD::dropped-file', {
      filePath: e.dataTransfer.files[0].path
    })
  })

  window.document.addEventListener('dragover', e => {
    e.preventDefault()
  })
}
