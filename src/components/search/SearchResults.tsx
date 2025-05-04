import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setSearchMode } from "../../redux/states/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState<string>("");
    const navigate = useNavigate();
    return (
    <div className="min-w-[100%] w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex tmd:flex justify-center pt-[0px] tmd:pt-[42px]">
        <div className="w-full h-full tmd:h-fit tmd:w-[70%] bg-white h_content border border-[#D6D6D5] py-[40px] pb-[100px] tmd:py-[40px] px-[20px] tmd:p-[40px] flex flex-col items-center gap-[40px] overflow-scroll">
            <div className="w-full tmd:hidden flex items-center justify-end">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(setSearchMode(null))}>
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
                    <img src="/images/searchIcon.svg" className="h-full cursor-pointer"/>
                </div>
                <div className="text-[#6B6B6B] cursor-pointer text-[14px] hidden tmd:flex" onClick={() => dispatch(setSearchMode(null))}>CANCEL</div>
            </div>
            <div className="w-full flex flex-col tmd:flex-row gap-[36px]">
                <div className="flex flex-col gap-[16px] tmd:hidden">
                    <div className="text-[#141511] font-semibold underline">SEE ALL "WOO"</div>
                    <div className="flex flex-col gap-[16px] px-[16px]">
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-normal">ja<span className="font-medium">ckets</span></span> 
                            <span className="text-[#475569] font-normal">in All Universe</span>
                        </div>
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-normal">ja<span className="font-medium">ckets</span></span> 
                            <span className="text-[#475569] font-normal">in Men</span>
                        </div>
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-normal">ja<span className="font-medium">ckets winter</span></span>
                        </div>
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-normal">ja<span className="font-medium">ckets</span></span>
                        </div>
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-medium">linen <span className="font-normal">ja</span>ckets</span>
                        </div>
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-medium">denim <span className="font-normal">ja</span>ckets</span>
                        </div>
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-normal">Ja<span className="font-medium">ded London</span></span>
                        </div>
                        <div className="text-[#0F172A] font-bold whitespace-nowrap flex items-center gap-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#94A3B8"/>
                            </svg>
                            <span className="font-normal">Ja<span className="font-medium">ck Wolfskin</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[16px] hidden tmd:flex">
                    <div className="text-[#141511] font-semibold">Search Suggestions:</div>
                    <div className="flex flex-col gap-[8px]">
                        <div className="text-[#141511] font-normal whitespace-nowrap">Womens shoes (12)</div>
                        <div className="text-[#141511] font-normal whitespace-nowrap">Wood pecker (3)</div>
                        <div className="text-[#141511] font-normal whitespace-nowrap">Clothing for women (12)</div>
                        <div className="text-[#141511] font-normal whitespace-nowrap">Adidas women bra (4)</div>
                        <div className="text-[#141511] font-normal whitespace-nowrap">Women Bags (36)</div>
                        <div className="text-[#141511] font-normal whitespace-nowrap">Jackets for work (34)</div>
                        <div className="text-[#141511] font-normal whitespace-nowrap">Bottoms (58)</div>
                        <div className="text-[#141511] font-normal whitespace-nowrap">Tops (72)</div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[16px]">
                    <div className="text-[#141511] font-semibold">Products</div>
                    <div className="w-full grid grid-cols-1 tmd:grid-cols-2 gap-[36px]">
                        {[...Array(6)].map((_,i)=>(
                            <div className="flex item-center gap-[12px]" key={i}>
                                <img src={`/images/prodsug${i+1}.svg`}/>
                                <div className="flex flex-col gap-[4px]">
                                    <div className="text-[14px] font-semibold">Mango</div>
                                    <div className="text-[#141511]">Charcoal denim trucker jacket</div>
                                    <div className="font-semibold text-[#141511] text-[18px] price">120.50 TND</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="uppercase underline text-[#141511] text-left self-start font-semibold mt-[-20px] cursor-pointer hidden tmd:flex" 
                onClick={()=> {
                    navigate(`/search/allresults?search=${encodeURIComponent('WO')}&type=all`);
                    dispatch(setSearchMode(null));
            }}>SEE all “WO”</div>
        </div>
    </div>
    );
};

export default SearchResults;