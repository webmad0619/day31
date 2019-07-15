import React from "react";

export default class StudentProfile extends React.Component {
    render() {
        return (
            <section className="studentProfile">
                <h2>Name: {this.props.name} {this.props.surname}</h2>
                <h3>Age: {this.props.age}</h3>
            </section>
        )
    }
}