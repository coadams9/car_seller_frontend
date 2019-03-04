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
//         <div style={style}>
//            <h2>{this.props.username}'s Favorites</h2>
//           <Grid relaxed columns={4}>
//             <Grid.Row>
//               <Grid.Column>
//                 {allFaves[0]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[1]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[2]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[3]}
//               </Grid.Column>
//             </Grid.Row>
//
//             <Grid.Row>
//               <Grid.Column>
//                 {allFaves[4]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[5]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[6]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[7]}
//               </Grid.Column>
//             </Grid.Row>
//
//             <Grid.Row>
//               <Grid.Column>
//                 {allFaves[8]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[9]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[10]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[11]}
//               </Grid.Column>
//             </Grid.Row>
//
//             <Grid.Row>
//               <Grid.Column>
//                 {allFaves[12]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[13]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[14]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[15]}
//               </Grid.Column>
//             </Grid.Row>
//
//             <Grid.Row>
//               <Grid.Column>
//                 {allFaves[16]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[17]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[18]}
//               </Grid.Column>
//               <Grid.Column>
//                 {allFaves[19]}
//               </Grid.Column>
//             </Grid.Row>
//           </Grid>
//         </div>
//     )
//   }
// }
