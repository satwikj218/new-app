import React from "react";
import { ReactDOM } from "react-dom";

class Toggle extends React.Component {
    constructor(value){
        super(value);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }   
}