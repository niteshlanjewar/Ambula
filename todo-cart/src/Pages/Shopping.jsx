import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";

import Products from "../Components/shopping/Products";

const Shopping = () => {
 
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category == "women's clothing"
    );
  });
 

  return (
    <div>
      

      <section className="p-16" style={{
      background: 'url(https://media.istockphoto.com/id/911633218/vector/abstract-geometric-medical-cross-shape-medicine-and-science-concept-background.jpg?s=612x612&w=0&k=20&c=eYz8qm5xa5wbWCWKgjOpTamavekYv8XqPTA0MC4tHGA=) center/cover',
    }}>>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-sm mx-auto md:max-w-none md:max-0">
            {filteredProducts.map((products) => {
              return (
             
                <Products products={products} key={products.id} />
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Shopping;
