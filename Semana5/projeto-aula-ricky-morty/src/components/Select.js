import React, {Component} from "react";

export default class Select extends Component {

    render() {
        const options = this.props.options;
        return(
            <select className="select">
                {options.map(number => {
                    return (
                        <option value={number} key={number}>
                            {number}
                        </option>
                        );
                })}
            </select>
        );
    }
}