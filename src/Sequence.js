import React from 'react';
import { SequenceItem } from './SequenceItem';
import './Sequence.css';

export const Sequence = ({orders}) => {
    return (
        <table>
            {orders.map((order, i) => {
                return (
                    <tbody key={i}>
                        {/* Load the "Make sandwich" task */}
                        <SequenceItem key={2*i+1}
                                      seqNo={2*i+1}
                                      secs={210*i}
                                      task={`Make ${order}`}
                                      />
                        {/* Load the "Serve sandwich" task */}
                        <SequenceItem key={2*i+2}
                                      seqNo={2*i+2}
                                      secs={210*i+150}
                                      task={`Serve ${order}`}
                                      />
                    </tbody>
                );
            })}
            <tbody>
                {/* Load the ending "Take a break" task */}
                <SequenceItem key={2*orders.length+1}
                              seqNo={2*orders.length+1}
                              secs={210*orders.length}
                              task="Take a break."
                              />
            </tbody>
        </table>
    )
}