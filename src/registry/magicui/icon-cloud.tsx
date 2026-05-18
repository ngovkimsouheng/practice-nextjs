"use client";

import { motion } from "framer-motion";

interface IconCloudProps {
  images?: string[];
  [key: string]: any;
}

export function IconCloud({ images = [] }: IconCloudProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-96 h-96"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images.length > 0 ? (
          images.map((image, index) => {
            const angle = (index / images.length) * Math.PI * 2;
            const x = Math.cos(angle) * 150;
            const y = Math.sin(angle) * 150;

            return (
              <motion.div
                key={index}
                className="absolute w-16 h-16 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  x: "-50%",
                  y: "-50%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={image}
                  alt={`Icon ${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No images provided
          </div>
        )}
      </motion.div>
    </div>
  );
}
