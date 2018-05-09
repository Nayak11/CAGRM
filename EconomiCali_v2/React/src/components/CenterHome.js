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

  handleBill(type){
      //this.setState({status:status});
      if(type==="ALL"){
          this.setState({mails:this.state.mailscopy});
          return;
      }

      var mail=this.state.mailscopy.filter((item)=>{
          /*  if(status===item.status){
              return item;
            }*/
          if(type===item.bill_type){

              return item;
          }
      });
      this.setState({mails:mail});
  }

  handleMonth(month){
    this.setState({month:month});
    var mail=this.state.mailscopy.filter((item)=>{

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
    var mail=this.state.mailscopy.filter((item)=>{
        if(category===item.category){

          return item;
        }
    });
    if(mail.length>0){
    this.setState({mails:mail});
    }
  }

  handleSearch(searchTerm){
    var mail=this.state.mailscopy.filter((item)=>{
        if(searchTerm===item.bill_no.toString()){

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
  <option value="Education">Education</option>
  <option value="Government">Government</option>
  <option value="Corporation">Corporation</option>
  <option value="Health-care">Health-care</option>
  <option value="Labor">Labor</option>
  <option value="Finance">Finance</option>
</select>
            </form>
          </div>
          <div style={{alignContent:"left",float:"left",overflow:"hidden",width:"20%"}}>
            <h4>Date Introduced</h4>
            <input id="date" type="month" value={this.state.month} onChange={(event)=>{this.handleMonth(event.target.value)}}/>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"15%"}}>
            <h4>Bill Type</h4>
              <label><input type="radio" name="type"  onClick={()=>{this.handleBill("House")}}/>House Bill</label>
              <br></br>
              <label><input type="radio" name="type" onClick={()=>{this.handleBill("Senate")}}/>Senate Bill</label>
              <br></br>
              <label><input type="radio" name="type" onClick={()=>{this.handleBill("ALL")}}/>All</label>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"20%"}}>
            <h4>Status</h4>
              <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("Pass")}}/>Passed</label>
              <br></br>
              <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("Introduced")}}/>Introduced</label>
              <br></br>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("Enacted")}} />Enacted</label>
                <br></br>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("Fail")}} />Failed</label>
                <br></br>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("ALL")}} defaultChecked />All</label>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"30%"}}>
            <div style={{height:"5px",width:"500px"}}>
           <input type="text" placeholder="Search" style={{width:"30px"}} value={this.state.searchTerm} onChange={(event)=>{
               this.setState({searchTerm:event.target.value});}} style={{width:"300px"}}/>
             <br/>
           <button className="btn btn-default" style={{backgroundColor:"#129A94",width:"65px",height:"30px",color:"black"}} onClick={()=>{this.handleSearch(this.state.searchTerm)}} type="submit">Search  <i className="glyphicon glyphicon-search"></i></button>

          </div>
          </div>
        </div>
          </div>
          <ul style={{border:"1px solid black",textAlign:"left",listStyleType:"none"}}>
            <li>
              <div style={{display:"flex",textAlign:"left",color:"#129A94"}}>
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
