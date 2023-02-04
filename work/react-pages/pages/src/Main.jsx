import Home from './Home';
import About from './About';
import Cats from './Cats';
function Main({ page, onNav }){
    //const[page,setPage] = useState('home');
    return (
        <main className="Main">
            {/* //<NavBar setPage={onNav} /> */}
            { page === 'Home' && <Home/> }
            { page === 'About' && <About/> }
            {page === 'Cats' && <Cats />}
            { page }
        </main>
    );
}
export default Main;