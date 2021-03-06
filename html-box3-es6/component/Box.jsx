import React from 'react'
import {Row}from './Row'

export default class Box extends React.Component {
        render() {
        	
            var {rowData} = this.props.boxdata,
                html = [];
            for (var i = 0; i < rowData.length; i++) {
                var rowObject = rowData[i];
                html.push( < Row row = {rowObject} />);
                }
            return <div tabIndex = "-1" onKeyDown = {this.props.onKeyDown.bind(this)} className = "boxs" > { html} < /div>
        }
}