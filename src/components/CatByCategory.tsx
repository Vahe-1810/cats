import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { fetchCatImages } from "../utils/fetchCats";
import { useAppDispatch, useAppSelector } from "../store";
import { catsState, setCats } from "../store/slices/catsSlice";

const CatByCategory = () => {
  const id = useLocation().state?.id;
  const dispatch = useAppDispatch();
  const images = useAppSelector(catsState).catImages;
  const [page, setPage] = useState(1);
  const [currId, setCurrId] = useState(id);
  const shouldUpdate = id !== currId;

  useEffect(() => {
    fetchCatImages({ page, categoryId: id }).then(result => {
      dispatch(setCats({ result, shouldUpdate }));
    });
    setCurrId(id);
  }, [id, page]);

  const getMoreImages = () => {
    setPage(page + 1);
    setCurrId(id);
  };

  return (
    <>
      <div className="images">
        {images.map(img => (
          <img key={Math.random()} src={img.url} alt="" />
        ))}
      </div>
      <button className="more-button" onClick={getMoreImages}>
        SEE MORE
      </button>
    </>
  );
};

export default CatByCategory;
