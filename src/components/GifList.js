import React, { Component } from 'react'

class GifList extends Component {
  render() {
    return(
      <li>
        <img src={this.props.gif.images.original.url} alt="" />
      </li>
    )
  }
}

export default GifList
