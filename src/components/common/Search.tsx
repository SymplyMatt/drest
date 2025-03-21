import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EmptySearch from "../search/EmptySearch";
import SearchResults from "../search/SearchResults";

const Auth = () => {
  const { searchMode } = useSelector((state: RootState) => state.app);
  return (
    <>
        {searchMode === 'empty' && <EmptySearch />}
        {searchMode === 'results' && <SearchResults />}
    </>
  );
};

export default Auth;