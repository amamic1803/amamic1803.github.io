import { useNavigate } from "react-router";

export default function About() {
    let navigate = useNavigate();
    return (
        <div>
            <p>about page</p>
            <button onClick={() => navigate('/')}>home</button>
        </div>
    );
}