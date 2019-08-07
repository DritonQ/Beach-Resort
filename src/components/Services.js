import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaCoffee } from 'react-icons/fa';

export default class Services extends Component {

    state = { sherbimi : [{
        icon: <FaCocktail />,
        title: "Free FaCocktail",
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
         Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        icon:<FaHiking />,
        title: "Hiking is good",
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
        Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        icon: <FaShuttleVan />,
        title: "Free ShuttleVan",
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
         Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        icon: <FaCoffee />,
        title: "Drink Caffe",
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s`
    }]}

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.sherbimi.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}

                </div>
            </section>
        )
    }
}