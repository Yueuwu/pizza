import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItem, CartItem} from "../redux/cartSlice";
import {Link} from "react-router-dom";

type PizzaBlockProps = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    types: number[],
    sizes: number[]
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({id, title, price, imageUrl, types, sizes}) => {
    const [activeSize, setActiveSize] = useState(0)
    const [activeType, setActiveType] = useState(0)

    const typesList = ['тонкое','традиционное']
    const sizesList = [26, 30, 40]

    const dispatch = useDispatch()


    const addPizza = () => {
        const item: CartItem = {
            id,
            title,
            price,
            img: imageUrl,
            type: typesList[activeType],
            size: sizesList[activeSize],
            count: 0
        }
        dispatch(addItem(item))
    }

    return (

        <div className="pizza-block">
            <Link to={`/fullpizza/${id}`}>
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="PizzaBlock"
                />
                <h4 className="pizza-block__title">{title}</h4>
            </Link>
            <div className="pizza-block__selector">
                <ul>
                    {
                        types.map((e, i) =>
                            e === 0
                                ?
                                <li key={i} onClick={() => setActiveType(i)}
                                    className={activeType === i ? "active" : ''}
                                >тонкое</li>
                                :
                                <li key={i} onClick={() => setActiveType(i)}
                                    className={activeType === i ? "active" : ''}
                                >традиционное</li>
                        )
                    }

                </ul>
                <ul>
                    {
                        sizes.map((e, i) => <li key={i} onClick={() => setActiveSize(i)}
                                             className={activeSize === i ? "active" : ''}>{e} см.</li>)
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div onClick={addPizza} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;