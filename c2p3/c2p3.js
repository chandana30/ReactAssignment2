class Brother extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>Brother</h1>
            <h2>Sister:{this.state.text}</h2>
            <Sister props={this.getDataFromSister.bind(this)}/>
        </div>
    }
    //chocolate
    getDataFromSister(sisterData){
        console.log(sisterData);
        //setting the state
        this.setState({
            text:sisterData
        })
    }

}
//child component
function Sister(props){
    let str="watch";
    return <div>
        <h1>sister</h1>
        <button onClick={()=>{props.props(str)}}>Gun</button>
    </div>

}
ReactDOM.render(<Brother/>,document.getElementById('container'))