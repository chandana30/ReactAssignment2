function Event (props){
    const getElement=()=>{
        console.log('button is clicked');
        console.log(props.name);
    
    }
    return(
        <div>
            <h1>Hello,Good Morning</h1>
        <button onClick={()=>getElement()}>Click me</button>
        </div>
    )
}
    ReactDOM.render(<Event name="Shivam"/>,document.getElementById('container'))