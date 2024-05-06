"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

const WishListIcon = () => {
  return (
    <>
      <span className={`sr-only`}>Add to Wishlist</span>
      <Tooltip
        content={"Add to Wishlist"}
        color={`danger`}
        shadow={`lg`}
        showArrow
        size={`sm`}
        placement={`top`}
        offset={1}
        delay={0}
        closeDelay={0}
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeIn",
              },
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <motion.button
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          className={`scale-0 cursor-pointer rounded-full bg-rose-500 p-2 shadow-lg shadow-slate-300 ease-in-out group-hover/card:scale-100 motion-safe:transition-transform dark:shadow-gray-800`}
          onClick={() => {
            console.log(`Deadpool`);
          }}
        >
          <FaRegHeart className={`text-white`} size={18} />
        </motion.button>
      </Tooltip>
    </>
  );
};

export default WishListIcon;
