import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class CarForm extends React.Component {

  state = {
    make: '',
    modelMake: '',
    year: '',
    color: '',
    image: '',
    description: '',
    price: '',
    favorite: false,
    sellers: [{
      name: '',
      email: '',
      phoneNum: ''
    }]
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChangeNested = (event) => {
    this.setState({
      ...this.state,
      sellers:[{
        ...this.state.sellers[0],
        [event.target.name]: event.target.value
      }]
    }, ()=> {console.log("this is new state", this.state)})
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(car => this.props.addCar(car))
    .then(this.setState({
      make: '',
      modelMake: '',
      year: '',
      color: '',
      image: '',
      description: '',
      price: '',
      favorite: false,
      sellers: [{
        name: '',
        email: '',
        phoneNum: ''
      }]
    }))
  }


  render(){
    const { make, modelMake, year, color, image, description, price } = this.state

    return(
      <Form onSubmit={this.handleSubmit}>
        <h1>Add A New Car</h1>
        <Form.Field>
          <label>Car Make</label>
        <input name='make' onChange={this.handleChange} value={make}/>
        </Form.Field>
        <Form.Field>
          <label>Car Model</label>
        <input value={modelMake} name='modelMake' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Car Year</label>
        <input value={year} name='year' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Car Color</label>
        <input value={color} name='color' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Car Image</label>
        <input value={image} name='image' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Car Price</label>
        <input value={price} name='price' onChange={this.handleChange}/>
        </Form.Field>
        <Form.TextArea label='Car Description' value={description} name='description' onChange={this.handleChange}/>
        <Form.Field>
          <label>Seller Name</label>
        <input value={this.state.sellers[0].name} name='name' onChange={this.handleChangeNested}/>
        </Form.Field>
        <Form.Field>
          <label>Seller Email</label>
        <input value={this.state.sellers[0].email} name='email' onChange={this.handleChangeNested}/>
        </Form.Field>
        <Form.Field>
          <label>Seller Phone Number</label>
        <input value={this.state.sellers[0].phoneNum} name='phoneNum' onChange={this.handleChangeNested}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}


export default CarForm
