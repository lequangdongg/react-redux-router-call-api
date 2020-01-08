import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true
  },
  {
    name: " Product list",
    to: "/product-list",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route 
    path={to}
    exact={activeOnlyWhenExact} 
    children={({ match }) => { 
      let active = match ? 'btn btn-outline-info' : ''
      return (
        <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
        </li>
      )
    }} 
    
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <ul className="nav">
        {this.showMenu(menus)}
      </ul>
    );
  }

  showMenu = menus => {
    let result = null;
    if(menus.length > 0){
      result = menus.map((menu,index) => {
        return <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
      })
    }
    return result
  }
}

export default Menu;
