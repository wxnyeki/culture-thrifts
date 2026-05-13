function CartSidebar() {
  return (
    <aside className="w-[320px] bg-aliceblue border-r border-zinc-200 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        YOUR CART
      </h2>

      <div className="space-y-5">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7"
            className="w-24 h-24 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-semibold">
              Vintage Hoodie
            </h3>

            <p className="text-zinc-500">
              $45
            </p>
          </div>
        </div>
      </div>

      <button className="w-full mt-10 bg-black text-white py-3 rounded-xl font-semibold">
        CHECKOUT
      </button>
    </aside>
  );
}

export default CartSidebar;
