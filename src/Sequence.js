import React from 'react';
import { SequenceItem } from './SequenceItem';

export const Sequence = ({orders}) => {
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