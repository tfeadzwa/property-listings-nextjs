"use client";
import Header from "@/components/Header";
import CardSlider from "@/components/CardSlider";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Footr from "@/components/Footr";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>NextJS App Test - Tafadzwa</title>
        <meta name="description" content="NextJS App Test" />
        <meta name="keywords" content="NextJs, Test, Tafadzwa" />
        <link rel="canonical" href="https://sold.co.zw" />

        <meta property="og:title" content="Property Listings - Nextjs" />
        <meta
          property="og:description  "
          content="Property Listing Web application made with Nextjs and Reactjs"
        />
        <meta property="og:url" content="https://sold.co.zw" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sold.co.zw/my-image.jpg" />
      </Head>

      <div>
        <Header />

        <main>
          <section className="relative w-full max-h-[500px] h-[500px] overflow-hidden">
            <Image
              src="/pexels13.jpg"
              // src="/pixaba-88.jpg"
              alt="Description of the image"
              fill
              quality={90}
              priority={true}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-65 z-0"></div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative">
                <div className="absolute bg-white p-1 flex justify-between rounded-3xl shadow-lg">
                  <button
                    type="button"
                    aria-label="Properties for sale"
                    className="bg-[#dc1f26] text-white py-2 px-4 rounded-3xl"
                  >
                    For Sale
                  </button>
                  <button
                    type="button"
                    aria-label="Properties to rent"
                    className="py-2 px-4 rounded-3xl"
                  >
                    To Rent
                  </button>
                </div>

                <div className="flex gap-2 flex-col max-w-[1000px] mt-16 bg-white p-6 rounded-2xl shadow-lg lg:w-[800px] lg:flex-row lg:gap-1">
                  <button
                    type="button"
                    aria-label="Select property types"
                    className="flex-grow flex justify-between p-3 items-center border rounded-lg max-w-[240px]"
                  >
                    <span>Property Types</span>
                    <ChevronDown />
                  </button>
                  <div className="flex flex-col flex-grow flex-grow-2 justify-between gap-2 lg:flex-row lg:gap-1">
                    <input
                      type="text"
                      placeholder="Suburb, City, Province, Country"
                      className="flex-grow flex-grow-2 outline-none placeholder:text-sm p-2 border rounded-lg lg:placeholder:text-base"
                    />
                    <button
                      type="button"
                      aria-label="Search properties"
                      className="flex items-center justify-center gap-2 bg-[#dc1f26] text-white py-3 px-5 rounded-lg"
                    >
                      <Search className="w-[9px] h-[9px]" />
                      <span className="text-sm">SEARCH</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-10 px-6 bg-[#eff1f3] py-8 lg:px-16">
            <h1 className="text-2xl font-semibold">Properties For Sale</h1>
            <CardSlider />
          </section>

          <section className="pb-10 px-6 bg-[#ffffff] py-8 lg:px-16">
            <h2 className="text-2xl font-semibold">Properties For Rent</h2>
            <CardSlider />
          </section>

          <section className="pb-10 px-6 bg-[#f5f7f9] py-8 md:px-16">
            <div className="relative flex flex-col items-center gap-3 lg:gap-5 md:flex-row">
              <div className="px-4 py-12 max-w-[440px] border rounded-2xl bg-white">
                <div className="flex flex-col items-center">
                  <Image
                    src="/buy-property.svg"
                    alt="Buy your property"
                    width={100}
                    height={100}
                    objectFit="cover"
                    quality={90}
                    priority={true}
                    className="mt-2"
                  />
                  <h3 className="font-semibold text-[1.125rem]">
                    Buy a Property
                  </h3>
                </div>
                <p className="py-4">
                  Find your place with an immersive photo experience and the
                  most listings, including things you won't find anywhere else.
                </p>
                <button
                  type="button"
                  aria-label="Browse Properties For Sale"
                  className="border text-sm border-[#dc1f26] text-[#dc1f26] w-full py-2 rounded-lg lg:text-base"
                >
                  Browse Properties For Sale
                </button>
              </div>

              <div className="px-4 py-12 max-w-[440px] border rounded-2xl bg-white">
                <div className="flex flex-col items-center">
                  <Image
                    src="/money-sell.svg"
                    alt="Buy your property"
                    width={100}
                    height={100}
                    objectFit="cover"
                    quality={90}
                    priority={true}
                    className="mt-2"
                  />
                  <h3 className="font-semibold text-[1.125rem]">
                    Sell a Property
                  </h3>
                </div>
                <p className="py-4">
                  Find your place with an immersive photo experience and the
                  most listings, including things you won't find anywhere else.
                </p>
                <button
                  type="button"
                  aria-label="Browse Properties For Sale"
                  className="border text-sm border-[#dc1f26] text-[#dc1f26] w-full py-2 rounded-lg lg:text-base"
                >
                  See your options
                </button>
              </div>

              <div className="px-4 py-12 max-w-[440px] border rounded-2xl bg-white">
                <div className="flex flex-col items-center">
                  <Image
                    src="/rent-property.svg"
                    alt="Buy your property"
                    width={100}
                    height={100}
                    objectFit="cover"
                    quality={90}
                    priority={true}
                    className="mt-2"
                  />
                  <h3 className="font-semibold text-[1.125rem]">
                    Rent a Property
                  </h3>
                </div>
                <p className="py-4">
                  Find your place with an immersive photo experience and the
                  most listings, including things you won't find anywhere else.
                </p>
                <button
                  type="button"
                  aria-label="Browse Properties For Sale"
                  className="border text-sm border-[#dc1f26] text-[#dc1f26] w-full py-2 rounded-lg lg:text-base"
                >
                  Browse Properties For Sale
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footr />
      </div>
    </>
  );
};

export default HomePage;
