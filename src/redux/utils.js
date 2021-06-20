export const updateBlog = (id, data, blogs) => {
    const findItemIndex = data.findIndex(data.id === id);
    const findItem = data.find(data.id === id);
    blogs.splice(findItemIndex, 1, findItem)
}