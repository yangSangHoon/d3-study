import React, {useRef, useEffect, useState} from 'react'
import {select} from 'd3';

/*
참고 : https://velog.io/@smooth97/-Data-Visualizing-D3.js-%EB%9E%80
 */
function Step3() {
    const svgRef = useRef();
    
    useEffect(() => {
        const svg = select(svgRef.current);
        // makeCircle(svg);
        // makeRect(svg);
        // makeLine(svg);
        // makeText(svg);
        // dataRect(svg);
        dataRect2(svg);
        
    }, []);
    
    return (
        <React.Fragment>
            <svg ref={svgRef} width='500px' height='500px'>
                <rect></rect>
                <text></text>
            </svg>
        </React.Fragment>
    );
}

function makeCircle(svg) {
    svg.append('circle')
    .attr('r', 100)
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('fill', 'yellow')
    .attr('stroke', 'red');
}

function makeRect(svg) {
    svg.append('rect')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', 200)
    .attr('y', 100)
    .attr('fill', 'yellow')
    .attr('stroke', 'blue');
}

function makeLine(svg) {
    svg.append('line')
    .attr('x1', 500)
    .attr('x2', 400)
    .attr('y1', 300)
    .attr('y2', 550)
    .attr('stroke', 'blue');
}

function makeText(svg) {
    svg.append('text')
    .attr('x', 300)
    .attr('y', 100)
    .attr('fill', 'block')
    .text('Hello world')
    .style('font-family', 'arial');
}

function dataRect(svg) {
    const data = [{
        width: 200,
        height: 100,
        fill: 'purple'
    }];
    
    svg.append('rect')
    .data(data)
    .attr('width', function (d) {
        return d.width
    })
    .attr('height', function (d) {
        return d.height
    })
    .attr('fill', function (d) {
        return d.fill
    })
}

function dataRect2(svg) {
    const data = [
        {
            width: 200,
            height: 100,
            fill: 'purple'
        },
        {
            width: 100,
            height: 60,
            fill: 'orange'
        },
        {
            width: 50,
            height: 30,
            fill: 'skyblue'
        }
    ]
    
    /*const rects = svg.selectAll('rect')
        .data(data);
    
    rects.attr('width', (d, i, n) => d.width)
        .attr('height', (d) => d.height)
        .attr('fill', (d) => d.fill);
    
    rects.enter()
        .append('rect')
        .attr('width', (d, i, n) => d.width)
        .attr('height', (d) => d.height)
        .attr('fill', (d) => d.fill);*/
    
    const texts = svg.selectAll('text')
        .data(data);
    
    texts.attr('x', 300)
    .attr('y', 100)
    .text('old')
    
    texts.enter()
    .append('text')
    .attr('x', (d, i) => i * 50)
    .attr('y', 100)
    .attr('fill', 'red')
    .text('new')
    .style('font-family', 'arial');
}

/*function remove() {
    d3.selectAll("li")
    .data([10, 20, 30, 15])
    .exit()
    .remove()
}*/

export default Step3;
