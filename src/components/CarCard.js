// state = { favorite: '' }
// let { car, key, id } = this.props
// toggleFavorite = () => {
//     let { car } = this.props
//         this.setState(prevState => {
//             return { favorite: !prevState.favortie }
//         })
//     // this.props.editCarFavs()
// }
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class CarCard extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            favorite: this.props.car.favorite
        }
        console.log(this.state.favorite)
    }

    //when heart is clicked
        //change data DONE
        //change view (toggle untoggle heart)

    toggleFavorite = (bool) => {
        console.log(this.state.favorite)
        this.setState({ favorite: !bool }).then(console.log(this.state.favorite))
        // console.log(this.state.favorite)
        return !bool
    }

    editCarFavs = (carId) => {
        fetch(`http://localhost:3000/api/v1/cars/${carId}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({ favorite: this.state.favorite })
            })
            .then(res => res.json())
        }

    render() {

        let { car } = this.props


        return(
            <Card>
                <Image src={car.image} rounded spaced />
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
                    <Icon floated='left' size='big' onClick={() => this.toggleFavorite(this.state.favorite)} name={this.state.favorite ? "heart" : "heart outline"} color='red' />
                    <Icon floated='right' size='big' onClick={() => this.smsTwilio(this.props.name)} name="tty" color='blue' />
                </Card.Content>
            </Card>
        )
    }
}

export default CarCard
/* <Icon floated='left' size='big' onClick={() => this.editCarFavs(this.props.car.id)} onClick={() => this.toggleFavorite(this.state.favorite)} name={this.state.favorite ? "heart" : "heart outline"} color='red' /> */
// smsTwilio = (number) => {
//     return (console.log(`You texted ${number}`))
// }
    // < Icon onClick = {() => this.toggleFav()} name = { this.car.favorite ? "heart" : "heart outline" } color = 'red' />
    // <Icon onClick={() => this.smsTwilio(this.car.phoneNum)} name="tty" color='blue' />

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
