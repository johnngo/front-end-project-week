import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #f2f1f2; 
    width: 75%;
    padding: 60px 0 70px 2.4em;
`;

const Heading = styled.h3`
    font-size: 2em;
    font-weight: bold;
    line-height: 0.8;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    padding: 0.5em 0.5em 1.3em 0.5em;
    margin: 2.5em 0 0.5em 0;
    border-radius: 3px;
    width: 50%;
`;

const TextArea = styled.textarea`
    padding: 2em;
    margin: 1em 2em 2em 0;
`;

const Button = styled.button`
    background-color: #00b9bc;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 18px;
    padding: 14px 2.3em 8px 2.5em;
    margin-left: 0.2em;
    cursor: pointer;
    width: 25%;
`;

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      text: '',
    };
  }

  componentDidMount() {
    const NoteId = this.props.match.params.id;
    const note = this.props.notes.find(item => item.id === NoteId);
    console.log('edit', note.id);
    this.setState({
        id: note.id,
        title: note.title,
        text: note.text,
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateNote = e => {
    e.preventDefault();
    this.props.updateNote(this.state, this.props.match.params.id);
    this.props.history.push('/notes');
  };

  render() {
    return (
      <Wrapper>
        <Heading>Edit Note:</Heading>
        <Form>
          <Input
            type="text"
            placeholder="Note Title"
            onChange={this.handleInputChange}
            name="title"
            value={this.state.title}
          />
          <TextArea
            rows="15"
            cols="30"
            value={this.state.text}
            onChange={this.handleInputChange}
            name="text"
          />
          <Button type="submit" onClick={this.handleUpdateNote}>
            Update
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default EditNoteForm;