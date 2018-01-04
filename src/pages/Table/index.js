import React from 'react';
import Topbar from '../../components/Topbar';
import { Header, Image, Table, Icon, Button } from 'semantic-ui-react';
import NavButton from '../../components/NavButton';
import './style.css';

const data = [
  { name: 'Gabriel', score: 30 },
  { name: 'Matheus', score: 50 },
  { name: 'Marcos', score: 20 },
  { name: 'João', score: 90 },
  { name: 'Michel', score: 10 },
]

const Rows = data.map(data => (
  <Table.Row key={data.name}>
    <Table.Cell>
      <Header as="h4" image>
        <Image src="https://react.semantic-ui.com/assets/images/avatar/small/mark.png" rounded size="mini" />
        <Header.Content>
          {data.name}
        </Header.Content>
      </Header>
    </Table.Cell>
    <Table.Cell>
      <Icon name="trophy" />
      {data.score}
    </Table.Cell>
  </Table.Row>
));


const TableView = () => (
  <div className="TableView">
    <Topbar />
    <div className="TableView-table">
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Jogador</Table.HeaderCell>
            <Table.HeaderCell>Pontos</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Rows}
        </Table.Body>
      </Table>
    </div>
    <NavButton />
  </div>
);

export default TableView;
