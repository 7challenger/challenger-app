import React from 'react';

class Battery extends React.Component {
  state = { battery: null }

  async componentDidMount() {
    const battery = await navigator.getBattery();

    console.log(battery);
    this.setState({ battery });
  }

  render() {
    return (
      <div>
        aaa
      </div>
    );
  }
}

export default Battery;
