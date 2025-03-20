
const CreateAccount = () => {
    return (
      <div className="w-[500px] h-full bg-white border border-[#D6D6D5] p-[48px] flex flex-col items-center h_content overflow-y-scroll login">
          <img src="/images/cancelx.svg" className="self-end cursor-pointer"/>
          <div className="w-full flex flex-col items-center gap-[24px] p-10">
              <img src="/images/logo.svg" className="h-[38px] mt-[-24px]"/>
              <div className="flex flex-col items-center gap-[8px]">
                  <div className="text-center text-[28px] font-medium leading-[130%] tracking-[0%] text-[#141511]">Create your account</div>
              </div>
              <div className="w-full flex flex-col justify-center gap-[8px]">
                  <label className="text-[#141511] font-semibold">Email</label>
                  <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="mail@gmail.com"/>
                  <label className="text-[#141511] font-semibold">First name</label>
                  <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="John"/>
                  <label className="text-[#141511] font-semibold">Password</label>
                  <div className="w-full flex items-center relative">
                    <input type="password" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder=""/>
                    <img src="/images/eyepassword.svg" className="cursor-pointer absolute right-[10px]"/>
                  </div>
              </div>
              <div className="flex h-[48px] bg-[#141511] w-full cursor-pointer text-white items-center justify-center">NEXT</div>
              <div className="text-[#676764]">Or</div>
              <div className="w-full flex flex-col justify-center gap-[12px]">
                  <div className="uppercase flex h-[36px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px]"><img src="/images/google.svg" /> Signup with Google</div>
                  <div className="uppercase flex h-[36px] bg-[#fff] w-full cursor-pointer items-center justify-center border border-[#D6D6D5] text-[#141511] text-[14px] font-semibold gap-[8px]"><img src="/images/apple.svg" /> Signup with Google</div>
              </div>
              <div className="text-[#676764] text-[16px] leading-[150%]"> By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Drest's <span className="underline cursor-pointer">Terms of Use</span> and <span className="underline cursor-pointer">Privacy Policy.</span></div>
          </div>
      </div>
    )
  }
  
  export default CreateAccount