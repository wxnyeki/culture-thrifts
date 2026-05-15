
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1565784796667-98515d255f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyZWV0JTIwd2VhciUyMGJsYWNrJTIwZ3V5fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1659485104709-6a8c1fd91e60?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1634238428522-24f31b4b30ce?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548624360-67ad54ba2d13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605755622188-d4dc3144d135?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1672907031715-fa4214fc3803?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1500);

return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white rounded-3xl p-10 flex items-center justify-between mb-10 overflow-hidden">
      <div className="max-w-xl">
        <h1 className="text-7xl font-black leading-none mb-6">
          WEAR YOUR CULTURE.
        </h1>

    <p className="text-zinc-600 text-lg mb-8">
      Curated. Thrifted. Authentic.
    </p>

    <button
      type="button"
      onClick={() => navigate("/shop")}
      className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition"
    >
      SHOP NOW
    </button>
  </div>

  <div className="relative w-[420px] h-[420px] overflow-hidden rounded-3xl">
    <img
      src={images[currentImage]}
      alt="Streetwear fashion"
      className="w-full h-full object-contain transition-all duration-700"
    />

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-2.5 h-2.5 rounded-full ${
            currentImage === index
              ? "bg-white"
              : "bg-white/40"
          }`}
        />
      ))}
    </div>
  </div>
</section>
  );
}

export default Hero;