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
      company_id : localStorage.getItem("company_id"),
      bill_no : this.state.mails[0].bill_no
    }
    API.comment1(payload)
    .then((res)=>{
      this.setState({commentArr : res.comment})
      console.log(this.state.commentArr);
    })
    console.log(this.props.item);
}

putComment = (id, comment) =>{
      var payload = {company_id : localStorage.getItem("company_id"),
          bill_no : this.state.mails[0].bill_no,
          username : localStorage.getItem("username")  ,
          comment : this.state.comment
      }
  API.comment(payload)
  .then((res)=>{
    if(res==201){
      console.log("comment added to db");
        var payload = {
            company_id : localStorage.getItem("company_id"),
            bill_no : this.state.mails[0].bill_no
        }
        API.comment1(payload)
            .then((res)=>{
                this.setState({commentArr : res.comment, comment: ""})
                console.log(this.state.commentArr);
            })
    }
  })
}


    display_comments() {
        {
            const item = this.state.commentArr.map((comment, index) => {

                return (
                    <div className="col-md-12">
                        <div className="actionBox">
                            <ul className="commentList">
                                <li>
                                    <div className="row">
                                        <div className="font-weight-bold smaller ">
                                            {comment.username} ":  "
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="commentText ">
                                            {comment.comment}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                )
            });
            return (
                <div className="row">
                    {item}
                </div>
            )
        }


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

          <div className="col-md-6 detailBox">
              <div className="titleBox">
                  <label>Comment Box</label>
              </div>
              {this.state.commentArr !== undefined && this.state.commentArr.length >0 ? this.display_comments() : null}
              <div className="form-inline" role="form">
                  <div className="form-group">
                      <input className="form-control" type="text" onChange={(event)=>this.setState({comment:event.target.value})} placeholder="Add Your comments" />
                  </div>
                  <div className="form-group">
                      <button className="btn btn-default" onClick={()=>this.putComment()}>Add</button>
                  </div>
              </div>
          </div>

        </div>
    </div>
            <br/>
            <br/>
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
