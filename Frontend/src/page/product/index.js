// tools
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/product/index";
// actions
import { getProducts as listProducts } from "../../redux/actions/productActions";
// style
import { ProductPage, LoadingAndErrorTitleProduct } from "./view";

function Products() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <ProductPage>
      {loading ? (
        <LoadingAndErrorTitleProduct>loading...</LoadingAndErrorTitleProduct>
      ) : error ? (
        <LoadingAndErrorTitleProduct>{error}</LoadingAndErrorTitleProduct>
      ) : (
        products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              description={product.description}
              productId={product._id}
            />
          );
        })
      )}
    </ProductPage>
  );
}

export default Products;
