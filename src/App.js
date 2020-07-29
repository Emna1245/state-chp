import React , {Component} from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Person:{fullName : "Harry Potter",
    bio : "The Boy who lived",
    imgSrc : "/hp.jpeg",
    profession : "Wizard"},
    show: true,
    date : new Date().toLocaleTimeString()
  } }

  handleClick = () => {
    this.setState({show : this.state.show ? false : true})
   }

   handleTime =  setInterval(() => {
     this.setState({date : new Date().toLocaleTimeString()})
   }, 10);
  

  render() { 
    return ( <div>
      <div className={this.state.show ? "App" : "app"}>
      <h1>{this.state.Person.fullName}</h1>
      <h2>{this.state.Person.bio}</h2>
      <h3>{this.state.Person.profession}</h3>
      <img src={this.state.Person.imgSrc}/>
      </div>  
      <button onClick={this.handleClick}>Click me!</button>
      <h1>{this.state.date}</h1>
      </div> );
  }
}

  export default App;


/** this.state = {
      person:{fullName : "Harry Potter",
      bio : "The Boy who lived",
      imgSrc : "/hp.jpeg",
      profession : "Wizard"},
      show: true,
    }
    //this.state = {Person , show: true}
     handleClick = () => {
      this.setState({show : this.state.show ? false : true})
     }
  render() { 
    return ( <div>
    <div className={this.state.show ? "App" : "app"}>
    <h1>{this.state.Person.fullName}</h1>
    
    <h2>{this.state.Person.bio}</h2>
    <h3>{this.state.Person.profession}</h3>
    <img src={this.state.Person.imgSrc}/>
    </div>  
    <button onClick={this.handleClick}>Click me!</button>
    </div>);
  }
}

 
export default App; */