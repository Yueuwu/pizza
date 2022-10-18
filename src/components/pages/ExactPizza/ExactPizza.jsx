import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchExactPizza} from "../../../redux/exactPizzaSlice";
import style from './style.module.css'
import Loader from "../../Loader/Loader";

const ExactPizza = () => {

    const dispatch = useDispatch()
    const {item, status} = useSelector(state => state.exactPizza)
    const {id} = useParams()


    useEffect(() => {
        dispatch(fetchExactPizza({
            id
        }))
    },[id])

    return (
        <div className='content'>
            {
                status === 'pending'
                    ?
                    <div className={style.wrap}>
                        <div className={style.side}>
                            <Link className={style.btn}><h2>{'<'}</h2></Link>
                        </div>
                        <div className={style.center}>
                            <Loader/>
                        </div>
                        <div className={style.side}>
                            <Link className={style.btn}><h2>{'>'}</h2></Link>
                        </div>
                    </div>
                    :
                    <div className={style.wrap}>
                        <div className={style.side}>
                            <Link to={id > 0 && `/pizza/${Number(id) - 1}`} className={
                                id > 0
                                    ?
                                    style.btn
                                    :
                                    style.btnDisable
                            }><h2>{'<'}</h2></Link>
                        </div>
                        <div className={style.center}>
                            <img
                                className={style.img}
                                src={item.imageUrl}
                            />
                            <div><h1 className={style.title}>{item.title}</h1></div>
                            <h2>Рейтинг {item.rating}/10</h2>
                            <h3>Стоимость: {item.price} ₽</h3>
                        </div>
                        <div className={style.side}>
                            <Link to={id < 9 && `/pizza/${Number(id) + 1}`} className={
                                id < 9
                                    ?
                                    style.btn
                                    :
                                    style.btnDisable
                            }><h2>{'>'}</h2></Link>
                        </div>
                    </div>
            }

        </div>
    );
};

export default ExactPizza;