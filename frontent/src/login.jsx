import { useState } from "react"

export default function Home()
{
    const [login_with,set_login_with] = useState("Enter your mobile number")
    const [input_type,set_input_type] = useState("Number")
    return(
        <div>
            <div><input placeholder={login_with} type={input_type} /></div>
            <div><span>Enter Correct Email</span></div>
            <div><button>Login</button></div>

        </div>
    )
}