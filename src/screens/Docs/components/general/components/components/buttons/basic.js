import React from 'react'
import { Button } from 'antd';

export default {
  Result: () => (
    <div>
      <Button type="primary">Primary</Button> <span>&nbsp;</span>  
      <Button>Default</Button>  <span>&nbsp;</span>  
      <Button type="dashed">Dashed</Button>  <span>&nbsp;</span>  
      <Button type="danger">Danger</Button>  <span>&nbsp;</span>  
    </div>
  ),
  Meta:  () => (
    <p>
      There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button and <code>danger</code> button in antd.
    </p>
  ),
  code: `
  import { Button } from 'antd';

  ReactDOM.render(
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>,
  mountNode);`
}