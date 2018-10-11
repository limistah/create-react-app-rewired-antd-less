import React from 'react';
import { Row, Col } from 'antd';
import CodeBox from '../../../../../../components/CodeBox';
import Styled from 'styled-components';

import basicButton from './buttons/basic';
import buttonWithIcon from './buttons/withIcons';

const ColGenerator = ({ examples }) => {
  return examples.map((item, index) => {
    const { Result, Meta, metaTitle, code } = item;
    const key = `${metaTitle}+${index}`;
    return (
      <Col span={12} key={key}>
        <CodeBox
          codeBoxResult={<Result />}
          codeBoxMeta={<Meta />}
          codeBoxCode={code}
          codeBoxMetaTitle={metaTitle}
        ></CodeBox>
      </Col>
    )
  })
}

const Wrapper = Styled(ColGenerator)`
  & .ant-btn {
    margin-right: 5px;
  }
`

export default (props) => (  
  <Row gutter={16}>
    <Wrapper examples={[basicButton, buttonWithIcon]} />
  </Row>
);