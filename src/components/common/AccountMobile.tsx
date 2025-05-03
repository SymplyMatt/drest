import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setAuthPage } from "../../redux/states/auth";
import Footer from "./Footer";

const AccountMobile = () => {
    const { authPage } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const handleBack = () => {
        dispatch(setAuthPage(null));
    }
  return (
    <>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-full h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex flex-col tmd:pt-[46px] pb-[80px] overflow-scroll">
            <div className="w-full min-h-[100%] bg-white border border-[#D6D6D5] tmd:p-[38px] flex flex-col items-center h_content overflow-y-scroll login">
                
            </div>
            <Footer />
        </motion.div>
    </>
  );
};

export default AccountMobile;