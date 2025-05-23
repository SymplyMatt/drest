import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setAuthPage } from "../../redux/states/auth";
import { useSelector } from "react-redux";
import { setSearchMode, setShowAccount } from "../../redux/states/app";
import { useLocation, useNavigate } from "react-router-dom";

const MobileFooter = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { authPage } = useSelector((state: RootState) => state.auth);
    const { loggedInUser, searchMode, showAccount } = useSelector((state: RootState) => state.app);
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];
    const navigate = useNavigate();
    const clearModals = () => {
        searchMode && dispatch(setSearchMode(null));
        showAccount && dispatch(setShowAccount(false));
        authPage && dispatch(setAuthPage(null));
    }
    return (
        <div className="fixed bottom-0 left-0 w-full h-[80px] bg-[#FFFFFF] z-10 px-[26px] tmd:hidden grid grid-cols-5 items-center justify-between border border-[#EAEAEA] gap-[12px]">
            <div className={`col-span-1 flex flex-col items-center gap-[4px] text-center text-[12px] ${(!authPage  && currentPath == '') ? 'font-bold' : 'font-medium'} ${(!authPage  && currentPath == '') ? 'text-[#912A1D]' : 'text-[#141511]'}`}
                onClick={() => {
                    clearModals();
                    navigate('/');
                }}>
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 18V6L8.5 0L16.5 6V18H10.5V11H6.5V18H0.5Z" fill={(!authPage  && currentPath == '') ? "#912A1D" : 'black'}/>
                </svg>
                Home
            </div>
            <div className="col-span-1 flex flex-col items-center gap-[4px] text-center text-[#141511] text-[12px] font-medium"
                onClick={() => {
                    clearModals();
                }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 5.00022C14.5717 5.00022 13.6815 5.36897 13.0251 6.02535C12.3687 6.68172 12 7.57196 12 8.50022C12 9.42848 12.3687 10.3187 13.0251 10.9751C13.6815 11.6315 14.5717 12.0002 15.5 12.0002C16.4283 12.0002 17.3185 11.6315 17.9749 10.9751C18.6313 10.3187 19 9.42848 19 8.50022C19 7.57196 18.6313 6.68172 17.9749 6.02535C17.3185 5.36897 16.4283 5.00022 15.5 5.00022ZM10 8.50022C10.0001 7.63833 10.2028 6.78852 10.5917 6.01935C10.9806 5.25018 11.5448 4.58317 12.2388 4.07212C12.9329 3.56107 13.7373 3.22028 14.5872 3.07724C15.4372 2.93421 16.3088 2.99293 17.1319 3.24866C17.955 3.5044 18.7065 3.94999 19.3257 4.54951C19.9449 5.14902 20.4146 5.88568 20.6968 6.70006C20.979 7.51444 21.0659 8.38374 20.9504 9.23787C20.8349 10.092 20.5203 10.907 20.032 11.6172L22.707 14.2932L21.293 15.7072L18.618 13.0322C17.7922 13.6005 16.8267 13.9323 15.826 13.9918C14.8253 14.0512 13.8273 13.836 12.9401 13.3694C12.0528 12.9028 11.3099 12.2025 10.7917 11.3444C10.2736 10.4862 9.99978 9.50271 10 8.50022ZM3 4.00022H8V6.00022H3V4.00022ZM3 11.0002H8V13.0002H3V11.0002ZM21 18.0002V20.0002H3V18.0002H21Z" fill="black"/>
                </svg>
                Categories
            </div>
            <div className="col-span-1 flex flex-col items-center gap-[4px] text-center text-[#141511] text-[12px] font-medium"
                onClick={() => {
                    clearModals();
                }}>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99816 0.25C6.81501 0.25 5.02302 2.04199 5.02302 4.22514V5.02017H1.09717L1.04787 5.76591L0.252846 20.0764L0.202759 20.9207H17.7928L17.7435 20.0756L16.9484 5.76511L16.8984 5.02017H12.9733V4.22514C12.9733 2.04199 11.1813 0.25 8.99816 0.25ZM8.99816 1.84006C9.63072 1.84006 10.2374 2.09134 10.6847 2.53863C11.132 2.98592 11.3832 3.59258 11.3832 4.22514V5.02017H6.61307V4.22514C6.61307 3.59258 6.86436 2.98592 7.31165 2.53863C7.75894 2.09134 8.36559 1.84006 8.99816 1.84006ZM2.58784 6.61023H5.02302V8.99531H6.61307V6.61023H11.3832V8.99531H12.9733V6.61023H15.4085L16.1041 19.3307H1.89299L2.58784 6.61023Z" fill="black"/>
                </svg>
                Bag
            </div>
            <div className="col-span-1 flex flex-col items-center gap-[4px] text-center text-[#141511] text-[12px] font-medium">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.501 1.81807C11.7162 0.750808 13.2989 0.198124 14.9143 0.276937C16.5297 0.35575 18.0511 1.05988 19.1566 2.24037C20.2622 3.42085 20.8651 4.9851 20.8379 6.6022C20.8108 8.2193 20.1556 9.7624 19.011 10.9051L13.787 16.1301L10.5 19.4151L3.22 12.1361L1.99 10.9041C0.848888 9.76066 0.196689 8.2186 0.171072 6.6034C0.145455 4.9882 0.748424 3.42624 1.8527 2.24722C2.95698 1.0682 4.47617 0.364367 6.08958 0.284296C7.703 0.204225 9.28441 0.754178 10.5 1.81807M13.785 13.3031L17.596 9.49107C17.9887 9.09842 18.3001 8.63227 18.5126 8.11925C18.7251 7.60622 18.8345 7.05636 18.8345 6.50107C18.8345 5.94578 18.7251 5.39592 18.5126 4.88289C18.3001 4.36987 17.9887 3.90372 17.596 3.51107C17.2033 3.11842 16.7372 2.80695 16.2242 2.59445C15.7112 2.38194 15.1613 2.27257 14.606 2.27257C14.0507 2.27257 13.5008 2.38194 12.9878 2.59445C12.4748 2.80695 12.0087 3.11842 11.616 3.51107L10.5 4.62707L9.383 3.51007C8.59 2.71707 7.51447 2.27157 6.393 2.27157C5.27153 2.27157 4.196 2.71707 3.403 3.51007C2.61 4.30307 2.1645 5.3786 2.1645 6.50007C2.1645 7.62154 2.61 8.69707 3.403 9.49007L4.635 10.7221L10.5 16.5871L13.785 13.3021" fill="black"/>
                </svg>
                Wishlist
            </div>
            <div className={`col-span-1 flex flex-col items-center gap-[4px] text-center text-[12px] ${(authPage) ? 'font-bold' : 'font-medium'} ${authPage ? 'text-[#912A1D]' : ''}`} 
                onClick={() => {
                    clearModals();
                    !loggedInUser && !authPage && dispatch(setAuthPage("emaillogin"));
                    loggedInUser && dispatch(setShowAccount(true));
                }}>
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 8C15.5 9.06087 15.0786 10.0783 14.3284 10.8284C13.5783 11.5786 12.5609 12 11.5 12C10.4391 12 9.42172 11.5786 8.67157 10.8284C7.92143 10.0783 7.5 9.06087 7.5 8C7.5 6.93913 7.92143 5.92172 8.67157 5.17157C9.42172 4.42143 10.4391 4 11.5 4C12.5609 4 13.5783 4.42143 14.3284 5.17157C15.0786 5.92172 15.5 6.93913 15.5 8ZM13.5 8C13.5 8.53043 13.2893 9.03914 12.9142 9.41421C12.5391 9.78929 12.0304 10 11.5 10C10.9696 10 10.4609 9.78929 10.0858 9.41421C9.71071 9.03914 9.5 8.53043 9.5 8C9.5 7.46957 9.71071 6.96086 10.0858 6.58579C10.4609 6.21071 10.9696 6 11.5 6C12.0304 6 12.5391 6.21071 12.9142 6.58579C13.2893 6.96086 13.5 7.46957 13.5 8Z" fill={(authPage) ? "#912A1D" : 'black'}/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.425 0 0.5 4.925 0.5 11C0.5 17.075 5.425 22 11.5 22C17.575 22 22.5 17.075 22.5 11C22.5 4.925 17.575 0 11.5 0ZM2.5 11C2.5 13.09 3.213 15.014 4.408 16.542C5.24744 15.4401 6.33015 14.5471 7.57164 13.9327C8.81312 13.3183 10.1798 12.9991 11.565 13C12.9324 12.9984 14.2821 13.3091 15.5111 13.9084C16.7402 14.5077 17.8162 15.3797 18.657 16.458C19.5234 15.3216 20.1068 13.9952 20.3589 12.5886C20.611 11.182 20.5244 9.73553 20.1065 8.36898C19.6886 7.00243 18.9512 5.75505 17.9555 4.73004C16.9598 3.70503 15.7343 2.93186 14.3804 2.47451C13.0265 2.01716 11.5832 1.88877 10.1699 2.09997C8.75652 2.31117 7.41379 2.85589 6.25277 3.68905C5.09175 4.52222 4.14581 5.61987 3.49323 6.8912C2.84065 8.16252 2.50018 9.57097 2.5 11ZM11.5 20C9.43391 20.0033 7.43014 19.2926 5.828 17.988C6.47281 17.0646 7.33119 16.3107 8.33008 15.7905C9.32896 15.2702 10.4388 14.999 11.565 15C12.6772 14.999 13.7735 15.2635 14.763 15.7713C15.7524 16.2792 16.6064 17.0158 17.254 17.92C15.6395 19.267 13.6026 20.0033 11.5 20Z" fill={(authPage) ? "#912A1D" : 'black'} />
                </svg>
                Account
            </div>
        </div>
    )
}

export default MobileFooter