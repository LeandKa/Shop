import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '~/Store/modules/Product/action';
import Categorias from '~/Components/Categorias';
import Header from '~/Components/Header';
import ResponsiveNone from '~/Components/Layout/Responsive/ResponsiveNone';
import ResponsiveShow from '~/Components/Layout/Responsive/ResponsiveShow';
import SearchBar from '~/Components/Header/SearchBar';
import Pagination from '~/Components/Pagination';
import Card from '~/Components/Card';
import { Cards, Options, SearchTitle } from './style';

export default function Home() {
    const dispatch = useDispatch();
    const { product, totalPage, searchParams } = useSelector(
        (state) => state.product
    );

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            <Header />
            <ResponsiveShow color="white">
                <SearchBar />
            </ResponsiveShow>
            <Options>
                <Categorias />
                <ResponsiveNone>
                    <Pagination count={totalPage} />
                </ResponsiveNone>
            </Options>
            {searchParams && (
                <SearchTitle>
                    Resultado da busca para {searchParams}
                </SearchTitle>
            )}
            <Cards>
                {product.product.map((data) => (
                    <Card
                        key={data.id}
                        id={data.id}
                        url={data.url}
                        price={data.price}
                        name={data.name}
                    />
                ))}
            </Cards>
            <ResponsiveShow color="none">
                <Pagination count={totalPage} />
            </ResponsiveShow>
        </>
    );
}
