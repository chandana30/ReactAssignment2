class Parent extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>this is Parent</h1>
            <h2>Mobile from child:{this.state.text}</h2>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }
    //chocolate
    getDataFromChild(childData){
        console.log(childData);
        //setting the state
        this.setState({
            text:childData
        })
    }

}
//child component
function Child(props){
    let str="I have your mobile";
    return <div>
        <h1>this is child</h1>
        <button onClick={()=>{props.action(str)}}>send mobile to parent</button>
    </div>

}
ReactDOM.render(<Parent/>,document.getElementById('container'))