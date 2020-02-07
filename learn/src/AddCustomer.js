import React, { Component } from 'react'


class AddCustomer extends Component{
    state = {
        name:null,
        bank:null,
        expiry:null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addCusCard(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Expiry:</label>
                    <input type="date" id="expiry" onChange={this.handleChange}/>
                    <label htmlFor="name">Bank:</label>
                    <input type="text" id="bank" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddCustomer;