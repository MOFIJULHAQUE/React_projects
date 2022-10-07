import React, { useState } from "react";
import "./Login.css"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);



    const handleForm = (e) => {
        e.preventDefault();
        const newEntry = { email_is: email, password_is: password };

        setAllEntry(...allEntry, newEntry);
        console.log(allEntry);
    }


    return (
        <div className="container">

            <form onSubmit={handleForm}>

                <h2>LOGIN FORM</h2>

                <div className="field">

                    <label htmlFor="email" >Email </label>
                    <input
                        type="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>

                <div className="field">
                    <label htmlFor="email">Password</label>
                    <input
                        type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Submit</button>

            </form>

            <div>
                {

                    allEntry.map((curElement) => {

                        return(
                            <div>
                            <p>{curElement.email}</p>
                            </div>
                        )

                    })
                }
            </div>

        </div>
    )
}
export default LoginPage;