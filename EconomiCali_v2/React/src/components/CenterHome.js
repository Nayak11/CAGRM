import React,{Component} from 'react';
//import logo1 from './b.png';
// import bg from './1.jpg';
import * as API from "./../api/API";
import "./CSS/general.css";
import NavbarTemp from "./NavbarTemp";


class CenterHome extends Component{

  constructor(props) {
    super(props);
    this.state = {
        temp:0,
        mails:[],
        mailscopy:[]
    };
}

componentDidMount(){
  var payload ={user_id : "admin@admin.com"}
  API.fetchAllbills(payload)
      .then(
          (response) =>{
              console.log(response.data);
              this.setState({
                  mails:response.data,
                  mailscopy:response.data
              })
          }
      );

}

  handleBill(bill){
    var house=this.state.houseBool;
    var senate=this.state.senateBool;
    if(bill==="House"){
      console.log(this.state.houseBool);
      if(this.state.houseBool){
        this.setState({houseBool:false});
        house=false;
        //console.log(this.state.houseBool);
      }
      else{
        house=true;
        this.setState({houseBool:true});
      }
      //console.log(this.state.houseBool);
    }
    else{
      if(this.state.senateBool){
        senate=false;
        this.setState({senateBool:false});
      }
      else{
        senate=true;
        this.setState({senateBool:true});
      }
    }
    console.log(this);
    this.handleStatus(this.state.status);

    if(house && senate){
      //console.log("ITHE KA");
      this.handleStatus(this.state.status);
      return;
    }
    var mail=[];
    var flag=false;
    if(house){
      flag=true;
      mail=this.state.mails.filter((item)=>{
        if(item.bill_type==="H.R."){
          return item;
        }
      });
    }
    if(senate){
      flag=true;
      console.log("Done");
      mail=this.state.mails.filter((item)=>{
        if(item.bill_type==="S.R."){
          return item;
        }
      });
    }
    console.log(this.state.houseBool);
    this.setState({mails:mail});

  }

  handleMonth(month){
    this.setState({month:month});
    var mail=this.state.mails.filter((item)=>{

      if(month.toString()==item.when){
        return item;
      }
    });
    console.log(mail);
    this.setState({mails:mail});
  }
  handleStatus(status){
    this.setState({status:status});
    if(status==="ALL"){
      this.setState({mails:this.state.mailscopy});
      return;
    }

    var mail=this.state.mailscopy.filter((item)=>{
      /*  if(status===item.status){
          return item;
        }*/
        if(status===item.status){

          return item;
        }
    });
    this.setState({mails:mail});
  }

  handleCategory(category){
    this.setState({mails:this.state.mailscopy});
    if(category==="All"){
      return;
    }
    var mail=this.state.mails.filter((item)=>{
        if(category===item.category){

          return item;
        }
    });
    if(mail.length>0){
    this.setState({mails:mail});
    }
  }

  handleSearch(searchTerm){
    var mail=this.state.mails.filter((item)=>{
        if(searchTerm===item.bill_no){

          return item;
        }
    });
    this.setState({mails:mail,searchTerm:""});
  }

  render(){
    return(
        <div className="content-wrapper">
            <nav className="navbar navbar-default ">
            </nav>
            <NavbarTemp/>
           <div style={{leftMargin:"50px",display:"flex",flexDirection:"column",alignContent:"space-between"}}>
        <div  style={{color:"black"}}>
          <div style={{width:"100%",color:"black"}}>
            <br/><br/><br/>
            <div style={{leftMargin:"10px",width:"100%",display:"flex",alignContent:"center"}}>
          <div style={{leftMargin:"10px",alignContent:"center",overflow:"hidden",width:"15%"}}>
            <h4>Category</h4>
            <form style={{width:"100%",height:"80%"}}>
              <select onChange={(event)=>{this.handleCategory(event.target.value)}}>
  <option value="All">All</option>
  <option value="Agriculture">Agriculture</option>
  <option value="Environment">Environment</option>
  <option value="Education">Education</option>
  <option value="Finance">Finance</option>
  <option value="Crime">Crime</option>
  <option value="Foreign">Foreign</option>
  <option value="Health">Health</option>
  <option value="Industries">Industries</option>
  <option value="Legal Affairs">Legal Affairs</option>
  <option value="Sports">Sports</option>
</select>
            </form>
          </div>
          <div style={{alignContent:"left",float:"left",overflow:"hidden",width:"20%"}}>
            <h4>Date Introduced</h4>
            <input id="date" type="month" value={this.state.month} onChange={(event)=>{this.handleMonth(event.target.value)}}/>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"15%"}}>
            <h4>Bill Type</h4>
              <label><input type="checkbox" checked={this.state.houseBool} onClick={()=>{this.handleBill("house")}}/>House Bill</label> 
              <br></br>
              <label><input type="checkbox" checked={this.state.senateBool} onClick={()=>{this.handleBill("senate")}}/>Senate Bill</label>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"20%"}}>
            <h4>Status</h4>
              <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("PASS")}}/>Passed</label>
              <br></br>
              <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("INTRODUCED")}}/>Introduced</label>
              <br></br>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("PROGRESS")}} />Progress</label>
                <br></br>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("REJECTED")}} />Rejected</label>
                <br></br>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("ALL")}} defaultChecked />All</label>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"30%"}}>
            <div style={{height:"5px",width:"500px"}}>
           <input type="text" placeholder="Search" style={{width:"30px"}} value={this.state.searchTerm} onChange={(event)=>{
               this.setState({searchTerm:event.target.value});}} style={{width:"300px"}}/>
             <br/>
           <button className="btn btn-default" style={{backgroundColor:"#129A94",width:"100px",height:"30px",color:"black"}} onClick={()=>{this.handleSearch(this.state.searchTerm)}} type="submit">Search  <i className="glyphicon glyphicon-search"></i></button>

          </div>
          </div>
        </div>
          </div>
          <ul style={{border:"2px solid black",listStyleType:"none"}}>
            <li>
              <div style={{display:"flex",justifyContent: "space-between",textAlign:"left",color:"#129A94"}}>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h3 style={{textAlign:"left",fontSize:"17px"}}> Bill No.</h3>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h3 style={{textAlign:"left",fontSize:"17px"}}>  Introducer</h3>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h3 style={{textAlign:"left",fontSize:"17px"}}>  Introduced On </h3>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h3 style={{textAlign:"left",fontSize:"17px"}}>  Category </h3>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
              <h3 style={{textAlign:"left",fontSize:"17px"}}>    Title </h3>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
              <h3 style={{textAlign:"left",fontSize:"17px"}}>    Status</h3>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
              <h3 style={{textAlign:"left",fontSize:"17px"}}>    Bill Type </h3>
                </div>

              </div>
            </li>
            {this.state.mails.map((item)=>{
              return <li key={item.time} >
              
                <div style={{display:"flex",border:"1px solid black",justifyContent: "space-between",color:"black"}}>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                  <a href="#" onClick={()=>{
                    this.props.handleClick({item})}}>{item.bill_no}</a>
                  </div>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                    {item.introducer}
                  </div>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                    {item.when}
                  </div>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                    {item.category}
                  </div>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                    {item.title}
                  </div>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                    {item.status}
                  </div>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                    {item.bill_type}
                  </div>
                </div>
              </li>
            })}
          </ul>
        </div>
    </div>
            <footer className="sticky-footer">
                <div className="container">
                    <div className="text-center">
                        <small>Copyright © Economicali 2018</small>
                    </div>
                </div>
            </footer>
        </div>
    )
  }
}

export default CenterHome;
