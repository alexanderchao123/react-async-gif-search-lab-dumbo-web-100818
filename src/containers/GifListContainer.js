import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        gifs: json.data
      })
    })
  }

  queryHandler = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm.input}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        gifs: json.data
      })
    })
  }


  render() {
    let list = this.state.gifs.map(function(gif) {
      return <GifList key={gif.id} gif={gif} />
    })

    return (
      <div>
        <ul>
          {list}
        </ul>
        <GifSearch queryHandler={this.queryHandler}/>
      </div>
    )
  }
}

export default GifListContainer
