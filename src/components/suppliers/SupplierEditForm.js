import React, {Component} from 'react';

class SupplierEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let id = this.props.supplier.id;

    let supplier = {
      "name": event.target.name.value,
      "address": parseInt(event.target.address.value),
      "telephoneNumber": event.target.telephoneNumber.value,
      "POC": event.target.POC.value,
      "id": id
    }
    console.log("This is the selected supplier's id:", id);
    console.log("This is the supplier:", supplier);
    return this.props.onUpdate(id, supplier);
  }

  render(){

    return(
      <>
      <form onSubmit={this.handleSubmit}>

        <label for="name">Name:</label>
        <input type="text" name="name" id="name" defaultValue={this.props.supplier.name} />

        <label for="address">Address:</label>
        <input type="text" name="address" id="address" min="0" defaultValue={this.props.supplier.address} />

        <label for="telephoneNumber">Telephone Number:</label>
        <input type="text" name="telephoneNumber" id="telephoneNumber" defaultValue={this.props.supplier.telephoneNumber} />

        <label for="POC">POC:</label>
        <input type="text" name="POC" id="POC" defaultValue={this.props.supplier.POC} />

        <input type="submit" value="save" />
      </form>
      </>
    )
  }

}

export default SupplierEditForm;
