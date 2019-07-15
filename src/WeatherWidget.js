import React from "react";

export default class WeatherWidget extends React.Component {
    render() {
        return (
            <section className="weather-widget" style={{backgroundColor: this.props.bgColor}}>
                <h1>{this.props.name}</h1>  
                <h3>{this.props.temperature}°C</h3>
            </section>
        )
    }
}