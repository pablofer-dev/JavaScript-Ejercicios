import { useState } from "react";
export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    return (
        <h1>login</h1>
    )
}
