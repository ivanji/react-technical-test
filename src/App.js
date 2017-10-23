import React from 'react';
import Form from './components/Form';
import CelebrityList from './components/CelebrityList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as searchActions from './actions/searchAction';
import './app.css';

//<editor-fold desc="Container">
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            celebrity: []
        };
        this.filterByCountry = this.filterByCountry.bind(this);
    }

    filter() {
        this.props.filterActions.filterByCountry(this.state.celebrity)
    }

    filterByCountry(event) {
        event.preventDefault();
        console.log(event.target.value);
        if (event.target.value === 'reset') {
            this.setState({
                search: ''
            })
        } else {
            this.props.filterActions.filterByCountry(event.target.value);
        }
    }

    render() {
        return (
            <div className="App">
                <Form celebrities={this.props.celebrities}
                      onChange={this.filterByCountry}
                      countryList={this.props.countryList}
                />
                <CelebrityList celebrities={this.props.celebrities} />
            </div>
        );
    }
}
//</editor-fold>

//<editor-fold desc="MapState">
function mapStateToProps(state) {
    return {
        celebrities: state.searchReducer.filteredCelebrities,
        countryList: state.searchReducer.countryList,
        selectedCountry: state.searchReducer.selectedCountry
    };
}
//</editor-fold>
//<editor-fold desc="MapActionCreators">
function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(searchActions, dispatch)
        // filterByCountry: country => dispatch(searchActions.filterByCountry(country)) //too verbose
    }
}
//</editor-fold>

export default connect(mapStateToProps, mapDispatchToProps)(App);