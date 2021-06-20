import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home/home.component";
import BlogsPage from "./pages/blogs/blogs.component";
import Header from "./components/header/header.component";
import NewBlog from "./pages/new-blog/new-blog.component";

import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        exact
                        path="/blogs"
                        render={(props) => <BlogsPage {...props} />}
                    />
                    <Route
                        path="/blogs/new"
                        render={(props) => <NewBlog {...props} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default connect()(App);
