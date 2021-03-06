import React from 'react'
import CarsCollection from '../containers/CarsCollection'
import CarForm from './CarForm'
import { Search } from 'semantic-ui-react'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'
import Favorites from './Favorites'

class CarIndex extends React.Component {


  state = {
    cars: [],
    searchTerm: '',
    isLoading: false,
    favorites: []
  }


  addCar = (car) => {
    this.setState({
      cars: [...this.state.cars, car]
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, searchTerm: value })

    setTimeout(() => {
      if (this.state.searchTerm.length < 1) return this.setState({ isLoading: false })
    }, 900)
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/cars')
    .then(res => res.json())
    .then(data => {
      this.setState({ cars: data })
    })
    this.fetchfavCars()
  }

  favCars = (car) => {
    this.setState({
      favorites: [...this.state.favorites, car]
    })
  }

  fetchfavCars = () => {
    fetch('http://localhost:3000/api/v1/cars')
    .then(res => res.json())
    .then(data => {
      let favs = data.filter(car => car.favorite === true)
      this.setState({ favorites: favs })
    })
  }




  render(){
    const { cars, searchTerm, isLoading, favorites } = this.state

    const filteredCars = cars.filter(car => {
      return car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.modelMake.toLowerCase().includes(searchTerm.toLowerCase()) || car.year.toLowerCase().includes(searchTerm.toLowerCase()) || car.color.toLowerCase().includes(searchTerm.toLowerCase()) || car.price.toLowerCase().includes(searchTerm.toLowerCase()) || car.sellers[0].name.toLowerCase().includes(searchTerm.toLowerCase()) || car.sellers[0].email.toLowerCase().includes(searchTerm.toLowerCase())
    })

    console.log(this.state.favorites)
    return(
      <div>
        <NavBar />
        <Search placeholder='Search'
                onSearchChange={this.handleSearchChange}
                loading={isLoading}/>
                <br />
        <Switch>
          <Route exact path='/home' component={() => {
            return <CarsCollection cars={filteredCars} favCars={this.favCars} />
          }} />
        <Route exact path='/favs' component={() => {
            return <Favorites favCarArr={favorites}/>
          }} />
        <Route exact path='/addcar' component={() => {
            return <CarForm addCar={this.addCar}/>
          }} />
        <Route exact path='/' component={() => {
            return <CarsCollection cars={filteredCars} />
          }} />
        </Switch>
      </div>
    )
  }


}

export default CarIndex

// editCarFavs = (carId, bool) => {
//   fetch(`https://localhost:3000/api/v1/cars/${carId}`,
//     {method: "PATCH",
//       headers: { "Content-Type": "application/json", "Accept": "application/json" },
//       body: JSON.stringify({ favorite: bool })
//   })
//   .then(res => console.log(res.json()))
//   .then(data => {
//     this.setState({ favorite: data.bool })
//   })
// }
