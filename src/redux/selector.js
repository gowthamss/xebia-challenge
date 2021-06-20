import { createSelector } from 'reselect';


const stateSelector = state => state;

export const selectBlogs = createSelector(
    [stateSelector],
    state => state.blogs
)

export const selectSearchText = createSelector(
    [stateSelector],
    state => state.searchText
)

export const selectBlogsOnSearch = createSelector(
    [selectSearchText, selectBlogs],
    (text, blogs) => blogs.filter(blog => (blog.name.toLowerCase().includes(text.toLowerCase())))
)

export const selectAppendBlog = (id) => createSelector(
    [selectBlogs],
    blogs => blogs.findIndex(blog => blog.id === id)
)