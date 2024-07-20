import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { AtSign, Phone } from "lucide-react";

export default function ImageSlider() {
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
        <div className="border pb-5 rounded-2xl bg-white max-w-[430px]">
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
                className="px-[0.875rem] py-[0.75rem] flex items-center border border-[#dc1f26] rounded-2xl"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="whatsapp icon"
                  width={16}
                  height={16}
                  priority={true}
                />
              </Link>

              <Link
                href="tel:+263783948647"
                passHref
                aria-label="Call us at +263 78 394 8647"
                className="px-[0.875rem] hover:underline py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <Phone size={16} />
              </Link>

              <Link
                href="mailto:info@mrbit.com"
                passHref
                aria-label="Email us at info@mrbit.com"
                className="px-[0.875rem] py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <AtSign size={16} />
              </Link>
            </div>

            <button
              type="button"
              aria-label="Explore property in details"
              className="px-5 text-sm text-[#dc1f26] py-[0.5rem] border border-[#dc1f26] rounded-2xl"
            >
              Details
            </button>
          </div>
        </div>
        <div className="border pb-5 rounded-2xl bg-white max-w-[430px]">
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
                className="px-[0.875rem] py-[0.75rem] flex items-center border border-[#dc1f26] rounded-2xl"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="whatsapp icon"
                  width={16}
                  height={16}
                  priority={true}
                />
              </Link>

              <Link
                href="tel:+263783948647"
                passHref
                aria-label="Call us at +263 78 394 8647"
                className="px-[0.875rem] hover:underline py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <Phone size={16} />
              </Link>

              <Link
                href="mailto:info@mrbit.com"
                passHref
                aria-label="Email us at info@mrbit.com"
                className="px-[0.875rem] py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <AtSign size={16} />
              </Link>
            </div>

            <button
              type="button"
              aria-label="Explore property in details"
              className="px-5 text-sm text-[#dc1f26] py-[0.5rem] border border-[#dc1f26] rounded-2xl"
            >
              Details
            </button>
          </div>
        </div>
        <div className="border pb-5 rounded-2xl bg-white max-w-[430px]">
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
                className="px-[0.875rem] py-[0.75rem] flex items-center border border-[#dc1f26] rounded-2xl"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="whatsapp icon"
                  width={16}
                  height={16}
                  priority={true}
                />
              </Link>

              <Link
                href="tel:+263783948647"
                passHref
                aria-label="Call us at +263 78 394 8647"
                className="px-[0.875rem] hover:underline py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <Phone size={16} />
              </Link>

              <Link
                href="mailto:info@mrbit.com"
                passHref
                aria-label="Email us at info@mrbit.com"
                className="px-[0.875rem] py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <AtSign size={16} />
              </Link>
            </div>

            <button
              type="button"
              aria-label="Explore property in details"
              className="px-5 text-sm text-[#dc1f26] py-[0.5rem] border border-[#dc1f26] rounded-2xl"
            >
              Details
            </button>
          </div>
        </div>
        <div className="border pb-5 rounded-2xl bg-white max-w-[430px]">
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
                className="px-[0.875rem] py-[0.75rem] flex items-center border border-[#dc1f26] rounded-2xl"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="whatsapp icon"
                  width={16}
                  height={16}
                  priority={true}
                />
              </Link>

              <Link
                href="tel:+263783948647"
                passHref
                aria-label="Call us at +263 78 394 8647"
                className="px-[0.875rem] hover:underline py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <Phone size={16} />
              </Link>

              <Link
                href="mailto:info@mrbit.com"
                passHref
                aria-label="Email us at info@mrbit.com"
                className="px-[0.875rem] py-[0.75rem] flex items-center text-[#dc1f26] border border-[#dc1f26] rounded-2xl"
              >
                <AtSign size={16} />
              </Link>
            </div>

            <button
              type="button"
              aria-label="Explore property in details"
              className="px-5 text-sm text-[#dc1f26] py-[0.5rem] border border-[#dc1f26] rounded-2xl"
            >
              Details
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
