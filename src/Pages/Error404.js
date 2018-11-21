import React, {Component} from 'react';
import '../App.css';


class Error404 extends Component {
    render() {
        return (
            <div className="alert-warning text-center">
                <h2>Sorry There Was An Error</h2>
                <p className="text-capitalize"> Please Try Again</p>
            </div>
        );
    }

}


export default Error404;