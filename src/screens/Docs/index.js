import React from 'react';
import { HeaderWithFixedSidebarLayout } from "../../layouts";
import { Route } from 'react-router-dom';
import { GeneralButtonsPage, GeneralIconsPage } from './components';

// import { GeneralButtonsPage } from './components/general';

const buildMenuItems = (parentURL) => {
  return [{
    title: 'General',
    subs: true,
    items: [
      {
        path: `${parentURL}/general/buttons`,
        title: 'Buttons'
      },
      {
        path: `${parentURL}/general/icons`,
        title: 'Icons'
      }
    ]
  },
  {
    icon: 'user',
    path: '/users',
    title: 'User'
  },
  {
    icon: 'user',
    path: '/users',
    title: 'User'
  },
  {
    icon: 'user',
    path: '/users',
    title: 'User'
  },
  {
    
    icon: 'user',
    title: 'User',
    subs: true,
    items: [
      {
        icon: 'user',
        path: '/users',
        title: 'User'
      },
      {
        icon: 'user',
        path: '/users',
        title: 'User'
      }
    ]
  }
]
}

const Docs = (props) => {
  const { match } = props;
  return (
    <HeaderWithFixedSidebarLayout menuItems={buildMenuItems(match.url)}>
      <Route path={`${match.url}/general/buttons`} component={GeneralButtonsPage} />
      <Route path={`${match.url}/general/icons`} component={GeneralIconsPage} />        
    </HeaderWithFixedSidebarLayout>
  );
}

export default Docs
