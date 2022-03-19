import './App.css';
import { tableData } from './data'

function App() {
  
  const data = tableData.filter((item) => item.instalment)
  return (
    <table>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.count}</td>
          <td>{item.instalment ? 'v' : ''}</td>
        </tr>
      ))}
    </table>
  );
}

export default App;
