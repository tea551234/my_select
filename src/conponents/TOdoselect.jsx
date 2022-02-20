import React, { Component } from 'react'
import Select from 'react-select';



const mydata = ['aaa', 'b']


class TOdoselect extends Component {
    state = {
        options: [
            { selectedOption: null },
            { value: mydata, label: 'tea' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption),
        );
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.options}
                />
                <h1 id='test'> {this.selectedOption} </h1>
            </div>);
    }
}

export default TOdoselect;