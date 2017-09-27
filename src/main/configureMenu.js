import edit from './menus/edit'
import file from './menus/file'
import windowMenu from './menus/windowMenu'

export default function configureMenu ({ app }) {
  return [file, edit, windowMenu]
}
