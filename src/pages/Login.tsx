import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setAuthPage } from "../redux/states/auth";
import Home from "./Home";
const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(setAuthPage("emaillogin"));
    },[]);
    return (
        <Home />
    );
}

export default Login;
