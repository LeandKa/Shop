import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PaginationComp from '@material-ui/lab/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import Api from '~/Utils/Api';
import {
    getProductByCategoria,
    getProductBySearch,
    getProductSuccess,
} from '~/Store/modules/Product/action';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Pagination({ count }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { categoria_id, searchParams } = useSelector(
        (state) => state.product
    );
    const [page, setPage] = React.useState(1);
    async function handleChange(event, value) {
        setPage(value);
        if (categoria_id) {
            const response = await Api.get(
                `produto-categoria?page=${value}&categoria=${categoria_id}`
            );

            dispatch(
                getProductByCategoria(
                    response.data,
                    categoria_id,
                    response.data.totalPage
                )
            );
        } else if (searchParams) {
            const response = await Api.get(
                `produto-name?page=${value}&ProductName=${searchParams}`
            );

            dispatch(
                getProductBySearch(
                    response.data,
                    searchParams,
                    response.data.totalPage
                )
            );
        } else {
            const response = await Api.get(`produto?page=${value}`);

            dispatch(getProductSuccess(response.data, categoria_id));
        }
    }

    return (
        <div className={classes.root}>
            <PaginationComp
                disabled={count > 1 ? '' : 'true'}
                count={count}
                defaultPage={1}
                page={page}
                onChange={handleChange}
            />
        </div>
    );
}

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
};
