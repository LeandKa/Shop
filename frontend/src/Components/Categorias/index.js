import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    getProduct,
    getProductByCategoria,
} from '~/Store/modules/Product/action';
import Api from '~/Utils/Api';
import { Container, CategoriaButton } from './style';

export default function Categorias() {
    const [categoria, setCategoria] = useState([]);
    const [select, setSelect] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getCategorie() {
            try {
                const response = await Api.get('categoria');
                if (response.data) {
                    setCategoria(response.data.categoria);
                } else {
                    console.log('Deu erro');
                }
            } catch (error) {
                console.log(error);
            }
        }

        getCategorie();
    }, []);

    const onClick = (id) => {
        async function ChangeProducts() {
            try {
                const response = await Api.get(
                    `produto-categoria?page=1&categoria=${id}`
                );
                dispatch(getProductByCategoria(response.data, id));
                setSelect(id);
            } catch (error) {
                console.log(error);
            }
        }

        ChangeProducts();
    };

    const GetAll = () => {
        async function handleProducts() {
            try {
                dispatch(getProduct());
                setSelect(0);
            } catch (error) {
                console.log(error);
            }
        }

        handleProducts();
    };

    return (
        <Container>
            <CategoriaButton
                className={select === 0 ? 'active' : ''}
                onClick={GetAll}
            >
                Todas as categorias
            </CategoriaButton>
            <ul>
                {categoria.map((data) => (
                    <li key={data.id}>
                        <CategoriaButton
                            type="button"
                            onClick={() => onClick(data.id)}
                            className={select === data.id ? 'active' : ''}
                        >
                            {data.name}
                        </CategoriaButton>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
