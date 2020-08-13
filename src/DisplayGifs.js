import React from 'react';
import Gifs from './Gifs';

const DisplayGifs = (props) => {
    return(
        <ul className="gifsUl">
            {props.data.map(gif => {
                return(
                <Gifs url={gif.images.fixed_height.url} />
                )
            })}
        </ul>
    );
}

export default DisplayGifs;
    




// const results = props.data;
    // let gifs = results.map(gifs => 
    //     <Gifs url={gifs.images.fixed_height.url} key={gifs.id} />
    // );

/* class GifList extends Component {
    state = {
        gifs: []
    };

    render() {
        const { gifs } = this.state;
        return (
            <ul className="resultList">{gifs}</ul>
        )
    }
}   */  