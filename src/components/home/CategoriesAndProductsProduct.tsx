import { useNavigate } from "react-router-dom";
import { Product } from "../../utils/utils";
import { useEffect, useState } from "react";

interface CategoriesAndProductsProps {
    product: Product;
}
const CategoriesAndProductsProduct: React.FC<CategoriesAndProductsProps>= ({product}) => {
    const navigate = useNavigate();
    const discount = ((Number(product.regular_price) - Number(product.price)) / Number(product.regular_price)) * 100;
    const price = Number(product.regular_price);
    const priceAfterDiscount = Number(product.price);
    const allImages = product.images.map((image) => image.src);
    const [hovered, setHovered] = useState<boolean>(false);
    const [activeImage, setActiveImage] = useState<string>(allImages[0]);
    const showImage = hovered ? activeImage : product.images[0]?.src;
    useEffect(() => {
        if (hovered) {
            const intervalId = setInterval(() => {
                const nextIndex:number = (allImages.indexOf(activeImage as string) < allImages.length - 1) ? allImages.indexOf(activeImage) + 1 : 0;
                setActiveImage(allImages[nextIndex]);
            }, 1000);
            return () => clearInterval(intervalId);
        } else {
            setActiveImage(allImages[0]);
        }
    }, [hovered, allImages]);
  return (
    <div className="col-span-1 flex flex-col items-center h-fit tmd:h-[500px] group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="w-full h-[200px] tmd:h-[400px] bg-[#F3F3F3] border border-[#E6E6E6] flex items-center justify-center relative">
            <img src={showImage} className="w-full h-full object-cover" />
            {!location.pathname.includes('wishlist') ? (
                <img src="/images/heart.svg" className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" alt="Add to wishlist" />
            ) : (
                <img src="/images/heartfilled.svg" className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" alt="Remove from wishlist"/>
            )}
            <div className={`text-[12px] tmd:text-[14px] absolute top-[20px] left-[10px] h-[28px] bg-[#8F0024] p-[6px] tmd:p-[10px] flex justify-center items-center text-white font-semibold leading-[21px] tracking-[-4%] gap-[8px] ${!discount && 'hidden'}`}>
                <img src="/images/discountbadge.svg" alt="Discount" /> {Math.round(discount)}% OFF
            </div>
            <img src="/images/rec_plus.svg" className="cursor-pointer absolute bottom-[20px] right-[10px]"alt="Add" />
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
                {product.categories.length > 0 ? product.categories[0].name.replace(/&amp;/g, "&") : 'Uncategorized'}
            </div>
            
            <div className="text-[18px] leading-[27px] tracking-[0%] text-center">
                {product.name.replace(/&amp;/g, "&").length < 30 ? product.name.replace(/&amp;/g, "&") : product.name.replace(/&amp;/g, "&").substring(0, 30) + '...'}
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
  )
}

export default CategoriesAndProductsProduct