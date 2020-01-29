import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ProjectListProvider } from './Contexts/ProjectContext';

ReactDOM.render(
  <BrowserRouter>
    <ProjectListProvider>
      <App />
    </ProjectListProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);