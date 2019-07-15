import React, { Component } from "react";

class Profile extends React.Component {
    constructor() {
        super();

        this.profile = {
            // img: "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg",
            name: "Super Sergio"
        }
    }

    discoverAvatarImage() {
        if (this.profile.img) {
            return <img height="85" src={this.profile.img} />
        } else {
            return <img height="85" src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' />
        }
    }

    render() {
        return (
            <div>
                <section>Hola</section>
                <section className="profile">
                    {this.discoverAvatarImage()}
                    <h1>{this.profile.name}</h1>
                </section>
            </div>
        )
    }
}

export default Profile;