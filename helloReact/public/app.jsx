var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./Components/Greeter');

var firstName = "Manha";

ReactDOM.render(
                <Greeter  name={name}  />,
                document.getElementById('app')
            );