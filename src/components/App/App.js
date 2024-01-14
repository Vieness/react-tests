import { useState } from 'react';
import './App.css';
import List from './List';
import { Search } from './Search/Search';

const data = [
  'HTML',
  'CSS',
  'JS',
  'TS',
  'React',
  'Vue',
]
function App() {
  const[search, setSearch] = useState('');
  return (
    <div className="App">
      <div className="App-header">
        <List items={data}/>
        <Search value={search} onChange={(e)=>{setSearch(e.target.value)}} > 
          
        </Search>
      </div>
    </div>
  );
}

export default App;
