import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CreateAccount from "../auth/CreateAccount";
import EmailLogin from "../auth/EmailLogin";
import OTPLogin from "../auth/OTPLogin";
import PasswordLogin from "../auth/PasswordLogin";
import { motion } from "framer-motion";

const Auth = () => {
  const { authPage } = useSelector((state: RootState) => state.auth);
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex justify-center pt-[46px] pb-[20px]">
      {authPage === "emaillogin" && <EmailLogin />}
      {authPage === "passwordlogin" && <PasswordLogin />}
      {authPage === "otp" && <OTPLogin />}
      {authPage === "create-account" && <CreateAccount />}
    </motion.div>
  );
};

export default Auth;