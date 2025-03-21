
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex justify-center">
        <div className="w-[70%] bg-white h-[500px] border border-[#D6D6D5] p-[40px] flex flex-col items-center gap-[24px]">
            <div className="w-full flex items-center justify-between gap-[40px]">
                <div className="w-full flex items-center justify-center border border-black h-[48px]">
                    <div className="border-r border-black h-[48px] flag-container min-w-[85px] flex items-center justify-center p-[8px] gap-[4px] cursor-pointer font-semibold">
                        ALL
                        <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                    </div>
                    <input type="text" placeholder="Search for product" className="w-full h-full border-none outline-none p-[16px] text-[#6B6B6B]"/>
                    <img src="/images/searchIcon.svg" className="h-full cursor-pointer"/>
                </div>
                <div className="text-[#6B6B6B] cursor-pointer text-[14px]">CANCEL</div>
            </div>
        </div>
    </motion.div>
  );
};

export default Search;