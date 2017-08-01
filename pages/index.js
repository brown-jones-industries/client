import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import Todo from '../components/Todo';
import LocationButton from '../components/LocationButton';

import initStore from '../utils/store';

// import { getLocation } from '../actions/location';


class Index extends React.Component {
    static async getInitialProps({ store, isServer }) {
        //if you want to add a default or initial state, do that like this
        // store.dispatch({ type: 'ADD_TODO', text: 'It works!' });

        //if you want to make a json request without having to deal with callbacks or promises
        //use async await like this (*notice the function has async in the declaration)
        
        // const res = await fetch('https://api.github.com/repos/ooade/NextSimpleStarter');
        // const json = await res.json();
        // return { stars: json.stargazers_count };

        //remember though! With next.js, this getInitialProps will be called on the server

        return {}
    }

    render() {
        // const { stars } = this.props;
        return (
            <div>
                <div>
                    <Todo />
                    <LocationButton />
                </div>
            </div>
        );
    }
}

export default withRedux(initStore)(Index);
