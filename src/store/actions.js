import * as types from './mutation-types';

export const addToCart = ({ commit }, product) => {
    if (product.inventory > 0) {
        commit(types.FETCH_COMMENT_LISTS, {
            id: product.id
        });
    }
};