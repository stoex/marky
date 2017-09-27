import * as actions from '../actions'

export default {
  label: 'Edit',
  submenu: [{
    label: 'Undo',
    accelerator: 'CmdOrCtrl+Z',
    role: 'undo'
  }, {
    label: 'Redo',
    accelerator: 'Shift+CmdOrCtrl+Z',
    role: 'redo'
  }, {
    type: 'separator'
  }, {
    label: 'Cut',
    accelerator: 'CmdOrCtrl+X',
    role: 'cut'
  }, {
    label: 'Copy',
    accelerator: 'CmdOrCtrl+C',
    role: 'copy'
  }, {
    label: 'Paste',
    accelerator: 'CmdOrCtrl+V',
    role: 'paste'
  }, {
    label: 'Select All',
    accelerator: 'CmdOrCtrl+A',
    role: 'selectall'
  }, {
    type: 'separator'
  }, {
    label: 'Change Theme',
    submenu: [{
      label: 'Ambiance',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/ambiance') }
    },
    {
      label: 'Chaos',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/chaos') }
    },
    {
      label: 'Chrome',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/chrome') }
    },
    {
      label: 'Clouds Midnight',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/clouds_midnight') }
    },
    {
      label: 'Clouds',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/clouds') }
    },
    {
      label: 'Cobalt',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/cobalt') }
    },
    {
      label: 'Crimson Editor',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/crimson_editor') }
    },
    {
      label: 'Dawn',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/dawn') }
    },
    {
      label: 'Dreamweaver',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/dreamweaver') }
    },
    {
      label: 'Eclipse',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/eclipse') }
    },
    {
      label: 'Github',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/github') }
    },
    {
      label: 'Idle Fingers',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/idle_fingers') }
    },
    {
      label: 'Iplastic',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/iplastic') }
    },
    {
      label: 'Katzenmilch',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/katzenmilch') }
    },
    {
      label: 'KR Theme',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/kr_theme') }
    },
    {
      label: 'Kuroir',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/kuroir') }
    },
    {
      label: 'Merbivore Soft',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/merbivore_soft') }
    },
    {
      label: 'Merbivore',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/merbivore') }
    },
    {
      label: 'Mono Industrial',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/mono_industrial') }
    },
    {
      label: 'Monokai',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/monokai') }
    },
    {
      label: 'Pastel on dark',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/pastel_on_dark') }
    },
    {
      label: 'Solarized Dark',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/solarized_dark') }
    },
    {
      label: 'Solarized Light',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/solarized_light') }
    },
    {
      label: 'SQL Server',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/sqlserver') }
    },
    {
      label: 'Terminal',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/terminal') }
    },
    {
      label: 'Textmate',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/textmate') }
    },
    {
      label: 'Tomorrow Night Blue',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/tomorrow_night_blue') }
    },
    {
      label: 'Tomorrow Night Bright',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/tomorrow_night_bright') }
    },
    {
      label: 'Tomorrow Night Eighties',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/tomorrow_night_eighties') }
    },
    {
      label: 'Tomorrow Night',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/tomorrow_night') }
    },
    {
      label: 'Tomorrow',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/tomorrow') }
    },
    {
      label: 'Twilight',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/twilight') }
    },
    {
      label: 'Vibrant Ink',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/vibrant_ink') }
    },
    {
      label: 'Xcode',
      click: (menuItem, browserWindow) => { actions.changeTheme({ browserWindow }, 'ace/theme/xcode') }
    }]}
  ]
}
