console.log('App.js is running')

// JSX - JavaScript XML
let appTitle = {
    title: 'Indecision App',
    subtitle: 'This app that will make up your mind for you!'
}
let template = (
    <div>
        <h1>{appTitle.title}</h1>
        <p>{appTitle.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)
let appRootTwo = document.getElementById('appTwo')
ReactDOM.render(template, appRootTwo)

let user = {
    name: "Smooth",
    age: 24,
    location: 'Dubai'
}
let userName = 'Haol'
let userAge = 24
let userLocation = 'Florida'
let templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)
let appRoot = document.getElementById('app')

// ReactDOM.render(template, appRootTwo)
ReactDOM.render(templateTwo, appRoot)