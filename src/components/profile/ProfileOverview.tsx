import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setShowLogout } from "../../redux/states/app";

const ProfileOverview = () => {
    const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="tmd:col-span-2 tmd:border-l tmd:border-[#D6D6D5] h-full p-[20px] tmd:p-[24px] gap-[20px] flex flex-col">
        <div className="flex flex-col gap-[20px] border-b border-[#D6D6D5] pb-[20px]">
            <div className="text-[#141511] font-medium text-[24px]">Overview</div>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col text-left gap-[4px]">
                    <div className="text-[#676764] text-[16px] leading-[130%]">Joined Drest on</div>
                    <div className="text-[#141511] text-[18px] leading-[150%] font-medium">08 August 2025</div>
                </div>
                <div className="flex flex-col text-left gap-[4px]">
                    <div className="text-[#676764] text-[16px] leading-[130%]">Purchase till date</div>
                    <div className="text-[#141511] text-[18px] leading-[150%] font-medium">65 Products</div>
                </div>
                <div className="flex flex-col text-left gap-[4px]">
                    <div className="text-[#676764] text-[16px] leading-[130%]">Total Wishlist</div>
                    <div className="text-[#141511] text-[18px] leading-[150%] font-medium">120 Products</div>
                </div>
            </div>
        </div>
        <div className="text-[#141511] font-medium text-[24px]">Login information</div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Email</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="johndoe@mail.com"/>
        </div>
        <div className="h-[48px] cursor-pointer text-[#141511] flex items-center justify-center border border-[#D6D6D5]">CHANGE PASSWORD</div>
        <div className="h-[48px] cursor-pointer text-[#141511] flex items-center justify-center text-[#BD3322] font-semibold mt-[50px] gap-[8px]"
            onClick={()=>{
                dispatch(setShowLogout(true));
            }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.2168 9.99998H16.6668" stroke="#BD3322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.0526 16.6508L5.57927 16.6666C4.58344 16.6716 3.77344 15.8733 3.77344 14.8875V5.11248C3.77344 4.12998 4.5776 3.33331 5.57094 3.33331H9.16594" stroke="#BD3322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.334 13.3334L16.6673 10L13.334 6.66669" stroke="#BD3322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            LOGOUT
        </div>
    </div>
  )
}

export default ProfileOverview