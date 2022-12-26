import React from "react";

// even we aren't passing props to Scroll in App.js, React automatically does it and props have an object of Children
// We can use styles in JSX by using style={{}}. First {} is JSX expression. Second {} is a JS object
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '70vh'}}>
            {props.children}
        </div>
    )
};

export default Scroll;