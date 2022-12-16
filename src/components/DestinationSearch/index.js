import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {

  { destinationsList } = this.props

  searchVal = ''

  state = {itemsList: destinationsList}

  searchResults = val => {
    const {itemsList} = this.state
    val = val.toLowerCase()
    const filteredList = itemsList.filter(each => {
      let name = each.name.toLowerCase()
      return name.includes(val)
    })
    this.setState({itemsList: filteredList})
  }

  search = event => {
    this.searchVal = event.target.value
    searchResults(this.searchVal)
  }

  render() {
    const {itemsList} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Destination Search</h1>
          <div className="input-element-container">
            <input type="search" placeholder="Search" onChange={this.search} />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {itemsList.map(each => (<DestinationItem
                  key={each.id}
                  name={each.name}
                  imgUrl={each.imgUrl}
                />))}
          </ul>
        </div>
      </div>
    )
  }

}

export default DestinationSearch
