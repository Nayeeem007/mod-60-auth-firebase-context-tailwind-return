import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

 
const Home = () => {

    const user = useContext(AuthContext);

    return (
        <div>
        <h2 className="text-5xl">This is home sweeet home! {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;