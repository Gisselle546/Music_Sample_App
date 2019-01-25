import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Toolbar from './Components/Toolbar/Toolbar';
import Auxiliary from './Auxiliary';
import Home from './Container/Home';
import Artist from './Container/Artist';
import ArtistShow from './Container/ArtistShow'
import Searchpage from './Components/Toolbar/Searchbar/Searchpage';



class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Toolbar/>
          <main>
              <Switch>
                <Route path="/artist/:id" component={ArtistShow}/>
                <Route path="/artist" exact component={Artist}/>
                <Route path="/search/:id" component={Searchpage}/>
                <Route path="/" component={Home} />
              </Switch>
          </main>
      </Auxiliary>
    );
  }
}

export default App;
