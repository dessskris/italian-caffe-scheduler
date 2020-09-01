import React from 'react';

const SequenceItem = ({seqNo, secs, task}) => {
    let hh = Math.floor(secs / 3600);
    let mm = Math.floor((secs - hh*3600) / 60);
    let ss = secs - (hh * 3600) - (mm * 60);

    const formatToString = (num) => {
        return (num < 10) ? "0"+num.toString() : num.toString();
    }

    return (
        <tr>
            <td>{seqNo}.</td>
            <td>{formatToString(hh) + ":" + formatToString(mm) + ":" + formatToString(ss)}</td>
            <td>{task}</td>
        </tr>
    )
}

const Sequence = ({orders}) => {
    return (
        <table>
            {orders.map((order, i) => {
                return (
                    <tbody>
                        <SequenceItem seqNo={2*i+1}
                                      secs={210*i}
                                      task={`Make ${order}`}
                                      />
                        <SequenceItem seqNo={2*i+2}
                                      secs={210*i+150}
                                      task={`Serve ${order}`}
                                      />
                    </tbody>
                );
            })}
            <SequenceItem seqNo={2*orders.length+1}
                          secs={210*orders.length}
                          task="Take a break."
                          />
        </table>
    )
}

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