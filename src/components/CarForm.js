import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class CarForm extends React.Component {



  render(){
    return(
      <Form>
        <h1>Add A New Car</h1>
        <Form.Field>
          <label>Car Make</label>
          <input placeholder='Make...' />
        </Form.Field>
        <Form.Field>
          <label>Car Model</label>
          <input placeholder='Model...' />
        </Form.Field>
        <Form.Field>
          <label>Car Year</label>
          <input placeholder='Year...' />
        </Form.Field>
        <Form.Field>
          <label>Car Color</label>
          <input placeholder='Color...' />
        </Form.Field>
        <Form.Field>
          <label>Car Image</label>
          <input placeholder='Insert Image Source...' />
        </Form.Field>
        <Form.Field>
          <label>Car Price</label>
          <input placeholder='Price' />
        </Form.Field>
        <Form.TextArea label='Car Description' placeholder='Short history of the whip son...' />
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions...You Better!' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}


export default CarForm
