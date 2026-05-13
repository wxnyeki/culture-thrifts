import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen bg-zinc-100 text-black">
      <CartSidebar />

      <main className="flex-1 p-6">
        <Navbar />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
