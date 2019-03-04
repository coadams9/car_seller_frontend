import React from 'react'
import { Card } from 'semantic-ui-react'
import CarCard from './CarCard'


//=> Going to render cards here that are favorited passed down in props from CarIndex!!!

class Favorites extends React.Component {


  render(){
    return(
      <Card.Group itemsPerRow={5}>

      </Card.Group>
    )
  }
}

export default Favorites
