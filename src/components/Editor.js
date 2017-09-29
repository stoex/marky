import React, { PropTypes } from 'react'
import ReactDom from 'react-dom'
import ace from 'brace'
import 'brace/theme/ambiance'
import 'brace/theme/chaos'
import 'brace/theme/chrome'
import 'brace/theme/clouds_midnight'
import 'brace/theme/clouds'
import 'brace/theme/cobalt'
import 'brace/theme/crimson_editor'
import 'brace/theme/dawn'
import 'brace/theme/dreamweaver'
import 'brace/theme/eclipse'
import 'brace/theme/github'
import 'brace/theme/idle_fingers'
import 'brace/theme/iplastic'
import 'brace/theme/katzenmilch'
import 'brace/theme/kr_theme'
import 'brace/theme/kuroir'
import 'brace/theme/merbivore_soft'
import 'brace/theme/merbivore'
import 'brace/theme/mono_industrial'
import 'brace/theme/monokai'
import 'brace/theme/pastel_on_dark'
import 'brace/theme/solarized_dark'
import 'brace/theme/solarized_light'
import 'brace/theme/sqlserver'
import 'brace/theme/terminal'
import 'brace/theme/textmate'
import 'brace/theme/tomorrow_night_blue'
import 'brace/theme/tomorrow_night_bright'
import 'brace/theme/tomorrow_night_eighties'
import 'brace/theme/tomorrow_night'
import 'brace/theme/tomorrow'
import 'brace/theme/twilight'
import 'brace/theme/vibrant_ink'
import 'brace/theme/xcode'
import 'brace/mode/markdown'
import 'brace/ext/searchbox'
import { noop } from 'lodash'

const Editor = React.createClass({
  propTypes: {
    onChange: PropTypes.func,
    value: PropTypes.string,
    theme: PropTypes.string
  },

  getDefaultProps () {
    return {
      onChange: noop,
      value: ''
    }
  },

  componentDidMount () {
    this.editor = ace.edit(ReactDom.findDOMNode(this))
    this.editor.$blockScrolling = Infinity
    this.editor.getSession().setMode('ace/mode/markdown')
    this.editor.getSession().setUseWrapMode(true)
    this.editor.setTheme(this.props.theme)
    this.editor.setFontSize(14)
    this.editor.on('change', this.onChange)
    this.editor.setValue(this.props.value, -1)
    this.editor.setOption('maxLines', 99999)
    this.editor.setOption('minLines', 53)
    this.editor.setOption('highlightActiveLine', true)
    this.editor.setShowPrintMargin(false)
    this.editor.focus()
    this.interval = setInterval(() => this.editor.resize(), 100)
  },

  componentWillReceiveProps (nextProps) {
    if (this.editor.getValue() !== nextProps.value) {
      this.editor.setValue(nextProps.value, -1)
    }

    if (this.editor.getTheme() !== nextProps.theme) {
      this.editor.setTheme(nextProps.theme)
    }
  },

  componentWillUnmount () {
    this.editor.destroy()
    clearInterval(this.interval)
  },

  onChange () {
    this.props.onChange(this.editor.getValue())
  },

  render () {
    return (
      <div onChange={this.onChange} />
    )
  }
})

export default Editor
