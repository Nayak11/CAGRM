import React,{Component} from 'react';
import * as API from "./../api/API";
import "./CSS/general.css";
import NavbarTemp from "./NavbarTemp";


class BillDetails extends Component{

  constructor(props) {
    super(props);
    this.state = {
        temp:0,
        mails:[],
        mailscopy:[],
        comment:"",
        commentArr:[]
    };
    var temp=this.state.mails;
    temp.push(this.props.item.item);
    this.setState({
        mails:temp,
        mailscopy:temp
    });
    var payload = {
      company_id = localStorage.getItem("company_id"),
      bill_no = this.state.mails[0].item.bill_no
    }
    API.comment1(payload)
    .then((res)=>{
      console.log(res);
      var temp=[];
      for(var i=0;i<res.data.length;i++){
        temp.push(res.data[i].Company_name);
      }
      this.setState({commentArr:temp})
    })
    console.log(this.props.item);
}

putComment = (id, comment) =>{
  API.comment()
  .then((res)=>{
    if(res==201){
      this.state.commentArr.push(this.state.comment);
      this.setState({comment:""});
      console.log("comment added to db");
    }
  })
}
 

  render(){
    return(
        <div className="content-wrapper">
            <nav className="navbar navbar-default ">
            </nav>
            <NavbarTemp/>
           <div style={{display:"flex",flexDirection:"column",alignContent:"space-between"}}>
        <div  style={{color:"black"}}>
          <div style={{width:"100%",color:"black"}}>
            <br/><br/><br/>
            <div style={{width:"100%",display:"flex",alignContent:"center"}}>
          
          <div style={{float:"center",overflow:"hidden",width:"100%"}}>
            <h1>
            {this.state.mails.map((item)=>{
                    return <div key={item} >
                    <div style={{display:"flex",justifyContent:"center",textAlign:"left",color:"black"}}>
                    {item.title}
                  </div>
                  </div>
                })}
            </h1>
              
          </div>
          
          
        </div>
          </div>
                

          <div style={{float:"center"}}>  
          <table style={{border:"1",width:"86%",height:"70%"}}>    
          <tr style={{height:"50px"}}>
              <td style={{width:"150px"}}>Bill No.:</td>
              <td>{this.state.mails.map((item)=>{
                    return <li style={{ listStyleType: "none"}} key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.bill_no}
                  </div>
                  </li>
                })}</td>
              <td style={{width:"150px"}}>Status:</td>
              <td>
              {this.state.mails.map((item)=>{
                    return <li style={{ listStyleType: "none"}} key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.status}
                  </div>
                  </li>
                })}</td>  
          </tr>

          <tr style={{height:"50px"}}>
              <td>Introduced By:</td>
              <td>
              {this.state.mails.map((item)=>{
                    return <li style={{ listStyleType: "none"}} key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.introducer}
                  </div>
                  </li>
                })}
              </td>
              <td>Introduced On:</td>
              <td>
              {this.state.mails.map((item)=>{
                    return <li style={{ listStyleType: "none"}} key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.when}
                  </div>
                  </li>
                })}
                  </td>  
          </tr>

          <tr style={{height:"50px"}}>
              <td>Category:</td>
              <td>
              {this.state.mails.map((item)=>{
                    return <li style={{ listStyleType: "none"}} key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.category}
                  </div>
                  </li>
                })}
              </td>
              <td>Type:</td>
              <td>
              {this.state.mails.map((item)=>{
                    return <li style={{ listStyleType: "none"}} key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.bill_type}
                  </div>
                  </li>
                })}</td>  
          </tr>

          

          
          </table>

<li style={{ listStyleType: "none"}}>
              <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                <div style={{float:"left",overflow:"hidden",width:"36%"}}>
                <p style={{textAlign:"left"}}> Description:</p>
                </div>

                {this.state.mails.map((item)=>{
                    return <li style={{ listStyleType: "none"}} key={item} >
                    <div style={{display:"flex",justifyContent:"left",textAlign:"left"}}>
                    {item.bill_description}
                  </div>
                  </li>
                })}

                

              </div>
            </li>


          </div>
    
          {/* <ul style={{border:"2px solid black",listStyleType:"none"}}>

            <li>
              <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                
                <div style={{float:"left",overflow:"hidden"}}>
                <h1 style={{textAlign:"center"}}> Bill No. : </h1>
                </div>
                {this.state.mails.map((item)=>{
                    return <li key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.bill_no}
                  </div>
                  </li>
                })}
                
                
              </div>
            </li>
            <li>
              <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
               



                <div style={{float:"left",overflow:"hidden"}}>
                <h1 style={{textAlign:"center"}}>  Status : </h1>
                </div>

                {this.state.mails.map((item)=>{
                    return <li key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.status}
                  </div>
                  </li>
                })}


                

              </div>
            </li>

            <li>
              <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                <div style={{float:"left",overflow:"hidden",width:"50%"}}>
                <h1 style={{textAlign:"left"}}> Introduced By : </h1>
                </div>

                {this.state.mails.map((item)=>{
                    return <li key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.introducer}
                  </div>
                  </li>
                })}

                <div style={{float:"center",overflow:"hidden",width:"25%"}}>
                <h1 style={{textAlign:"left"}}>  Introduced on : </h1>
                </div>

                {this.state.mails.map((item)=>{
                    return <li key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.when}
                  </div>
                  </li>
                })}

                

              </div>
            </li>

            <li>
              <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                <div style={{float:"left",overflow:"hidden",width:"50%"}}>
                <h1 style={{textAlign:"left"}}> Category : </h1>
                </div>

                {this.state.mails.map((item)=>{
                    return <li key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.category}
                  </div>
                  </li>
                })}

                <div style={{float:"center",overflow:"hidden",justifyContent:"right",width:"25%"}}>
                <h1 style={{textAlign:"left"}}>  Type : </h1>
                </div>

                {this.state.mails.map((item)=>{
                    return <li key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.bill_type}
                  </div>
                  </li>
                })}

                
              </div>
            </li>
            
            <li>
              <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                <div style={{float:"left",overflow:"hidden",width:"100%"}}>
                <h1 style={{textAlign:"left"}}> Description : <br/></h1>
                </div>

                {this.state.mails.map((item)=>{
                    return <li key={item} >
                    <div style={{display:"flex",justifyContent:"right",textAlign:"left",color:"black"}}>
                    {item.bill_description}
                  </div>
                  </li>
                })}

                

              </div>
            </li>
           
          </ul> */}

          <div style={{float:"center",height:"200px",marginLeft:"45px"}}>
          <p></p>
          </div>
          <div style={{border:"1px solid black"}}>
          <ul>
{this.state.commentArr.map((item)=>{
  return <li style={{listStyleType:"none"}}>
      {item}
  </li>
})}
</ul>
</div>
 
 <input type="text" value={this.state.comment} onChange={(event)=>this.setState({comment:event.target.value})} style={{float:"center",border:"1px solid black",width:"60%",height:"5%",marginLeft:"45px"}} placeholder="Enter your comment... "/>

<button style={{float:"center",height:"50px"}} onClick={()=>this.putComment({id:this.state.commentArr.length+1,comment:this.state.comment})}>Enter Comment</button>
<p id="10"></p>


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

export default BillDetails;
