import React from 'react';
import CardItem from "./CardItem";
import '../static/Card.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out These EPIC Destinations!!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='/images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />

                        <CardItem
                            src='/images/img-2.jpg'
                            text='Travel through the Island of Bali'
                            label='Bali'
                            path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src='/images/img-4.jpg'
                            text='Explore the hidden Island'
                            label='Explore'
                            path='/services'
                        />

                        <CardItem
                            src='/images/img-5.jpg'
                            text='Welcome to New York'
                            label='New York'
                            path='/services'
                        />
                         <CardItem
                            src='/images/img-8.jpg'
                            text='Explore the Sahara Desert'
                            label='Dubai'
                            path='/services'
                        />


                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Cards;