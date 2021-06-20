import React from "react";
import "./new-blog.styles.scss";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { createNewPost } from "../../redux/actions";
import { selectBlogs, selectAppendBlog } from "../../redux/selector";

import { createStructuredSelector } from "reselect";

class NewBlog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: "",
        };
    }

    handleNewPost = (e, data) => {
        e.preventDefault();
        const { blogs } = this.props;
        console.log(data);

        const findItemIndex = blogs.findIndex((blog) => blog.id === data.id);

        if (!findItemIndex) {
            const newData = {
                id: uuidv4(),
                data: data,
            };
            createNewPost(newData.id, newData.data);
        } else {
            createNewPost(data.id, data.data);
        }
    };

    render() {
        const { post } = this.state;
        return (
            <div className="new-blog">
                <form>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onReady={(editor) => {}}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.setState({ post: data });
                            console.log(data);
                        }}
                        onBlur={(event, editor) => {
                            const data = editor.getData();
                            this.setState({ post: data });
                        }}
                        onFocus={(event, editor) => {
                            const data = editor.getData();
                            this.setState({ post: data });
                        }}
                        onSubmit={(event, editor) => {
                            const data = editor.getData();
                            console.log("on submit data: ", editor.getData());
                            this.handleNewPost(data);
                        }}
                    />

                    <div className="btn-container">
                        <button
                            className={`${
                                this.state.post.length === 0 ? "disabled" : ""
                            } btn-new-blog`}
                            onClick={(e) => this.handleNewPost(e, post)}
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    blogs: selectBlogs,
});

const mapDispatchToProps = (dispatch) => ({
    createNewPost: (data) => dispatch(createNewPost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBlog);
