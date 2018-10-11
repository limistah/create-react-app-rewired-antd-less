import React from 'react'
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

/**
 * const items = [
 * {
 *    path: 'route/path/',
 *    icon: 'user',
 *    title: 'Users'
 * },
 * {
 *    subs: true,
 *    icon: 'user',
 *    title: 'Users',
 *    items: [
 *      {
 *        path: 'route/path/', // Route path
 *        icon: 'user', // Icon for the menu item
 *        title: 'Users' // Visible text to the users
 *      }
 *    ]
 * }
 *];
 */

const subItem = ({path, icon, index, title}) => (
  <Menu.Item key={`${path}+${index}`}>
    <Link className="nav-text" to={path}>
      {icon ? <Icon type={icon}/> : null }
      <span>{title}</span>
    </Link>
  </Menu.Item>
)

const buildSubItems = ({ items }) => {
  return items.map((item, index) => {
    return subItem({ ...item, index });
  });
}

const buildSubMenuTitle = ({ icon, title }) => {
  return <span>{icon ? <Icon type={icon} /> : ''}<span>{title}</span></span>
}

// Generates menu items, either a sub menu or direct children
export default ({ menuItems }) => {

  const list = menuItems.map((menuItem, index) => {
    // subs must be set to true with items as the children of the sub-menu
    let subItems = [];
    if (menuItem.subs && Array.isArray(menuItem.items)) {
      subItems = buildSubItems({ items: menuItem.items })
    }
    
    // Returns either a sub-menu with sub items. Or a single sidebar menu item
    return menuItem.subs ?
      <Menu.SubMenu
        title={buildSubMenuTitle({ ...menuItem })}
        key={`${menuItem.path}+${index}`}
      >
        {subItems}
      </Menu.SubMenu>
      : subItem({...menuItem, index})
  });
    
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {list}
    </Menu>
  );
}
