
import React from 'react'
// import CarCard from '../components/CarCard'
// import CarForm from '../components/CarForm'
import CarCardGroup from '../components/CarCardGroup'





class CarsCollection extends React.Component {
  render(){

    const { cars, favCars } = this.props

    return(
      <div>
        <CarCardGroup cars={cars} favCars={favCars}/>
      </div>
    )
  }
}


export default CarsCollection
