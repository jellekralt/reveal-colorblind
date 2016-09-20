import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import './FileSelector.css';

class FileSelector extends Component {
    onSelectFile() {
        this.refs.dropzone.open();
    }
    onDrop(files) {
        this.props.onFileSelect(files);
    }

    render() {
        return (
            <Dropzone ref="dropzone" className="dropzone" activeClassName="dropzone-active" multiple={false} accept="image/*" disableClick={true} onDrop={this.onDrop.bind(this)}>
                <RaisedButton label="Select file" onClick={this.onSelectFile.bind(this)} />
                {this.props.children}
            </Dropzone>
        );
    }
}

export default FileSelector;
