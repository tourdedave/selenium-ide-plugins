import browser from 'webextension-polyfill'
import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class OpenInput extends React.Component {
  static propTypes = {
    onFileSelected: PropTypes.func.isRequired,
    labelMarkup: PropTypes.string,
  }
  constructor(props) {
    super(props)
    this.state = { uploadedFile: '' }
    browser.storage.local.get(['uploadedFile']).then(({ uploadedFile }) => {
      if (uploadedFile) this.setState({ uploadedFile })
    })
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const file = event.target.files[0]
    browser.storage.local.set({ ['uploadedFile']: file.name })
    this.setState({ uploadedFile: file.name })
    this.props.onFileSelected(file)
  }
  render() {
    return (
      <div className="file-input">
        <h4>Selenium IDE File Uploader</h4>
        <input type="file" onChange={this.handleChange} />
      </div>
    )
  }
}
