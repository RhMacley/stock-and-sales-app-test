import React, { Component } from 'react';
import axios from 'axios'

export default class TableProducts extends Component {

  state = {
    products: []
  }

  async getProducts() {
    const res = await axios.get('http://localhost:3001/products')
    const data = res.data
    this.setState({ products: data })
  }

  componentDidMount() {
    this.getProducts();
  }


  render() {
    return (
      <div>
        <h1>Lista de produtos</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descrição do produto</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.description}</td>
                  <td>{item.stockAmount}</td>
                  <td>R${item.price}</td>
                  <td />
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}