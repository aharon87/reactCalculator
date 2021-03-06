import React from 'react';
import Digit from './Digit.jsx';

class KeyBoard extends React.Component {

    constructor(props) {
        super(props);
        var divStyle = {
            width: '100%',
            height: '90%',
            display: 'flex',
            flexWrap: 'wrap',
        };
        this.state = {
            digitKeyBoard: [
                {btnValue: 'AC', color: '#001f3f'}, {btnValue: '-/+', color: '#001f3f'},
                {btnValue: '%', color: '#001f3f'}, {btnValue: '/', color: '#001f3f'},
                {btnValue: '7', color: '#0074D9'},{btnValue: '8', color: '#0074D9'},
                {btnValue: '9', color: '#0074D9'},{btnValue: '*', color: '#001f3f'} ,
                {btnValue: '4', color: '#39CCCC'}, {btnValue: '5', color: '#39CCCC'},
                {btnValue: '6', color: '#39CCCC'}, {btnValue: '-', color: '#001f3f'},
                {btnValue: '1', color: '#2ECC40'}, {btnValue: '2', color: '#2ECC40'},
                {btnValue: '3', color: '#2ECC40'},{btnValue: '+', color: '#001f3f'},
                {btnValue: '0', color: '#FF851B',width:'0 0 50%'},{btnValue: '.', color: '#FF851B'},
                {btnValue: '=', color: '#F012BE'},
                ], style: divStyle
        };
    }

    render() {
        return (
            <div style={this.state.style}>
                {this.state.digitKeyBoard.map(function (btnKey) {
                    if (Number.isInteger(parseInt(btnKey.btnValue))) {
                        return <Digit key={btnKey.btnValue} data={btnKey.btnValue} action="number" style={btnKey}
                                      clickEvent={this.props.handelClickDigit}/>;
                    } else {
                        if (btnKey.btnValue === '=') {
                            return <Digit key={btnKey.btnValue} style={btnKey}
                                          data={btnKey.btnValue} action="sumAction" clickEvent={this.props.handelClickDigit}/>;
                        } else {
                            return <Digit key={btnKey.btnValue} style={btnKey}
                                          data={btnKey.btnValue} action="mathAction" clickEvent={this.props.handelClickDigit}/>;
                        }
                    }
                }, this)}
            </div>
        );
    }
}
export default KeyBoard;
