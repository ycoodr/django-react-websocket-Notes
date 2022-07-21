import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import ListNotes from './components/ListNotes';

var notes_temp = [
  {
    'id': 1,
    'title': 'This is react note data',
    'content': 'This is the content',
  },
  {
    'id': 2,
    'title': 'My second note',
    'content': 'And here is my second note',
  },
  {
    'id': 3,
    'title': 'Third and last',
    'content': 'The third and last note...'
  },
];

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: notes_temp,
      current_note_id: 0,
      is_creating: true
    }

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleItemClick(id){
    this.setState((prevState) => {
      return { is_creating: false, current_note_id: id}
    })
  }

  handleAddNote(){
    this.setState((prevState) => {
      return { is_creating: true }
    })
  }

  render() {
    return (
      <React.Fragment>
      <Container>
        <Row>
          <Col xs="10">
            <h2>Realtime notes</h2>
          </Col>
          <Col xs="2">
            <Button color="primary" onClick={this.handleAddNote}>Create a new note</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
           <ListNotes notes={this.state.notes} handleItemClick={(id) => this.handleItemClick(id)}/>
          </Col>
          <Col xs="6">
            <p>Content/Editing here...</p>
            {
              this.state.is_creating ?
              "Creating now..." :
              `Editing note with id: ${this.state.current_note_id}`
            }
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    );
  }
}

export default App;
