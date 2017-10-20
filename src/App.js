import React, {Component, PropTypes} from 'react';
import Form from './components/Form';
import CelebrityList from './components/CelebrityList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as searchActions from './actions/searchAction';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebrity: {}
        };
        this.filter = this.filter.bind(this);
    }
    filter() {
        console.log(this.props);
        this.props.filterActions.filterByCountry(this.state.celebrity)
    }
    render() {
        return (
            <div className="App">
                <Form celebrities={this.props.celebrities} country={this.filter} />
                <CelebrityList celebrities={this.props.celebrities} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        celebrities: state.searchReducer.celebrities,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        // filterByCountry: country => dispatch(searchActions.filterByCountry(country)) //too verbose
        filterActions: bindActionCreators(searchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
