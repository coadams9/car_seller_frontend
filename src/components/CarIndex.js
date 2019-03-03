import React from 'react'
import CarsCollection from '../containers/CarsCollection'
// import CarForm from './CarForm'
import { Search } from 'semantic-ui-react'
import NavBar from './NavBar'

class CarIndex extends React.Component {

  state = {
    cars: []
  }



  componentDidMount(){
    fetch('http://localhost:3000/api/v1/cars')
    .then(res => res.json())
    .then(data => {
      this.setState({ cars: data })
    })
  }

  render(){

    const { cars } = this.state

    return(
      <div>
        <NavBar />
        <Search />
        <CarsCollection cars={cars}/>
      </div>
    )
  }


}

export default CarIndex
