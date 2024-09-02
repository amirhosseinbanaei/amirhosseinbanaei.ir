"use client";
import { cn } from "@/utils/cn.util";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithSkeletonProps extends ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const SkeletonLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        `relative h-full w-full animate-pulse overflow-hidden bg-gray-200 ${className}`,
      )}
    >
      <div className="animate-moveLine absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </div>
  );
};

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        `relative h-full w-full overflow-hidden rounded-md ${className}`,
      )}
    >
      {!isLoaded && <SkeletonLoader />}

      <Image
        src={src}
        alt={alt}
        {...props}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default SkeletonLoader;
