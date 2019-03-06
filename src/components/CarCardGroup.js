import React from 'react'
import { Card } from 'semantic-ui-react'
import CarCard from './CarCard'

class CarCardGroup extends React.Component {



  render(){
    const { cars, favCars } = this.props
    const allCars = cars.map(car => <CarCard car={car} key={car.id} favCars={favCars}/>)

    return(
      <Card.Group itemsPerRow={5}>
      {allCars}
      </Card.Group>
    )
  }
}


export default CarCardGroup
