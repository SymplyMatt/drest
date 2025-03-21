import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setSearchMode } from "../../redux/states/app";

const SearchResults = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
    <div className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex justify-center">
        <div className="w-[70%] bg-white h_content border border-[#D6D6D5] p-[40px] flex flex-col items-center gap-[40px]">
            <div className="w-full flex items-center justify-between gap-[40px]">
                <div className="w-full flex items-center justify-center border border-black h-[48px]">
                    <div className="border-r border-black h-[48px] flag-container min-w-[85px] flex items-center justify-center p-[8px] gap-[4px] cursor-pointer font-semibold">
                        ALL
                        <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                    </div>
                    <input type="text" placeholder="Search for product" className="w-full h-full border-none outline-none p-[16px] text-[#6B6B6B]"/>
                    <img src="/images/searchIcon.svg" className="h-full cursor-pointer"/>
                </div>
                <div className="text-[#6B6B6B] cursor-pointer text-[14px]" onClick={() => dispatch(setSearchMode(null))}>CANCEL</div>
            </div>
            <div className="w-full flex gap-[36px]">
                <div className="flex flex-col gap-[16px]">
                    <div className="text-[#141511] font-semibold">Search Suggestions:</div>
                    <div className="flex flex-col gap-[8px]">
                        <div className="text-[#141511] font-normal">Womens shoes (12)</div>
                        <div className="text-[#141511] font-normal">Wood pecker (3)</div>
                        <div className="text-[#141511] font-normal">Clothing for women (12)</div>
                        <div className="text-[#141511] font-normal">Adidas women bra (4)</div>
                        <div className="text-[#141511] font-normal">Women Bags (36)</div>
                        <div className="text-[#141511] font-normal">Jackets for work (34)</div>
                        <div className="text-[#141511] font-normal">Bottoms (58)</div>
                        <div className="text-[#141511] font-normal">Tops (72)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SearchResults;