import React,{useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import decode from 'jwt-decode';
import logo from '../../assets/1.png';
import search from '../../assets/search.svg';
import Avatar from '../Avatar/Avatar';
// import Button from '../Button/Button';
import './Navbar.css'
import {useSelector,useDispatch} from 'react-redux'
import { setcurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var User = useSelector((state)=>state.currentuserReducer); 

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"});
    navigate('/');
    dispatch(setcurrentUser(null));
  }
  
  useEffect(()=>{
    const token = User?.token;
    if(token){
       const decodetoken = decode(token);
       if(decodetoken.exp * 1000 < new Date().getTime()){
          handleLogout(); // Logout automatically after token expires...
       }
    }
    dispatch(setcurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])


  return (
    <nav className='main-nav'>
        <div className='navbar'>
          <Link to='/' className='nav-logo nav-item'>
            <img src={logo} alt="Icon" width="150"/>
          </Link>
          <Link to='/' className='nav-btn nav-item'>About</Link>
          <Link to='/' className='nav-btn nav-item'>Products</Link>
          <Link to='/' className='nav-btn nav-item'>For teams</Link>
          <form>
            <input type="text" placeholder='Search..'/>
            <img src={search} width="19" alt="Search" className='search-icon'/>
          </form>
          {User === null ? 
          <Link to='/Auth' className='nav-item nav-links' >Log in</Link> : 
          <>
            <Avatar backgroundColor="blue" borderRadius="50%" px="10px" py="10px"  ><Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>}
        </div>
    </nav>
  )
}

export default Navbar