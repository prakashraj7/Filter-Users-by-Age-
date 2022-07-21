import * as React from 'react';
import './style.css';

export default function App() {
  const user = [
    { id: 1, firstName: 'Prakash', lastName: 'Joaquin', age: 23 },
    { id: 2, firstName: 'Barth', lastName: 'Kumar', age: 25 },
    { id: 3, firstName: 'John', lastName: 'Peter', age: 32 },
    { id: 4, firstName: 'Tazzo', lastName: 'Joaquin', age: 23 },
  ];

  const renderList = user
    .filter((x) => x.age < 25) //Filter BY Age!
    .sort((a, b) => b.id - a.id) // sort in Accending Order!
    .map((x) => {
      return (
        <tr>
          <td>{x.firstName}</td>
        </tr>
      ); //Map through the array
    });
  return (
    <div>
      <h3>Filter User by Age!</h3>
      {renderList}
    </div>
  );
}
