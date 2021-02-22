import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
  icon: 'users',
  title: 'Clientes',
  subtitle: 'Insira abaixo as informações necessárias para o cadastro do cliente'
}

const baseUrl = 'http://localhost:3001/customers'
const initialState = {
  customer: { name: '', cpf: '', gender: '', adress: '' },
  list: []
}

export default class Customer extends Component {

  state = { ...initialState }

  clear() {
    this.setState({ customer: initialState.customer })
  }

  save() {
    const customer = this.state.customer
    const method = customer.id ? 'put' : 'post'
    const url = customer.id ? `${baseUrl}/${customer.id}` : baseUrl
    axios[method](url, customer)
      .then(res => {
        const list = this.getUpdatedList(res.data)
        this.setState({ customer: initialState.customer, list })
      })
  }

  getUpdatedList(customer) {
    const list = this.state.list.filter(cust => cust.id !== customer.id)
    list.unshift(customer)
    return list
  }

  updateField() {
    const customer = { ...this.state.customer }
    customer[window.event.target.name] = window.event.target.value
    this.setState({ customer })
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" className="form-control"
                name="name"
                value={this.state.customer.name}
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome do cliente..." />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>CPF</label>
              <input type="text" className="form-control"
                name="cpf"
                value={this.state.customer.cpf}
                onChange={e => this.updateField(e)}
                placeholder="Digite o cpf do cliente..." />
            </div>
          </div>

          <div className="col-2 col-md-6">
            <div className="form-group">
              <label>Gênero</label>
              <input type="text" className="form-control"
                name="gender"
                value={this.state.customer.gender}
                onChange={e => this.updateField(e)}
                placeholder="Informe o gênero usando 'm' para masculino e 'f' para feminino..." />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Endereço</label>
              <input type="text" className="form-control"
                name="adress"
                value={this.state.customer.adress}
                onChange={e => this.updateField(e)}
                placeholder="Informe o endereço do cliente..." />
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-12 d-flex justify-content-center ml-2">
              <button type="button" className="btn btn-primary" onClick={e => this.save(e)}>
                Salvar
              </button>

              <button  className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
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