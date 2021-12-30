function App(props){
    const data=['dairymilk','cadbary','perk','milkybar']
    return <div>
        <h1>Hello,{props.Name}  </h1>
        <List chocolates={data}/>

    </div>
}
 function List(props){
     return <div>
     <h2>Below are my favourate chocolates</h2>
         {props.chocolates.map((val,idx)=>{
              return <li key={val+idx}>{val}</li>
         })}
     
 </div>
 }
 ReactDOM.render(<App Name="preetham"/>,document.getElementById('container'))