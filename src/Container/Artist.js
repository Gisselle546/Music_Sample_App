import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import Artistscards from '../Components/ArtistsPage/Artistscard';
import _ from 'lodash';
import './Artist.css'


class Artist extends Component{


componentDidMount(){
  this.props.onInitartist()
}



  renderhost=()=>{
    const artist = _.mapKeys(this.props.artist,'id');
    return _.map(artist, post=>{
       return <Artistscards key={post.id} artist={post}/>
    })
  }


  render() {
    console.log(this.props)
    return (
        <div className ="container">
          {this.renderhost()}
        </div>
    );
  }
}

 const mapStateToProps = state => {
     return {
         artist:state.artist.artist

     };
 }

 const mapDispatchToProps = dispatch => {
     return {
 onInitartist: () => dispatch(actions.fetchartists()),
 };
}


export default connect(mapStateToProps,mapDispatchToProps)(Artist);
