import { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import { Search } from './Search/Search';

const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'TS',
  'React',
  'Vue',
]
function App() {
  const [search, setSearch] = useState('');

  const [items, setItems] = useState(data);
  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
  }, [search])
  return (
    <div className="App">
      <div className="App-header">
        <List items={items} />
        <Search value={search} onChange={(e) => { setSearch(e.target.value) }} >

        </Search>
      </div>
    </div>
  );
}

export default App;
