import React,{Component} from 'react';
import {connect} from 'react-redux';
import ArtistShowCards from '../Components/ArtistsPage/ArtistShowCards';
import * as actions from '../store/actions';
import _ from 'lodash';
import './ArtistShow.css'



class ArtistShow extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
      this.props.onInitartist(id);
  }

renderHost=()=>{
  const artistSong = _.mapKeys(this.props.artist,'id');
  return _.map(artistSong, post=>{
     return <ArtistShowCards key={post.id} artist={post}/>
  })


}




  render(){
      console.log(this.props.artist)

    if(!this.props.artist){
      return <div>Loading!!!</div>;
    }


    return(
      <div className='ArtistShow'>
        {this.renderHost()}

      </div>

    )
  }
}

const mapStateToProps = (state) => {
    return {
        artist: state.artist.artists
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
onInitartist: (id) => dispatch(actions.fetchartist(id)),
};
}
export default connect(mapStateToProps,mapDispatchToProps)(ArtistShow);
