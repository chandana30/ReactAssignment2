class Dog extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>Dog</h1>
            <h2>Cat:{this.state.text}</h2>
            <Cat props={this.getDataFromCat.bind(this)}/>
        </div>
    }
    //Biscuits
    getDataFromCat(catData){
        console.log(catData);
        //setting the state
        this.setState({
            text:catData
        })
    }

}
//child component
function Cat(props){
    let str="milk";
    return <div>
        <h1>Cat</h1>
        <button onClick={()=>{props.props(str)}}>Biscuits</button>
    </div>

}
ReactDOM.render(<Dog/>,document.getElementById('container'))