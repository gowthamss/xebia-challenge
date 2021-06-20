import React from "react";
import "./search-blogs.styles.scss";

import { setSearchText } from "../../redux/actions";
import { connect } from "react-redux";

const SearchBlogs = ({ setSearchText }) => {
    return (
        <div className="search-blogs">
            <input
                placeholder="Search blogs"
                name="sblog"
                id="sblog"
                onChange={setSearchText}
                className="search-box"
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchText(event.target.value)),
});

export default connect(null, mapDispatchToProps)(SearchBlogs);
