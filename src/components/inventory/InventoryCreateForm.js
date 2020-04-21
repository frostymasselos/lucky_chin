import React, {Component} from 'react';
// import Request from '../../helpers/request.js'
import NeedSupplier from 'react';

class InventoryCreateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      suppliers: [
        {"name": "Tesco", "address": "21 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742345", "POC": "apple", "id": 1},
        {"name": "Asda", "address": "22 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742344", "POC": "apple", "id": 2},
        {"name": "Maqbools", "address": "23 Hermiston Gait EH30 9RP", "telephoneNumber": "07944742343", "POC": "apple", "id": 3}
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let selectedIndex = event.target.select.options.selectedIndex;

    let item = {
      "name": event.target.name.value,
      "quantity": parseInt(event.target.quantity.value),
      "dateOfPurchase": event.target.dop.value,
      "expiryDate": event.target.ed.value,
      "purchasePrice": parseInt(event.target.pp.value),
      "supplierID": parseInt(this.state.suppliers[selectedIndex].id),
      "id": Math.random()
    }

    return this.props.onFormSubmit(item);
  }

  render() {

    if (this.state.suppliers.length === 0) {
      return <button><a href="/supplier/new">Please add a supplier first before adding an item. Click <strong>here.</strong></a></button>
    } {/*Can't return a custom-made element here❓*/}

    const supplierOptions = this.state.suppliers.map((item) => {
      return <option key={item.id} value={item.name}>{item.name}</option>
    });

    return (
      <>
      <form onSubmit={this.handleSubmit}> {/*why do the brackets need to be ommited here something about event becoming undefined.*/}

        <label for="name">Item Name:</label>
        <input type="text" name="name" id="name" />

        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" />

        <label for="dop">Date of Purchase:</label>
        <input type="text" name="dop" id="dop" />

        <label for="ed">Expiry Date:</label>
        <input type="text" name="ed" id="ed" />

        <label for="pp">Purchased Price</label>
        <input type="number" name="pp" id="pp" step="0.01" min="0" />

        <label for="supplier">Supplier:</label>
        <select id="select" name="select" id="supplier" >
        {supplierOptions}
        </select>

        <button><a href="/suppliers/new">Add new supplier</a></button>

        <input type="submit" value="save" /><br/>
      </form>
      </>
    )
  }

}

export default InventoryCreateForm;

// <div>
//   <p>Please add a supplier first before adding an item.</p>
//   <button><a href="/suppliers/new">Add supplier</a></button>
// </div>

// <NeedSupplier/>
