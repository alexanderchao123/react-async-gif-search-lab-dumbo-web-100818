import React, { Component } from 'react'

class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.queryHandler(this.state)
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <input type="text" name="" value={this.state.input} onChange={this.changeHandler} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default GifSearch
