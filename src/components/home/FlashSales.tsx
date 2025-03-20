import UpsellSlider from '../product/UpsellSlider'
import homeimageone from '../../assets/images/homeimageone.png';

const FlashSales = () => {
  return (
    <>
      <div className="w-full flex-col items-center justify-center">
          <div className="w-full h-[60px] bg-[#BD3322] flex items-center justify-between px-[50px]">
              <div className="text-[#FFFFFF] font-bold">FLASH SALE</div>
              <div className="flex items-center text-white gap-[8px]"><span className="leading-[100%] tracking-[2%]">Time Left:</span> <span className="font-bold">02h : 47m : 05s</span></div>
              <div className="uppercase text-white underline text-[16px] font-medium leading-[24px] tracking-[0%] cursor-pointer">see all</div>
          </div>
          <UpsellSlider showTitle={false} />
      </div>
      <img src={homeimageone} className="w-full h-auto" />
    </>
  )
}

export default FlashSales