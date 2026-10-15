import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { responsiveImage } from "@/assets/responsive-images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} navigation pagination={{ clickable: true }} className="aspect-video rounded-t-2xl">
      {images.map((image, index) => (
        <SwiperSlide key={image}>
          <img src={image} {...responsiveImage(image, "(min-width: 896px) 896px, 100vw")} alt={title + " - Image " + (index + 1)} className="w-full h-full object-cover" decoding="async" loading={index === 0 ? "eager" : "lazy"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
