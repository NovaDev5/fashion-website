"use client";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  CustomerSupportIcon,
  ShoppingBasket01Icon,
  GoogleGeminiIcon,
  MoneyBag02Icon,
  CircleLockCheck01Icon,
  TruckDeliveryIcon,
  ReturnRequestIcon,
} from "@hugeicons/core-free-icons";
import fashionselfie from "@/public/fashionselfie.jpg";
import fashionselfie2 from "@/public/fashionselfie2.jpg";
import fashionselfie3 from "@/public/fashionselfie3.jpg";
import fashioncategory from "@/public/fashioncategory1.jpg";
import fashioncategory2 from "@/public/fashioncategory2.jpg";
import fashioncategory3 from "@/public/fashioncategory3.jpg";
import fashioncategory4 from "@/public/fashioncategory4.jpg";
import Countdown from "@/components/flashsaletimer";
import FashionSaleImage from "@/public/fashionsaleimage.png";
import { SponsorListCarousel } from "@/components/sponsorcarousel";
import Streetwearwardrobe from "@/public/streetwearwardrobe.png";
import Coperatewearwardrobe from "@/public/coperatewearwardrobe.png";
import { StandardCarousel } from "@/components/standardcarousel";
import { reviewstars } from "@/lib/svgs";
import usersreviewimage from "@/public/usersreviewimage.jpg";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-app-background flex flex-col flex-1 overflow-x-hidden">
      <motion.div
        className="flex flex-row py-2 w-full justify-between"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-black font-bold font-sans mr-5 ml-7 self-center">
          NABANAMI
        </h2>
        <div className="flex flex-row px-2 py-2 justify-between self-center ml-50">
          <ul className="flex flex-row text-black font-sans font-[2px] w-125 justify-between t-[1-px]">
            <li>HOME</li>
            <li>PRICING</li>
            <li>SHOPS</li>
            <li>CUSTOM WEARS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="flex flex-row px-2 py-2 justify-between self-end w-75 ml-auto mr-5">
          <div className="flex flex-row w-30 justify-between">
            <HugeiconsIcon icon={Search01Icon} color="black" />
            <HugeiconsIcon icon={CustomerSupportIcon} color="black" />
            <HugeiconsIcon icon={ShoppingBasket01Icon} color="black" />
          </div>
          <motion.button
            className="px-4 py-1 font-sans font-bold text-white bg-black rounded-sm"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            BUY NOW
          </motion.button>
        </div>
      </motion.div>
      <div className="flex flex-row mb-20">
        <motion.div
          className="flex flex-col w-125"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-black text-[70px] font-sans font-semibold mt-2 ml-10">
            Define Your
          </h1>
          <h1 className="text-black text-[70px] font-sans font-semibold ml-10 -mt-5">
            Style
          </h1>
          <h3 className="text-black font-sans font-semibold mt-5 ml-10 mr-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eaque, consectetur quis labore cumque illum molestiae velit
            cupiditate, excepturi officiis amet? Autem nesciunt, assumenda nam
            maxime expedita libero molestias. Rem.
          </h3>
          <div className="flex flex-row justify-between w-80 ml-10 mt-2">
            <motion.button
              className="px-4 py-2 text-white font-sans bg-black"
              whileTap={{ scale: 1.1 }}
            >
              Shop The Drop
            </motion.button>
            <motion.button
              className="px-4 py-2 text-black font-sans border-2 border-black"
              whileTap={{ scale: 1.1 }}
            >
              View All Styles
            </motion.button>
          </div>
          <div className="flex flex-row justify-between px-1 py-1 text-black text-nowrap w-70 ml-10 mt-5">
            <div className="flex flex-col">
              <HugeiconsIcon icon={GoogleGeminiIcon} className="self-center" />
              <h3>Quality Service</h3>
            </div>
            <div className="flex flex-col">
              <HugeiconsIcon icon={MoneyBag02Icon} className="self-center" />
              <h3>Instant Refunds</h3>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-row overflow-hidden w-max">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={fashionselfie}
              alt="fashionselfie"
              className="h-90 w-60 rounded-[100px] relative -right-40"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={fashionselfie2}
              alt="fashionselfie2"
              className="h-90 w-60 rounded-[100px] relative top-20 -right-20"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={fashionselfie3}
              alt="fashionselfie3"
              className="h-90 w-60 rounded-[100px] relative top-30"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex flex-row self-center py-10 mb-20 mx-5 bg-amber-100"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col text-black font-sans w-80 text-center">
          <HugeiconsIcon
            icon={CircleLockCheck01Icon}
            color="black"
            className="self-center"
          />
          <h3 className="self-center font-semibold">Secure Checked</h3>
          <p className="text-balance self-center">
            Shop with confidence, your payments are fully encrypted
          </p>
        </div>
        <div className="flex flex-col text-black font-sans w-80 text-center">
          <HugeiconsIcon
            icon={TruckDeliveryIcon}
            color="black"
            className="self-center"
          />
          <h3 className="self-center font-semibold">Secure Checked</h3>
          <p className="text-balance self-center">
            Shop with confidence, your payments are fully encrypted
          </p>
        </div>
        <div className="flex flex-col text-black font-sans w-80 text-center">
          <HugeiconsIcon
            icon={CustomerSupportIcon}
            color="black"
            className="self-center"
          />
          <h3 className="self-center font-semibold">Secure Checked</h3>
          <p className="text-balance self-center">
            Shop with confidence, your payments are fully encrypted
          </p>
        </div>
        <div className="flex flex-col text-black font-sans w-80 text-center">
          <HugeiconsIcon
            icon={ReturnRequestIcon}
            color="black"
            className="self-center"
          />
          <h3 className="self-center font-semibold">Secure Checked</h3>
          <p className="text-balance self-center">
            Shop with confidence, your payments are fully encrypted
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col w-full justify-between px-20 mb-40">
        <h2 className="text-black font-sans font-bold self-center  text-[50px]">
          Categories
        </h2>
        <h3 className="font-sans text-black text-nowrap mb-10 text-center">
          From Everyuday Essentials to Statement Pieces. Find your Fit
        </h3>
        <div className="flex flex-row justify-between">
          <motion.div
            className="h-90 w-60 rounded-[20px] relative overflow-hidden"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
          >
            <Image
              src={fashioncategory}
              alt="fashion category1"
              fill
              className="object-cover"
            />
            <motion.button
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-sans font-semibold"
              whileTap={{ scale: 1.1 }}
            >
              WOMEN
            </motion.button>
          </motion.div>
          <motion.div
            className="h-90 w-60 rounded-[20px] relative overflow-hidden"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
          >
            <Image
              src={fashioncategory2}
              alt="fashion category1"
              fill
              className="object-cover"
            />
            <motion.button
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-sans font-semibold"
              whileTap={{ scale: 1.1 }}
            >
              MEN
            </motion.button>
          </motion.div>
          <motion.div
            className="h-90 w-60 rounded-[20px] relative overflow-hidden"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
          >
            <Image
              src={fashioncategory3}
              alt="fashion category1"
              fill
              className="object-cover"
            />
            <motion.button
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-sans font-semibold"
              whileTap={{ scale: 1.1 }}
            >
              BOY
            </motion.button>
          </motion.div>
          <motion.div
            className="h-90 w-60 rounded-[20px] relative overflow-hidden"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
          >
            <Image
              src={fashioncategory4}
              alt="fashion category1"
              fill
              className="object-cover"
            />
            <motion.button
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-sans font-semibold"
              whileTap={{ scale: 1.1 }}
            >
              GIRLS
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-row bg-linear-to-r from-white to-zinc-900 to-75%">
        <motion.div
          className="flex flex-col ml-20 w-175"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-sans text-black text-[70px] text-balance">
            Act Fast! Incredible
          </h2>
          <h2 className="font-sans text-black text-[70px] text-balance">
            Offers End Soon
          </h2>
          <p className="mr-40 text-black mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            corrupti molestias voluptatem nihil possimus consequatur corporis
          </p>
          <Countdown targetDate="2026-05-10T00:00:00" />
          <button className="px-4 py-3 bg-black font-sans text-white font-semibold mt-10 mr-auto mb-20">
            VIEW COLLECTION
          </button>
        </motion.div>
        <motion.div
          className=" h-120 w-90"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={FashionSaleImage}
            alt="fashion sale image"
            className="relative bottom-10"
          />
        </motion.div>
      </div>
      <SponsorListCarousel />
      <div className="flex flex-col px-10 mb-20 overflow-hidden">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-black font-sans font-semibold self-center text-[50px]">
            Seasonal Collection
          </h2>
          <p className="text-black font-sans text-center">
            Every Season brings a new Drop Bold Design, Clean Fits and Statement
            Pieces Made for the Streets
          </p>
        </motion.div>
        <div className="flex flex-row justify-between mt-10 w-full self-center">
          <motion.div
            className="mr-5 relative rounded-lg h-150 w-150 overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={Streetwearwardrobe}
              alt="Streetwearwardrobe"
              className="object-contain"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-sans font-semibold">
              STREET WEAR
            </button>
          </motion.div>
          <motion.div
            className="relative rounded-lg overflow-hidden h-150 w-150"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={Coperatewearwardrobe}
              alt="Coperatewearwardrobe"
              className="object-contain"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-sans font-semibold">
              COPERATE WEAR
            </button>
          </motion.div>
        </div>
      </div>
      <StandardCarousel />
      <div className="flex flex-col">
        <motion.div
          className="flex-flex-col"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-black font-sans text-[50px] text-center">
            Fashion That Speaks For Itself
          </h2>
          <p className="text-black font-sans text-center text-balance mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            distinctio quae autem officia earum nihil beatae similique, laborum
            libero dolores eligendi, voluptas mollitia aut nam perspiciatis
            asperiores molestiae consequatur ullam!
          </p>
        </motion.div>
        <div className="flex flex-row mx-10 mb-20 self-center">
          <motion.div
            className="bg-amber-100 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 flex flex-col justify-between mr-5 w-100"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {reviewstars}
            <p className=" relative text-black font-sans">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quas sunt incidunt architecto rem atque ea explicabo
              exercitationem consectetur, quae repellendus, dolore asperiores
              accusamus porro! Dolore vero at velit earum?
            </p>
            <div className="flex flex-row">
              <Image
                src={usersreviewimage}
                alt="usersreviewimage"
                className="h-10 w-10 rounded-full"
              />
              <h2 className="text-black font-sans self-center ml-2">
                ANNA REVINA
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="bg-amber-100 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 flex flex-col justify-between mr-5 w-100"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {reviewstars}
            <p className=" relative text-black font-sans">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quas sunt incidunt architecto rem atque ea explicabo
              exercitationem consectetur, quae repellendus, dolore asperiores
              accusamus porro! Dolore vero at velit earum?
            </p>
            <div className="flex flex-row">
              <Image
                src={usersreviewimage}
                alt="usersreviewimage"
                className="h-10 w-10 rounded-full"
              />
              <h2 className="text-black font-sans self-center ml-2">
                EMILY NATHENS
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="bg-amber-100 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 flex flex-col justify-between w-100"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {reviewstars}
            <p className=" relative text-black font-sans">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quas sunt incidunt architecto rem atque ea explicabo
              exercitationem consectetur, quae repellendus, dolore asperiores
              accusamus porro! Dolore vero at velit earum?
            </p>
            <div className="flex flex-row">
              <Image
                src={usersreviewimage}
                alt="usersreviewimage"
                className="h-10 w-10 rounded-full"
              />
              <h2 className="text-black font-sans self-center ml-2">
                ELISA JUDITH
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex flex-col w-full bg-black"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-white font-bold font-sans mr-5 ml-7 mt-20">
          NABANAMI
        </h2>
        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-col w-100 ml-10">
            <h3 className="font-sans font-semibold text-nowrap">
              Stay Connnected. Stay Stylish
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, quam cupiditate mollitia odio provident vel
              perspiciatis adipisci voluptatibus eos sed quod culpa et,
              dignissimos, in dicta harum debitis dolorum minima!
            </p>
            <input
              placeholder="Your Email"
              className="bg-slate-600 px-10 py-3 mt-5 rounded-full"
            />
            <button className="mt-5 bg-white px-5 py-2  mb-40 w-30 font-sans  font-semibold text-black  rounded-full ">
              Join Now
            </button>
          </div>
          <div className="flex flex-col mr-10">
            <h3 className="font-sans text-white text-[20px] font-semibold">
              Information
            </h3>
            <ul className="text-white font-sans">
              <li>About</li>
              <li>Locations</li>
              <li>Investors</li>
              <li>Shops</li>
            </ul>
          </div>
          <div className="flex flex-col mr-10">
            <h3 className="font-sans text-white text-[20px] font-semibold">
              Help Center
            </h3>
            <ul className="text-white font-sans">
              <li>About</li>
              <li>Locations</li>
              <li>Investors</li>
              <li>Shops</li>
            </ul>
          </div>
          <div className="flex flex-col mr-10">
            <h3 className="font-sans text-white text-[20px] font-semibold">
              Contact Us
            </h3>
            <ul className="text-white font-sans">
              <li>About</li>
              <li>Locations</li>
              <li>Investors</li>
              <li>Shops</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
