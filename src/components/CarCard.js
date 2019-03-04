import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CarCard = props => {

  const { car } = props

  let textTwilio = (number) => {
    console.log(`You texted ${number}`)
  }

  class CarCard extends React.Component {

    state = { liked: false }
    // I think this item needs state in order to toggle liked / not liked
    toggleLiked = () => {
        const { name, location, phone } = this.props.result
        this.setState(prevState => {
            return { liked: !prevState.liked }
        })
        this.props.addFavorite(this.props.result['yelp-id'], name, this.props.result['image-url'], location, phone)
    }

    render() {
        const { name, location, phone } = this.props.result

  return(
    <Card>
      <Image src={car.image} />
      <Card.Content>
        <Card.Header>{car.modelMake}</Card.Header><br />
          <h4>{car.price}</h4>
          <p>{car.make}</p>
          <p>{car.year}</p>
          <p>{car.color}</p>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        <strong>{car.sellers[0].name}</strong><br/>
        <strong>{car.sellers[0].email}</strong><br/>
        <strong>{car.sellers[0].phoneNum}</strong>
      </Card.Content>
        <Card.Content extra>
          <Icon.Group size='small'>
            <Icon onClick={() => toggleFav()} name={this.car.favorite ? "heart" : "heart outline"} color='red' />
            <Icon onClick={() => textTwilio(this.car.phoneNum)} name="tty" color='blue' />
          </Icon.Group>
      </Card.Content>
    </Card>
  )

}

}
export default CarCard

//* <Icon onClick={() => props.deleteFav(props.userId, props.result['yelp-id'])}
//          name="trash" color='orange' /> */

// import React, { Component } from 'react'
// import { Card, Image, Icon } from 'semantic-ui-react'

// export default class Result extends Component {
//     state = { liked: false }
//     // I think this item needs state in order to toggle liked / not liked
//     toggleLiked = () => {
//         const { name, location, phone } = this.props.result
//         this.setState(prevState => {
//             return { liked: !prevState.liked }
//         })
//         this.props.addFavorite(this.props.result['yelp-id'], name, this.props.result['image-url'], location, phone)
//     }

//     render() {
//         const { name, location, phone } = this.props.result

//         return (
//             <Card>
//                 <Image src={this.props.result['image-url']} size='medium' />
//                 <Card.Content>
//                     <Card.Header>
//                         {name}
//                     </Card.Header>
//                     <Card.Description>
//                         {location}
//                         <br />
//                         {phone}
//                     </Card.Description><br />
//                     <Icon onClick={this.toggleLiked} name={this.state.liked ? "heart" : "heart outline"} color='orange' />
//                 </Card.Content>
//             </Card>
//         )
//     }
