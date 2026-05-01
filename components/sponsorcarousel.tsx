"use client";

import { sponsorlist } from "@/data/carousellist";
import Image from "next/image";

export function SponsorListCarousel() {
  const loopData = [...sponsorlist, ...sponsorlist];

  return (
    <div className="overflow-hidden w-full bg-black mb-40">
      <div className="flex gap-6 w-max animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
        {loopData.map((item, index) => (
          <div
            className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-[350px] px-6 py-5 rounded-xl flex flex-row"
            key={index}
          >
            <div className="flex items-center gap-4 mt-4">
              <Image
                src={item.brandimage}
                alt="Company Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="font-bold text-base text-white leading-tight">
                {item.brandname}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
