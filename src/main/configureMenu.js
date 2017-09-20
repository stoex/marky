import edit from './menus/edit'
import file from './menus/file'
import view from './menus/view'
import windowMenu from './menus/windowMenu'

export default function configureMenu ({ app }) {
  return [file, edit, windowMenu, view]
}
