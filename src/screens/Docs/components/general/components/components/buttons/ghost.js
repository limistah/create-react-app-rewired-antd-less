import React from 'react'
import { Button } from 'antd';

export default {
  Result: () => (
    <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
      <Button type="primary" ghost>Primary</Button> <span>&nbsp;</span>
      <Button ghost>Default</Button> <span>&nbsp;</span>
      <Button type="dashed" ghost>Dashed</Button> <span>&nbsp;</span>
      <Button type="danger" ghost>danger</Button> <span>&nbsp;</span>
    </div>
  ),
  Meta:  () => (
    <p>
      <code>ghost</code> property will make button's background transparent, it is common used in colored background.
    </p>
  ),
  metaTitle: 'Type',
  code: `
  import { Button } from 'antd';

  ReactDOM.render(
    <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
      <Button type="primary" ghost>Primary</Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="danger" ghost>danger</Button>
    </div>,
    mountNode);`
}