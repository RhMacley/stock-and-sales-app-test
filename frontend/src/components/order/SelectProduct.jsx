// import React, { Component } from 'react'
// import axios from 'axios'
// import Select from 'react-select';



// export default class SelectProduct extends Component {

//   state = {
//     products: [],
//     value: []
//   };

//   async getOptions(){
//     const res = await axios.get('http://localhost:3001/products')
//     const data = res.data

//     const options = data.map(custom => ({
//       "value" : custom.id,
//       "label" : [custom.description, custom.price, custom.stockAmount]
//     }))
//     this.setState({products: options})
//     console.log(this.state.products);
//   }

//   handleChange(e){
//     this.setState({value:e})
//   }

//   componentDidMount() {
//     this.getOptions();
//   }




//   render() {
//     return (
//       <div>
//       <Select options={this.state.products} onChange={this.handleChange.bind(this)} isMulti />
//       {
//           this.state.products === null ? "" : this.state.value.map(v =>
//             <h4>Descrição: {v.label[0]}
//             <h5>Valor:{v.label[1]}</h5>
//             <h6>Quantidade:{v.label[2]}</h6></h4>)
//       }
//     </div>
//     )
//   }
// }