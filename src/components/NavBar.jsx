import "./navbar.css";

function NavBar() {

  return (
    <div className="navbar">
      <div className="topLeft">
        <span className="logo">Club</span>
      </div>
      <div className="topCenter">
      <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">Price</li>
            <li className="topListItem">Services</li>
            <li className="topListItem">News</li>
            <li className="topListItem">About</li>
        </ul>
      </div>


      <div className="topRight">
        <div className="topRightItem">



        </div>
        <div className="topRightItem">
          <button className="topRightBtnL">Login</button>
          <button className="topRightBtnR">Sign Up</button>
        </div>
        <div className="topRightItemD">
          <select className="optionItem">
            
            <option value="EN">EN</option>
            <option value="NL" selected >NL</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
