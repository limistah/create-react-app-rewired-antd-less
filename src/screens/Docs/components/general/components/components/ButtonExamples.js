import React from 'react';
import { Row, Col, Button } from 'antd';
import CodeBox from '../../../../../../components/CodeBox';

const BasicButtonResult = (props) => (
  <div>
    <Button type="primary">Primary</Button> <span>&nbsp;</span>  
    <Button>Default</Button>  <span>&nbsp;</span>  
    <Button type="dashed">Dashed</Button>  <span>&nbsp;</span>  
    <Button type="danger">Danger</Button>  <span>&nbsp;</span>  
  </div>
)

const BasicButtonMeta = (props) => (
  <p>
    There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button and <code>danger</code> button in antd.
  </p>
)

const basicButtonCode = `
import { Button } from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>,
mountNode);`

export default (props) => (
  
  <Row gutter={16}>
    <Col span={12}>
      <CodeBox
        codeBoxResult={<BasicButtonResult />}
        codeBoxMeta={<BasicButtonMeta />}
        codeBoxCode={basicButtonCode}
        codeBoxMetaTitle="Type"
      ></CodeBox>
    </Col>
  </Row>
  
);