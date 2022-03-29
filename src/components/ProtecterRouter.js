import { useAuth } from "../context/authContext";
import Loader from "./Loader";

export function ProtectedRoute({children}){
  const { loading } = useAuth()

  if(loading) return <Loader />


  return <>{children}</>
}