import { Link } from "react-router-dom";
import Search from "./Search";
import LogoutButton from "./Authentication/Logout";
import LoginButton from "./Authentication/Login";

const Header = (props) => {
  const { funds } = props;
  return (
    <div className="header">
      {/* this will hold our logo and nav bar */}
      <nav className="navBar">
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/jxfunds">
          <div>Funds</div>
        </Link>
        <Link to='/blog'>
          <div>Blog</div>
        </Link>
        

        <Link to='/' className='logo'>
          <div className='logo'>JxFUNDS</div>
        </Link>
        <div className="searchbar">
        <Search funds={funds} />
        </div>
        <Link to="/jxfunds/create">
          <div>Create</div>
        </Link>
      
        <div className="dropDown">
           <button className="dropBtn">Account <span className="unicodeArrow">{`\u25BC`}</span></button>
           <div className="dropLinks">
            <LoginButton />
            <LogoutButton/>
           </div>
        </div>
     
      </nav>
    </div>
  );
};
export default Header;
