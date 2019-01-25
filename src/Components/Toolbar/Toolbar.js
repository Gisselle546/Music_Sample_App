import React,{Component} from 'react';
import Logo from './Logo/Logo';
import './Toolbar.css';
import NavItems from './NavItems';
import SearchBar from './Searchbar/Searchbar';

class Toolbar extends Component{
  render(){
    return(
      <header className="Toolbar">
        <div className ="Toolbar__logo">
            <Logo/>
        </div>
        <nav>
          <NavItems/>
        </nav>
        <SearchBar/>


      </header>

    );
  }
}

export default Toolbar;
