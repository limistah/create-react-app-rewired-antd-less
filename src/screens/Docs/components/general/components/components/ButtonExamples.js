import React from 'react';
import { Row, Col } from 'antd';
import basicButton from './buttons/basic';
import CodeBox from '../../../../../../components/CodeBox';

export default (props) => (
  
  <Row gutter={16}>
    <Col span={12}>
      <CodeBox
        codeBoxResult={<basicButton.Result />}
        codeBoxMeta={<basicButton.Meta />}
        codeBoxCode={basicButton.code}
        codeBoxMetaTitle="Type"
      ></CodeBox>
    </Col>
  </Row>
  
);