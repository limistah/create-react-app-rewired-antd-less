import React from 'react'
import { Button } from 'antd';

export default {
  Result: () => (
    <div>
      <Button type="primary" shape="circle" icon="search" /> <span>&nbsp;</span> 
      <Button type="primary" icon="search">Search</Button> <span>&nbsp;</span> 
      <Button shape="circle" icon="search" /> <span>&nbsp;</span> 
      <Button icon="search">Search</Button> <span>&nbsp;</span> 
      <br />
      <br />
      <Button shape="circle" icon="search" /> <span>&nbsp;</span> 
      <Button icon="search">Search</Button> <span>&nbsp;</span> 
      <Button type="dashed" shape="circle" icon="search" /> <span>&nbsp;</span> 
      <Button type="dashed" icon="search">Search</Button>  <span>&nbsp;</span> 
    </div>
  ),
  Meta:  () => (
    <div>
      <p>
        <code>Button</code> components can contain an <code>Icon</code>. This is done by setting the <code>icon</code> property or placing an <code>Icon</code> component within the <code>Button</code>
      </p>
      <p>
        If you want specific control over the positioning and placement of the <code>Icon</code>, then that should be done by placing the <code>Icon</code> component within the <code>Button</code> rather than using the <code>icon</code> property.
        </p>
    </div>
  ),
  metaTitle: 'Icons',
  code: `
  import { Button } from 'antd';

  ReactDOM.render(
    <div>
      <Button type="primary" shape="circle" icon="search" />
      <Button type="primary" icon="search">Search</Button>
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <br />
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <Button type="dashed" shape="circle" icon="search" />
      <Button type="dashed" icon="search">Search</Button>
    </div>,
    mountNode
  );`
}