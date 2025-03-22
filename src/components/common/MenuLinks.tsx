import NewsMenu from '../menulinks/NewsMenu';
import ShoesMenu from '../menulinks/ShoesMenu';

type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const MenuLinks: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
  return (
    <>
        {hoveredMenu === "New Arrivals" && <NewsMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/>}        
        {/* {hoveredMenu === "Shoes" && <ShoesMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/>}         */}
        {true && <ShoesMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/>}        
    </>
  )
}

export default MenuLinks