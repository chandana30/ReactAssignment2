class Condition extends React.Component{
    state={
        adminName:"chandhu",
        userName:"Vandhu",
        isAdmin:false
    }
    render(){
        let{adminName,userName,isAdmin}=this.state;
        let renderData=null
        if(isAdmin){
            renderData=<div>
                <h2>ADMIN NAME:{adminName}</h2>
                <h3>HOME</h3>
                <h3>LOGIN</h3>
                <h3>User Details List</h3>
            </div>
        }else{
            renderData=<div>
                <h2>USER NAME:{userName}</h2>
                <h3>LOGIN</h3>
                <h3>User Details</h3>
            </div>
        }
        return <div>
            {renderData}
            <button onClick={()=>{this.changeAdminUserView()}}>{isAdmin ?"Click to see User View" :
            "Click to see Admin view"}</button>
        </div>
    }
    changeAdminUserView(){
        this.setState({
            isAdmin:!this.state.isAdmin
        })
    }
}
ReactDOM.render(<Condition/>,document.getElementById('container'))