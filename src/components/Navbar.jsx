import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({cartCount, favoritesCount, onToggleFavorites, searchProduct, onSearchChange, onOpenCart}) {
  return (
    <nav className="flex justify-between items-center p-2">
      <Link to ="/">
      <h1 className="text-3xl font-black font-serif">
        CULTURE THRIFTS
      </h1>
      </Link>
      <div className="flex items-center gap-3 bg-zinc-100 px-4 py-2 rounded-full w-[320px]">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none w-full"
          value={searchProduct || ""} // || controls uncontrolled warnings
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="flex items-center gap-5">
        
         
          <Link to ="/favorites"  className="relative cursor-pointer" >
          <Heart className= {favoritesCount > 0 ? "fill-red-500 text-red-500" : ""} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4
             rounded-full flex items-center justify-center font-bold">
              {favoritesCount}
            </span>
          </Link>
       
      
       
      </div>

      <button onClick={onOpenCart} 
      className= "relative cursor-pointer">
      <ShoppingCart />
        {cartCount > 0 && (
         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
        {/* <User /> */}
       <Menu className="lg:hidden"/>
    </nav>
  );
}

export default Navbar;
