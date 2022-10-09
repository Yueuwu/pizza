import './scss/app.scss'
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import {useEffect, useState} from "react";
import Sceleton from "./components/PizzaBlockSceleton";

function App() {
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
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
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
                </div>
            </div>
        </div>
    );
}

export default App;
