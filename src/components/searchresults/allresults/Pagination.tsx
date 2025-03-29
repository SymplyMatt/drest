
const Pagination = () => {
    return (
        <div className="flex items-center gap-[18px] mt-[-36px]">
            <div className="opacity-50 cursor-not-allowed flex gap-[8px] items-center justify-center cursor-pointer border border-[#D6D6D5] py-[8px] px-[24px] h-[48px] text-[#141511] font-medium"><img src="/images/arrow_right.svg"/> PREVIOUS</div>
            <span>1/13</span>
            <div className="flex gap-[8px] items-center justify-center cursor-pointer border border-[#D6D6D5] py-[8px] px-[24px] h-[48px] text-[#141511] font-medium">NEXT <img src="/images/arrow_left.svg"/></div>
        </div>
    );
};

export default Pagination