import React, {useRef, useEffect, useState} from 'react'
import {select} from 'd3';

function Step2() {
    const svgRef = useRef();
    const [data, setData] = useState(1);
    
    useEffect(() => {
        const gap = 30;
        const svg = select(svgRef.current);
        const arr = Array.from({length: data * data}, (value, index) => {
            return index;
        });
        svg.selectAll('circle')
            .data(arr)
            .join(
                (enter) => enter.append('circle'),
                (update) => update.attr('className', 'updated'),
                (exit) => exit.remove()
            )
            .attr('r', (value) => 10)
            .attr('cx', (value) => Math.floor(value / data) * gap + gap)
            .attr('cy', (value) => value % data * gap + gap)
            .attr('fill', 'yellow')
            .attr('stroke', 'red');
    }, [data]);
    
    const increaseData = () => {
        setData(data + 1);
    };
    
    const decreaseData = () => {
        setData(data > 0 ? data - 1 : 0);
    };
    
    return (
        <React.Fragment>
            <svg ref={svgRef} width='500px' height='500px' style={style1}>
                <circle />
            </svg>
            <button onClick={decreaseData}>줄이기</button>
            <button onClick={increaseData}>늘리기</button>
        </React.Fragment>
    );
}

const style1 = {
    backgroundColor : 'gray'
}

export default Step2;
