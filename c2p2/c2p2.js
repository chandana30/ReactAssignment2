class Parent extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>I Am Parent</h1>
            <h2>Data from child:{this.state.text}</h2>
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
        <h1>i am child</h1>
        <button onClick={()=>{props.action(str)}}>send data to parent</button>
    </div>

}
ReactDOM.render(<Parent/>,document.getElementById('container'))