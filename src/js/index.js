// require React and ReactDOM:
//    -React creates and manages components
//    -ReactDOM renders components in the DOM
const React = require('react');
const ReactDOM = require('react-dom');


// Create out first component. For Convention, first letter is Uppercase
const FirstComponent = React.createClass({
  render: function(){
    return <h1>First React Component</h1>;
  }
});

// Render the component in the DOM. With XML
ReactDOM.render(<FirstComponent />, document.getElementById('app'));
