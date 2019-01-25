import React,{Component} from 'react';
import {connect} from 'react-redux';
import ArtistShowCards from '../../ArtistsPage/ArtistShowCards';
import _ from 'lodash';
import  './Searchpage.css'

class Searchpage extends Component{



  renderhost=()=>{
    const artist = _.mapKeys(this.props.search.tracks,'id');
    return _.map(artist, post=>{
       return <ArtistShowCards  key={post.id} artist={post}/>
    })
  }

  render() {

    console.log(this.props.search)

    return (
        <div className ="contain">
          {this.renderhost()}
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        search:state.search.search

    };
}

export default connect(mapStateToProps)(Searchpage);
