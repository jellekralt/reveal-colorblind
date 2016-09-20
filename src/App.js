import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/Header';
import {Card, CardText} from 'material-ui/Card';
import FileSelector from './file-selector/FileSelector';
import Image from './image/Image';

import './App.css';

class App extends Component {
    onFileSelect(files) {
        var reader = new FileReader();
        reader.onload = function(){
            this.setState({fileData: reader.result});
        }.bind(this);
        reader.readAsDataURL(files[0]);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Header />
                    <Card>
                        <FileSelector onFileSelect={this.onFileSelect.bind(this)}>
                            <CardText>
                                Select an image
                            </CardText>
                            <CardText>
                                <Image fileData={this.state && this.state.fileData ? this.state.fileData : null} />
                            </CardText>
                        </FileSelector>
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
