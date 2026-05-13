function Categories() {
  const categories = [
    "Men",
    "Women",
    "Shoes",
    "Accessories",
    "Vintage",
  ];

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-black mb-6">
        CATEGORIES
      </h2>

      <div className="grid grid-cols-5 gap-5">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white p-10 rounded-2xl text-center font-semibold shadow-sm"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
