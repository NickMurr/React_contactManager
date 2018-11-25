// /* eslint-disable react/sort-comp */
// /* eslint-disable react/prefer-stateless-function */
// import React, { Component } from 'react';

// class Test extends Component {
//   state = {
//     title: '',
//     body: '',
//     table: ''
//   };

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data =>
//         this.setState({
//           title: data.title,
//           body: data.body,
//           table: data.table
//         })
//       );
//   }

//   // componentWillMount() {
//   //   console.log('Component Will Mount');
//   // }

//   // componentDidUpdate() {
//   //   console.log('Component Did Update');
//   // }

//   // componentWillUpdate() {
//   //   console.log('Component Will Update');
//   // }

//   // componentWillReceiveProps(nextProps, nextState) {
//   //   console.log('componentWillReceiveProps');
//   // }

//   // static getDerivedStateFromProps(nextProps, prevState) {
//   //   return null;
//   // }

//   render() {
//     const { title, body } = this.state;
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>{body}</p>
//       </div>
//     );
//   }
// }

// export default Test;
