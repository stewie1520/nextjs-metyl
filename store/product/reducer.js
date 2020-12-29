import { actionTypes } from './action';

export const initialState = {
    allProducts: null,
    singleProduct: null,
    error: false,
    categories: [],
    rawCategories: [],
    bestSaleProducts: [],
    recommendProducts: [],
    minPrice: 0,
    maxPrice: 10000000,
    pagination: {
        totalPage: 1,
        currentPage: 1,
        limit: 10,
    },
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                ...{
                    allProducts: action.payload.data.data,
                    pagination: {
                        ...state.pagination,
                        totalPage: action.payload.data.pagination.totalPage,
                        currentPage: action.payload.data.pagination.currentPage,
                    },
                },
            };
        case actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
            return {
                ...state,
                ...{
                    allProducts: action.payload.data.data,
                    pagination: {
                        ...state.pagination,
                        totalPage: action.payload.data.pagination.totalPage,
                        currentPage: action.payload.data.pagination.currentPage,
                    },
                },
            };
        case actionTypes.GET_PRODUCTS_BEST_SALE_SUCCESS:
            return {
                ...state,
                ...{
                    bestSaleProducts: action.payload.data.data,
                },
            };
        case actionTypes.GET_PRODUCTS_RECOMMENDS_SUCCESS:
            return {
                ...state,
                ...{
                    recommendProducts: action.payload.data.data,
                },
            };

        case actionTypes.GET_PRODUCTS_BY_PRICE_RANGE:
            return {
                ...state,
                ...{
                    minPrice: action.payload[0],
                    maxPrice: action.payload[1],
                },
            };
        case actionTypes.GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{
                    rawCategories: action.data,
                    categories: action.data.map((d) => {
                        return {
                            text: d.name,
                            url: `/?category=${d.id}`,
                        };
                    }),
                },
            };
        case actionTypes.GET_ALL_CATEGORIES_FAIL:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{
                    allProducts: action.payload.data.data,
                    pagination: {
                        ...state.pagination,
                        totalPage: action.payload.data.pagination.totalPage,
                        currentPage: action.payload.data.pagination.currentPage,
                    },
                },
            };
        case actionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                ...{ singleProduct: action.data },
            };

        case actionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;
