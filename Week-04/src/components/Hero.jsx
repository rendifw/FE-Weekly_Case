import HeroBG from "../assets/Hero.png";
import Products from "../assets/icons/Products.svg";
import Inspiration from "../assets/icons/Inspiration.svg";
import Service from "../assets/icons/Service.svg";
import Support from "../assets/icons/Support.svg";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-start py-12 px-44 gap-28 w-full h-[688px] text-white font-medium">
      <img
        src={HeroBG}
        alt="Hero image"
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
      />
      <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_left,_rgba(0,0,0,0)_10%,_#141414_100%)] backdrop-blur-[2px]"></div>
      <nav className="flex text-sm px-10 py-3 gap-8 bg-[rgba(255,255,255,0.22)] border-[0.5px] rounded-4xl border-[rgba(255,255,255,0.87)] backdrop-blur-sm">
        <a href="#products" className="flex gap-1">
          <img src={Products} alt="Products Icon" />
          <span>Products</span>
        </a>
        <a href="#" className="flex gap-1">
          <img src={Inspiration} alt="Inspiration Icon" />
          <span>Inspiration</span>
        </a>
        <a href="#" className="flex gap-1">
          <img src={Service} alt="Service Icon" />
          <span>Service</span>
        </a>
        <a href="#" className="flex gap-1">
          <img src={Support} alt="Support Icon" />
          <span>Support</span>
        </a>
      </nav>
      <div className="flex flex-col gap-10">
        <h1 className="text-[54px] leading-16">
          Your One-Stop Shop for Everyday Essentials and Unique Finds.
        </h1>
        <p className="text-sm leading-6 max-w-[722px] text-[#E3E3E3]">
          Explore a seamless shopping experience with fast delivery, exceptional
          customer service, and exclusive deals that make every purchase
          worthwhile. Shop smart, shop easy, shop with ShopSphere!
        </p>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-6">
          <button className="cursor-pointer text-[#333333] flex items-center justify-center px-8 py-2 text-sm leading-6 bg-white rounded-4xl">
            Categories
          </button>
          <div className="flex cursor-pointer text-sm px-10 whitespace-pre py-3 gap-8 bg-[rgba(255,255,255,0.22)] border-[0.5px] rounded-4xl border-[rgba(255,255,255,0.87)] backdrop-blur-sm">
            Men • Women • Accessories • Sale
          </div>
        </div>
        <button className="cursor-pointer flex items-center justify-center px-8 py-2 text-sm leading-6 text-[#333333] bg-white rounded-4xl">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
