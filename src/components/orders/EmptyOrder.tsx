import { useNavigate } from "react-router-dom"

const EmptyOrder = () => {
  const navigate = useNavigate();
  return (
      <div className="flex flex-col items-center justify-center min-h-[500px] tmd:min-h-[800px] tmd:border-b tmd:border-l border-[#D6D6D5]">
        <div className="flex flex-col items-center justify-center max-w-[550px] gap-[18px] text-center px-[20px]">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[100px] w-[100px] tmd:h-[200px] tmd:w-[200px]">
                <path d="M176.611 200.001H23.6364C20.1999 200.001 17.4141 197.215 17.4141 193.779V66.3684C17.4141 62.9319 20.1999 60.1461 23.6364 60.1461H176.611C180.047 60.1461 182.833 62.9319 182.833 66.3684V193.779C182.833 197.215 180.047 200.001 176.611 200.001Z" fill="url(#paint0_linear_1174_16541)"/>
                <path d="M182.836 66.3672V193.779C182.836 197.216 180.051 200.002 176.614 200.002H133.152C136.59 200.002 139.375 197.216 139.375 193.779V60.1483H176.614C180.051 60.1483 182.836 62.9338 182.836 66.3672Z" fill="url(#paint1_linear_1174_16541)"/>
                <path d="M17.4141 166.269V193.779C17.4141 197.215 20.1999 200.001 23.6364 200.001H176.611C180.047 200.001 182.833 197.215 182.833 193.779V166.269H17.4141Z" fill="url(#paint2_linear_1174_16541)"/>
                <path d="M35.1803 163.015H39.1627V176.319C39.1627 176.85 39.5929 177.281 40.1238 177.281H47.2831C47.814 177.281 48.2442 176.85 48.2442 176.319V163.015H52.2266C53.4446 163.015 54.1736 161.66 53.5027 160.643L44.9795 147.73C44.3752 146.814 43.0313 146.814 42.427 147.73L33.9038 160.643C33.2329 161.66 33.9623 163.015 35.1803 163.015Z" fill="#C4573A"/>
                <path d="M56.0599 181.821H31.3493C31.0077 181.821 30.7305 182.098 30.7305 182.44V186.068C30.7305 186.41 31.0073 186.687 31.3493 186.687H56.0599C56.4015 186.687 56.6787 186.41 56.6787 186.068V182.44C56.6787 182.098 56.4015 181.821 56.0599 181.821Z" fill="#C4573A"/>
                <path d="M160.456 167.874H148.209C147.867 167.874 147.59 167.597 147.59 167.255V163.628C147.59 163.286 147.867 163.009 148.209 163.009H160.456C160.797 163.009 161.075 163.286 161.075 163.628V167.255C161.075 167.597 160.797 167.874 160.456 167.874Z" fill="#C4573A"/>
                <path d="M176.025 177.28H148.209C147.867 177.28 147.59 177.003 147.59 176.661V173.033C147.59 172.691 147.867 172.414 148.209 172.414H176.025C176.366 172.414 176.644 172.691 176.644 173.033V176.661C176.644 177.003 176.367 177.28 176.025 177.28Z" fill="#C4573A"/>
                <path d="M167.591 186.686H148.209C147.867 186.686 147.59 186.409 147.59 186.067V182.439C147.59 182.098 147.867 181.82 148.209 181.82H167.591C167.933 181.82 168.21 182.097 168.21 182.439V186.067C168.21 186.409 167.933 186.686 167.591 186.686Z" fill="#C4573A"/>
                <path d="M182.834 66.3688V193.777C182.834 197.216 180.045 200 176.61 200H104.034L17.4141 113.377V66.3688C17.4141 62.9296 20.1984 60.1452 23.6337 60.1452H176.61C180.045 60.1452 182.834 62.9296 182.834 66.3688Z" fill="url(#paint3_linear_1174_16541)"/>
                <path d="M182.833 101.961H161.07V111.286L182.833 133.049V101.961Z" fill="url(#paint4_linear_1174_16541)"/>
                <path d="M8.84305 113.378H112.28C115.531 113.378 118.458 111.411 119.685 108.401L139.372 60.1475H22.1689C19.294 60.1475 16.705 61.8875 15.6191 64.5491L0.663446 101.206C-1.70714 107.017 2.56737 113.378 8.84305 113.378Z" fill="url(#paint5_linear_1174_16541)"/>
                <path d="M191.155 113.378H166.463C163.213 113.378 160.286 111.411 159.058 108.401L139.371 60.1475H177.83C180.704 60.1475 183.293 61.8875 184.379 64.5491L199.335 101.206C201.706 107.017 197.431 113.378 191.155 113.378Z" fill="url(#paint6_linear_1174_16541)"/>
                <path d="M124.017 33.9137C121.656 31.5529 121.656 27.7255 124.017 25.3647L135.124 14.2576C137.485 11.8968 141.312 11.8968 143.673 14.2576C146.034 16.6184 146.034 20.4459 143.673 22.8066L132.566 33.9137C130.205 36.2745 126.377 36.2745 124.017 33.9137Z" fill="url(#paint7_linear_1174_16541)"/>
                <path d="M56.3292 14.2569C58.69 11.8961 62.5174 11.8961 64.8782 14.2569L75.9853 25.3639C78.346 27.7247 78.346 31.5521 75.9853 33.9129C73.6245 36.2737 69.797 36.2737 67.4362 33.9129L56.3292 22.8059C53.9684 20.4455 53.9684 16.6176 56.3292 14.2569Z" fill="url(#paint8_linear_1174_16541)"/>
                <path d="M99.9982 27.798C96.6594 27.798 93.9531 25.0914 93.9531 21.7529V6.0451C93.9531 2.70667 96.6594 0 99.9982 0C103.337 0 106.043 2.70667 106.043 6.0451V21.7529C106.043 25.0918 103.337 27.798 99.9982 27.798Z" fill="url(#paint9_linear_1174_16541)"/>
                <defs>
                <linearGradient id="paint0_linear_1174_16541" x1="45.2011" y1="75.1512" x2="177.268" y2="207.217" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FEE45A"/>
                <stop offset="1" stop-color="#FE860A"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1174_16541" x1="189.973" y1="97.7593" x2="85.7833" y2="207.642" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE860A" stop-opacity="0"/>
                <stop offset="1" stop-color="#FE7701"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1174_16541" x1="100.123" y1="176.648" x2="100.123" y2="206.552" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE860A" stop-opacity="0"/>
                <stop offset="1" stop-color="#FE7701"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1174_16541" x1="121.056" y1="164.668" x2="83.4102" y2="29.3801" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE860A" stop-opacity="0"/>
                <stop offset="1" stop-color="#FE7701"/>
                </linearGradient>
                <linearGradient id="paint4_linear_1174_16541" x1="201.552" y1="136.224" x2="173.106" y2="107.778" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE860A" stop-opacity="0"/>
                <stop offset="1" stop-color="#FE7701"/>
                </linearGradient>
                <linearGradient id="paint5_linear_1174_16541" x1="69.6862" y1="61.8914" x2="69.6862" y2="128.202" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FEE45A"/>
                <stop offset="1" stop-color="#FE860A"/>
                </linearGradient>
                <linearGradient id="paint6_linear_1174_16541" x1="169.685" y1="60.3926" x2="169.685" y2="118.741" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FEE45A"/>
                <stop offset="1" stop-color="#FE860A"/>
                </linearGradient>
                <linearGradient id="paint7_linear_1174_16541" x1="130.084" y1="20.3704" x2="141.955" y2="32.2407" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A2E62E"/>
                <stop offset="1" stop-color="#02905D"/>
                </linearGradient>
                <linearGradient id="paint8_linear_1174_16541" x1="70.0717" y1="20.117" x2="58.2013" y2="31.9874" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A2E62E"/>
                <stop offset="1" stop-color="#02905D"/>
                </linearGradient>
                <linearGradient id="paint9_linear_1174_16541" x1="94.581" y1="13.8988" x2="111.371" y2="13.8988" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A2E62E"/>
                <stop offset="1" stop-color="#02905D"/>
                </linearGradient>
                </defs>
            </svg>
            <div className="text-[#141511] font-medium text-[28px] tmd:text-[48px] leading-[130%]">Your order history is empty!</div>
            <div className="text-[#676764] text-[18px] tmd:text-[20px] leading-[130%]">It looks like you haven't placed any orders yet. Start exploring our products and place your first order to see it here!</div>
            <div className="h-[48px] bg-[#141511] text-white cursor-pointer flex items-center justify-center py-[8px] px-[24px]" onClick={()=> navigate('/')}>SHOP NOW</div>
        </div>
      </div>
  )
}

export default EmptyOrder