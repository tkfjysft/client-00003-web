import NextImage, { ImageProps } from 'next/image';

export default function CustomImage({ src, ...props }: ImageProps) {


	const patchedSrc = 
    typeof src === 'string' && src.startsWith('/') && !src.startsWith('/a/')
      ? `/c${src}`
      : src;


	  return <NextImage src={patchedSrc} {...props} />;
}