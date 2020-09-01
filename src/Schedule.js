import React from 'react';
import { Sequence } from './Sequence';
import './Schedule.css';

/*
ASSUMPTIONS:
- The schedule does not update with the device's time
- The schedule does not keep track of which sandwich has been made
- When a new order is added, the schedule doesn't keep track of when orders are made
  and assume they have to be made sequentially without breaks
*/

class Schedule extends React.Component {
    state = {
        orders: [],
        totalOrders: 0,
        newSandwichName: '',
    };

    handleSandwichNameInput = (e) => {
        this.setState({
            newSandwichName: e.target.value
        });
    }

    // Create a new order based on the sandwich name input (if any)
    // or based on the order number
    createNewOrder = (e) => {
        this.setState(prevState => {
            return {
                orders: prevState.orders.concat(prevState.newSandwichName ? prevState.newSandwichName : `sandwich ${prevState.totalOrders + 1}`),
                totalOrders: prevState.totalOrders + 1,
                newSandwichName: '',
            }
        });
        e.preventDefault(); // Prevent the page from reloading
    }

    render() {
        return (
            <div>
                <h3>This is what your schedule will look like:</h3>
                <Sequence orders={this.state.orders} />
                <form onSubmit={this.createNewOrder}>
                    Create a New Order: <input type="text"
                                               value={this.state.newSandwichName}
                                               placeholder="Enter sandwich name (optional)"
                                               onChange={this.handleSandwichNameInput}
                                               />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Schedule;