import './Main.css';
import Articles from './Articles';
import ArticleSemanticCSS from './ArticleSemanticCSS';
import FarAwayLamaCSS from './FarAwayLamaCSS';
import GoldenLamaCSS from './GoldenLamaCSS';
import About from './About';
import FAQ from './FAQ';
import Register from './Register.jsx';
import TodoList from './TodoList.jsx';


function Main({ page, onNav }){
    return (
        <main className="main" id="main">
            Main {page}
            {page ==='Articles' && <Articles onNav={onNav}/> }
            {page ==='ArticleSemanticCSS' && <ArticleSemanticCSS/>}
            {page ==='FarAwayLamaCSS' &&<FarAwayLamaCSS/>}
            {page ==='GoldenLamaCSS' && <GoldenLamaCSS/>}
            {page ==='Register' && <Register/>}
            {page ==='About' && <About/>}
            {page ==='TodoList' && <TodoList/>}
            {page ==='FAQ' && <FAQ/>}
        </main>
    );
}
export default Main;