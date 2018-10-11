import React from 'react'
import { Button } from 'antd';

export default {
  Result: () => (
    <div>
      <Button type="primary">Primary</Button> <span>&nbsp;</span>
      <Button type="primary" disabled>Primary(disabled)</Button>
      <br /><br />
      <Button>Default</Button> <span>&nbsp;</span>
      <Button disabled>Default(disabled)</Button>
      <br /><br />
      <Button type="dashed">Dashed</Button> <span>&nbsp;</span>
      <Button type="dashed" disabled>Dashed(disabled)</Button>
      <br /><br />
      <div style={{ padding: '8px', background: 'rgb(190, 200, 200)' }}>
        <Button ghost>Ghost</Button> <span>&nbsp;</span>
        <Button ghost disabled>Ghost(disabled)</Button>
      </div>
    </div>
  ),
  Meta:  () => (
    <p>
      To mark a button as disabled, add the <code>disabled</code> property to the <code>Button</code>.
    </p>
  ),
  metaTitle: 'Disabled',
  code: `
  import { Button } from 'antd';

  ReactDOM.render(
    <div>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>Primary(disabled)</Button>
      <br />
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
      <br />
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>Dashed(disabled)</Button>
      <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
        <Button ghost>Ghost</Button>
        <Button ghost disabled>Ghost(disabled)</Button>
      </div>
    </div>,
    mountNode
  );`
}