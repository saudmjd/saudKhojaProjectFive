import React from 'react';

const Gifs = props => (
    <li className="gifs">
        <img src={props.url} alt=""/>
    </li>
)

export default Gifs;











/* class Gifs extends Component {
    render() {
        return(
            <li>
                <img src={this.state.url} alt=""/>
            </li>
        )
    }
} */