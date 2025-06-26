import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Awlad Hossin",
    title: "Senior Product Designer",
    avatar: "https://i.ibb.co/7yz6Y5K/avatar1.png",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Russel Ahmed",
    title: "CTO",
    avatar: "https://i.ibb.co/FK0G3fT/avatar4.png",
    review:
      "This corrector improved my sitting posture drastically during work hours.",
  },
  {
    name: "Nasir Uddin",
    title: "CEO",
    avatar: "https://i.ibb.co/yQvFJrz/avatar3.png",
    review:
      "It really helps with back pain. Very satisfied with the results!",
  },
  {
    name: "Tanvir Alam",
    title: "Fitness Trainer",
    avatar: "https://i.ibb.co/TmX2Fx7/avatar5.png",
    review:
      "Lightweight and easy to wear daily. My posture is now much better.",
  },
  {
    name: "Sara Karim",
    title: "Physiotherapist",
    avatar: "https://i.ibb.co/XYZ/avatar6.png", // replace with an actual image URL if needed
    review:
      "Highly recommend this for anyone struggling with posture issues. It’s comfortable and effective.",
  },
];


const ReviewSlider = () => {
  return (
    <section className="bg-[rgb(230,242,243)] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base">
          Hear from people who improved their posture and lifestyle using our product.
        </p>
      </div>

      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
          }}
          className="pb-20"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white  rounded-xl p-8 text-left shadow-lg min-h-[280px] flex flex-col justify-between mx-2">
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  “{r.review}”
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={r.avatar}
                    className="w-12 h-12 rounded-full object-cover border"
                    alt={r.name}
                  />
                  <div>
                    <h4 className="font-bold text-base">{r.name}</h4>
                    <p className="text-sm text-gray-500">{r.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Buttons + Pagination */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-4 mt-6">
          <button className="custom-prev bg-lime-400 w-10 h-10 rounded-full text-white text-lg hover:scale-105 transition">
            ❮
          </button>
          <div className="custom-pagination flex gap-2"></div>
          <button className="custom-next bg-lime-400 w-10 h-10 rounded-full text-white text-lg hover:scale-105 transition">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
