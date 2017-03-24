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


// This component receives data by this props object
const SayHello = React.createClass({
  render: function(){
    return <h3>Hello to you, { this.props.name }. Good day </h3>;
  }
});


// Component to wrap several calls to SayHello:
const SayHelloToSeveral = React.createClass({
  render: function(){
    return (
      <div>
        <SayHello name={ this.props.first } />
        <SayHello name={ this.props.second } />
      </div>
    );
  }
});



// Component to see the state in action:
const Shape = React.createClass({

  // sets initial value for state
  getInitialState: function(){
    return {
      shape: "none",
      sides: 0
    };
  },

  // render the component based in state data
  render: function(){
    setTimeout(
      () => { this.setState({ shape: 'triangle', sides: 3 }); },
      5000
    );

    return (
      <div>
        <p> Shape: { this.state.shape } </p>
        <p> Sides: { this.state.sides } </p>
      </div>
    );
  }

});


// Render the component in the DOM. With XML
// ReactDOM.render(<FirstComponent />, document.getElementById('app'));
// ReactDOM.render(<SayHelloToSeveral first="Johnas" second="Alice"/>,document.getElementById('app'));
ReactDOM.render(<Shape />, document.getElementById('app'));
