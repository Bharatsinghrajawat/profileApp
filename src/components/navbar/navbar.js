import Categories from './categories'
import './navbar.css'
const Navbar = () => {
    return (
        <div id='navbar-container'>
            <h2 id='logo'>Profilly</h2>
            <form>
                <input id='input-box'  placeholder='find people here...' />
                <button>Go</button>
            </form>
            <Categories />
        </div>
    )
}
export default Navbar