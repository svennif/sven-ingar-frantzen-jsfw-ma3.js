import React from 'react';

function Heading(props) {
    console.log(props);
    return <h1>{props.content}</h1>;
}

export default Heading; 