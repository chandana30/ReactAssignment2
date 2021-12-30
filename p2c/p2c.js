//parent component
function Parent(props){
    return<div>
        <h1>Welcome,{props.Name}</h1>
        <Child Value="20" name={props.Name}/>
    </div>
}

//child component
function Child(props){
    console.log(props);
    return <div>
        <h2>Name :{props.name}</h2>
        <h1>Value:{props.Value}</h1>
    </div>

}
ReactDOM.render(<Parent Name="Ganavi"/>,document.getElementById('container'))