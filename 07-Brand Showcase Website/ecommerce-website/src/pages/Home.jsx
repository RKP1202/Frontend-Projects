import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';


// import components
import Product from '../components/Product'
const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) =>
    item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div>
      <section>
        <div className="mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4" >
            {filteredProducts.map((product) => {
              return (
                // <div className='w-full h-[300px] border border-gray-900 bg-pink-300' key={product.id}>
                //   {product.title}
                // </div>
                <Product key={product.id}/>
              );
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
