import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Api from '~/Utils/Api';
import { getError, getProductBySearch } from '~/Store/modules/Product/action';
import { Container, SearchInput, Icon } from './style';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [params, SetParams] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        async function getSearch() {
            try {
                const response = await Api.get(
                    `produto-name?ProductName=${params}`
                );
                dispatch(
                    getProductBySearch(
                        response.data,
                        params,
                        response.data.totalPage
                    )
                );
                history.push(`/product/search/${params}`);
            } catch (error) {
                dispatch(getError(error.message));
            }
        }

        getSearch();
    };

    const handleChange = (event) => {
        SetParams(event.target.value);
    };

    return (
        <Container onSubmit={handleSubmit}>
            <SearchInput
                onChange={handleChange}
                name="ProductName"
                placeholder="Procurando por algo especifico?"
            />
            <Icon />
        </Container>
    );
}
