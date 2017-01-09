import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

interface Props {
  open: boolean;
  msg: string;
  onClose: Function;
}

class ErrorDialog extends React.Component<Props, null> {
  render() {
    console.log(this.props);
    const actions = [(
      <FlatButton
        label="OK"
        primary
        onTouchTap={() => this.props.onClose()}
      />
    )];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={() => this.props.onClose()}
        >
          {this.props.msg}
        </Dialog>
      </div>
    );
  }
}

export default ErrorDialog;
