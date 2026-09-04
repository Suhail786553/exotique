import { useState, type ImgHTMLAttributes } from "react";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1712'/%3E%3Cpath d='M120 190l40-50 30 35 45-60 65 75H120z' fill='%233a352c'/%3E%3Ccircle cx='150' cy='120' r='18' fill='%233a352c'/%3E%3C/svg%3E";

export function FallbackImage({
  src,
  alt,
  className,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [errored, setErrored] = useState(false);

  return (
    <img
      src={errored || !src ? PLACEHOLDER : src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...rest}
    />
  );
}
