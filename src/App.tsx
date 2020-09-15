import React from 'react';
import TestTable from './components/TestTable/TestTable';
import WrappedDemoComponent from './components/TaskPage/TaskPage';
import ListView from './components/List/List';
//import { connect } from 'react-redux';
//import {fetchScheduleData} from './redux/actions';

function App() {
  return (
    <div className="App">
      <WrappedDemoComponent />
      <ListView/>
    </div>
  );
}

export default App;
