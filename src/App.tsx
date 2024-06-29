import React from 'react';
import './App.css';

function App() {
    const users = [ {id: 1, name: "Dimych"}, {id: 2, name: "Sveta"}, {id: 3, name: "Katya"}];
    const lielements = users.map( (user) => <li key={user.id}>user.name</li>)
  return (
        <div className="App">
            <ul>
                {lielements}
            </ul>
        </div>
  );
}

export default App;
