import React,{Component}  from 'react';
import './ArtistShowCards.css';
import axios from '../../axios_instance';
import apikey from '../../config';
import AudioPlayer from '../AudioPlayer/AudioPlayer';


class ArtistShowCards extends Component{

  state={
    image:{}
  }

  componentDidMount(){
    axios.get(`albums/${this.props.artist.albumId}/images?${apikey.apikey}`)
          .then(response=>{
          this.setState({image:response.data.images[0].url})
          })
  }


  render(){
    return(
      <div className="ArtistShowCards">
        <AudioPlayer className="audio"image={this.state.image} song={this.props.artist.previewURL}/>
        <h3>{this.props.artist.name}</h3>
      </div>
    )
  }
}

export default ArtistShowCards;
