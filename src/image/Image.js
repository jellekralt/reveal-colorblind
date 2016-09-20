import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Caman from 'caman';

class Image extends Component {
    onColorSelect(color) {

        // Add color channel filter
        Caman(this.refs.image, function () {
            this.revert();
            this.saturation(100);
            this.channels({
                red: color === 'red' ? 255 : 0,
                green: color === 'green' ? 255 : 0,
                blue: color === 'blue' ? 255 : 0
            }).render();
        });
    }

    componentDidUpdate() {
        if (this.props.fileData) {
            // Resize
        }
    }

    render() {
        var buttons, image;

        if (this.props.fileData) {
            image = <img alt="Selected" ref="image" src={this.props.fileData} />;
            buttons = (
                <div>
                    <RaisedButton
                        label="Red"
                        labelPosition="before"
                        onClick={this.onColorSelect.bind(this, 'red')}
                    />
                    <RaisedButton
                        label="Blue"
                        labelPosition="before"
                        onClick={this.onColorSelect.bind(this, 'blue')}
                    />
                    <RaisedButton
                        label="Green"
                        labelPosition="before"
                        onClick={this.onColorSelect.bind(this, 'green')}
                    />
                </div>
            );
        }

        return (
            <div>
                {image}
                {buttons}
            </div>
        );
    }
}

export default Image;
