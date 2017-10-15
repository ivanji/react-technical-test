import React, {Component} from 'react';
import CelebrityList from './components/celebrityList';
import Form from './components/form';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            celebrities: [],
            country: [],
            search: '',
            currency: 1,
            currencySymbol: '$',
            netWorth: ['']
        }
    }

    componentWillMount() {
        fetch('./celebrityRichList.json')
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                response.json().then(data => {

                    this.setState({
                        celebrities: data.celebrityList
                    });

                })
            })
    }

    filterList(event){
        event.preventDefault();
        this.setState({
            search: event.target.value
        })

    }

    filterByCountry(event) {
        event.preventDefault();
        if (event.target.value === 'reset') {
            this.setState({
                search: ''
            })
        } else {
            this.setState({
                search: event.target.value
            })
        }
    }

    fxConversion(event) {
        let updatedNetWorth = this.state.celebrities.map(celebrity => {
            return (celebrity.netWorth) * (event.target.value);
        });
        this.setState({
            netWorth: updatedNetWorth
        });

        console.log(this.state.netWorth);
    }
    render() {
        let filteredList = this.state.celebrities.filter((celebrity) => {
            return (
                celebrity.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                celebrity.networth.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                celebrity.age.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                celebrity.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            );
        });
        return(
            <div className="app">
                <h1>Top List</h1>
                <div id="form">
                    <Form
                        celebrities={filteredList}
                        search={this.filterList.bind(this)} // Search list
                        country={this.filterByCountry.bind(this)}
                        onChange={this.fxConversion.bind(this)}
                    />
                </div>
                <div id="results">
                    <CelebrityList celebrities={filteredList} />
                </div>
            </div>
        )
    }


}

export default App;
