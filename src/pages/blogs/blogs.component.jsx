import React from "react";
import "./blogs.styles.scss";

import Blog from "../../components/blog/blog.component";
import SearchBlogs from "../../components/search-blogs/search-blogs.component";
import { selectBlogsOnSearch } from "../../redux/selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const BlogsPage = ({ match, history, blogs }) => (
    <div className="blogs-page">
        <div className="input-btn-container">
            <SearchBlogs />
            <div className="btn-container">
                <button
                    className="btn-new-blog"
                    onClick={(e) => {
                        e.preventDefault();
                        history.push(`${match.path}/new`);
                    }}
                >
                    Write New Blog
                </button>
            </div>
        </div>

        <div className="blogs-container">
            {blogs.map((blog, index) => (
                <Blog blog={blog} key={index} />
            ))}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    blogs: selectBlogsOnSearch,
});

export default connect(mapStateToProps)(BlogsPage);
