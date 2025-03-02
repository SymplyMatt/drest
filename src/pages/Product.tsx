import ProductHero from "../components/product/ProductHero";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";

const Product = () => {
    return (
        <Layout>
            <ProductHero />
            <div className="w-full flex flex-col border border-[#D6D6D5] px-[50px] py-[24px] gap-[24px]">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between font-semibold text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] cursor-pointer  p-[20px] border border-[#D6D6D5]">Description <img src="/images/minus.svg"/></div>
                    <div className="w-full p-[20px] p-[20px] border-b border-r border-l border-[#D6D6D5] gap-[8px] flex justify-center flex-col">
                        <div className="font-medium text-[18px] leading-[27px] tracking-[-4%]">Product Sku: 95201125; Color Code: 001</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Vintage-inspired Wrangler short in a classic, rigid denim. Micro denim short designed to mimic the look and fit of a great pair of vintage denim cut-off into  shorts with a high-rise waistline, 5-pocket styling and raw hems.</div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between font-semibold text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] cursor-pointer  p-[20px] border border-[#D6D6D5]">Features <img src="/images/minus.svg"/></div>
                    <div className="w-full p-[20px] p-[20px] border-b border-r border-l border-[#D6D6D5] gap-[8px] flex justify-center flex-col">
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Wrangler Reworked denim cutoff short</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Denim micro short</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Rigid non-stretch denim</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- High-rise waistline</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- 5-pocket styling</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Wrangler patch at the back pocket</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Raw hems</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Slim fit</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Micro length</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Zip-fly and button closure</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Content + Care</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- 100% Cotton</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Machine wash</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Imported</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Size + Fit</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Model in Shadow Black is 5’9.5" and wearing size 27</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Measurements taken from size 27</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Waist: 29"</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Rise: 12"</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Inseam: 3.5"</div>
                    </div>
                </div>
            </div>
            <UpsellSlider/>
        </Layout>
    );
};

export default Product;