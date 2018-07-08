import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import "font-awesome/css/font-awesome.min.css"
import '../../lib/styleUnmangled/Markdown.css'

class MarkdownEditor extends React.Component {
  handleChange() {

  }

  render() {
    return <SimpleMDE
      // id="your-custom-id"
      // label="Your label"
      onChange={this.handleChange}
      // value={this.state.textValue}
      options={{
        autoDownloadFontAwesome: false, /*simplemde messing with font-awesome? Though fixed with autoDownloadFontAwesome:false option*/
      }}
    />
  }
}

export default MarkdownEditor;