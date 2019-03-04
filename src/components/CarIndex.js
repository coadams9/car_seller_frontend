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
    isLoading: false
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
  }

  
  editCarFavs = (carId, bool) => {
    fetch(`https://localhost:3000/api/v1/cars/${carId}`,
      {method: "PATCH",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ favorite: bool })
    })
    .then(res => console.log(res.json()))
    .then(data => {
      this.setState({ favorite: data.bool })
    })
  }


  render(){
    const { cars, searchTerm, isLoading } = this.state

    const filteredCars = cars.filter(car => {
      return car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.modelMake.toLowerCase().includes(searchTerm.toLowerCase()) || car.year.toLowerCase().includes(searchTerm.toLowerCase()) || car.color.toLowerCase().includes(searchTerm.toLowerCase()) || car.price.toLowerCase().includes(searchTerm.toLowerCase()) || car.sellers[0].name.toLowerCase().includes(searchTerm.toLowerCase()) || car.sellers[0].email.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const favCars = cars.filter(car => {
        return car.favorite === true;
    })

    return(
      <div>
        <NavBar />

        <Switch>
          <Route path='/home' component={() => {
            return(
              <React.Fragment>
              <Search placeholder='Search'
                onSearchChange={this.handleSearchChange}
                loading={isLoading} />
                <CarsCollection cars={filteredCars} />
              </React.Fragment>
            )
          }} />
          <Route path='/favs' component={() => {
            return <Favorites favCars={favCars} />
          }} />
          <Route path='/addcar' component={() => {
            return <CarForm />
          }} />
          <Route path='/' component={() => {
            return <CarsCollection cars={filteredCars} />
          }} />
        </Switch>
      </div>
    )
  }


}

export default CarIndex
