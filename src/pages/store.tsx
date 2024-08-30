import React from "react";
import Image from "next/image";

interface CoinDisplayProps {
  coins: number;
}

const CoinDisplay: React.FC<CoinDisplayProps> = ({ coins }) => (
  <div className="relative inline-flex items-center">
    <div className="bg-blue-100 rounded px-4 py-2 flex items-center">
      <span className="font-bold text-2xl mr-2">{coins}</span>
    </div>
    <div className="absolute -right-14 -top-4">
      <img src="/images/coins.svg" className="h-[84px]" alt="Coins" />
    </div>
  </div>
);

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, price }) => {
  return (
    <div className="relative group">
      <div className="relative z-10 bg-white border-2 border-black rounded p-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-[3%] group-hover:-translate-y-[3%]">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={300}
          className="w-full h-auto mb-4 rounded-lg"
        />
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <CoinDisplay coins={price} />
          <button className="bg-[#00EDBE] text-black font-bold py-2 px-4 rounded-full border-2 border-black hover:bg-[#00D1A7] transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00EDBE] rounded transform translate-x-1 translate-y-1 -z-10"></div>
    </div>
  );
};

const Store: React.FC = () => {
  const products = [
    { id: 1, name: "Cap", price: 200 },
    { id: 2, name: "T-shirt", price: 100 },
    { id: 3, name: "Mug", price: 300 },
    { id: 4, name: "Tote Bag", price: 200 },
    { id: 5, name: "Mouse Pad", price: 600 },
    { id: 6, name: "Bucket Hat", price: 750 },
    { id: 7, name: "Travel Mug", price: 350 },
    { id: 8, name: "Travel Pillow", price: 400 },
    { id: 9, name: "Hoodie", price: 450 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">🛍️ Merch Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={`/images/products/product${product.id}.png`}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
