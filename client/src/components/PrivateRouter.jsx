import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom"

export default function PrivateRouter() {
    const {currentUser} = useSelector(state => state.user)
  return currentUser.username ? <Outlet/> : <Navigate to={'/sign-in'}/>
}
