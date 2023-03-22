import { Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContexts";
import Profile from "./ProfileClass";


//import { ProfileFunctional } from "./Profile";
const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <UserContext.Consumer>

         {({ user }) => (

            <h4 className="font-bold text-xl p-10">

              {user.name}- {user.email}

            </h4>

          )}

        </UserContext.Consumer>
      <h1>This is react js about us page</h1>
      <Outlet/>
      
    </div>
  );
};

export default About;
