import React, {Component} from 'react';

import Layout from '../../components/Layout/Layout'
import TacoBuilder from '../../containers/TacoBuilder/TacoBuilder'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <TacoBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
