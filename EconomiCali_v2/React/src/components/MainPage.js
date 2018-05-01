import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
class MainPage extends Component {
    render() {
        return (
            <div className="">
                <div className="image1">
                    <div className=" transparent navbar-fixed-top">
                        <div className="row col-sm-3 offset-sm-8 navbar-right">
                            <a id="contactUsBtn" className="btn  cusButton"><i className="fa fa-paper-plane" aria-hidden="true" href="#abc"></i>Contact Us</a>
                            <a className="btn  cusButton fa fa-paper-plane" onClick={() => {
                                this.props.history.push("/login");
                            }}>Login</a>


                        </div>
                    </div>
                    <div className="ptext">
                        <span className="border"></span>
                        EconomiCali
                    </div>
                </div>




                <section className="section section-light">
                    <h2>Section One</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea rem alias, accusamus animi tempora officia, illo dolores iste vitae expedita. Quisquam ut vero voluptatum deserunt delectus deleniti? Ex beatae hic magnam recusandae, commodi dolor fugiat dicta excepturi quo temporibus eum eligendi omnis ea voluptatibus sapiente modi nemo laudantium nulla provident nesciunt reprehenderit perferendis. Autem dicta recusandae molestiae accusantium fugit eos omnis veritatis dignissimos ipsam facere culpa excepturi suscipit dolorum officia illo voluptates, aspernatur facilis? Excepturi fugit possimus modi quasi nemo exercitationem corporis recusandae error corrupti consectetur incidunt, laborum mollitia reprehenderit repudiandae quo nam asperiores, blanditiis ea voluptas saepe. Quidem.
                    </p>
                </section>

                <div className="image2">
                    <div className="ptext">
                        <span className="border"></span>
                        Image Two Text
                    </div>
                </div>
                <section className="section section-dark">
                    <h2>Section Two</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea rem alias, accusamus animi tempora officia, illo dolores iste vitae expedita. Quisquam ut vero voluptatum deserunt delectus deleniti? Ex beatae hic magnam recusandae, commodi dolor fugiat dicta excepturi quo temporibus eum eligendi omnis ea voluptatibus sapiente modi nemo laudantium nulla provident nesciunt reprehenderit perferendis. Autem dicta recusandae molestiae accusantium fugit eos omnis veritatis dignissimos ipsam facere culpa excepturi suscipit dolorum officia illo voluptates, aspernatur facilis? Excepturi fugit possimus modi quasi nemo exercitationem corporis recusandae error corrupti consectetur incidunt, laborum mollitia reprehenderit repudiandae quo nam asperiores, blanditiis ea voluptas saepe. Quidem.
                    </p>
                </section>

                <div className="image3">
                    <div className="ptext">
                        <span className="border"></span>
                        Image Three Text
                    </div>
                </div>
                <section className="section section-light">
                    <h2>Section Three</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea rem alias, accusamus animi tempora officia, illo dolores iste vitae expedita. Quisquam ut vero voluptatum deserunt delectus deleniti? Ex beatae hic magnam recusandae, commodi dolor fugiat dicta excepturi quo temporibus eum eligendi omnis ea voluptatibus sapiente modi nemo laudantium nulla provident nesciunt reprehenderit perferendis. Autem dicta recusandae molestiae accusantium fugit eos omnis veritatis dignissimos ipsam facere culpa excepturi suscipit dolorum officia illo voluptates, aspernatur facilis? Excepturi fugit possimus modi quasi nemo exercitationem corporis recusandae error corrupti consectetur incidunt, laborum mollitia reprehenderit repudiandae quo nam asperiores, blanditiis ea voluptas saepe. Quidem.
                    </p>
                </section>

                <div className="image1">
                    <div className="ptext">
                        <span className="border"></span>
                        EconomiCali
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MainPage);