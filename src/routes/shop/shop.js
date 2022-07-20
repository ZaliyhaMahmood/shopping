import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  fetchCategoriesAsync,
} from "../../store/categories/categories.action";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCollectionAndDocuments();
  //     dispatch(setCategories(categoriesArray));
  //   };
  //   getCategoriesMap();
  // }, []);

  //changed to this using redux-thunk

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
