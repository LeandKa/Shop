import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '~/Components/Header';
import ResponsiveNone from '~/Components/Layout/Responsive/ResponsiveNone';
import ResponsiveShow from '~/Components/Layout/Responsive/ResponsiveShow';
import SearchBar from '~/Components/Header/SearchBar';
import Pagination from '~/Components/Pagination';
import Card from '~/Components/Card';
import { Cards, Options, SearchTitle } from './style';
import Api from '~/Utils/Api';
import { getProductBySearch, getError } from '~/Store/modules/Product/action';

function ProductSearch() {
    const dispatch = useDispatch();
    const { name } = useParams();
    const { product, totalPage, searchParams } = useSelector(
        (state) => state.product
    );

    useEffect(() => {
        async function getSearch() {
            try {
                const response = await Api.get(
                    `produto-name?ProductName=${name}`
                );
                dispatch(
                    getProductBySearch(
                        response.data,
                        name,
                        response.data.totalPage
                    )
                );
            } catch (error) {
                dispatch(getError(error.message));
            }
        }

        getSearch();
    }, []);

    return (
        <>
            <Header />
            <ResponsiveShow color="white">
                <SearchBar />
            </ResponsiveShow>
            <Options>
                <ResponsiveNone>
                    <Pagination count={totalPage} />
                </ResponsiveNone>
            </Options>
            <SearchTitle>Resultado da busca para {searchParams}</SearchTitle>
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
export default ProductSearch;
