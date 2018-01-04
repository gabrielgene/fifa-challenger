import React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import './style.css';

const NavButton = (props) => (
  <div className="NavButton" >
    <Button
      color="violet"
      fluid
      content="Histórico"
      icon="history"
      labelPosition="left"
      onClick={() => props.router.push('/historico')}
    />
  </div>
);

export default withRouter(NavButton);
