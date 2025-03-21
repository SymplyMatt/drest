import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setAuthPage } from "../../redux/states/auth";

const PhoneLogin = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="w-[500px] h-full bg-white border border-[#D6D6D5] p-[38px] flex flex-col items-center h_content overflow-y-scroll login">
            <img src="/images/cancelx.svg" className="self-end cursor-pointer" onClick={() => dispatch(setAuthPage(null))}/>
            <div className="w-full flex flex-col items-center gap-[24px] p-10">
                <img src="/images/logo.svg" className="h-[38px] mt-[-24px]"/>
                <div className="flex flex-col items-center gap-[8px]">
                    <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Welcome to DREST</div>
                    <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Sign in so you can save items to your wishlists, track your orders and check out faster!</div>
                </div>
                <div className="w-full flex flex-col justify-center gap-[12px]">
                    <label className="text-[#141511] font-semibold">Mobile number</label>
                    <div className="w-full flex items-center">
                        <div className="h-[48px] bg-[#F3F3F3] flag-container min-w-[85px] border-r border-[#D6D6D5] flex items-center justify-center text-[#676764] p-[8px] gap-[4px] cursor-pointer">
                            <img src="/images/tunisia.svg" className="w-[24px] h-[24px]"/>
                            +1
                            <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                        </div>
                        <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="Enter mobile number"/>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="text-[#141511] text-[16px] font-normal flex items-center gap-[8px]"><img src="/images/checkboxchecked.svg" className="cursor-pointer"/>Keep me signed in</div>
                        <div className="uppercase text-[#141511] text-[12px] underline font-semibold cursor-pointer" onClick={() => dispatch(setAuthPage('create-account'))}>Create an account</div>
                    </div>
                </div>
                <div className="flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center" onClick={() => dispatch(setAuthPage('passwordlogin'))}>NEXT</div>
                <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold"
                    onClick={() => {
                        dispatch(setAuthPage("emaillogin"));
                    }}>SIGN IN WITH EMAIL INSTEAD
                </div>
                <div className="text-[#676764]">Or</div>
                <div className="w-full flex flex-col justify-center gap-[12px]">
                    <div className="flex h-[36px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px]"><img src="/images/google.svg" /> Continue with Google</div>
                    <div className="flex h-[36px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px]"><img src="/images/apple.svg" /> Continue with Google</div>
                </div>
                <div className="text-[#676764] text-[16px] leading-[150%]"> By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Drest's <span className="underline cursor-pointer">Terms of Use</span> and <span className="underline cursor-pointer">Privacy Policy.</span></div>
            </div>
        </div>
    )
}

export default PhoneLogin