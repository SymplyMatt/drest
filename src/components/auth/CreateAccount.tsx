import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAuthPage, setSignupValues } from "../../redux/states/auth";
import { setLoggedInUser } from "../../redux/states/app";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../../utils/utils";
import Loader from "../common/Loader";

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { signupValues } = useSelector((state: RootState) => state.auth);
  const [disabled, setDisabled] = useState(false);
  const handleBack = () => {
    dispatch(setAuthPage("emaillogin"));
  }
  const signUpUser = async () => {
    setLoading(true);
    const response: any = await fetchFromApi("custom/v1/signup", {method: "POST", body: { first_name: signupValues.first_name, password: signupValues.password, email: signupValues.email, phone: signupValues.phone }, baseurl:'https://newshop.tn/wp-json/'});
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
  useEffect(()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setDisabled(!(emailRegex.test(signupValues.email) && signupValues.password.length >= 8 && signupValues.first_name.length > 0 && signupValues.phone.length > 0));
  },[signupValues]);
  return (
    <div className="w-[500px] h-full bg-white border border-[#D6D6D5] pb-[40px] tmd:p-[38px] flex flex-col items-center h_content overflow-y-scroll login">
        <img src="/images/cancelx.svg" className="self-end cursor-pointer hidden tmd:block" onClick={() => dispatch(setAuthPage(null))}/>
        <div className="w-full flex flex-col items-center gap-[24px] py-10 tmd:p-10">
            <div className="flex w-full items-center justify-between tmd:justify-center h-[80px] tmd:h-fit border-b border-[#D6D6D5] tmd:border-none px-[20px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="tmd:hidden" onClick={() => handleBack()}>
                  <path d="M4.16602 10H15.8327" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.33268 5.83334L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.33268 14.1667L4.16602 10" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <img src="/images/logo.svg" className="h-[28px] tmd:h-[38px] tmd:mt-[-24px]"/>
              <div  className="tmd:hidden"></div>
            </div>
            <div className="w-full flex flex-col gap-[24px] px-[20px]">
              <div className="flex flex-col items-center gap-[8px]">
                  <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Create your account</div>
              </div>
              <div className="w-full flex flex-col justify-center gap-[12px]">
                  <label className="text-[#141511] font-semibold">Email</label>
                  <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="mail@gmail.com" value={signupValues.email} onChange={(e)=>dispatch(setSignupValues({...signupValues, email:e.currentTarget.value}))}/>
                  <label className="text-[#141511] font-semibold">First name</label>
                  <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="Maulana" value={signupValues.first_name} onChange={(e)=>dispatch(setSignupValues({...signupValues, first_name:e.currentTarget.value}))}/>
                  <label className="text-[#141511] font-semibold">Mobile number</label>
                  <div className="w-full flex items-center">
                    <div className="h-[48px] bg-[#F3F3F3] flag-container min-w-[85px] border-r border-[#D6D6D5] flex items-center justify-center text-[#676764] p-[8px] gap-[4px] cursor-pointer">
                        <img src="/images/tunisia.svg" className="w-[24px] h-[24px]"/>
                        +1
                        <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                    </div>
                    <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="Enter mobile number" value={signupValues.phone} onChange={(e)=>dispatch(setSignupValues({...signupValues, phone:e.currentTarget.value}))}/>
                    </div>
                  <label className="text-[#141511] font-semibold">Password</label>
                  <div className="w-full flex items-center relative">
                    <input type="password" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="" value={signupValues.password} onChange={(e)=>dispatch(setSignupValues({...signupValues, password:e.currentTarget.value}))}/>
                    <img src="/images/eyepassword.svg" className="cursor-pointer absolute right-[10px]"/>
                  </div>
                  <div className="flex flex-col justify-center gap-[8px]">
                    <div className="w-full flex items-center justify-center gap-[8px]">
                        <div className={`transition-all duration-300 h-[4px] flex-grow bg-[#D58618]`}> </div>
                        <div className={`transition-all duration-300 h-[4px] flex-grow bg-[#D58618]`}> </div>
                        <div className={`transition-all duration-300 h-[4px] flex-grow bg-[#D6D6D5]`}> </div>
                    </div>
                    <div className="text-[#676764] flex items-center gap-[8px] cursor-pointer text-left text-[14px]">At least 1 number, 8 characters, 1 symbol</div>
                </div>
              </div>
              <div className={`flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${loading ? 'cursor-wait' : ''}`} 
                onClick={() => {
                  signUpUser();
              }}>REGISTER</div>
              <div className="text-[#676764] flex items-center gap-[8px] cursor-pointer">Already have an account? <span className="font-semibold text-[#141511] underline" onClick={() => dispatch(setAuthPage('emaillogin'))}>Sign in</span></div>
              <div className="text-[#676764] text-center">Or</div>
              <div className="w-full flex flex-col justify-center gap-[12px]">
                  <div className="uppercase flex h-[36px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px]"><img src="/images/google.svg" /> Signup with Google</div>
                  <div className="uppercase flex h-[36px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px]"><img src="/images/apple.svg" /> Signup with Google</div>
              </div>
              <div className="text-[#676764] text-[16px] leading-[150%]"> By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Drest's <span className="underline cursor-pointer">Terms of Use</span> and <span className="underline cursor-pointer">Privacy Policy.</span></div>
            </div>
        </div>
    </div>
  )
  }
  
  export default CreateAccount