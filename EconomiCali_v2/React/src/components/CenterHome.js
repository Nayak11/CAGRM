import React,{Component} from 'react';
//import logo1 from './b.png';
import bg from './1.jpg';

var mails=[
  {
      "_id": {
          "$oid": "5ad4ee91734d1d7f23719147"
      },
      "bill_no": "1936",
      "introducer": "Low and Eggman",
      "when": "January 25, 2018",
      "category": "Education",
      "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
      "status": "INTRODUCED",
      "bill_type": "H.R."
  },
  {
    "_id": {
        "$oid ": "5ad4ee91734d1d7f23719147"
    },
    "bill_no": "1936",
    "introducer": "Low and Eggman",
    "when": "January 25, 2018",
    "category": "Education",
    "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
    "status": "INTRODUCED",
    "bill_type": "H.R."
},
{
    "_id": {
        "$oid": "5ad4ee91734d1d7f23719147"
    },
    "bill_no": "1936",
    "introducer": "Low and Eggman",
    "when": "January 25, 2018",
    "category": "Education",
    "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
    "status": "INTRODUCED",
    "bill_type": "H.R."
},
{
    "_id": {
        "$oid": "5ad4ee91734d1d7f23719147"
    },
    "bill_no": "1936",
    "introducer": "Low and Eggman",
    "when": "January 25, 2018",
    "category": "Education",
    "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
    "status": "REJECTED",
    "bill_type": "H.R."
},
{
    "_id": {
        "$oid": "5ad4ee91734d1d7f23719147"
    },
    "bill_no": "1936",
    "introducer": "Low and Eggman",
    "when": "January 25, 2018",
    "category": "Education",
    "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
    "status": "REJECTED",
    "bill_type": "H.R."
},
{
    "_id": {
        "$oid": "5ad4ee91734d1d7f23719147"
    },
    "bill_no": "1936",
    "introducer": "Low and Eggman",
    "when": "January 25, 2018",
    "category": "Education",
    "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
    "status": "PROGRESS",
    "bill_type": "H.R."
},
{
    "_id": {
        "$oid": "5ad4ee91734d1d7f23719147"
    },
    "bill_no": "1936",
    "introducer": "Low and Eggman",
    "when": "January 25, 2018",
    "category": "Education",
    "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
    "status": "PROGRESS",
    "bill_type": "H.R."
}
];

class CenterHome extends Component{
  constructor(props){
    super(props);
    this.state={
      category:[],
      searchTerm:"",
      month:"",
      bill:"",
      status:"ALL",
      houseBool:true,
      senateBool:true,
      mails:[{
            "_id": {
                "$oid": "5ad4ee91734d1d7f23719147"
            },
            "bill_no": "1936",
            "introducer": "Low and Eggman",
            "when": "2018-05",
            "category": "Health",
            "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
            "status": "INTRODUCED",
            "bill_type": "H.R."
        },
        {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1932",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Crime",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "INTRODUCED",
          "bill_type": "H.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1933",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Crime",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "INTRODUCED",
          "bill_type": "H.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1934",
          "introducer": "Low and Eggman",
          "when": "2018-01",
          "category": "Education",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "REJECTED",
          "bill_type": "S.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1935",
          "introducer": "Low and Eggman",
          "when": "2018-05",
          "category": "Finance",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "REJECTED",
          "bill_type": "S.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1938",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Education",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "PROGRESS",
          "bill_type": "S.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1937",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Agriculture",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "PROGRESS",
          "bill_type": "S.R."
      }],
      mailscopy:[{
            "_id": {
                "$oid": "5ad4ee91734d1d7f23719147"
            },
            "bill_no": "1936",
            "introducer": "Low and Eggman",
            "when": "2018-05",
            "category": "Health",
            "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
            "status": "INTRODUCED",
            "bill_type": "H.R."
        },
        {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1932",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Crime",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "INTRODUCED",
          "bill_type": "H.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1933",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Crime",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "INTRODUCED",
          "bill_type": "H.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1934",
          "introducer": "Low and Eggman",
          "when": "2018-01",
          "category": "Education",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "REJECTED",
          "bill_type": "S.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1935",
          "introducer": "Low and Eggman",
          "when": "2018-05",
          "category": "Finance",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "REJECTED",
          "bill_type": "S.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1938",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Education",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "PROGRESS",
          "bill_type": "S.R."
      },
      {
          "_id": {
              "$oid": "5ad4ee91734d1d7f23719147"
          },
          "bill_no": "1937",
          "introducer": "Low and Eggman",
          "when": "2018-04",
          "category": "Agriculture",
          "description": "Postsecondary education: Office of Higher Education Performance and Accountability",
          "status": "PROGRESS",
          "bill_type": "S.R."
      }]
    }
  }

