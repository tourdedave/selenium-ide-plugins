import browser from 'webextension-polyfill'
import React from 'react'
import '../../styles/app.css'
import OpenInput from '../../components/OpenInput'

export default class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.loadAsText = this.loadAsText.bind(this)
    this.emitFileContents = this.emitFileContents.bind(this)
  }

  loadAsText(blob) {
    return new Promise(res => {
      const fileReader = new FileReader()
      fileReader.onload = e => {
        res(e.target.result)
      }

      fileReader.readAsText(blob)
    })
  }

  emitFileContents(contents) {
    browser.runtime.sendMessage({
      fileUploaded: true,
      name: 'fileContents', // var name
      contents: contents, // file contents
    })
  }

  render() {
    return (
      <div>
        <OpenInput
          onFileSelected={file => {
            this.loadAsText(file).then(contents => {
              this.emitFileContents(contents)
            })
          }}
        />
      </div>
    )
  }
}
