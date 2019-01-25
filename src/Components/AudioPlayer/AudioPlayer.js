import React,{Component} from 'react';
import Controls from './Controls';
import './AudioPlayer.css'

class AudioPlayer extends Component{
  state={
    playing:false
  }

  playSong=()=>{
    this.audioSong.load();
    this.audioSong.play();
  }
  pauseSong=()=>{
    this.audioSong.pause();
  }

  handleClick=()=>{
    this.handlesearch()
    this.setState(prevState => ({
      playing: !prevState.playing
   }));




  }

  handlesearch=()=>{
    if(this.state.playing){
        this.pauseSong()
    }else{
      this.playSong()
    }
  }


  render(){
    return(
      <div className="AudioPlayer">
        <div className="image" style={{ backgroundImage: "url(" + this.props.image + ")" }}>
          <audio ref={(audio)=>{this.audioSong = audio}} src={this.props.song} />
          <Controls clicked={this.handleClick} play = {this.state.playing}/>
        </div>

       </div>
    )
  }
}

export default AudioPlayer;
