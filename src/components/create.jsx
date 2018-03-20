import React, { Component } from 'react';
// import { div, div, div, form, input, inputGroup, fieldset, label, button } from 'reactstrap';
import Axios from 'axios';


class CreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.path='http://localhost:3000/api/restaurants'
        this.state = { 
            name:'',
            owner:'',
            tel:''
         }
    }
    handleinputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    createRestaurant(e) {
        e.preventDefault();
        let config = {
            headers: {
                'Accept':'application/json'
            }
        }
        return Axios.post(this.path, this.state, config)
        .then((response) => {
            console.log(this.state, response);
        })
        .catch((error) => {
        console.log(error);
        });
    }

    render() { 
        return (
            <div>    
                <form onSubmit={(e) => this.createRestaurant(e)}>
                    <div>
                        <div>
                            <fieldset>
                                <label htmlFor='name'>Restaurant name</label>
                                <input required onChange={(e) => this.handleinputChange(e)} type='text' id='name' name='name'></input>
                            </fieldset>
                        </div>
                        <div>
                            <fieldset>
                                <label htmlFor='tel' >Restaurant tel</label>
                                <input required onChange={(e) => this.handleinputChange(e)} type='text' id='tel' name='tel'></input>
                            </fieldset>
                        </div>
                        <div>
                            <fieldset>
                                <label htmlFor='owner' >Restaurant owner</label>
                                <input required onChange={(e) => this.handleinputChange(e)} type='text' id='owner' name='owner'></input>
                            </fieldset>
                        </div>
                        
                    </div>
                    <div>
                        <div>
                            <button>Add Restaurant</button>
                        </div>    
                    </div>                
                    
                </form>
            </div> 
        )
    }
}
 
export default CreateRestaurant;