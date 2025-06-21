import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addToWishlist, emptyCart, removeFromWishlist } from "../../redux/states/app";
import { useSelector } from "react-redux";

const CartProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { cart, wishlist } = useSelector((state: RootState) => state.app);
  return (
    <div className="w-full col-span-2 flex flex-col">
        <div className="w-full flex items-center justify-between border-b border-r border-[#D6D6D5] px-[24px] py-[12px]">
            <div className="text-[#141511] text-[20px] font-semibold">YOUR CART</div>
            <div className="flex items-center gap-[12px] text-[#4F4F4D] cursor-pointer font-semibold" onClick={() => dispatch(emptyCart())}><img src="/images/basket.svg"/> DELETE ALL</div>
        </div>
        <div className="w-full flex flex-col p-[24px] gap-[24px] border-b border-r border-[#D6D6D5] h-full">
            {cart.map((cart, index)=>{
                    const discount = (cart.product.regular_price && cart.product.price && cart.product.regular_price > cart.product.price) ? (((Number(cart.product.regular_price) - Number(cart.product.price)) / Number(cart.product.regular_price)) * 100) : 0;
                    const price = Number(cart.product.regular_price);
                    const priceAfterDiscount = Number(cart.product.price);
                return(
                    <div className="grid grid-cols-[1fr_140px_140px_200px] items-center justify-between gap-[24px] w-full" key={index}>
                        <div className="flex items-center gap-[12px] h-[96px]">
                            <img src={cart.product.images[0].src} className="h-full border border-[#D6D6D5] rounded-[4px]"/>
                            <div className="flex flex-col justify-between h-full py-[8px]">
                                <div className="text-[#141511] text-[14px] font-semibold">{cart.product.name}</div>
                                <div className="flex flex-col">
                                    <div className="">Category: {cart.product.categories[0].name}</div>
                                    <div className="">Color: Solid Blue</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px] justify-center">
                            <div className="text-[#676764]">Product size</div>
                            <select className="w-[96px] h-[40px] border border-[#D6D6D5] outline-none py-[8px] px-[12px] cursor-pointer">
                                <option value="xl">XL</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-[8px] justify-center">
                            <div className="text-[#676764]">Quantity</div>
                            <div className="flex justify-center items-center gap-[12px]">
                                <img src="/images/prev_cart.svg" className="cursor-pointer"/>
                                {cart.quantity}
                                <img src="/images/next_cart.svg" className="cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px] justify-between items-end h-[72px]">
                            <div className="flex items-center gap-[8px] price"> {discount ? <span className="text-[#8F0024] font-semibold line-through">{price}TND</span> : ''}<span className="font-semibold">{priceAfterDiscount}TND</span></div>
                            <div className="flex items-center gap-[12px]">
                                {wishlist.some((item) => item.id === cart.product.id) ? <img src="/images/heartfilled.svg" className="cursor-pointer" onClick={()=>dispatch(removeFromWishlist(cart.product.id))}/> : ''}
                                {!wishlist.some((item) => item.id === cart.product.id) ? <img src="/images/heartsm.svg" className="cursor-pointer" onClick={()=>dispatch(addToWishlist(cart.product))}/> : ''}
                                <img src="/images/basket_sm.svg" className="cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CartProducts