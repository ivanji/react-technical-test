import React, {Component, PropTypes} from 'react';
import Form from './components/Form';
import CelebrityList from './components/CelebrityList';

import {connect} from 'react-redux';

import * as searchActions from './actions/searchAction';

import './App.css';

class App extends Component {
    render() {

        return (
            <div className="App">
                <Form  />
                <CelebrityList celebrities={this.props.celebrities} />

            </div>
        );
    }
}

/*App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    celebrities: PropTypes.array.isRequired
};*/

function mapStateToProps(state) {
    console.log(state);
    return {
        celebrities: state.searchReducer.celebrities
    };
}

export default connect(mapStateToProps)(App);
