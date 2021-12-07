// tools
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/index";
// actions
import { getProducts as listProducts } from "../../redux/actions/productActions";
// style
import { HomePage } from "./view";

function Home() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return <HomePage>
  
  
     {
        loading ? (<h2>loading...</h2>) : error ? ( <h2>{error}</h2>) : (
        products.map((product) => {
        return (
          <Product
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
   </HomePage>;
}

export default Home;
