
import React from 'react'
// import CarCard from '../components/CarCard'
// import CarForm from '../components/CarForm'
import CarCardGroup from '../components/CarCardGroup'





class CarsCollection extends React.Component {

  render(){

    const { cars } = this.props

    return(
      <div>
        <CarCardGroup cars={cars} />
      </div>
    )
  }
}


export default CarsCollection




// handleSearchChange = (string, index) => {
//   this.setState(prevState => {
//     let prevSearches = [...prevState.searches]
//     prevSearches[index] = string
//     return {searches: [...prevSearches]}
//   })
// }
// 
//  handleSubmit = () => {
//    let search = this.state.searches
//    fetch('https://eatup-back-end.herokuapp.com/api/v1/search',
//    {method: "POST",
//     headers: {"Content-Type": "application/json", "Accept": "application/json"},
//     body: JSON.stringify({locations: search})
//   })
//   .then(res => res.json())
//   .then(res => this.setState({results: res.businesses}))
// }
//
// //Send all restaurant data through here: back end will persist to restaurant table
// //Makes Connection between Restaurant & User
// addFavorite = (id, name, image_url, address, display_phone) => {
//   fetch('https://eatup-back-end.herokuapp.com/api/v1/favorites',
//   {method: "POST",
//    headers: {"Content-Type": "application/json", "Accept": "application/json"},
//    body: JSON.stringify({ restaurant: id, user: this.state.user.id })
//  })
//  .then(res => res.json())
//  .then(res => {
//    this.setState(prevState => {
//      return {
//        user: {...prevState.user, favorites: [...prevState.user.favorites, id]}
//      }
//    })
//  })
//
//  this.saveFavorite(id, name, image_url, address, display_phone)
// }
//
// //Makes New Restaurant
// saveFavorite = (id, name, image_url, address, display_phone, props) => {
//  fetch('https://eatup-back-end.herokuapp.com/api/v1/restaurants',
//  {method: "POST",
//   headers: {"Content-Type": "application/json", "Accept": "application/json"},
//   body: JSON.stringify({yelpId: id, name: name,
//     image_url: image_url, location: address, phone: display_phone
//   })
// })
// }
//
// deleteFav = (userId, dataId) => {
//  fetch(`https://eatup-back-end.herokuapp.com/api/v1/favorites/${userId}`,
//  {method: "DELETE",
//   headers: {"Content-Type": "application/json", "Accept": "application/json"},
//   body: JSON.stringify({yelpId: dataId})})
//   // find the fav in the state array & remove it from the array
//   // filter state for any fav that is not the removed fav
// }
//
//
//
// toggleFaves = () => {
//  this.setState(prevState => {
//    return {showFaves: !prevState.showFaves}
//  })
// }
//
// showComponent = () => {
//   if (this.state.showFaves === true){
//     return <FavoritesContainer userId={this.state.user.id} username={this.state.user.name} deleteFav={this.deleteFav}/>
//   }
//   else if (this.state.results.length === 0){
//     return <SearchContainer handleSearchChange={this.handleSearchChange}
//       handleAddSearch={this.handleAddSearch} handleSubmit={this.handleSubmit}
//     searches={this.state.searches}/>
//   }
//   else {
//     return <ResultsContainer addFavorite={this.addFavorite} results={this.state.results}
//     saveFavorite={this.saveFavorite}/>
//   }
// }
//
// newSearch = () => {
//   this.setState({
//     searches: [''],
//     results: [],
//   })
// }

