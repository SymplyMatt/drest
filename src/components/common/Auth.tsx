import EmailLogin from "../auth/EmailLogin"
import OTPLogin from "../auth/OTPLogin"
import PasswordLogin from "../auth/PasswordLogin"

const Auth = () => {
    const page: string = 'otp'
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex justify-center pt-[46px]">
        {page === 'emaillogin' && <EmailLogin />}
        {page === 'passwordlogin' && <PasswordLogin />}
        {page === 'otp' && <OTPLogin />}
    </div>
  )
}

export default Auth