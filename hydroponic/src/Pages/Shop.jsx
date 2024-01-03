import React from "react";
// import ProductCard from './productcard'
import Sidebar from "./sidebar";
import ShopPic from "../assets/sbg.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      href: "#",
      price: "$438",
      imageSrc: "../../src/assets/1.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$135",
      imageSrc: "../../src/assets/2.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$849",
      imageSrc: "../../src/assets/3.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Mechanical Pencil",
      href: "#",
      price: "$55",
      imageSrc: "../../src/assets/4.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },

    {
      id: 5,
      name: "Mechanical Pencil",
      href: "#",
      price: "$65",
      imageSrc: "../../src/assets/5.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 6,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc: "../../src/assets/6.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 7,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc: "../../src/assets/7.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 8,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc: "../../src/assets/8.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 9,
      name: "Machined Mechanical",
      href: "#",
      price: "$35",
      imageSrc: "../../src/assets/9.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },

    {
      id: 10,
      name: "Machined Pencil",
      href: "#",
      price: "$35",
      imageSrc: "../../src/assets/10.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 1,
      name: "Earthen Bottle",
      href: "#",
      price: "$438",
      imageSrc: "../../src/assets/1.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$135",
      imageSrc: "../../src/assets/2.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$849",
      imageSrc: "../../src/assets/3.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Mechanical Pencil",
      href: "#",
      price: "$55",
      imageSrc: "../../src/assets/4.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },

    {
      id: 5,
      name: "Mechanical Pencil",
      href: "#",
      price: "$65",
      imageSrc: "../../src/assets/5.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 6,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc: "../../src/assets/6.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 7,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc: "../../src/assets/7.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 8,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc: "../../src/assets/8.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 9,
      name: "Machined Mechanical",
      href: "#",
      price: "$35",
      imageSrc: "../../src/assets/9.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },

    {
      id: 10,
      name: "Machined Pencil",
      href: "#",
      price: "$35",
      imageSrc: "../../src/assets/10.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
  ];
  return (
    <>
      <header>
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div class="absolute inset-0">
            <img
              src={ShopPic}
              alt="Background Image"
              class="object-cover object-center w-full h-full"
            />
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 class="text-5xl font-bold leading-tight mb-4 text-slate-300">
              Shop With <span className="text-green-500">Us</span>
            </h1>
            <p className="text-slate-300 text-xl">
              Cultivate success with us – where each purchase is a step towards
              a greener, more efficient tomorrow.
            </p>
            <p className="text-slate-300 text-xl">
              Shop with confidence, grow with success – because the future of
              farming is now, and it's{" "}
              <span className="font-bold text-green-500">hydroponic!</span>.
            </p>
          </div>
        </div>
      </header>
      <div className="text-center underline underline-offset-8 under">
        <h1 className="m-5 text-4xl ">Our Products</h1>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-5  box-border  w-full ">
        <Sidebar />

        <div className="bg-white col-span-4  my-5 mx-4 ">
          <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 ">
            <h2 className="sr-only">Our Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                  <button className=" m-2 bg-green-400 rounded p-1.5 text-sm cursor-pointer hover:bg-green-600">
                    Add to Cart
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
