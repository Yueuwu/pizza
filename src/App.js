import './scss/app.scss'
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
    let list = [
        {title: 'Мексиканская', price: 500 },
        {title: 'Чизбургер-пицца', price: 395 },
        {title: 'Владиковская', price: 69.99 },
        {title: 'Пиздецкончилявская', price: 'Бесценно' }
    ]
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
                            {list.map(i => <PizzaBlock i={i}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