  handleBill(bill){
    var house=this.state.houseBool;
    var senate=this.state.senateBool;
    if(bill==="house"){
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
      console.log("Jatay");
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
    <div style={{display:"flex",flexDirection:"column",width:"80%",height:"300%",alignContent:"space-between",backgroundImage: 'url(' + bg + ')',backgroundRepeat:"stretch"}}>
        <div  style={{color:"white"}}>
          <div style={{width:"100%",color:"black"}}>
            <br/><br/><br/>
            <div style={{width:"100%",display:"flex",alignContent:"space-between"}}>
          <div style={{float:"left",overflow:"hidden",width:"25%"}}>
            <h1>Category</h1>
            <form>
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
          <div style={{float:"left",overflow:"hidden",width:"20%"}}>
            <h1>Date</h1>
            <input id="date" type="month" value={this.state.month} onChange={(event)=>{this.handleMonth(event.target.value)}}/>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"20%"}}>
            <h1>Bill</h1>
              <label><input type="checkbox" checked={this.state.houseBool} onClick={()=>{this.handleBill("house")}}/>House Bill</label>
              <label><input type="checkbox" checked={this.state.senateBool} onClick={()=>{this.handleBill("senate")}}/>Senate Bill</label>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"20%"}}>
            <h1>Status</h1>
              <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("PASSED")}}/>Passed</label>
              <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("INTRODUCED")}}/>Introduced</label>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("PROGRESS")}} />Progress</label>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("REJECTED")}} />Rejected</label>
                <label><input type="radio" name="contact" onClick={()=>{this.handleStatus("ALL")}} defaultChecked />All</label>
          </div>
          <div style={{float:"left",overflow:"hidden",width:"30%"}}>
            <div style={{height:"5px",width:"500px"}}>
           <input type="text" placeholder="Search" value={this.state.searchTerm} onChange={(event)=>{
               this.setState({searchTerm:event.target.value});}} style={{width:"300px"}}/>
             <br/>
           <button className="btn btn-default" style={{backgroundColor:"blue",width:"50px",height:"30px"}} onClick={()=>{this.handleSearch(this.state.searchTerm)}} type="submit">Search</button>
           <i className="glyphicon glyphicon-search"></i>
          </div>
          </div>
        </div>
          </div>
          <ul style={{border:"2px solid black"}}>
            <li>
              <div style={{display:"flex",justifyContent: "space-between",textAlign:"left",color:"skyblue"}}>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h1> Bill No.</h1>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h1>  Introducer</h1>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h1>  When </h1>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
                <h1>  Category </h1>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
              <h1>    Description </h1>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
              <h1>    Status</h1>
                </div>
                <div style={{float:"left",overflow:"hidden",width:"25%"}}>
              <h1>    Bill Type </h1>
                </div>

              </div>
            </li>
            {this.state.mails.map((item)=>{
              return <li key={item.time} >
                <div style={{display:"flex",border:"1px solid black",justifyContent: "space-between",color:"white"}}>
                  <div style={{float:"left",overflow:"hidden",width:"14.28%"}}>
                    {item.bill_no}
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
                    {item.description}
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
    )
  }
}

export default CenterHome;
