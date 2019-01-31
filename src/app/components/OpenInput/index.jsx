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
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.onFileSelected(event.target.files[0])
    this.input.value = ''
  }
  render() {
    return (
      <div className="file-input">
        <input type="file" onChange={this.handleChange} />
      </div>
    )
  }
}
