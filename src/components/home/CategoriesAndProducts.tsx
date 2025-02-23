interface CategoriesAndProductsProps {
    title: string;
}
const CategoriesAndProducts: React.FC<CategoriesAndProductsProps> = ({ title }) => {
    const shuffledIndexes = [...Array(8).keys()].sort(() => Math.random() - 0.5);
    return (
        <div className="w-full flex flex-col items-center gap-[24px] mb-[50px]">
            <div className="w-full flex flex-col gap-[20px] justify-center px-[30px]">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex items-center gap-[32px]">
                        <div className="text-[24px] font-semibold leading-[32.78px] tracking-[0%]">{title}</div>
                        <div className="flex items-center gap-[24px]">
                            <img src="/src/assets/images/line_sm.svg" />
                            <div className="h-[43px] bg-[#2B2B2B] text-white flex items-center justify-center p-[12px] text-[14px] font-semibold leading-[19.12px] tracking-[0%] cursor-pointer">WOMEN'S</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">MEN'S</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">CHILDREN'S</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">BEAUTY</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">HOME+LIFESTYLE</div>
                        </div>
                    </div>
                    <div className="h-[48px] bg-white border border-black px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-semibold leading-[24px] tracking-[0%] transition-transform duration-200 hover:scale-[0.9]">VIEW ALL</div>
                </div>
                <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
            </div>
            <div className="w-full grid grid-cols-4">
                {shuffledIndexes.map((number) => {
                    const discount = Math.random() < 0.5 ? 0 : Math.floor(Math.random() * 41) + 10;
                    const price = Math.floor(Math.random() * 101) + 100;
                    const priceAfterDiscount = price - (price * discount) / 100;
                    return(
                        <div className="col-span-1 flex flex-col items-center h-[480px] group" key={number}>
                            <div className="w-full h-[400px] bg-[#F3F3F3] border border-[#E6E6E6] flex items-center justify-center relative">
                                <img src={`/src/assets/images/recommended${number+1}.png`} className="w-full h-full object-cover"/>
                                <img src="/src/assets/images/heart.svg" className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" />
                                <div className={`absolute top-[20px] left-[10px] h-[28px] bg-[#8F0024] p-[10px] flex justify-center items-center text-white text-[14px] font-semibold leading-[21px] tracking-[-4%] gap-[8px] ${!discount && 'hidden'}`}><img src="/src/assets/images/discountbadge.svg" /> {discount}% OFF</div>
                                <img src="/src/assets/images/rec_plus.svg" className="cursor-pointer absolute bottom-[20px] right-[10px]" />
                                <div className="w-full h-[80px] border-t border-b border-[#D6D6D5] cursor-pointer absolute bottom-[0px] right-[0px] bg-white flex items-center justify-center p-[16px] opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                                    <div className="h-[48px] bg-[#141511] w-full flex items-center justify-center text-white gap-[8px] text-[16px] leading-[24px] tracking-[0%] font-medium transition-transform duration-200 hover:scale-[0.9]"><img src="/src/assets/images/eye_product.svg" /> Quick View</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-[4px] h-[80px] border-b border-l border-r border-[#E6E6E6] w-full">
                                <div className="text-[18px] leading-[27px] tracking-[0%]">Ocean breeze varsity jacket</div>
                                <div className="text-[18px] font-semibold leading-[26px] tracking-[-5%] price">{Math.round(priceAfterDiscount)} TND {discount ? <span className="font-semibold text-[#8F0024] text-[16px] leading-[24px] tracking-[-4%] line-through">{price} TND</span> : ''}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoriesAndProducts