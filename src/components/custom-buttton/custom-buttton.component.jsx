import React from "react";
import "./custom-buttton.styles.scss";

const CustomButton = (props) => (
    <div className="custom-button">
        <button className="btn-new-blog">{props.children}</button>
    </div>
);

export default CustomButton;
