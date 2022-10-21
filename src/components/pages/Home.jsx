import React from 'react';
import {useEffect, useState} from "react";
import Categories from "../Categories.tsx";
import Sort from "../Sort.tsx";
import Sceleton from "../PizzaBlockSceleton";
import PizzaBlock from "../PizzaBlock";
import Pagination from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setPage, setFilters} from "../../redux/filterSlice";
import qs from "qs";
import {useNavigate} from 'react-router-dom'
import {fetchPizzas} from "../../redux/pizzaSlice";


const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {categoryId, sort, page, searchValue} = useSelector(state => state.filter)

    const [isSearch, setIsSearch ] = useState(false)
    const [isMounted, setIsisMounted ] = useState(false)

    const {items, status} = useSelector(state => state.pizza)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const changePage = (page) => {
        dispatch(setPage(page))
    }

    const sortList = ['rating', 'price',  'title']

    let category = categoryId > 0 ? `category=${categoryId}` : ''
    let pageis = category === '' ? `page=${page}&limit=4` : ''

    const getPizzas = async () => {
        dispatch(fetchPizzas({
            pageis,
            category,
            sort: sortList[sort],
            searchValue
        }))
    }

    useEffect(() => {
        if (window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters({
                ...params
            }))
            setIsSearch(true)
        }
    }, [])

    useEffect(() => {
        if(!isSearch){
            getPizzas()
        }
        setIsSearch(false)
    },[category, sort, searchValue, pageis])

    useEffect(() => {
        if(isMounted){
            const queryString = qs.stringify({
                categoryId,
                sort,
                page
            })
            navigate(`?${queryString}`)
        }
        setIsisMounted(true)
    }, [categoryId, sort, searchValue, page])


    return (
            <div className="container">
                <div className="content__top">
                    <Categories onChangeCategory={onChangeCategory} value={categoryId}/>
                    <Sort value={sort}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        status === 'pending'
                            ?
                            [...new Array(4)].map((_, i) => <Sceleton key={i}/>)
                            :
                            items.map(i => <PizzaBlock
                                key={i.id}
                                i={i}/>)
                    }
                    {
                        status === 'error' && <h1>Произошла ошибка при загрузке пицц</h1>
                    }

                </div>
                {
                    pageis !== '' && <Pagination page={page} changePage={changePage}/>
                }
            </div>
    );
};

export default Home;