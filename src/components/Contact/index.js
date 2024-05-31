import React from "react";
import "./style.css";

const Contact = () => {
    return <div class="container">
        <div class="firsttitle">
            Contact Me
        </div>
        
        <div className="card">
            
            <form className="form" method="POST" action="https://formspree.io/f/xayrgyzp">
                <div className="group">
                    <input placeholder="‎" type="text" required autoComplete="off" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="group">
                    <input placeholder="‎" type="email" id="email" name="email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="group">
                    <textarea
                        placeholder="‎"
                        id="comment"
                        name="message"
                        rows={5}
                        required=""
                        defaultValue={""}
                    />
                    <label htmlFor="comment">Message</label>
                </div>
                <button type="submit" value="send">Submit</button>
            </form>
        </div>
        
    </div>;
};
export default Contact;