import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { convertMarkdown, toggleEdit } from '../actions'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import SplitPane from 'react-split-pane'
import Panel from '../components/Panel'
import Header from '../components/Header'

const App = React.createClass({
  propTypes: {
    isScrolling: PropTypes.bool,
    markdown: PropTypes.string,
    html: PropTypes.string,
    edit: PropTypes.bool,
    theme: PropTypes.string
  },

  onChange (value) {
    this.props.convertMarkdown(value)
  },

  render () {
    const { wordCount, markdown, html, fileName, edit, theme } = this.props
    return edit === true ? (
      <section>
        <Header
          wordCount={wordCount}
          fileName={fileName}
          edit={edit}
          toggleEdit={this.props.toggleEdit}
        />
        <SplitPane split='vertical' defaultSize='50%' primary='second'>
          <Panel ref='editor'>
            <Editor value={markdown} onChange={this.onChange} theme={theme} />
          </Panel>
          <Panel ref='preview' overflowY>
            <Preview value={html} />
          </Panel>
        </SplitPane>
      </section>
    ) : (
      <section>
        <Header
          wordCount={wordCount}
          fileName={fileName}
          edit={edit}
          toggleEdit={this.props.toggleEdit}
        />
        <Panel ref='preview' overflowX>
          <Preview value={html} />
        </Panel>
      </section>
    )
  }
})

function mapStateToProps ({ markdown }) {
  return markdown
}

export default connect(mapStateToProps, {
  convertMarkdown,
  toggleEdit
})(App)
