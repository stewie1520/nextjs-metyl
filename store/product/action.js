import qs from 'qs';

export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
    GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
    GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
    GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
    GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
    GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',
    GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
    GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
    CHANGE_PRODUCT_PAGINATION: 'CHANGE_PRODUCT_PAGINATION',
    GET_PRODUCTS_BY_CATEGORY_SUCCESS: 'GET_PRODUCTS_BY_CATEGORY_SUCCESS',
    GET_ALL_CATEGORIES: 'GET_ALL_CATEGORIES',
    GET_ALL_CATEGORIES_SUCCESS: 'GET_ALL_CATEGORIES_SUCCESS',
    GET_ALL_CATEGORIES_FAIL: 'GET_ALL_CATEGORIES_FAIL',
    GET_PRODUCTS_BEST_SALE: 'GET_PRODUCTS_BEST_SALE',
    GET_PRODUCTS_BEST_SALE_SUCCESS: 'GET_PRODUCTS_BEST_SALE_SUCCESS',
    GET_PRODUCTS_BEST_SALE_FAIL: 'GET_PRODUCTS_BEST_SALE_FAIL',

    GET_PRODUCTS_RECOMMENDS: 'GET_PRODUCTS_RECOMMENDS',
    GET_PRODUCTS_RECOMMENDS_SUCCESS: 'GET_PRODUCTS_RECOMMENDS_SUCCESS',
    GET_PRODUCTS_RECOMMENDS_FAIL: 'GET_PRODUCTS_RECOMMENDS_FAIL',

    GET_PRODUCTS_RELATED: 'GET_PRODUCTS_RELATED',
    GET_PRODUCTS_RELATED_SUCCESS: 'GET_PRODUCTS_RELATED_SUCCESS',
    GET_PRODUCTS_RELATED_FAIL: 'GET_PRODUCTS_RELATED_FAIL',
};

export function getProductsRecommend() {
    return {
        type: actionTypes.GET_PRODUCTS_RECOMMENDS,
        payload: {
            request: {
                url: '/product/shop',
                params: {
                    sortByDate: true,
                    isVariant: false,
                    page: 1,
                    perpage: 10,
                },
            },
        },
    };
}

export function getProductsBestSale() {
    return {
        type: actionTypes.GET_PRODUCTS_BEST_SALE,
        payload: {
            request: {
                url: '/product/shop',
                params: {
                    isDiscount: true,
                    isVariant: false,
                    page: 1,
                    perpage: 10,
                },
            },
        },
    };
}

export function getProducts(pagination) {
    return {
        type: actionTypes.GET_PRODUCTS,
        payload: {
            request: {
                url: '/product/shop',
                params: {
                    isVariant: false,
                    page: pagination.currentPage,
                    perpage: pagination.limit,
                },
            },
        },
    };
}

export function getAllCategories() {
    return {
        type: actionTypes.GET_ALL_CATEGORIES,
        data: {},
    };
}

export function getAllCategoriesSuccess(data) {
    return {
        type: actionTypes.GET_ALL_CATEGORIES_SUCCESS,
        data,
    };
}

export function getAllCategoriesFail(error) {
    return {
        type: actionTypes.GET_ALL_CATEGORIES_FAIL,
        error,
    };
}

export function getProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        data,
    };
}

export function getSingleProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
        data,
    };
}

export function getProductsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        error,
    };
}

export function getProductsByCategory(category) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
        payload: {
            request: {
                url: '/product/shop',
                paramsSerializer: (params) =>
                    qs.stringify(params, { indices: false }),
                params: {
                    isVariant: false,
                    categoryId: [category],
                    page: 1,
                    perpage: 10,
                },
            },
        },
    };
}

export function getRelatedProducts(category) {
    return {
        type: actionTypes.GET_PRODUCTS_RELATED,
        payload: {
            request: {
                url: '/product/shop',
                paramsSerializer: (params) =>
                    qs.stringify(params, { indices: false }),
                params: {
                    isVariant: false,
                    categoryId: [category],
                    page: 1,
                    perpage: 3,
                },
            },
        },
    };
}

export function getProductsByBrand(brand) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_BRAND,
        brand,
    };
}
export function getProductsByKeyword({ keyword, category }) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
        payload: {
            request: {
                url: '/product/shop',
                paramsSerializer: (params) =>
                    qs.stringify(params, { indices: false }),
                params: {
                    isVariant: false,
                    ...(category ? { categoryId: [category] } : {}),
                    name: keyword,
                    page: 1,
                    perpage: 10,
                },
            },
        },
    };
}

export function getProductsById(id) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID,
        payload: {
            request: {
                url: `/product/shop/${id}`,
            },
        },
    };
}

export function getProductsByPrice(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
        payload,
    };
}
