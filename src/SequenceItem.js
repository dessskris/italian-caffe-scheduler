import React from 'react';
import './SequenceItem.css';

export const SequenceItem = ({seqNo, secs, task}) => {
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