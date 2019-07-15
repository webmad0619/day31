import React, {Component} from "react";

class NameDisplayer extends Component {
    constructor() {
        super()
        this.employeeName = {
            name: "miri",
            surname: "martinez",
            age: 29,
            salary: 1292929
        }
    }

    formatName(employeeDetails) {
        return `${employeeDetails.name} ${employeeDetails.surname} ${employeeDetails.age}`
    }

    render() {
        return (
            <div>I am {this.formatName(this.employeeName)}</div>
        )
    }
}

export default NameDisplayer;