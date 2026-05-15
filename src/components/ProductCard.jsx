import { Heart } from "lucide-react";
// import {useState} from 'react';

function ProductCard({ product, onAddToCart, onFavorite, isLiked}) {
 
  // const[isLiked, setIsLiked] = useState(false);

  // const toggleLike = () => {
  //   setIsLiked(!isLiked);
  // }
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="w-full h-[260px] object-cover">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-4"
      />
      </div>

      <div className="p-5, flex flex-col flex-1">
       
        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-zinc-600 mb-4 mt-auto">
          {product.price}
        </p>

        <div className="flex items-center justify-between mt-4">
          <button 
           className="bg-black text-white px-5 py-3 rounded-xl text-sm active:scale-95 transition-transform"          
           onClick={() => onAddToCart(product)} // this triggers the add to cart action on click
          >
            ADD TO CART
          </button>
          <button
          onClick ={() => onFavorite(product)}
          className="p-2 transition-colors duration-300">
          <Heart 
           size={24}
           fill={isLiked ? "#ef4444" : "none"} 
           className={isLiked ? "text-red-500" : "text-zinc-400"}
          />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
