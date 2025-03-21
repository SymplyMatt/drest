
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex justify-center pt-[46px] pb-[20px]">
        
    </motion.div>
  );
};

export default Search;