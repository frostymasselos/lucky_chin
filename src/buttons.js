import React from 'react';
import {Button} from 'react-bootstrap'



const Buttons = () => {


    return (


        <div className="container-fluid">
            <div className="row justify-content-center">
               <div className="col-sm-7">
               <a href="/inventory"><Button variant="info" className="homeButton" style={{ fontWeight: 'bold', fontSize: '25px' }}> Inventory</Button></a>
               <a href="/suppliers"><Button variant="info" className="homeButton" style={{ fontWeight: 'bold', fontSize: '25px' }}>Suppliers</Button></a>
               <Button variant="info" className="homeButton" style={{ fontWeight: 'bold', fontSize: '25px' }}>Stats</Button>
               </div>
               <div className="col-sm-7">
               <a href="/inventory/new"><Button variant="info" className="homeButton1" style={{ fontWeight: 'bold', fontSize: '25px' }}>Add New Item</Button></a>
               <a href="/suppliers/new"><Button variant="info" className="homeButton1" style={{ fontWeight: 'bold', fontSize: '25px' }}>Add New Supplier</Button></a>
               <Button variant="info" className="homeButton1" style={{ fontWeight: 'bold', fontSize: '25px' }}>Low Stock Items</Button>
               </div>
            </div>
        </div>

        
    );





}

export default Buttons;