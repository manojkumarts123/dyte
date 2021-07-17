import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";



class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lang: props.lang,
      name: props.name,
      hvalue: '',
      cvalue: '',
      jvalue: ''
    }
  }

  /*static getDerivedStateFromProps(props, state) {
    return {
      lang: props.lang,
      name: props.name, 
      value: props.value
    };
  }*/

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(this.state.lang == 'html'){
      this.state.hvalue = prevState.hvalue;
    }
    else if(this.state.lang == 'css'){
      this.state.cvalue = prevState.cvalue;
    }
    else if(this.state.lang == 'javascript'){
      this.state.jvalue = prevState.jvalue;
    }

  }
  
  change = (language, changename, value)=>{
    if(this.state.lange == 'html'){
      this.setState({lang: language, name: changename, hvalue: value});
      
    }
    else if(this.state.lang == 'css'){
      this.setState({lang: language, name: changename, cvalue: value});
    }
    else if(this.state.lang == 'javascript'){
      this.setState({lang: language, name: changename, jvalue: value});
    }

  }

  handleChange = () =>{
    onchange(this.state.value)
  }
  render(){
    return (
      <div className="editor-container"> 
        <div className="editor-title">
          <p>{this.state.name}</p>
        </div>
        <div class="editor">

        <AceEditor
          placeholder="Write Code here"
          mode= {this.state.lang}
          theme="monokai"
          onBeforeChange = {this.change}
          fontSize={14}
          height={600}
          width={607}
          value={this.state.value}

        />

        </div>
      </div>
    )
  }
}

export default Editor;
