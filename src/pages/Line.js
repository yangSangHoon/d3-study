import React, {useState, useRef, useEffect} from 'react';
import { select, line, curveCardinal } from 'd3';

function Line() {
    const [lineData, setLineData] = useState([1,5,34,22,50,100,70,30]);
    const lineRef = useRef();
    
    useEffect(() => {
        const svgLine = select(lineRef.current);
        
        const myLine = line()
            .x((value, index) => index * 50)
            .y((value) => 150 - value)
            .curve(curveCardinal);
        
        svgLine
            .selectAll('path')
            .data([lineData])
            .join('path')
            .attr('d', (value) => myLine(value))
            .attr('fill', 'none')
            .attr('stroke', 'blue');
        
    }, [lineData])
    
    const addData = () => {
        setLineData(lineData.map((d) => d + 10));
    };
    const subsData = () => {
        setLineData(lineData.map((d) => d - 10));
    };
    return (
        <React.Fragment>
            <svg ref={lineRef}></svg>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={addData}>add 10 to data</button>
            <button onClick={subsData}>subtract 10 to data</button>
        </React.Fragment>
    );
};

export default Line;
