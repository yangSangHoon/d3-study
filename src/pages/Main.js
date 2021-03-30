import React, {useState, useRef, useEffect} from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear, axisRight } from 'd3';

function Main() {
    const dataArray = [5, 20, 30, 40, 60];
    
    useEffect(() => {
        const width = 500;
        const height = 500;
    
        const color = scaleLinear()
        .domain([0, 60])
        .range(["red", "blue"]);
    
        const witdhScale = scaleLinear()
        .domain([0, 60])
        .range([0, width-20]);
    
    
        const axis = axisBottom().scale(witdhScale);
    
        const canvas = select("body").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(10, 20)");
    
        const bars = canvas.selectAll("rect")
        .data(dataArray)
        .enter()
        .append("rect")
        .attr("width", function (d) {
            return witdhScale(d);
        })
        .attr('height', 50)
        .attr("fill", function (d) {
            return color(d);
        })
        .attr('y', function (d, i) {
            return i * 60
        });
    
        canvas.append("g").attr("transform", "translate(0, 300)").call(axis);
    }, dataArray);
    
    return (
        <div>
            main
        </div>
    );
}

export default Main;
