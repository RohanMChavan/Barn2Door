import ProductCard from "./shared/ProductCard";

const products = [
  {
    image: "https://images.pexels.com/photos/2257407/pexels-photo-2257407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productName: "Apples",
    description:
      "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
    specialPrice: 720,
    price: 780,
  },
  {
    image: "https://images.pexels.com/photos/5528990/pexels-photo-5528990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productName: "Apples",
    description:
      "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
    specialPrice: 699,
    price: 799,
  },
  {
    image: "https://images.pexels.com/photos/983466/pexels-photo-983466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productName: "Bananas",
    description:
      "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
    price: 599,
    specialPrice: 400,
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        <div className="w-full md:w-1/2 text-centre md:text-left">
          <p className="text-lg mb-4">
            Welcome to Barn2Door, a platform designed to empower farmers
            and help them directly with buyers. Our goal is to create a fair
            and transparent marketplace where farmers can sell their fresh
            produce and buyers can purchase high-quality farm products without
            intermediaries.
          </p>
        </div>

        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=mb1EBDCszi7HP1FxgCPNTh3N1IgV03_N4rCnO_AtStc="
            alt="About us"
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          ></img>
        </div>
      </div>

      <div className="py-7 space-y-8">
        <h1 className="text-slate-800 text-4xl font-bold text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              productName={product.productName}
              description={product.description}
              price={product.price}
              specialPrice={product.specialPrice}
              about
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
