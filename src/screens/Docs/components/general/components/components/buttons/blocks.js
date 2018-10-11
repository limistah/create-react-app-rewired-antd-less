import React from 'react'
import { Button } from 'antd';

export default {
  Result: () => (
    <div>
      <Button type="primary" block>Primary</Button>
      <br/><br/>
      <Button block>Default</Button>
      <br/><br/>
      <Button type="dashed" block>Dashed</Button>
      <br/><br/>
      <Button type="danger" block>danger</Button>
      <br/><br/>
    </div>
  ),
  Meta:  () => (
    <p>
      There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button and <code>danger</code> button in antd.
    </p>
  ),
  metaTitle: 'block Button',
  code: `
  import { Button } from 'antd';

  ReactDOM.render(
  <div>
    <Button type="primary" block>Primary</Button>
    <Button block>Default</Button>
    <Button type="dashed" block>Dashed</Button>
    <Button type="danger" block>danger</Button>
  </div>,
  mountNode);`
}