import React,{Component} from 'react';
import './Artistscard.css';
import axios from '../../axios_instance';
import {Link} from 'react-router-dom';
import apikey from '../../config';




class Artistscard extends Component{
  state={
    image:{}
  }


    componentDidMount(){
      axios.get(`artists/${this.props.artist.id}/images?${apikey.apikey}`)
            .then(response=>{
            this.setState({image:response.data.images[0].url})
            })
    }



  render(){

    return (
          <div className="cards">
            <Link to ={`/artist/${this.props.artist.id}`}>
            <div className="artist" >
              <h2 className="name">{this.props.artist.name}</h2>
              <img src={this.state.image} alt=""/>
            </div>
            </Link>
          </div>
        )
      }
}
export default Artistscard;
