import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAuthPage, setSignupValues } from "../../redux/states/auth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import utils, { fetchFromApi } from "../../utils/utils";
import Loader from "../common/Loader";

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { signupValues } = useSelector((state: RootState) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleBack = () => {
    dispatch(setAuthPage("emaillogin"));
  }
  const signUpUser = async () => {
    setLoading(true);
    const response: any = await fetchFromApi("custom/v1/signup", {method: "POST", body: { first_name: signupValues.first_name, password: signupValues.password, email: signupValues.email, phone: signupValues.phone }, baseurl:'https://newshop.tn/wp-json/'});
    setLoading(false);
    console.log(response);
    if(!response.data && response.response) {
      utils.createErrorNotification(response.response.data.message || "An error occurred while signing you in. Please try again.", 3000);
      dispatch(setAuthPage(null));
      return
    };
    if(response.data && response.status == 200) dispatch(setAuthPage("verify-email"));
  }
  useEffect(()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setDisabled(!(emailRegex.test(signupValues.email) && passwordStrengthScore(signupValues.password) > 2 && signupValues.first_name.length > 0 && signupValues.phone.length > 8));
  },[signupValues]);

  function passwordStrengthScore(str: string): number {
    let score = 0;
    const hasNumber = /\d/.test(str);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>_\-+=\\/~`[\];']/g.test(str);
    const isLongEnough = str.length >= 8;
    if (hasNumber) score++;
    if (hasSymbol) score++;
    if (isLongEnough) score++;
    return score;
  }
  
  if(loading){
    return <Loader />
  }
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
              <img src="/images/logo.png" className="h-[28px] tmd:h-[38px] tmd:mt-[-24px]"/>
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
                    <input type={showPassword ? 'text' : "password"} className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="" value={signupValues.password} onChange={(e)=>dispatch(setSignupValues({...signupValues, password:e.currentTarget.value}))}/>
                    {!showPassword ? <img src="/images/eyepassword.svg" className="cursor-pointer absolute right-[10px]" onClick={()=> setShowPassword(!showPassword)}/> : ''}
                    {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-[22px] w-[22px] cursor-pointer absolute right-[10px]" onClick={()=> setShowPassword(!showPassword)}><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg> : ''}
                  </div>
                  <div className="flex flex-col justify-center gap-[8px]">
                    <div className="w-full flex items-center justify-center gap-[8px]">
                        <div className={`transition-all duration-300 h-[4px] flex-grow ${passwordStrengthScore(signupValues.password) >= 1 ? 'bg-[#D58618]' : 'bg-[#D6D6D5]' }`}> </div>
                        <div className={`transition-all duration-300 h-[4px] flex-grow ${passwordStrengthScore(signupValues.password) >= 2 ? 'bg-[#D58618]' : 'bg-[#D6D6D5]' }`}> </div>
                        <div className={`transition-all duration-300 h-[4px] flex-grow ${passwordStrengthScore(signupValues.password) >= 3 ? 'bg-[#D58618]' : 'bg-[#D6D6D5]' }`}> </div>
                    </div>
                    <div className="text-[#676764] flex items-center gap-[8px] text-left text-[14px]">At least 1 number, 8 characters, 1 symbol</div>
                </div>
              </div>
              <div className={`flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${loading ? 'cursor-wait' : ''}`} 
                onClick={() => {
                  !disabled && signUpUser();
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