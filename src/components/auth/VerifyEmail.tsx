import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAuthPage } from "../../redux/states/auth";
import { setLoggedInUser } from "../../redux/states/app";
import { useState } from "react";
import { fetchFromApi } from "../../utils/utils";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";

const VerifyEmail = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { signupValues } = useSelector((state: RootState) => state.auth);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const handleBack = () => {
        dispatch(setAuthPage("create-account"));
    }
    const verifyOtp = async () => {
        setLoading(true);
        const response: any = await fetchFromApi("custom/v1/verify-signup-otp", {method: "POST", body: { password: signupValues.password, email: signupValues.email, otp }, baseurl:'https://newshop.tn/wp-json/'});
        setLoading(false);
        console.log(response);
        if(response.data && response.status == 200) {
            const {user_display_name, user_email, token, user_nicename} = response.data;
            dispatch(setLoggedInUser({name: user_display_name, email: user_email, token, displayName: user_nicename}));
            localStorage.setItem("userToken", token);
            dispatch(setAuthPage(null));
        };
    }
    if(loading){
        return <Loader />
    }
    return (
        <div className="w-[500px] bg-white border border-[#D6D6D5] pb-[40px] tmd:p-[38px] flex flex-col items-center h-full tmd:h_content overflow-y-scroll login">
            <img src="/images/cancelx.svg" className="self-end cursor-pointer hidden tmd:block" onClick={() => dispatch(setAuthPage(null))}/>
            <div className="tmd:hidden flex w-full items-center justify-between tmd:justify-center h-[80px] tmd:h-fit border-b border-[#D6D6D5] tmd:border-none px-[20px]">
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
                    <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Verify your email address</div>
                    <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Verify johndoe@mail.com using the OTP sent to your email address</div>
                    <div className="flex justify-between gap-[12px] items-center text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D] font-semibold">
                        johndoe@mail.com   
                        <span className="underline cursor-pointer font-normal"
                        onClick={() => {
                            dispatch(setAuthPage("create-account"));
                        }}>
                            Edit
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center gap-[12px]">
                    <label className="text-[#141511] font-semibold">OTP</label>
                    <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="" value={otp} inputMode="numeric" maxLength={6}
                    onChange={(e) => {
                        const value = e.currentTarget.value;
                        if (/^\d{0,6}$/.test(value)) setOtp(value)
                    }}
                    />
                    <div className="w-full flex justify-between items-center">
                        <div className="text-[#141511] text-[16px] font-normal flex items-center gap-[8px] underline"></div>
                        <div className="text-[#141511] text-[12px] underline font-semibold cursor-pointer">Resend OTP in 15secs</div>
                    </div>
                </div>
                <div className="flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center"
                    onClick={() => {
                        verifyOtp();
                    }}>NEXT</div>
                <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold"
                    onClick={() => {
                        dispatch(setAuthPage("verify-phone"));
                    }}>
                    VERIFY WITH MOBILE NUMBER INSTEAD
                </div>
          </div>
        </div>
    )
  }
  
export default VerifyEmail