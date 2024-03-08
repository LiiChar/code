import Image from 'next/image'
import React from 'react'

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number
  loaderImage?: string;
  blurDataURL?: string;
  fill?: boolean;
  className?: string;
  handleFunc?: () => void;
  errorImage?: string
}

export const MyImage: React.FC<ImageProps> = React.memo(({ errorImage = 'http://localhost:3000/image/vk.jpg', alt, src, blurDataURL, loaderImage, height, width, fill = false, className, handleFunc }) => {
  return (
    <>
      <Image
        
        width={width}
        height={height}
        alt={alt}
        src={src}
        unoptimized={true}
        onError={(e) => e.currentTarget.src = errorImage}
        className={className}
        onClick={handleFunc}
        sizes="(max-width: 320px) 280px,
        (max-width: 640px) 600px,
        (max-width: 1024px) 940px,
        1200px"
        loader={loaderImage ? () => loaderImage : () => src}
        fill={fill}
        blurDataURL={blurDataURL ? blurDataURL : src}
      />
    </>
  )
})
