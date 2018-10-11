import React from 'react'
import { Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

export default {
  Result: () => (
    <div>
    <h4>Basic</h4>
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </ButtonGroup>  <span>&nbsp;</span>
    <ButtonGroup>
      <Button disabled>L</Button>
      <Button disabled>M</Button>
      <Button disabled>R</Button>
    </ButtonGroup> <span>&nbsp;</span>
    <ButtonGroup>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>

    <h4>With Icon</h4>
    <ButtonGroup>
      <Button type="primary">
        <Icon type="left" />Go back
      </Button>
      <Button type="primary">
        Go forward<Icon type="right" />
      </Button>
    </ButtonGroup> <span>&nbsp;</span>
    <ButtonGroup>
      <Button type="primary" icon="cloud" />
      <Button type="primary" icon="cloud-download" />
    </ButtonGroup>
  </div>
  ),
  Meta:  () => (
    <div>
      <p>Buttons can be grouped by placing multiple <code>Button</code> components into a <code>Button.Group</code>.
      </p>
      <p>The <code>size</code> can be set to <code>large</code>, <code>small</code> or left unset resulting in a default size.
      </p>
    </div>
  ),
  metaTitle: 'Button Group',
  code: `
  import { Button, Icon } from 'antd';

  const ButtonGroup = Button.Group;

  ReactDOM.render(
    <div>
      <h4>Basic</h4>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>OK</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>L</Button>
        <Button disabled>M</Button>
        <Button disabled>R</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>L</Button>
        <Button>M</Button>
        <Button>R</Button>
      </ButtonGroup>

      <h4>With Icon</h4>
      <ButtonGroup>
        <Button type="primary">
          <Icon type="left" />Go back
        </Button>
        <Button type="primary">
          Go forward<Icon type="right" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="cloud" />
        <Button type="primary" icon="cloud-download" />
      </ButtonGroup>
    </div>,
    mountNode
  );
  `
}