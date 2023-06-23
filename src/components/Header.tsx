import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/fetchCats";
import { useAppDispatch, useAppSelector } from "../store";
import { catsState, setCategories } from "../store/slices/catsSlice";
import "./style.css";

const Header = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(catsState).categories;

  useEffect(() => {
    fetchCategories().then(result => {
      dispatch(setCategories(result));
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="categories">
          <Link to="/">HOME</Link>
          {categories.map(ctg => (
            <Link to={`id/${ctg.name}`} key={ctg.id} state={{ id: ctg.id }}>
              {ctg.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
