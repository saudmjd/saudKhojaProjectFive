import React from 'react';
import Gifs from './Gifs';

const GifList = props => {

    const results = props.data;
    let gifs = results.map(gifs => 
        <Gifs url={gifs.images.fixed_height.url} key={gifs.id} />
    );

    return(
        <ul className="gifResults">
            {gifs}
        </ul>
    );
}

export default GifList;
    






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