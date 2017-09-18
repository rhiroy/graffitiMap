import React from 'react';
import {GOOGLE_API_KEY} from '../config';

class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <iframe width="1776" height="1375" frameborder="0" style={{border:0}}
                        src={`https://www.google.com/maps/embed/v1/view?zoom=10&center=30.2672,-97.7431&key=${GOOGLE_API_KEY}`} allowfullscreen></iframe>
            </div>
        );
    }

}



export default App;

