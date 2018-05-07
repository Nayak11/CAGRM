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
        mailscopy:[]
    };
    var temp=this.state.mails;
    temp.push(this.props.item.item);
    this.setState({
        mails:temp,
        mailscopy:temp
    })
    console.log(this.props.item);
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

          <div style={{float:"center",height:"50px"}}>
          <p></p>
          </div>

 <textarea rows="4" cols="50" style={{float:"center",border:"1px solid black",width:"95%",height:"20%",marginLeft:"45px"}}>
 Randy Weber- "The resolution was passed in a vote in the House. A simple resolution is not voted on in the other chamber and does not have the force of law."                                                                                                                                                                                                                                                                             Jerry Hill- "Bills and resolutions are referred to committees which debate the bill before possibly sending it on to the whole chamber."


 </textarea>
 <textarea rows="2" cols="50" style={{float:"center",border:"1px solid black",width:"60%",height:"5%",marginLeft:"45px"}}>
Enter your comment... </textarea>

<button style={{float:"center"}}>Enter Comment</button>

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
