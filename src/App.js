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
        this.props.filterByCountry(this.state.celebrities)


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
    return {
        celebrities: state.searchReducer.celebrities,
        countryList: state.searchReducer.countryList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterByCountry: country => dispatch(searchActions.filterByCountry(country)) //too verbose
        //filterActions: bindActionCreators(searchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
