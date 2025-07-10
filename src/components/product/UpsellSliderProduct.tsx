import { Product } from "../../utils/utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { addToWishlist, removeFromWishlist } from "../../redux/states/app";
import { useDispatch } from "react-redux";

interface CategoriesAndProductsProps {
    product: Product;
}
const UpsellSliderProduct: React.FC<CategoriesAndProductsProps> =({product}) => {
    const navigate = useNavigate();
    const discount = (product.regular_price && product.price && product.regular_price > product.price) ? (((Number(product.regular_price) - Number(product.price)) / Number(product.regular_price)) * 100) : 0;
    const price = Number(product.regular_price);
    const priceAfterDiscount = Number(product.price);
    const allImages = product.images.map((image) => image.src);
    const [hovered, setHovered] = useState<boolean>(false);
    const [activeImage, setActiveImage] = useState<string>(allImages[0]);
    const { wishlist } = useSelector((state: RootState) => state.app);
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    const dispatch = useDispatch();
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
        <div className="flex flex-col items-center group cursor-pointer w-full" 
            onMouseEnter={() =>{ 
                setHovered(true);
            }} 
            onMouseLeave={() => {
                setHovered(false);
            }}>
            <div className="w-[300px] h-[400px] tmd:w-full tmd:h-[400px] bg-[#F3F3F3] border border-[#E6E6E6] flex items-center justify-center relative">
                <img src={(hovered) ? activeImage : product.images[0]?.src} className="w-full h-full object-contain" />
                {!isInWishlist && <img src="/images/heart.svg" className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" 
                    onClick={() => {
                        dispatch(addToWishlist(product));
                    }}
                />}
                {isInWishlist && <img src="/images/heartfilled.svg" className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" alt="Remove from wishlist"
                    onClick={() => {
                        dispatch(removeFromWishlist(product.id));
                    }}
                />}
                <div
                    className={`absolute top-[20px] left-[10px] h-[28px] bg-[#8F0024] p-[10px] flex justify-center items-center text-white text-[14px] font-semibold leading-[21px] tracking-[-4%] gap-[8px] ${
                        !discount && "hidden"
                    }`}
                >
                    <img src="/images/discountbadge.svg" /> {Math.round(discount)}% OFF
                </div>
                <img src="/images/rec_plus.svg" className="cursor-pointer absolute bottom-[20px] right-[10px]" />
                <div className="w-full h-[80px] border-t border-b border-[#D6D6D5] cursor-pointer absolute bottom-[0px] right-[0px] bg-white flex items-center justify-center p-[16px] opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <div
                        className="h-[48px] bg-[#141511] w-full flex items-center justify-center text-white gap-[8px] text-[16px] leading-[24px] tracking-[0%] font-medium transition-transform duration-200 hover:scale-[0.9]"
                        onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                    >
                        <img src="/images/eye_product.svg" /> Quick View
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[4px] h-[80px] border-b border-l border-r border-[#E6E6E6] w-full z-10 relative top-0 left-0">
                <div className="text-[18px] leading-[27px] tracking-[0%]">{product.name.replace(/&amp;/g, "&").length < 30 ? product.name.replace(/&amp;/g, "&") : product.name.replace(/&amp;/g, "&").substring(0,30) + "..."}</div>
                <div className="text-[18px] font-semibold leading-[26px] tracking-[-5%] price">
                    {priceAfterDiscount} TND
                    {discount ? (
                        <span className="font-semibold text-[#8F0024] text-[16px] leading-[24px] tracking-[-4%] line-through">{price} TND</span>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    )
}

export default UpsellSliderProduct