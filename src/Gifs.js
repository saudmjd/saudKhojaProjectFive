import React from 'react';

const Gifs = (props) => (
    <li className="gifsLi">
        <img src={props.url} alt=""/>
    </li>
)

export default Gifs;