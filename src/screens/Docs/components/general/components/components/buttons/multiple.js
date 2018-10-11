import React from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default {
  Result: () => (
    <div>
      <Button type="primary">primary</Button> <span>&nbsp;</span>
      <Button>secondary</Button> <span>&nbsp;</span>
      <Dropdown overlay={menu}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  ),
  Meta:  () => (
    <p>
      If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into <code>Dropdown.Button</code>.
    </p>
  ),
  metaTitle: 'Multiple Buttons',
  code: `
  import { Button, Menu, Dropdown, Icon } from 'antd';

  function handleMenuClick(e) {
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  ReactDOM.render(
    <div>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown overlay={menu}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    </div>,
    mountNode
  );`
}