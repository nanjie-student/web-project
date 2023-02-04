import {useState} from 'react';
import './App.css';
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
function App() {
  const[page, setPage] = useState('Home');
  function onNav(event){
    const target = event.target.dataset.target;
    if(target){
        event.preventDefault();
        setPage(target)
    }
    
}
  return (
    <div className="app">
      <Header onNav={onNav}/>
      <Main onNav={onNav} page={page}/>
      <Footer/>
    </div>
  );
}

export default App;
