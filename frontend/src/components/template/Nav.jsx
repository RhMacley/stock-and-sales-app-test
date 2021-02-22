import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i>Início
      </Link>
      <Link to="/customer">
        <i className="fa fa-users"></i>Cadastrar Cliente
      </Link>
      <Link to="/product">
        <i className="fa fa-tasks"></i>Cadastrar Produto
      </Link>
      <Link to="/sales-order">
        <i className="fa fa-bar-chart"></i>Criar pedido de venda
      </Link>
    </nav>
  </aside>