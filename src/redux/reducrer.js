import BlogTypes from './types';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Blog from '../components/blog/blog.component';
import { updateBlog } from './utils';

const persistConfig = {
    key: 'root',
    storage,
}

const initialState = {
    blogs: [],
    searchText: ''
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case BlogTypes.CREATE_NEW_POST:
            return {
                ...state,
                blogs: state.blogs.concat(action.payload)
            }
        case BlogTypes.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload

            }
        case BlogTypes.UPDATE_BLOG:
            return {
                ...state,
                blogs: updateBlog(action.payload[0], action.payload[1], state.blogs)
            }
        default:
            return state;
    }
}

export default persistReducer(persistConfig, blogsReducer);