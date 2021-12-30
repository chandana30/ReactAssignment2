class Parent extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1> Parent</h1>
            <h2>child:{this.state.text}</h2>
            <Child metheod={this.getDataFromChild.bind(this)}/>
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
    let str="book";
    return <div>
        <h1> child</h1>
        <button onClick={()=>{props.metheod(str)}}>pen</button>
    </div>

}
ReactDOM.render(<Parent/>,document.getElementById('container'))