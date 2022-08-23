import { Link } from "react-router-dom";
import { CategoryItem } from "../../store/categories/categories.types";
import { ItemProps } from "../cart-item/cart-item";
import ProductCard from "../product-card/product-card";
import "./category-preview.styles.scss";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[]
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
