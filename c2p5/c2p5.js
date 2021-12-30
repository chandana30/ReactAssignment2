class Teacher extends React.Component{
    state={
        text:''
    }
    render(){
        return<div>
            <h1>Teacher</h1>
            <h2>Student:{this.state.text}</h2>
            <Student props={this.getDataFromStudent.bind(this)}/>
        </div>
    }
    //Gift
    getDataFromStudent(studentData){
        console.log(studentData);
        //setting the state
        this.setState({
            text:studentData
        })
    }

}
//child component
function Student(props){
    let str="Gift";
    return <div>
        <h1>Student</h1>
        <button onClick={()=>{props.props(str)}}>Questions</button>
    </div>

}
ReactDOM.render(<Teacher/>,document.getElementById('container'))