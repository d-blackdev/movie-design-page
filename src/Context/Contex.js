import React, { Component } from 'react';
import Data from './Data'

const MovieContext = React.createContext(Data)
class MovieProvider extends Component {
    state = {
        movieDetails: Data
    }
    render() {
       
        return (
            <MovieContext.Provider>
                {this.props.children}
            </MovieContext.Provider>
            
        );
    }
}

const MovieConsumer = MovieContext.Consumer

export {MovieContext,MovieProvider,MovieConsumer};