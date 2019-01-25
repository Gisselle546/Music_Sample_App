import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as actions from '../../../store/actions';
import './Searchbar.css';

class Searchbar extends Component{

  state={
   inputvalue:'',
 }

 changeHandler=(e)=>{
   this.setState({inputvalue:e.target.value});
 }

 handlekeyup=(e)=>{


   if (e.key === 'Enter' && this.state.inputvalue !== '') {
        this.props.onInitSearch(this.state.inputvalue)
        this.props.history.push(`/search/${this.state.inputvalue}`)
        this.setState({inputvalue:''});
     }
 }

  render(){
    return(
      <div id="search" className="Search">
          <input placeholder= "Search......" value={this.state.inputvalue}
          onChange={this.changeHandler} onKeyUp={this.handlekeyup}/>
      </div>

    )

  }
}


const mapDispatchToProps = dispatch => {
    return {
onInitSearch: (hi) => dispatch(actions.fetchsearchinput(hi)),
};
}


export default withRouter(connect(null,mapDispatchToProps)(Searchbar));
