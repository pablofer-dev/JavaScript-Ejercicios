import { useAuth } from "../context/authContext";

export function Home() {
    const authContext = useAuth()
    console.log(authContext);
    return (
        <div>Home</div>
    )
}
