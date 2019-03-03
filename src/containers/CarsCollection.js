import React from 'react'
import CarCard from '../components/CarCard'



class CarsCollection extends React.Component {


  render(){

    const { cars } = this.props

    const allCars = cars.map(car => <CarCard car={car} key={car.id} id={car.id} />)

    return(
      <div>
        {allCars}
      </div>
    )
  }
}


export default CarsCollection
