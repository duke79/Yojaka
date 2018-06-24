import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

class MarkdownEditor extends React.Component {
  handleChange() {

  }

  render() {
    return <SimpleMDE
      // id="your-custom-id"
      // label="Your label"
      onChange={this.handleChange}
      // value={this.state.textValue}
      // options={{
      //   autofocus: true,
      //   spellChecker: false,
      //   // etc.
      // }}
    />
  }
}

export default MarkdownEditor;