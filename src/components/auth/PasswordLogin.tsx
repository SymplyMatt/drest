import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAuthPage, setLoginValues } from "../../redux/states/auth";
import { setLoggedInUser } from "../../redux/states/app";
import { useSelector } from "react-redux";
import { fetchFromApi } from "../../utils/utils";
import { useState } from "react";
import Loader from "../common/Loader";

const PasswordLogin = () => {
    const [loading, setLoading] = useState(false);
    const { loginValues } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const handleBack = () => {
        dispatch(setAuthPage("emaillogin"));
    }
    const loginUser = async () => {
        setLoading(true);
        const response: any = await fetchFromApi("jwt-auth/v1/token", {method: "POST", body: { username: loginValues.email, password: loginValues.password }, baseurl:'https://newshop.tn/wp-json/'});
        setLoading(false);
        console.log(response);
        if(!response) return;
        const {user_display_name, user_email, token, user_nicename} = response;
        dispatch(setLoggedInUser({name: user_display_name, email: user_email, token, displayName: user_nicename}));
        dispatch(setAuthPage(null));
    }
    if(loading){
        return <Loader />
    }
    return (
      <div className="w-[500px] h-full bg-white border border-[#D6D6D5] pb-[40px] tmd:p-[38px] flex flex-col items-center h_content overflow-y-scroll login">
            <img src="/images/cancelx.svg" className="self-end cursor-pointer hidden tmd:block" onClick={() => dispatch(setAuthPage(null))}/>
            <div className="tmd:hidden flex w-full items-center justify-between tmd:justify-center h-[80px] tmd:h-fit border-b border-[#D6D6D5] tmd:border-none px-[20px] py-[20px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="tmd:hidden" onClick={() => handleBack()}>
                    <path d="M4.16602 10H15.8327" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.33268 5.83334L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.33268 14.1667L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <img src="/images/logo.svg" className="h-[28px] tmd:h-[38px] tmd:mt-[-24px]"/>
                <div className="tmd:hidden"></div>
            </div>
            <div className="w-full flex flex-col items-center gap-[24px] px-[20px] py-[40px] tmd:py-[0px]">
                    <div className="flex flex-col items-center gap-[8px] tmd:mt-[-24px]">
                        <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Sign in</div>
                        <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Enter your password to continue</div>
                        <div className="flex justify-between gap-[12px] items-center text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D] font-semibold">
                            johndoe@mail.com   
                            <span className="underline cursor-pointer font-normal"
                            onClick={() => {
                                dispatch(setAuthPage("emaillogin"));
                            }}>
                                Edit
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center gap-[12px]">
                        <label className="text-[#141511] font-semibold">Password</label>
                        <input type="password" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="" value={loginValues.password} onChange={(e)=>dispatch(setLoginValues({...loginValues, password:e.currentTarget.value}))}/>
                        <div className="w-full flex justify-between items-center">
                            <div className="text-[#141511] text-[16px] font-normal flex items-center gap-[8px] underline"><img src="/images/eyepassword.svg" className="cursor-pointer"/>Show password</div>
                            <div className="text-[#141511] text-[12px] underline font-semibold cursor-pointer" onClick={() => dispatch(setAuthPage("resetpassword-email"))}>Forgot password?</div>
                        </div>
                    </div>
                    <div className="flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center"  
                        onClick={() => {
                            loginUser();
                        }}>NEXT</div>
                    <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold"
                        onClick={() => {
                            dispatch(setAuthPage("otp"));
                        }}>SEND OTP INSTEAD
                    </div>
                    <div className="w-full flex flex-col justify-center gap-[12px] mt-[10px]">
                        <div className="text-center text-[#676764]">Don't have an account?</div>
                        <div className="flex h-[40px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px] uppercase"> Create An account</div>
                    </div>
                <div className="text-[#676764] text-[16px] leading-[150%]"> By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Drest's <span className="underline cursor-pointer">Terms of Use</span> and <span className="underline cursor-pointer">Privacy Policy.</span></div>
            </div>
      </div>
    )
  }
  
export default PasswordLogin