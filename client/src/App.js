import React, {Fragment} from 'react'
import './App.css';

// components

import SearchUser from "./components/SearchUsers"
import ListUsers from "./components/ListUsers"



function App() {
  return (
    <Fragment>
      <div className="container">
      <SearchUser />
      <ListUsers />
      </div>
    </Fragment>
  );
}

export default App;
