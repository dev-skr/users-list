import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
    
 {imgUrl,name}=this.props

  render() {
    return (
      <div className="item">
        <img src={imgUrl} className="image" alt={name} />
        <p className="name">{name}</p>
      </div>
    )
  }
}

export default DestinationItem
