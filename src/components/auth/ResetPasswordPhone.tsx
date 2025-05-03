import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setAuthPage } from "../../redux/states/auth";
import { setLoggedInUser } from "../../redux/states/app";

const ResetPasswordPhone = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="w-[500px] bg-white border border-[#D6D6D5] py-[40px] px-[20px] tmd:p-[38px] flex flex-col items-center h_content overflow-y-scroll login">
            <img src="/images/cancelx.svg" className="self-end cursor-pointer hidden tmd:block" onClick={() => dispatch(setAuthPage(null))}/>
            <div className="w-full flex flex-col items-center gap-[24px] p-10">
                <div className="flex flex-col items-center gap-[8px] mt-[-24px]">
                    <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Password Reset</div>
                    <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Please enter your email address and we'll send you instructions to reset your password</div>
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
                </div>
                <div className="flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center"
                    onClick={() => {
                        dispatch(setLoggedInUser({name: "Matt", email: "symplymatt@gmail.com", id: "1"}));
                        dispatch(setAuthPage(null));
                    }}>RESET PASSWORD</div>
                <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold"
                    onClick={() => {
                        dispatch(setAuthPage("resetpassword-email"));
                    }}>
                    RESET WITH EMAIL INSTEAD
                </div>
          </div>
        </div>
    )
  }
  
export default ResetPasswordPhone