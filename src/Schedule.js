import React from 'react';
import { Sequence } from './Sequence';
import './Schedule.css';

class Schedule extends React.Component {
    state = {
        orders: ['sandwich 1', 'good sandwich', 'sandwich 3'],
        totalOrders: 0
    };

    createNewOrder = (name) => {
        this.setState((prevState) => {
            let newOrders = prevState.orders.push(name ? name : `sandwich ${prevState.totalOrders+2}`);
            return {
                orders: newOrders,
                totalOrders: prevState.totalOrders + 1
            }
        })
    }

    render() {
        return (
            <div>
                <Sequence orders={this.state.orders} />
            </div>
        );
    }
}

export default Schedule;