class Event extends React.Component{
    render(){
        return <div>
         <h1>Welcome </h1>
        <button onClick={this.getEvent.bind(this)}>Click me</button>
        </div>
    }
    getEvent()
    {
        console.log("I am click me")
    }
}
ReactDOM.render(<Event/>,document.getElementById('container'))