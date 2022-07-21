import * as React from 'react';
import './style.css';

export default function App() {
  const user = [
    { firstName: 'Prakash', lastName: 'Joaquin', age: 23 },
    { firstName: 'Barth', lastName: 'Kumar', age: 25 },
    { firstName: 'John', lastName: 'Peter', age: 32 },
    { firstName: 'Tazzo', lastName: 'Joaquin', age: 23 },
  ];

  const renderList = user
    .filter((x) => x.age < 25)
    .map((x) => {
      return (
        <tr>
          <td>{x.firstName}</td>
        </tr>
      );
    });
  return (
    <div>
      <h3>Filter User by Age!</h3>
      {renderList}
    </div>
  );
}
