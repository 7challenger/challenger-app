import React from 'react';

class BrowserView extends React.Component {
  state = { link: 'http://localhost:3000', response: null }

  async componentDidMount() {
    const { link } = this.state;

    const response = await fetch(link);
    const body = await response.text();
    this.setState({ response: body });
  }

  onChange = async (event) => {
    // let response = null;
  }

  render() {
    const { response } = this.state;

    return (
      <div>
        <input
          value={this.state.link}
          onChange={this.onChange}
        />

        {response && (
          <div
            style={{ width: '300px', height: '300px', backgroundColor: 'black' }}
            dangerouslySetInnerHTML={{ __html: response }}
          />
        )}
      </div>
    );
  }
}

export default BrowserView;
