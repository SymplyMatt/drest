import { useEffect, useRef, useState } from "react";

const Currencies = () => {
    const [showCurrencies, setShowCurrencies] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowCurrencies(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        setShowCurrencies(prev => !prev);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <div className="text-[14px] hidden tmd:flex items-center gap-[4px] cursor-pointer" onClick={toggleDropdown}>
                Currency: <span className="text-[14px] font-extrabold">EUR</span>
                <img src="/images/caretdownsm.svg" />
            </div>
            <div
                className={`absolute top-[30px] right-[0px] text-red-900 bg-white z-10 w-[300px] h-[450px] border border-[#C4C4C4] flex flex-col gap-[12px] py-[24px] px-[24px] shadow-lang transition-all duration-300 ease-in-out ${
                    showCurrencies
                        ? "opacity-100 scale-y-100 origin-top"
                        : "opacity-0 scale-y-0 origin-top pointer-events-none"
                } flex flex-col justify-center`}
            >
                <div className="uppercase text-[#4F4F4D] text-[14px]">Currencies</div>
                <div className="w-full h-full overflow-scroll shadow-lang p-[16px] flex flex-col gap-[8px]">
                    <div className="w-full h-[36px] border border-[#D6D6D5] flex items-center justify-between p-[12px] cursor-pointer text-[14px] text-[#959694]">
                        <div className="flex items-center gap-[8px]">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.33268 2.33334C4.57126 2.33334 2.33268 4.57191 2.33268 7.33334C2.33268 10.0948 4.57126 12.3333 7.33268 12.3333C10.0941 12.3333 12.3327 10.0948 12.3327 7.33334C12.3327 4.57191 10.0941 2.33334 7.33268 2.33334ZM0.666016 7.33334C0.666016 3.65144 3.65078 0.666672 7.33268 0.666672C11.0146 0.666672 13.9993 3.65144 13.9993 7.33334C13.9993 8.87393 13.4768 10.2925 12.5992 11.4214L17.0886 15.9107C17.414 16.2362 17.414 16.7638 17.0886 17.0893C16.7632 17.4147 16.2355 17.4147 15.9101 17.0893L11.4207 12.5999C10.2918 13.4774 8.87327 14 7.33268 14C3.65078 14 0.666016 11.0152 0.666016 7.33334Z"
                                    fill="#ADADAC"
                                />
                            </svg>
                            Search
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-8px] h-[350px] overflow-scroll">
                        {[
                            "EUR (Euro)",
                            "USD (US dollar)",
                            "GBP (British pound)",
                            "TND (Tunisina dollar)",
                            "EUR (Euro)",
                            "USD (US dollar)",
                            "GBP (British pound)",
                            "TND (Tunisina dollar)",
                            "EUR (Euro)",
                            "USD (US dollar)",
                            "GBP (British pound)",
                            "TND (Tunisina dollar)",
                        ].map((currency, idx) => (
                            <div
                                key={idx}
                                className="w-full h-[36px] flex items-center py-[12px] cursor-pointer text-[14px] text-[#0F172A] font-medium gap-[8px] hover:bg-[#F4F4F4] px-[12px]"
                            >
                                {currency}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Currencies;
