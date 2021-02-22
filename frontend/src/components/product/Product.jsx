import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
  icon: 'tasks',
  title: 'Produtos',
  subtitle: 'Insira abaixo as informações necessárias para o cadastro do produto'
}

const baseUrl = 'http://localhost:3001/products'
const initialState = {
  product: {description: '', stockAmount: '', price: '', maxDiscount: ''},
  list: []
}

export default class Product extends Component {

  state = { ...initialState }

  clear() {
    this.setState({product: initialState.product})
  }

  save() {
    const product = this.state.product
    const method = product.id ? 'put' : 'post'
    const url = product.id ? `${baseUrl}/${product.id}` : baseUrl
    axios[method](url, product)
    .then(res => {
      const list = this.getUpdatedList(res.data)
      this.setState({product: initialState.product, list})
    } )
  }

  getUpdatedList(product) {
    const list = this.state.list.filter(prod=> prod.id !== product.id)
    list.unshift(product)
    return list
  }

  updateField() {
    const product = {...this.state.product}
    product[window.event.target.name] = window.event.target.value
    this.setState({product})
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Descrição</label>
              <input type="text" className="form-control"
              name="description"
              value={this.state.product.description}
              onChange={e => this.updateField(e)}
              placeholder="Digite a descrição do produto..."/>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Quantidade de estoque</label>
              <input type="number" className="form-control"
              name="stockAmount"
              value={this.state.product.stockAmount}
              onChange={e => this.updateField(e)}
              placeholder="Digite a quantidade em estoque do produto..."/>
            </div>
          </div>

          <div className="col-2 col-md-6">
            <div className="form-group">
              <label>Preço</label>
              <input type="number" className="form-control"
              name="price"
              value={this.state.product.price}
              onChange={e => this.updateField(e)}
              placeholder="Informe o valor do produto..."/>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Desconto</label>
              <input type="number" className="form-control"
              name="maxDiscount"
              value={this.state.product.maxDiscount}
              onChange={e => this.updateField(e)}
              placeholder="Informe o desconto máximo por unidade..."/>
            </div>
          </div>

          <hr/>

          <div className="row">
            <div className="col-12 d-flex justify-content-center ml-2">
              <button className="btn btn-primary" onClick={e => this.save(e)}>
                Salvar
              </button>

              <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
      </Main>
    )
  }
}