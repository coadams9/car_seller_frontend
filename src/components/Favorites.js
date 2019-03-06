import React from 'react'
import { Card } from 'semantic-ui-react'
import CarCard from './CarCard'


class Favorites extends React.Component {


    render() {
      const { favCarArr } = this.props
      console.log(favCarArr)

      const showFavs = favCarArr.map(car => <CarCard car={car} />)

        return (
          <Card.Group itemsPerRow={5}>
            {showFavs}
          </Card.Group>
        )
    }
}


export default Favorites
// const showFavs = this.props.favCars.map(car => <CarCard car={car} key={car.id} id={car.id} />)


// import React from 'react'
// import CarCard from '../components/CarCard'
// import CarForm from '../components/CarForm'
// import CarCardGroup from '../components/CarCardGroup'




// class CarsCollection extends React.Component {


    // render() {

        // const { cars } = this.props

        // return (
            // <div>
                /* <CarCardGroup cars={cars} /> */
            /* </div> */
        // )
    // }
// }


// export default CarsCollection

// import React from 'react'
// import { Card, Image, Icon } from 'semantic-ui-react'
//
// const FavResult = props => {
//   const { name, location, phone } = props.result
//
//   return (
//         <Card>
//       <Image src={props.result["image-url"]} size='medium' />
//         <Card.Content>
//           <Card.Header>
//             {name}
//           </Card.Header>
//           <Card.Description>
//             {location}
//             <br/>
//             {phone}
//           </Card.Description>
//           <Icon onClick={() => props.deleteFav(props.userId, props.result['yelp-id'])}
//             name="trash" color='orange'/>
//             Remove Favorite
//         </Card.Content>
//     </Card>
//   )
// }
//
// export default FavResult


// import React, {Component} from 'react'
// import { Grid } from 'semantic-ui-react'
// import FavResult from './FavResult'
//
// export default class FavoritesContainer extends Component {
//
//    state = {
//      favorites: []
//    }
//
//   componentDidMount(){
//     const id = this.props.userId
//     fetch(`https://eatup-back-end.herokuapp.com/api/v1/users/${id}`)
//       .then(res => res.json()).then(res => this.setState({favorites: res.data}))
//   }
//
//   render(){
//
//     const faves = this.state.favorites
//     const allFaves = faves.map(fave => {
//       return <FavResult key={fave.id} dataId={fave.id} userId={this.props.userId} result={fave.attributes} deleteFav={this.props.deleteFav}/>
//     })
//
//     let style = {
//       width: '90%',
//       margin: 'auto',
//       paddingTop: '50px'
//     }
//
//     return(
