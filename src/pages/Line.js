import React, {useState, useRef, useEffect} from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear, axisRight } from 'd3';

function Line() {
    const [lineData, setLineData] = useState([1,5,34,22,50,100,70,30]);
    const lineRef = useRef();
    
    useEffect(() => {
        const svgLine = select(lineRef.current);
        
        const xScale = scaleLinear()
            .domain([0, lineData.length - 1])
            .range([0, 300]);
        
        const yScale = scaleLinear()
            .domain(0, 100)
            .range([150, 0]);
        
        const xAxis = axisBottom(xScale)
            .ticks(lineData.length)
            .tickFormat((index) => index + 1);
        
        svgLine
            .select('.x-axis')
            .style('transform', 'translateY(150px)')
            .call(xAxis);
        
        const yAxis = axisRight(yScale).ticks(5);
        svgLine
            .select('.y-axis')
            .style('transform', 'translateX(300px)')
            .call(yAxis);
        
        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal);
        
        svgLine
            .selectAll('.line')
            .data([lineData])
            .join('path')
            .attr('class', 'line')
            .attr('d', (value) => myLine(value))
            .attr('fill', 'none')
            .attr('stroke', 'blue');
        
    }, [lineData]);
    
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
