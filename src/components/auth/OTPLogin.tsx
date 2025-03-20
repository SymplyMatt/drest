
const OTPLogin = () => {
    return (
      <div className="w-[500px] bg-white border border-[#D6D6D5] p-[48px] flex flex-col items-center h_content">
          <img src="/images/cancelx.svg" className="self-end cursor-pointer"/>
          <div className="w-full flex flex-col items-center gap-[24px] p-10">
              <div className="flex flex-col items-center gap-[8px] mt-[-24px]">
                  <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Sign in</div>
                  <div className="text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D]">Enter your password to continue</div>
                  <div className="flex justify-between gap-[12px] items-center text-center text-[16px] font-normal leading-[130%] tracking-[0%] text-[#4F4F4D] font-semibold">johndoe@mail.com   <span className="underline cursor-pointer font-normal">Edit</span></div>
              </div>
              <div className="w-full flex flex-col justify-center gap-[12px]">
                  <label className="text-[#141511] font-semibold">OTP</label>
                  <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder=""/>
                  <div className="w-full flex justify-between items-center">
                      <div className="text-[#141511] text-[16px] font-normal flex items-center gap-[8px] underline"></div>
                      <div className="text-[#141511] text-[12px] underline font-semibold cursor-pointer">Resend OTP in 15secs</div>
                  </div>
              </div>
              <div className="flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center">NEXT</div>
              <div className="flex h-[48px] text-[#141511] w-full cursor-pointer bg-white items-center justify-center border border-[#D6D6D5] font-semibold">USE PASSWORD INSTEAD</div>
              <div className="w-full flex flex-col justify-center gap-[12px] mt-[10px]">
                  <div className="text-center text-[#676764]">Don't have an account?</div>
                  <div className="flex h-[40px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px]"><img src="/images/apple.svg" /> Continue with Google</div>
              </div>
              <div className="text-[#676764] text-[16px] leading-[150%]"> By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Drest's <span className="underline cursor-pointer">Terms of Use</span> and <span className="underline cursor-pointer">Privacy Policy.</span></div>
          </div>
      </div>
    )
  }
  
export default OTPLogin