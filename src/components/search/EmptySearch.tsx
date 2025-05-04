
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setSearchMode } from "../../redux/states/app";
import { useState } from "react";

const EmptySearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState<string>("");
    return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="min-w-[100%] w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex tmd:flex justify-center pt-[0px] tmd:pt-[42px]">
        <div className="w-full h-full tmd:h-fit tmd:w-[70%] bg-white h_content border border-[#D6D6D5] py-[40px] pb-[100px] tmd:py-[40px] px-[20px] tmd:p-[40px] flex flex-col items-center gap-[40px] overflow-scroll">
            <div className="w-full tmd:hidden flex items-center justify-end">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9233 12.4976L23.6519 23.2262" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4127 23.4129L23.1413 12.6843" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="w-full flex items-center justify-between gap-[40px] mt-[-20px] tmd:mt-[0px]">
                <div className="w-full flex items-center justify-center border border-black h-[48px]">
                    <div className="border-r border-black h-[48px] flag-container min-w-[85px] flex items-center justify-center p-[8px] gap-[4px] cursor-pointer font-semibold">
                        ALL
                        <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                    </div>
                    <input type="text" placeholder="Search for product" className="w-full h-full border-none outline-none p-[16px] text-[#6B6B6B]" onChange={(e)=>setInput(e.currentTarget.value)} value={input}/>
                    {input && <img src="/images/cancelxsm.svg" className="h-full cursor-pointer h-[18px] relative right-[10px]" onClick={() => setInput('')}/>}
                    <img src="/images/searchIcon.svg" className="h-full cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}/>
                </div>
                <div className="text-[#6B6B6B] cursor-pointer text-[14px] hidden tmd:flex" onClick={() => dispatch(setSearchMode(null))}>CANCEL</div>
            </div>
            <div className="w-full flex flex-col tmd:items-center justify-center gap-[18px] w-[70%]">
                <div className="flex items-center gap-[8px] text-[#141511]"><img src="/images/arrowcurve.svg" className="h-full"/>Popular searches this week</div>
                <div className="flex items-center justify-center gap-[12px] flex-wrap">
                    <div className="flex items-center justify-center gap-[4px] h-[40px] bg-[#F3F3F3] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}><img src="/images/searchfade.svg"/> Jean jacket</div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] bg-[#F3F3F3] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}><img src="/images/searchfade.svg"/> Graphic tee</div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] bg-[#F3F3F3] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}><img src="/images/searchfade.svg"/> Graphic tee</div>
                </div>
            </div>
            <div className="w-full flex flex-col tmd:items-center justify-center gap-[8px] w-[70%]">
                <div className="flex items-center gap-[8px] text-[#141511]">Search history</div>
                <div className="flex tmd:items-center tmd:justify-center gap-[12px] flex-wrap">
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>New varsity jacket <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Black jeans <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Ankle pants for chidren <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>White T-shirt <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Most popular shirt <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Outwear for winter <img src="/images/x_sm.svg"/></div>
                    <div className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" onClick={() => dispatch(setSearchMode("results"))}>Beige coats <img src="/images/x_sm.svg"/></div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-[12px] tmd:hidden">
                <div className="text-[#7E7E7C] font-medium">Popular categories</div>
                <div className="flex flex-col justify-center gap-[12px]">
                    <div className="flex items-center gap-[8px] text-[#0F172A]">
                        <img src="/images/searchmobileimage.svg" className="rounded-full"/> Sale
                    </div>
                    <div className="flex items-center gap-[8px] text-[#0F172A]">
                        <img src="/images/searchmobileimage2.svg" className="rounded-full"/> Clothing in Women
                    </div>
                    <div className="flex items-center gap-[8px] text-[#0F172A]">
                        <img src="/images/searchmobileimage3.svg" className="rounded-full"/> Accessories
                    </div>
                    <div className="flex items-center gap-[8px] text-[#0F172A]">
                        <img src="/images/searchmobileimage4.svg" className="rounded-full"/> Running shoes
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    );
};

export default EmptySearch;