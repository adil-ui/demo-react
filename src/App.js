import './App.css';
import Navbar from './components/header-component/navbar-component/Navbar'
import Header from './components/header-component/Header'
import Aside from './components/aside-component/Aside'
import Main from './components/main-component/main'
import Footer from './components/footer-component/Footer'
import Button from './components/button-component/Button'
import Login from './components/login-component/Login'
import Search from './components/search-component/Search'
function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <Login />
        <Search />
        <div className='container'>
          <Aside />
          <Main />
        </div>
        <Button btnNumber="1" />
        <Button btnNumber="2"  />
        <Button btnNumber ="3"  />
        <Footer/>
    </div>
    
    )
}

export default App;
