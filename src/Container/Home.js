import React,{Component} from 'react';
import middaypic from '../assets/images/middaypic.jpg';
import './Home.css';



class Home extends Component{

onClickhandler=()=>{
  this.props.history.push(`/artist`);
}
  render(){

    return(
        <div className="wrapper">
            <div className="background">
              <button className="btn" onClick={this.onClickhandler}>Jump in!!</button>

            </div>
            <div className="midder">

              <h3 className= "small_heading">Listen to music our way</h3>
               <div className="container">
                  <div className="left">
                    <h2 className="big_heading"> Music any time anywhere</h2>
                      <p className="paragraph">No need for Boom Boxes or Walkman's, listen on your desktop and phone</p>
                   </div>
                  <div className="right">
                    <img src={middaypic} alt="middaypic"/>
                  </div>
                </div>

            </div>
            <footer className="footer">
                <ul className="lists">
                  <li className="items">Support</li>
                  <li className="items">Terms</li>
                </ul>

            </footer>

        </div>

    )
  }
}

export default Home;
