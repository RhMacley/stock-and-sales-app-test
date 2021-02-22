import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select';



export default class SelectCustomer extends Component {

  state = {
    customers: []
  };

  async getOptions(){
    const res = await axios.get('http://localhost:3001/customers')
    const data = res.data

    const options = data.map(custom => ({
      "value" : custom.id,
      "label" : custom.name
    }))
    this.setState({customers: options})
  }

  componentDidMount() {
    this.getOptions();
  }




  render() {
    return (
      <div>
        <h1>Selecione o cliente</h1>
        <Select options={this.state.customers} />
      </div>
        
    )
  }
}