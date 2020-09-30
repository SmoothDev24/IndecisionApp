'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var appTitle = {
    title: 'Indecision App',
    subtitle: 'This app that will make up your mind for you!'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appTitle.title
    ),
    React.createElement(
        'p',
        null,
        appTitle.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var appRootTwo = document.getElementById('appTwo');
ReactDOM.render(template, appRootTwo);

var user = {
    name: "Smooth",
    age: 24,
    location: 'Dubai'
};
var userName = 'Haol';
var userAge = 24;
var userLocation = 'Florida';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRootTwo)
ReactDOM.render(templateTwo, appRoot);
