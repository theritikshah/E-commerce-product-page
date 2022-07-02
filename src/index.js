import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

ReactDOM.render(<App />, root, (log)=>console.log("render: "+log));
