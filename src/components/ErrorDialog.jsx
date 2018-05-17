import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
class ErrorDialog extends React.Component {
    render() {
        const actions = [(<FlatButton label="OK" primary onTouchTap={() => this.props.onClose()}/>)];
        return (<div>
        <Dialog actions={actions} modal={false} open={this.props.open} onRequestClose={() => this.props.onClose()}>
          {this.props.msg}
        </Dialog>
      </div>);
    }
}
export default ErrorDialog;
