
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setSearchMode } from "../../redux/states/app";
import { useState } from "react";

const EmptySearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState<string>("");
    return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex justify-center">
        <div className="w-[70%] bg-white h_content border border-[#D6D6D5] p-[40px] flex flex-col items-center gap-[40px]">
            <div className="w-full flex items-center justify-between gap-[40px]">
                <div className="w-full flex items-center justify-center border border-black h-[48px]">
                    <div className="border-r border-black h-[48px] flag-container min-w-[85px] flex items-center justify-center p-[8px] gap-[4px] cursor-pointer font-semibold">
                        ALL
                        <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                    </div>
                    <input type="text" placeholder="Search for product" className="w-full h-full border-none outline-none p-[16px] text-[#6B6B6B]" onChange={(e)=>setInput(e.currentTarget.value)} value={input}/>
                    <img src="/images/cancelxsm.svg" className="h-full cursor-pointer h-[18px] relative right-[10px]" onClick={() => setInput('')}/>
                    <img src="/images/searchIcon.svg" className="h-full cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}/>
                </div>
                <div className="text-[#6B6B6B] cursor-pointer text-[14px]" onClick={() => dispatch(setSearchMode(null))}>CANCEL</div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-[18px] w-[70%]">
                <div className="flex items-center gap-[8px] text-[#141511]"><img src="/images/arrowcurve.svg" className="h-full"/>Popular searches this week</div>
                <div className="flex items-center justify-center gap-[12px] flex-wrap">
                    <div className="flex items-center justify-center gap-[4px] h-[40px] bg-[#F3F3F3] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}><img src="/images/searchfade.svg"/> Jean jacket</div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] bg-[#F3F3F3] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}><img src="/images/searchfade.svg"/> Graphic tee</div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] bg-[#F3F3F3] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}><img src="/images/searchfade.svg"/> Graphic tee</div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-[8px] w-[70%]">
                <div className="flex items-center gap-[8px] text-[#141511]">Search history</div>
                <div className="flex items-center justify-center gap-[12px] flex-wrap">
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>New varsity jacket <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Black jeans <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Ankle pants for chidren <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>White T-shirt <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Most popular shirt <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Outwear for winter <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Beige coats <img src="/images/x_sm.svg"/></div>
                </div>
            </div>
        </div>
    </motion.div>
    );
};

export default EmptySearch;