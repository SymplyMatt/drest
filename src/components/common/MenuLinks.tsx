import FullMenu from '../menulinks/FullMenu';
import NewsMenu from '../menulinks/NewsMenu';

type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const MenuLinks: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
  return (
    <>
        {hoveredMenu === "New Arrivals" && <NewsMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/>}        
        {hoveredMenu === "Shoes" && <FullMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/>}        
    </>
  )
}

export default MenuLinks