import React, { Component } from 'react'
import Main from '../template/Main'
import SelectCustomer from './SelectCustomer'
import TableProducts from './TableProducts'

const headerProps = {
  icon: 'bar-chart',
  title: 'Pedido de venda',
  subtitle: 'Realize aqui o seu pedido de venda'
}


export default class Order extends Component {

  render() {
    return (
      <Main {...headerProps}>
        <SelectCustomer />
        <hr />
        <TableProducts />
      </Main>
    )
  }
}

