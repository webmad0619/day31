import React, { Component } from "react";
import "./App.css";
import ColorBox from "./colorBox"
import NameDisplayer from "./nameDisplayer"
import Profile from "./Profile"
import StudentProfile from "./studentProfile"
import WeatherWidget from "./WeatherWidget"

class Student {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        if (this.age < 10) {
            throw new RangeError()
        }
        this.age = age
    }

    getFullName() {
        return this.name + " " + this.surname
    }
}

class App extends Component {
    constructor() {
        super()
        this.hello = "hola"
        this.colors = [1, 2]
        this.students = [
            new Student("franch", "garcia", 40),
            new Student("miri", "martinez", 29),
            new Student("carlos", "trujillo", 32),
            new Student("dani", "vicario", 39),
        ]

        

        this.cities = [
            {
                name: "Portland",
                temp: 10
            },
            {
                name: "Miami",
                temp: 25
            },
            {
                name: "Fuenla",
                temp: 36
            },
            {
                name: "Vladivostok",
                temp: -45
            }
        ]

        const minTemp = Math.min(...this.cities.map(valueOfCity => valueOfCity.temp))
        const maxTemp = Math.max(...this.cities.map(valueOfCity => valueOfCity.temp))

        let colorScale = d3.scaleLinear()
            .domain([minTemp, maxTemp])
            .range(["blue", "red"])

        this.cities.map(city => {
            city.bgColor = colorScale(city.temp)
            return city;
        })

        
    }

    render() {
        return (
            <div className="App">

                {
                    this.cities.map(city => <WeatherWidget bgColor={city.bgColor} name={city.name} temperature={city.temp}></WeatherWidget>)
                }

                {/* <StudentProfile 
                    name={this.students[0].name}
                    surname={this.students[0].surname}
                    age={this.students[0].age}/> */}

                {/* {this.students.map((student) => 
                    <StudentProfile 
                    name={student.getFullName()}
                    surname={student.surname}
                    age={student.age}/>
                    )} */}

                {/* <Profile></Profile>

                <h1> {this.hello} new ironhack!</h1>
                {this.colors.map(c => <ColorBox></ColorBox>)}
                <NameDisplayer></NameDisplayer>
                <NameDisplayer></NameDisplayer>
                <NameDisplayer></NameDisplayer>
                <NameDisplayer></NameDisplayer> */}
            </div>
        );
    }
}

export default App;