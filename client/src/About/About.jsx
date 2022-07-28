import React from 'react'
import '../About/About.css'

export default function About() {
    return (
        <div className="About">
            <div className="top">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit delectus dolorum quas quaerat sit, natus distinctio
                    cupiditate voluptates reprehenderit nisi accusamus est aliquam
                    repellendus quisquam atque dignissimos! Aut, amet tempore?
                </p>
            </div>
            <div className="bottom">
                <div className="right">
                    <h1>Reach Us</h1>
                    <p>City: Nairobi</p>
                    <p>Street: Muindi Mbingu</p>
                    <p>Address: Box 555 Nairobi</p>
                    <p>Postal Code: 00100</p>
                </div>
                <div className="left">
                    <h1>Contact Us</h1>
                    <form>
                        <div className="up">
                            <label htmlFor="fname">
                                First Name: <input type="text" placeholder='First Name*' required />
                            </label>
                            <label htmlFor="lname">
                                Last Name: <input type="text" placeholder='Second Name*' required />
                            </label>
                            <label htmlFor="email">
                                Email: <input type="text" placeholder='Email*' required />
                            </label>
                        </div>
                        <div className="down">
                            <label htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                name="type_message"
                                id=""
                                cols="50" rows="10"
                                placeholder='Type your message/comment'
                                required>
                            </textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

