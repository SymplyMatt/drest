
const Languages = () => {
  return (
    <>
        <div className="flex items-center gap-[8px] cursor-pointer">
            <img src="/images/france.svg" />
            <div className="flex gap-[4px] items-center text-[14px]">
                <span className="text-[14px] font-extrabold">FR</span>
                <span className="text-[#E6E6E6] opacity-[0.7]">|</span>
                <span>French</span>
                <img src="/images/caretdownsm.svg" />
            </div>
        </div>
        <div className="absolute top-[42px] left-[50px] text-red-900 bg-white z-10 w-[300px] h-[450px] border border-[#C4C4C4] flex flex-col gap-[12px] py-[24px] px-[24px] shadow-lang">
            <div className="uppercase text-[#4F4F4D] text-[14px]">Language</div>
            <div className="w-full h-[48px] border border-[#D6D6D5] flex items-center justify-between p-[12px] cursor-pointer">
                <div className="flex items-center gap-[8px] text-[#141511]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_832_41816)">
                    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" fill="#D80027"/>
                    <path d="M10.9994 15.7826C13.6408 15.7826 15.782 13.6414 15.782 11C15.782 8.35863 13.6408 6.21738 10.9994 6.21738C8.35805 6.21738 6.2168 8.35863 6.2168 11C6.2168 13.6414 8.35805 15.7826 10.9994 15.7826Z" fill="#F0F0F0"/>
                    <path d="M11.5895 9.17133L12.4099 10.302L13.7387 9.87114L12.917 11.0008L13.7373 12.1315L12.409 11.699L11.5872 12.8286L11.5881 11.4317L10.2598 10.9992L11.5886 10.5684L11.5895 9.17133Z" fill="#D80027"/>
                    <path d="M12.0867 13.8261C10.5259 13.8261 9.26059 12.5608 9.26059 11C9.26059 9.43922 10.5259 8.17391 12.0867 8.17391C12.5733 8.17391 13.0313 8.29696 13.431 8.5136C12.8039 7.90028 11.9463 7.52172 10.9997 7.52172C9.07879 7.52172 7.52148 9.07899 7.52148 11C7.52148 12.9209 9.07879 14.4782 10.9997 14.4782C11.9463 14.4782 12.8039 14.0997 13.431 13.4863C13.0313 13.703 12.5733 13.8261 12.0867 13.8261Z" fill="#D80027"/>
                    </g>
                    <rect x="0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white"/>
                    <defs>
                    <clipPath id="clip0_832_41816">
                    <rect x="1" y="1" width="20" height="20" rx="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Tunisia
                </div>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.351472 0.341709C0.820101 -0.113903 1.5799 -0.113903 2.04853 0.341709L6 4.18342L9.95147 0.341709C10.4201 -0.113903 11.1799 -0.113903 11.6485 0.341709C12.1172 0.79732 12.1172 1.53601 11.6485 1.99162L6.84853 6.65829C6.3799 7.1139 5.6201 7.1139 5.15147 6.65829L0.351472 1.99162C-0.117157 1.53601 -0.117157 0.79732 0.351472 0.341709Z" fill="#4F4F4D"/>
                </svg>
            </div>
            <div className="w-full h-[300px] overflow-scroll shadow-lang p-[16px] flex flex-col">
                <div className="w-full h-[36px] border border-[#D6D6D5] flex items-center justify-between p-[12px] cursor-pointer text-[14px] text-[#959694]">
                    <div className="flex items-center gap-[8px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33268 2.33334C4.57126 2.33334 2.33268 4.57191 2.33268 7.33334C2.33268 10.0948 4.57126 12.3333 7.33268 12.3333C10.0941 12.3333 12.3327 10.0948 12.3327 7.33334C12.3327 4.57191 10.0941 2.33334 7.33268 2.33334ZM0.666016 7.33334C0.666016 3.65144 3.65078 0.666672 7.33268 0.666672C11.0146 0.666672 13.9993 3.65144 13.9993 7.33334C13.9993 8.87393 13.4768 10.2925 12.5992 11.4214L17.0886 15.9107C17.414 16.2362 17.414 16.7638 17.0886 17.0893C16.7632 17.4147 16.2355 17.4147 15.9101 17.0893L11.4207 12.5999C10.2918 13.4774 8.87327 14 7.33268 14C3.65078 14 0.666016 11.0152 0.666016 7.33334Z" fill="#ADADAC"/>
                    </svg>
                    Search
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Languages