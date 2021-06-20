import BlogTypes from './types';

export const createNewPost = (id, postData) => ({
    type: BlogTypes.CREATE_NEW_POST,
    payload: [id, postData]
})

export const setSearchText = (text) => ({
    type: BlogTypes.SET_SEARCH_TEXT,
    payload: text
})