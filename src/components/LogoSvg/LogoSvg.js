import React, { Component } from 'react'
import './LogoSvg.scss'

export class LogoSvg extends Component {
    componentDidMount() {
        // setTimeout(()=>{
        //     console.log(this.refs.line01.getTotalLength())
        //     console.log(this.refs.line02.getTotalLength())
        //     console.log(this.refs.line03.getTotalLength())
        // }, 300)
    }

    render() {
        return (
        <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width="500px" height="600px" viewBox="0 0 2068 2379" 
        >
            <polyline ref='line01' id="XMLID_42_" class="st0" points="906.5,2282.2 1034.4,2358.1 2050,1771.5 2050,607.3 1034.4,20.8 18,609.1 18,1768.1 156,1848.1 287,1774.1 287,1369.1 165,1298.6 165,1839.8 "/>
            <polyline ref='line02' id="XMLID_41_" class="st0" points="311,1936.2 449,2016.2 580,1942.2 580,1537.2 458,1466.7 458,2005.5 "/>
            <polyline ref='line03' id="XMLID_40_" class="st0" points="605.5,2106.2 743.5,2186.2 874.5,2112.2 874.5,1707.2 752.5,1636.7 752.5,2175.5 "/>
            <polygon id="XMLID_43_" class="st1" points="165,1298.6 165,1846.1 287,1774.1 287,1369.1 "/>
            <polygon id="XMLID_44_" class="st1" points="458,1467.7 458,2015.2 580,1943.2 580,1538.2 "/>
            <polygon id="XMLID_45_" class="st1" points="752.5,1637.7 752.5,2185.2 874.5,2113.2 874.5,1708.2 "/>
        </svg>
        )
    }
}

export default LogoSvg

