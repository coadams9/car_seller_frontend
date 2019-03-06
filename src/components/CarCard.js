import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class CarCard extends React.Component {


  render(){
    const { car } = this.props
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
      </Card>
    )
  }
}


export default CarCard
