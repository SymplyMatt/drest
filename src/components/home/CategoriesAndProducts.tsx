import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface CategoriesAndProductsProps {
    title?: string;
    products?: any[];
    showTitle?: boolean;
    titleComponent?: ReactNode;
}

const CategoriesAndProducts: React.FC<CategoriesAndProductsProps> = ({ 
    title = 'Trending', 
    products = [1, 2, 3, 4, 5, 6, 7, 8], 
    showTitle = true, 
    titleComponent = <></> 
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const allImages: string[] = [
        '/images/recommended1.png',
        '/images/recommended2.png',
        '/images/recommended3.png',
        '/images/recommended4.png',
        '/images/recommended5.png',
        '/images/recommended6.png',
        '/images/recommended7.png',
        '/images/recommended8.png'
    ];
    const brands: string[] = [
        'Adidas',
        'Fendi',
        'Versace',
        'Gucci',
        'Louis Vuitton',
        'Cristian Dior',
        'Prada',
        'Balenciaga',
    ];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeImage, setActiveImage] = useState<string>(allImages[0]);
    useEffect(() => {
        if (hoveredIndex !== null) {
            const intervalId = setInterval(() => {
                setActiveImage(prevImage => {
                    const currentIndex = allImages.indexOf(prevImage);
                    const nextIndex = (currentIndex < allImages.length - 1) ? currentIndex + 1 : 0;
                    return allImages[nextIndex];
                });
            }, 1000);
            return () => clearInterval(intervalId);
        } else {
            setActiveImage(allImages[0]);
        }
    }, [hoveredIndex, allImages]);
    
    return (
        <div className="w-full flex flex-col items-center gap-[24px] mb-[50px]">
            {titleComponent}
            {showTitle && (
                <div className="w-full flex flex-col gap-[0px] tmd:gap-[20px] justify-center tmd:px-[50px]">
                    <div className="w-full flex items-center justify-between h-[48px] my-[20px] tmd:my-[0px] px-[20px] tmd:px-[0px]">
                        <div className="flex items-center gap-[32px]">
                            <div className="text-[24px] font-semibold leading-[32.78px] tracking-[0%]">{title}</div>
                            <div className="items-center gap-[24px] hidden tmd:flex">
                                <img src="/images/line_sm.svg" alt="Divider" />
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
            )}
            
            <div className="w-full grid grid-cols-2 tmd:grid-cols-4">
                {products.map((number, index) => {
                    const imagesLength = allImages.length; 
                    const adjustedNumber = (number % imagesLength) || imagesLength; 
                    const discount = adjustedNumber % 3 !== 0 ? 0 : Math.floor(adjustedNumber / 100 * 100) + 10;
                    const price = Math.floor(adjustedNumber / 100 * 101) + 100;
                    const priceAfterDiscount = price - (price * discount) / 100;
                    const showImage = hoveredIndex === index ? activeImage : `/images/recommended${adjustedNumber}.png`;
                    return (
                        <div 
                            className="col-span-1 flex flex-col items-center h-fit tmd:h-[500px] group" 
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)} 
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="w-full h-[200px] tmd:h-[400px] bg-[#F3F3F3] border border-[#E6E6E6] flex items-center justify-center relative">
                                <img src={showImage} className="w-full h-full object-cover" alt={`Product ${index + 1}`} />
                                
                                {!location.pathname.includes('wishlist') ? (
                                    <img 
                                        src="/images/heart.svg" 
                                        className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" 
                                        alt="Add to wishlist" 
                                    />
                                ) : (
                                    <img 
                                        src="/images/heartfilled.svg" 
                                        className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" 
                                        alt="Remove from wishlist" 
                                    />
                                )}
                                
                                <div className={`text-[12px] tmd:text-[14px] absolute top-[20px] left-[10px] h-[28px] bg-[#8F0024] p-[6px] tmd:p-[10px] flex justify-center items-center text-white font-semibold leading-[21px] tracking-[-4%] gap-[8px] ${!discount && 'hidden'}`}>
                                    <img src="/images/discountbadge.svg" alt="Discount" /> {discount}% OFF
                                </div>
                                
                                <img 
                                    src="/images/rec_plus.svg" 
                                    className="cursor-pointer absolute bottom-[20px] right-[10px]"
                                    alt="Add" 
                                />
                                
                                <div className="w-full h-[80px] border-t border-b border-[#D6D6D5] cursor-pointer absolute bottom-[0px] right-[0px] bg-white flex items-center justify-center p-[16px] opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                                    <div 
                                        className="h-[48px] bg-[#141511] w-full flex items-center justify-center text-white gap-[8px] text-[16px] leading-[24px] tracking-[0%] font-medium transition-transform duration-200 hover:scale-[0.9]"
                                        onClick={() => navigate('/product/productId')}
                                    >
                                        <img src="/images/eye_product.svg" alt="Quick view" /> Quick View
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center gap-[4px] tmd:h-[100px] border-b border-l border-r border-[#E6E6E6] w-full py-[12px] px-[16px]">
                                <div className="text-[14px] leading-[27px] tracking-[0%] text-[#141511] font-semibold">
                                    {brands[adjustedNumber - 1]}
                                </div>
                                
                                <div className="text-[18px] leading-[27px] tracking-[0%] text-center">
                                    Ocean breeze varsity jacket
                                </div>
                                
                                <div className="text-[18px] font-semibold leading-[26px] tracking-[-5%] price">
                                    {Math.round(priceAfterDiscount)} TND 
                                    {discount ? (
                                        <span className="font-semibold text-[#8F0024] text-[16px] leading-[24px] tracking-[-4%] line-through ml-2">
                                            {price} TND
                                        </span>
                                    ) : ''}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoriesAndProducts;