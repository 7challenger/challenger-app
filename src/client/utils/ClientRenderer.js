import { Component } from 'react';

class ClientRenderer extends Component {
  state = { isMounted: false };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const { children } = this.props;
    const { isMounted } = this.state;

    return isMounted ? children : null;
  }
}

export default ClientRenderer;
