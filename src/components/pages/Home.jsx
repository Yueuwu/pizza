import React from 'react';
import {useEffect, useState} from "react";
import Categories from "../Categories";
import Sort from "../Sort";
import Sceleton from "../PizzaBlockSceleton";
import PizzaBlock from "../PizzaBlock";

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://63425208ba4478d4783a7215.mockapi.io/items')
            .then(res => res.json())
            .then(json => {
                setItems(json)
                setIsLoading(false)
            })},[])


    return (
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading
                            ?
                            [...new Array(4)].map((_, i) => <Sceleton key={i}/>)
                            :
                            items.map(i => <PizzaBlock key={i.id} i={i}/>)
                    }

                </div>
            </div>
    );
};

export default Home;