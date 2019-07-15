import React from "react";

class ColorBox extends React.Component {
    constructor() {
        super()
        this.color = `rgba(${Math.random() * 255}, 0, 0, 0.8)`
        this.imageData = {
            user: {
                avatarUrl: "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg"
            }
        }
    }

    clickHandler() {
        console.log(this.color)
    }

    render() {
        const userName = <h1>Franch</h1>
        const element = <span>CB {Math.round(2.20)}</span>;
        const myImage = <img height="50" src={this.imageData.user.avatarUrl} />;

        return (
        <section className="colorbox" style={{backgroundColor: this.color}} onClick={() => this.clickHandler()}>{userName} {element} {myImage}</section>
        )
    }
}

export default ColorBox;