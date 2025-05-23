import UpsellSlider from '../product/UpsellSlider'
import homeimageone from '../../assets/images/homeimageone.png';

const FlashSales = () => {
  return (
    <>
      <div className="w-full flex-col items-center justify-center">
          <div className="w-full tmd:h-[60px] bg-[#BD3322] flex tmd:items-center justify-between py-[16px] px-[20px] tmd:px-[50px] flex-col tmd:flex-row relative tmd:static">
              <div className="text-[#FFFFFF] font-bold flex items-center gap-[8px]">
                <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 9H5.8L9 0.5H3.5L0.5 11H4.8L2.5 20.5L10.5 9Z" fill="#FFC107"/>
                </svg>
                FLASH SALE</div>
              <div className="flex items-center text-white gap-[8px]"><span className="leading-[100%] tracking-[2%]">Time Left:</span> <span className="font-bold">02h : 47m : 05s</span></div>
              <div className="uppercase text-white underline text-[16px] font-medium leading-[24px] tracking-[0%] cursor-pointer absolute right-[16px] top-1/2 -translate-y-1/2 tmd:static  tmd:top-auto tmd:translate-y-0">see all</div>
          </div>
          <UpsellSlider showTitle={false} />
      </div>
      <img src={homeimageone} className="w-full h-auto" />
    </>
  )
}

export default FlashSales