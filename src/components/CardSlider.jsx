import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { AtSign, Phone } from "lucide-react";

export default function CardSlider() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const phoneNumber = "+263783948647";
  const message = "Hello, I would like to sell my house, can you assist!";
  const whatsappLink = `https://wa.me/${phoneNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <div className="relative py-10 lg:px-4">
      <Slider {...settings}>
        {[...Array(4)].map((card, index) => (
          <div
            key={index}
            className="border pb-5 rounded-2xl bg-white max-w-[430px] overflow-hidden shadow-custom-shadow"
          >
            <Image
              src="/pixabay-5.jpg"
              alt="image"
              width={350}
              height={350}
              objectFit="cover"
              quality={90}
              priority={true}
              className="w-full rounded-tl-xl rounded-tr-xl"
            />
            <div className="after:content-[''] after:inline-block after:h-[1px] after:bg-gray-300 after:w-full">
              <div className="mt-5 mx-4 text-base">Property Type</div>
              <div className="mt-2 mx-4 text-[1.125rem] font-semibold">
                Renovated Apartment For Sale
              </div>
              <div className="mt-2 mx-4 text-sm">
                14 Hindhead Avenue, Chisipite, Harare
              </div>
              <div className="mt-2 mx-4 font-[1.125rem]">
                Beds 2 Baths: 1 2000 SQM
              </div>
            </div>

            <div className="flex justify-between mt-2 mx-4">
              <div className="flex gap-2">
                <Link
                  href={whatsappLink}
                  aria-label={`Chat with us on ${phoneNumber}`}
                  className="group hover:bg-[#dc1f25ec] hover:transition hover:ease-in-out px-[0.875rem] py-[0.75rem] flex items-center border border-[#dc1f26] rounded-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="fill-[#dc1f25ec] group-hover:fill-white transition-all duration-300 ease-in-out"
                    width="16"
                    height="16"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </Link>

                <Link
                  href="tel:+263783948647"
                  passHref
                  aria-label="Call us at +263 78 394 8647"
                  className="group px-[0.875rem] hover:bg-[#dc1f25ec] group-hover:transition group-hover:ease-in-out py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f25ec] rounded-2xl"
                >
                  <Phone size={16} className="group-hover:text-white" />
                </Link>
                <Link
                  href="mailto:info@mrbit.com"
                  passHref
                  aria-label="Email us at info@mrbit.com"
                  className="group px-[0.875rem] hover:bg-[#dc1f25ec] group-hover:transition group-hover:ease-in-out py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f25ec] rounded-2xl"
                >
                  <AtSign size={16} className="group-hover:text-white" />
                </Link>
              </div>

              <button
                type="button"
                aria-label="Explore property in details"
                className="px-5 text-sm hover:bg-[#dc1f25ec] group-hover:transition group-hover:ease-in-out hover:text-white text-[#dc1f26] py-[0.5rem] border border-[#dc1f26] rounded-2xl"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
