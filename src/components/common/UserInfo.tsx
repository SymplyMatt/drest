import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setAuthPage } from '../../redux/states/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const UserInfo = () => {
    const { loggedInUser } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [showLanguages, setShowLanguages] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowLanguages(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        setShowLanguages(prev => !prev);
    };
  return (
    <div className="hidden tmd:flex items-center gap-[16px]" ref={wrapperRef}>
        {!loggedInUser && <div className="h-[48px] bg-black text-[#E6E6E6] flex items-center justify-center gap-[12px] px-[12px] cursor-pointer" onClick={() => dispatch(setAuthPage("emaillogin"))}><img src="/images/user.svg" /> Sign In/Sign Up</div>}
        {loggedInUser && 
            <div className="relative" onClick={toggleDropdown}>
                <div className="flex gap-[8px] cursor-pointer">
                    <img src="/images/userimage.svg"/>
                    <div className="flex flex-col justify-between h-full">
                        <div className="text-[12px] font-medium">Hello {loggedInUser.displayName}</div>
                        <div className="text-[14px] font-semibold">My Account</div>
                    </div>
                    {!showLanguages && <img src="/images/caretdownsm.svg" />}
                    {showLanguages && <img src="/images/caretupsm.svg" />}
                </div>
                {showLanguages && <div className="absolute top-[50px] right-0 w-[200px] bg-white border border-[#F3F3F3] shadow-lang z-10 flex flex-col py-[8px]">
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center">My Profile</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center" onClick={()=> navigate('/orders')}>Orders</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center" onClick={()=> navigate('/addresses')} >Addresses</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center">Security Settings</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#C74332] text-[14px] flex items-center font-semibold gap-[8px]">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 9.79999H2.25" stroke="#C74332" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.96094 12.8C4.06569 15.0207 6.35169 16.55 9.00069 16.55C12.7289 16.55 15.7507 13.5282 15.7507 9.79999C15.7507 6.07174 12.7289 3.04999 9.00069 3.04999C6.35169 3.04999 4.06569 4.57924 2.96094 6.79999" stroke="#C74332" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 7.54999L11.25 9.79999L9 12.05" stroke="#C74332" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Logout
                    </div>
                </div>}
            </div>
        }
        <img src="/images/heart.svg" className="cursor-pointer" onClick={()=>navigate('/wishlist')}/>
        <img src="/images/wish.svg" className="cursor-pointer" onClick={()=>navigate('/cart')}/>
    </div>
  )
}

export default UserInfo