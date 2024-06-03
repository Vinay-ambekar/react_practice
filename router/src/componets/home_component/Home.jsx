
import { Component } from "react";
import MyTimer from "../timerrevers/MyTimer";

class Home extends Component{
    /* props  */
constructor(props){
    super(props)
}
/* state and setState */
state={
    count:0
}
incr=()=>{
    this.setState({count:this.state.count+1})
}
decr=()=>{
    this.setState({count:this.state.count-1})
}
reset=()=>{     
    this.setState({count:this.state.count=0})
}
render(){
    return(
        <>
        <center>
            <div className="container w-75 mt-5">
               <h2>props and state in class component  </h2> 
               <h2>props: {this.props.message}</h2>
               <h3>count:{this.state.count}</h3>
               <button className="btn btn-primary mx-2 my-2" onClick={this.incr}>increment </button>
               <button className="btn btn-danger mx-2 my-2" onClick={this.decr}>Decrement </button>
               <button className="btn btn-success mx-2 my-2" onClick={this.reset}>Decrement </button>
            </div>
        </center>
        <MyTimer days={2}/>
        </>
    )
}   
}
export default Home;