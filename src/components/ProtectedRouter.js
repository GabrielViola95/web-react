import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";




export function ProtectedRouterrr({children}){
    const navigate = useNavigate();
    let {user} = useAuth();

    if (user){
        // return (navigate("/foro"))
    }

  return <>{children}</>
}