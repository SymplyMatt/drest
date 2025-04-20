import { useEffect, useRef, useState } from "react";

const Languages = () => {
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
    <div className="relative" ref={wrapperRef}>
        <div className="flex items-center gap-[8px] cursor-pointer">
            <img src="/images/france.svg" />
            <div className="flex gap-[4px] items-center text-[14px] cursor-pointer" onClick={toggleDropdown}>
                <span className="text-[14px] font-extrabold">FR</span>
                <span className="text-[#E6E6E6] opacity-[0.7]">|</span>
                <span>French</span>
                {!showLanguages && <img src="/images/caretdownsm.svg" />}
                {showLanguages && <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.00013 0.052969L7.66992 3.90625H0.330338L4.00013 0.052969Z" fill="white"/>
                </svg>}
            </div>
        </div>
        <div className={`absolute top-[30px] left-[0px] text-red-900 bg-white z-10 w-[300px] h-[450px] border border-[#C4C4C4] flex flex-col gap-[12px] py-[24px] px-[24px] shadow-lang transition-all duration-300 ease-in-out ${showLanguages ? "opacity-100 scale-y-100 origin-top" : "opacity-0 scale-y-0 origin-top pointer-events-none"} flex flex-col justify-center`}>
            <div className="uppercase text-[#4F4F4D] text-[14px]">Languages</div>
            <div className="w-full h-full overflow-scroll shadow-lang p-[16px] flex flex-col gap-[8px]">
                <div className="w-full h-[36px] border border-[#D6D6D5] flex items-center justify-between p-[12px] cursor-pointer text-[14px] text-[#959694]">
                    <div className="flex items-center gap-[8px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33268 2.33334C4.57126 2.33334 2.33268 4.57191 2.33268 7.33334C2.33268 10.0948 4.57126 12.3333 7.33268 12.3333C10.0941 12.3333 12.3327 10.0948 12.3327 7.33334C12.3327 4.57191 10.0941 2.33334 7.33268 2.33334ZM0.666016 7.33334C0.666016 3.65144 3.65078 0.666672 7.33268 0.666672C11.0146 0.666672 13.9993 3.65144 13.9993 7.33334C13.9993 8.87393 13.4768 10.2925 12.5992 11.4214L17.0886 15.9107C17.414 16.2362 17.414 16.7638 17.0886 17.0893C16.7632 17.4147 16.2355 17.4147 15.9101 17.0893L11.4207 12.5999C10.2918 13.4774 8.87327 14 7.33268 14C3.65078 14 0.666016 11.0152 0.666016 7.33334Z" fill="#ADADAC"/>
                    </svg>
                    Search
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8px] h-[350px] overflow-scroll">
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <img src="/images/usa.svg" /> English - USA
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41826)">
                        <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#F0F0F0"/>
                        <path d="M2.06645 4.91174C1.28094 5.93374 0.688633 7.11167 0.34375 8.39131H5.54602L2.06645 4.91174Z" fill="#0052B4"/>
                        <path d="M19.6553 8.39134C19.3104 7.11173 18.7181 5.9338 17.9326 4.9118L14.4531 8.39134H19.6553Z" fill="#0052B4"/>
                        <path d="M0.34375 13.6087C0.688672 14.8883 1.28098 16.0662 2.06645 17.0882L5.5459 13.6087H0.34375Z" fill="#0052B4"/>
                        <path d="M16.087 3.06719C15.065 2.28168 13.8871 1.68937 12.6074 1.34445V6.54668L16.087 3.06719Z" fill="#0052B4"/>
                        <path d="M3.91211 18.9327C4.9341 19.7182 6.11203 20.3105 7.39164 20.6554V15.4532L3.91211 18.9327Z" fill="#0052B4"/>
                        <path d="M7.3916 1.34445C6.11199 1.68937 4.93406 2.28168 3.91211 3.06715L7.3916 6.54664V1.34445Z" fill="#0052B4"/>
                        <path d="M12.6074 20.6554C13.887 20.3105 15.065 19.7182 16.0869 18.9327L12.6074 15.4532V20.6554Z" fill="#0052B4"/>
                        <path d="M14.4531 13.6087L17.9326 17.0882C18.7181 16.0663 19.3104 14.8883 19.6553 13.6087H14.4531Z" fill="#0052B4"/>
                        <path d="M19.9154 9.69566H11.3044H11.3044V1.08465C10.8774 1.02906 10.4421 1 10 1C9.55785 1 9.12262 1.02906 8.69566 1.08465V9.69559V9.69563H0.0846484C0.0290625 10.1226 0 10.5579 0 11C0 11.4421 0.0290625 11.8774 0.0846484 12.3043H8.69559H8.69563V20.9154C9.12262 20.9709 9.55785 21 10 21C10.4421 21 10.8774 20.971 11.3043 20.9154V12.3044V12.3044H19.9154C19.9709 11.8774 20 11.4421 20 11C20 10.5579 19.9709 10.1226 19.9154 9.69566Z" fill="#D80027"/>
                        <path d="M12.6094 13.6088L17.0717 18.0711C17.277 17.866 17.4727 17.6515 17.6595 17.4291L13.8391 13.6087H12.6094V13.6088Z" fill="#D80027"/>
                        <path d="M7.39207 13.6088H7.39199L2.92969 18.0711C3.13484 18.2763 3.34934 18.4721 3.57168 18.6589L7.39207 14.8384V13.6088Z" fill="#D80027"/>
                        <path d="M7.39195 8.39135V8.39128L2.92961 3.92889C2.72438 4.13405 2.52859 4.34854 2.3418 4.57089L6.16223 8.39132H7.39195V8.39135Z" fill="#D80027"/>
                        <path d="M12.6094 8.39141L17.0718 3.92899C16.8666 3.72376 16.6521 3.52797 16.4298 3.34122L12.6094 7.16165V8.39141Z" fill="#D80027"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41826">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        English - UK
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41830)">
                        <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#F0F0F0"/>
                        <path d="M20.0003 11C20.0003 6.70034 17.2865 3.03491 13.4785 1.62198V20.378C17.2865 18.9651 20.0003 15.2996 20.0003 11Z" fill="#D80027"/>
                        <path d="M0 11C0 15.2996 2.71379 18.9651 6.52176 20.378V1.62198C2.71379 3.03491 0 6.70034 0 11Z" fill="#0052B4"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41830">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        French
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_832_41834)">
                    <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#D80027"/>
                    <path d="M9.99941 15.7826C12.6408 15.7826 14.782 13.6414 14.782 11C14.782 8.35863 12.6408 6.21738 9.99941 6.21738C7.35805 6.21738 5.2168 8.35863 5.2168 11C5.2168 13.6414 7.35805 15.7826 9.99941 15.7826Z" fill="#F0F0F0"/>
                    <path d="M10.5895 9.17133L11.4099 10.302L12.7387 9.87113L11.917 11.0008L12.7373 12.1314L11.409 11.6989L10.5872 12.8286L10.5881 11.4317L9.25977 10.9992L10.5886 10.5684L10.5895 9.17133Z" fill="#D80027"/>
                    <path d="M11.0867 13.8261C9.5259 13.8261 8.26059 12.5608 8.26059 11C8.26059 9.43923 9.5259 8.17392 11.0867 8.17392C11.5733 8.17392 12.0313 8.29696 12.431 8.5136C11.8039 7.90028 10.9463 7.52173 9.99973 7.52173C8.07879 7.52173 6.52148 9.07899 6.52148 11C6.52148 12.9209 8.07879 14.4782 9.99973 14.4782C10.9463 14.4782 11.8039 14.0997 12.431 13.4863C12.0313 13.7031 11.5733 13.8261 11.0867 13.8261Z" fill="#D80027"/>
                    </g>
                    <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                    <defs>
                    <clipPath id="clip0_832_41834">
                    <rect y="1" width="20" height="20" rx="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Tunisian
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41838)">
                        <path d="M0.621094 14.4783C2.03402 18.2862 5.69945 21 9.9991 21C14.2987 21 17.9642 18.2862 19.3771 14.4783L9.9991 13.6087L0.621094 14.4783Z" fill="#FFDA44"/>
                        <path d="M9.9991 1C5.69945 1 2.03402 3.71375 0.621094 7.52176L9.9991 8.39129L19.3771 7.52172C17.9642 3.71375 14.2987 1 9.9991 1Z" fill="black"/>
                        <path d="M0.621992 7.52176C0.220039 8.60508 0 9.7768 0 11C0 12.2232 0.220039 13.3949 0.621992 14.4782H19.378C19.78 13.3949 20 12.2232 20 11C20 9.7768 19.78 8.60508 19.378 7.52176H0.621992Z" fill="#D80027"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41838">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        German
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41842)">
                        <path d="M0 11C0 15.2996 2.71375 18.965 6.52168 20.378L7.39129 10.9999L6.52168 1.62198C2.71375 3.03495 0 6.70034 0 11Z" fill="#6DA544"/>
                        <path d="M19.9998 11C19.9998 5.47719 15.5226 1 9.9998 1C8.7766 1 7.60484 1.22004 6.52148 1.62199V20.378C7.60484 20.78 8.7766 21 9.9998 21C15.5226 21 19.9998 16.5228 19.9998 11Z" fill="#D80027"/>
                        <path d="M6.52121 14.4782C8.44219 14.4782 9.99945 12.921 9.99945 11C9.99945 9.07902 8.44219 7.52176 6.52121 7.52176C4.60023 7.52176 3.04297 9.07902 3.04297 11C3.04297 12.921 4.60023 14.4782 6.52121 14.4782Z" fill="#FFDA44"/>
                        <path d="M4.56445 9.26086V11.4348C4.56445 12.5153 5.44039 13.3913 6.52098 13.3913C7.60156 13.3913 8.4775 12.5154 8.4775 11.4348V9.26086H4.56445Z" fill="#D80027"/>
                        <path d="M6.52133 12.0869C6.16172 12.0869 5.86914 11.7944 5.86914 11.4347V10.5652H7.17348V11.4348C7.17348 11.7944 6.8809 12.0869 6.52133 12.0869Z" fill="#F0F0F0"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41842">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        Portugese
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <img src="/images/usa.svg" /> English - USA
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41826)">
                        <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#F0F0F0"/>
                        <path d="M2.06645 4.91174C1.28094 5.93374 0.688633 7.11167 0.34375 8.39131H5.54602L2.06645 4.91174Z" fill="#0052B4"/>
                        <path d="M19.6553 8.39134C19.3104 7.11173 18.7181 5.9338 17.9326 4.9118L14.4531 8.39134H19.6553Z" fill="#0052B4"/>
                        <path d="M0.34375 13.6087C0.688672 14.8883 1.28098 16.0662 2.06645 17.0882L5.5459 13.6087H0.34375Z" fill="#0052B4"/>
                        <path d="M16.087 3.06719C15.065 2.28168 13.8871 1.68937 12.6074 1.34445V6.54668L16.087 3.06719Z" fill="#0052B4"/>
                        <path d="M3.91211 18.9327C4.9341 19.7182 6.11203 20.3105 7.39164 20.6554V15.4532L3.91211 18.9327Z" fill="#0052B4"/>
                        <path d="M7.3916 1.34445C6.11199 1.68937 4.93406 2.28168 3.91211 3.06715L7.3916 6.54664V1.34445Z" fill="#0052B4"/>
                        <path d="M12.6074 20.6554C13.887 20.3105 15.065 19.7182 16.0869 18.9327L12.6074 15.4532V20.6554Z" fill="#0052B4"/>
                        <path d="M14.4531 13.6087L17.9326 17.0882C18.7181 16.0663 19.3104 14.8883 19.6553 13.6087H14.4531Z" fill="#0052B4"/>
                        <path d="M19.9154 9.69566H11.3044H11.3044V1.08465C10.8774 1.02906 10.4421 1 10 1C9.55785 1 9.12262 1.02906 8.69566 1.08465V9.69559V9.69563H0.0846484C0.0290625 10.1226 0 10.5579 0 11C0 11.4421 0.0290625 11.8774 0.0846484 12.3043H8.69559H8.69563V20.9154C9.12262 20.9709 9.55785 21 10 21C10.4421 21 10.8774 20.971 11.3043 20.9154V12.3044V12.3044H19.9154C19.9709 11.8774 20 11.4421 20 11C20 10.5579 19.9709 10.1226 19.9154 9.69566Z" fill="#D80027"/>
                        <path d="M12.6094 13.6088L17.0717 18.0711C17.277 17.866 17.4727 17.6515 17.6595 17.4291L13.8391 13.6087H12.6094V13.6088Z" fill="#D80027"/>
                        <path d="M7.39207 13.6088H7.39199L2.92969 18.0711C3.13484 18.2763 3.34934 18.4721 3.57168 18.6589L7.39207 14.8384V13.6088Z" fill="#D80027"/>
                        <path d="M7.39195 8.39135V8.39128L2.92961 3.92889C2.72438 4.13405 2.52859 4.34854 2.3418 4.57089L6.16223 8.39132H7.39195V8.39135Z" fill="#D80027"/>
                        <path d="M12.6094 8.39141L17.0718 3.92899C16.8666 3.72376 16.6521 3.52797 16.4298 3.34122L12.6094 7.16165V8.39141Z" fill="#D80027"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41826">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        English - UK
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41830)">
                        <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#F0F0F0"/>
                        <path d="M20.0003 11C20.0003 6.70034 17.2865 3.03491 13.4785 1.62198V20.378C17.2865 18.9651 20.0003 15.2996 20.0003 11Z" fill="#D80027"/>
                        <path d="M0 11C0 15.2996 2.71379 18.9651 6.52176 20.378V1.62198C2.71379 3.03491 0 6.70034 0 11Z" fill="#0052B4"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41830">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        French
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_832_41834)">
                    <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#D80027"/>
                    <path d="M9.99941 15.7826C12.6408 15.7826 14.782 13.6414 14.782 11C14.782 8.35863 12.6408 6.21738 9.99941 6.21738C7.35805 6.21738 5.2168 8.35863 5.2168 11C5.2168 13.6414 7.35805 15.7826 9.99941 15.7826Z" fill="#F0F0F0"/>
                    <path d="M10.5895 9.17133L11.4099 10.302L12.7387 9.87113L11.917 11.0008L12.7373 12.1314L11.409 11.6989L10.5872 12.8286L10.5881 11.4317L9.25977 10.9992L10.5886 10.5684L10.5895 9.17133Z" fill="#D80027"/>
                    <path d="M11.0867 13.8261C9.5259 13.8261 8.26059 12.5608 8.26059 11C8.26059 9.43923 9.5259 8.17392 11.0867 8.17392C11.5733 8.17392 12.0313 8.29696 12.431 8.5136C11.8039 7.90028 10.9463 7.52173 9.99973 7.52173C8.07879 7.52173 6.52148 9.07899 6.52148 11C6.52148 12.9209 8.07879 14.4782 9.99973 14.4782C10.9463 14.4782 11.8039 14.0997 12.431 13.4863C12.0313 13.7031 11.5733 13.8261 11.0867 13.8261Z" fill="#D80027"/>
                    </g>
                    <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                    <defs>
                    <clipPath id="clip0_832_41834">
                    <rect y="1" width="20" height="20" rx="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Tunisian
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41838)">
                        <path d="M0.621094 14.4783C2.03402 18.2862 5.69945 21 9.9991 21C14.2987 21 17.9642 18.2862 19.3771 14.4783L9.9991 13.6087L0.621094 14.4783Z" fill="#FFDA44"/>
                        <path d="M9.9991 1C5.69945 1 2.03402 3.71375 0.621094 7.52176L9.9991 8.39129L19.3771 7.52172C17.9642 3.71375 14.2987 1 9.9991 1Z" fill="black"/>
                        <path d="M0.621992 7.52176C0.220039 8.60508 0 9.7768 0 11C0 12.2232 0.220039 13.3949 0.621992 14.4782H19.378C19.78 13.3949 20 12.2232 20 11C20 9.7768 19.78 8.60508 19.378 7.52176H0.621992Z" fill="#D80027"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41838">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        German
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41842)">
                        <path d="M0 11C0 15.2996 2.71375 18.965 6.52168 20.378L7.39129 10.9999L6.52168 1.62198C2.71375 3.03495 0 6.70034 0 11Z" fill="#6DA544"/>
                        <path d="M19.9998 11C19.9998 5.47719 15.5226 1 9.9998 1C8.7766 1 7.60484 1.22004 6.52148 1.62199V20.378C7.60484 20.78 8.7766 21 9.9998 21C15.5226 21 19.9998 16.5228 19.9998 11Z" fill="#D80027"/>
                        <path d="M6.52121 14.4782C8.44219 14.4782 9.99945 12.921 9.99945 11C9.99945 9.07902 8.44219 7.52176 6.52121 7.52176C4.60023 7.52176 3.04297 9.07902 3.04297 11C3.04297 12.921 4.60023 14.4782 6.52121 14.4782Z" fill="#FFDA44"/>
                        <path d="M4.56445 9.26086V11.4348C4.56445 12.5153 5.44039 13.3913 6.52098 13.3913C7.60156 13.3913 8.4775 12.5154 8.4775 11.4348V9.26086H4.56445Z" fill="#D80027"/>
                        <path d="M6.52133 12.0869C6.16172 12.0869 5.86914 11.7944 5.86914 11.4347V10.5652H7.17348V11.4348C7.17348 11.7944 6.8809 12.0869 6.52133 12.0869Z" fill="#F0F0F0"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41842">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        Portugese
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <img src="/images/usa.svg" /> English - USA
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41826)">
                        <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#F0F0F0"/>
                        <path d="M2.06645 4.91174C1.28094 5.93374 0.688633 7.11167 0.34375 8.39131H5.54602L2.06645 4.91174Z" fill="#0052B4"/>
                        <path d="M19.6553 8.39134C19.3104 7.11173 18.7181 5.9338 17.9326 4.9118L14.4531 8.39134H19.6553Z" fill="#0052B4"/>
                        <path d="M0.34375 13.6087C0.688672 14.8883 1.28098 16.0662 2.06645 17.0882L5.5459 13.6087H0.34375Z" fill="#0052B4"/>
                        <path d="M16.087 3.06719C15.065 2.28168 13.8871 1.68937 12.6074 1.34445V6.54668L16.087 3.06719Z" fill="#0052B4"/>
                        <path d="M3.91211 18.9327C4.9341 19.7182 6.11203 20.3105 7.39164 20.6554V15.4532L3.91211 18.9327Z" fill="#0052B4"/>
                        <path d="M7.3916 1.34445C6.11199 1.68937 4.93406 2.28168 3.91211 3.06715L7.3916 6.54664V1.34445Z" fill="#0052B4"/>
                        <path d="M12.6074 20.6554C13.887 20.3105 15.065 19.7182 16.0869 18.9327L12.6074 15.4532V20.6554Z" fill="#0052B4"/>
                        <path d="M14.4531 13.6087L17.9326 17.0882C18.7181 16.0663 19.3104 14.8883 19.6553 13.6087H14.4531Z" fill="#0052B4"/>
                        <path d="M19.9154 9.69566H11.3044H11.3044V1.08465C10.8774 1.02906 10.4421 1 10 1C9.55785 1 9.12262 1.02906 8.69566 1.08465V9.69559V9.69563H0.0846484C0.0290625 10.1226 0 10.5579 0 11C0 11.4421 0.0290625 11.8774 0.0846484 12.3043H8.69559H8.69563V20.9154C9.12262 20.9709 9.55785 21 10 21C10.4421 21 10.8774 20.971 11.3043 20.9154V12.3044V12.3044H19.9154C19.9709 11.8774 20 11.4421 20 11C20 10.5579 19.9709 10.1226 19.9154 9.69566Z" fill="#D80027"/>
                        <path d="M12.6094 13.6088L17.0717 18.0711C17.277 17.866 17.4727 17.6515 17.6595 17.4291L13.8391 13.6087H12.6094V13.6088Z" fill="#D80027"/>
                        <path d="M7.39207 13.6088H7.39199L2.92969 18.0711C3.13484 18.2763 3.34934 18.4721 3.57168 18.6589L7.39207 14.8384V13.6088Z" fill="#D80027"/>
                        <path d="M7.39195 8.39135V8.39128L2.92961 3.92889C2.72438 4.13405 2.52859 4.34854 2.3418 4.57089L6.16223 8.39132H7.39195V8.39135Z" fill="#D80027"/>
                        <path d="M12.6094 8.39141L17.0718 3.92899C16.8666 3.72376 16.6521 3.52797 16.4298 3.34122L12.6094 7.16165V8.39141Z" fill="#D80027"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41826">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        English - UK
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41830)">
                        <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#F0F0F0"/>
                        <path d="M20.0003 11C20.0003 6.70034 17.2865 3.03491 13.4785 1.62198V20.378C17.2865 18.9651 20.0003 15.2996 20.0003 11Z" fill="#D80027"/>
                        <path d="M0 11C0 15.2996 2.71379 18.9651 6.52176 20.378V1.62198C2.71379 3.03491 0 6.70034 0 11Z" fill="#0052B4"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41830">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        French
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_832_41834)">
                    <path d="M10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21Z" fill="#D80027"/>
                    <path d="M9.99941 15.7826C12.6408 15.7826 14.782 13.6414 14.782 11C14.782 8.35863 12.6408 6.21738 9.99941 6.21738C7.35805 6.21738 5.2168 8.35863 5.2168 11C5.2168 13.6414 7.35805 15.7826 9.99941 15.7826Z" fill="#F0F0F0"/>
                    <path d="M10.5895 9.17133L11.4099 10.302L12.7387 9.87113L11.917 11.0008L12.7373 12.1314L11.409 11.6989L10.5872 12.8286L10.5881 11.4317L9.25977 10.9992L10.5886 10.5684L10.5895 9.17133Z" fill="#D80027"/>
                    <path d="M11.0867 13.8261C9.5259 13.8261 8.26059 12.5608 8.26059 11C8.26059 9.43923 9.5259 8.17392 11.0867 8.17392C11.5733 8.17392 12.0313 8.29696 12.431 8.5136C11.8039 7.90028 10.9463 7.52173 9.99973 7.52173C8.07879 7.52173 6.52148 9.07899 6.52148 11C6.52148 12.9209 8.07879 14.4782 9.99973 14.4782C10.9463 14.4782 11.8039 14.0997 12.431 13.4863C12.0313 13.7031 11.5733 13.8261 11.0867 13.8261Z" fill="#D80027"/>
                    </g>
                    <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                    <defs>
                    <clipPath id="clip0_832_41834">
                    <rect y="1" width="20" height="20" rx="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Tunisian
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41838)">
                        <path d="M0.621094 14.4783C2.03402 18.2862 5.69945 21 9.9991 21C14.2987 21 17.9642 18.2862 19.3771 14.4783L9.9991 13.6087L0.621094 14.4783Z" fill="#FFDA44"/>
                        <path d="M9.9991 1C5.69945 1 2.03402 3.71375 0.621094 7.52176L9.9991 8.39129L19.3771 7.52172C17.9642 3.71375 14.2987 1 9.9991 1Z" fill="black"/>
                        <path d="M0.621992 7.52176C0.220039 8.60508 0 9.7768 0 11C0 12.2232 0.220039 13.3949 0.621992 14.4782H19.378C19.78 13.3949 20 12.2232 20 11C20 9.7768 19.78 8.60508 19.378 7.52176H0.621992Z" fill="#D80027"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41838">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        German
                    </div>
                    <div className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_832_41842)">
                        <path d="M0 11C0 15.2996 2.71375 18.965 6.52168 20.378L7.39129 10.9999L6.52168 1.62198C2.71375 3.03495 0 6.70034 0 11Z" fill="#6DA544"/>
                        <path d="M19.9998 11C19.9998 5.47719 15.5226 1 9.9998 1C8.7766 1 7.60484 1.22004 6.52148 1.62199V20.378C7.60484 20.78 8.7766 21 9.9998 21C15.5226 21 19.9998 16.5228 19.9998 11Z" fill="#D80027"/>
                        <path d="M6.52121 14.4782C8.44219 14.4782 9.99945 12.921 9.99945 11C9.99945 9.07902 8.44219 7.52176 6.52121 7.52176C4.60023 7.52176 3.04297 9.07902 3.04297 11C3.04297 12.921 4.60023 14.4782 6.52121 14.4782Z" fill="#FFDA44"/>
                        <path d="M4.56445 9.26086V11.4348C4.56445 12.5153 5.44039 13.3913 6.52098 13.3913C7.60156 13.3913 8.4775 12.5154 8.4775 11.4348V9.26086H4.56445Z" fill="#D80027"/>
                        <path d="M6.52133 12.0869C6.16172 12.0869 5.86914 11.7944 5.86914 11.4347V10.5652H7.17348V11.4348C7.17348 11.7944 6.8809 12.0869 6.52133 12.0869Z" fill="#F0F0F0"/>
                        </g>
                        <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                        <defs>
                        <clipPath id="clip0_832_41842">
                        <rect y="1" width="20" height="20" rx="10" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        Portugese
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Languages