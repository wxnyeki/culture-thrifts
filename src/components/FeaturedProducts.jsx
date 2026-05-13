import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Vintage Hoodie",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },

    {
      id: 2,
      name: "Cargo Pants",
      price: "$38",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },

    {
      id: 3,
      name: "Retro Sneakers",
      price: "$65",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-black mb-6">
        FEATURED PRODUCTS
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
