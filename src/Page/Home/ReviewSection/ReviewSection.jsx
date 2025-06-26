
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          className="pb-15 max-w-7xl gap-4"
        >
          {/* Slide 1 */}
          <SwiperSlide className="max-w-96">
            <div className="bg-white rounded-xl p-8 text-left shadow-lg min-h-[240px] flex flex-col justify-between mx-2">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src="https://i.ibb.co/7yz6Y5K/avatar1.png"
                  className="w-12 h-12 rounded-full object-cover border"
                  alt="Awlad Hossin"
                />
                <div>
                  <h4 className="font-bold text-base">Awlad Hossin</h4>
                  <p className="text-sm text-gray-500">Senior Product Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="max-w-96">
            <div className="bg-white rounded-xl p-8 text-left shadow-lg min-h-[240px] flex flex-col justify-between mx-2">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "This corrector improved my sitting posture drastically during work hours."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src="https://i.ibb.co/FK0G3fT/avatar4.png"
                  className="w-12 h-12 rounded-full object-cover border"
                  alt="Russel Ahmed"
                />
                <div>
                  <h4 className="font-bold text-base">Russel Ahmed</h4>
                  <p className="text-sm text-gray-500">CTO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="max-w-96">
            <div className="bg-white rounded-xl p-8 text-left shadow-lg min-h-[240px] flex flex-col justify-between mx-2">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "It really helps with back pain. Very satisfied with the results!"
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src="https://i.ibb.co/yQvFJrz/avatar3.png"
                  className="w-12 h-12 rounded-full object-cover border"
                  alt="Nasir Uddin"
                />
                <div>
                  <h4 className="font-bold text-base">Nasir Uddin</h4>
                  <p className="text-sm text-gray-500">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide className="max-w-96">
            <div className="bg-white rounded-xl p-8 text-left shadow-lg min-h-[240px] flex flex-col justify-between mx-2">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "Lightweight and easy to wear daily. My posture is now much better."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src="https://i.ibb.co/TmX2Fx7/avatar5.png"
                  className="w-12 h-12 rounded-full object-cover border"
                  alt="Tanvir Alam"
                />
                <div>
                  <h4 className="font-bold text-base">Tanvir Alam</h4>
                  <p className="text-sm text-gray-500">Fitness Trainer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide className="max-w-96">
            <div className="bg-white rounded-xl p-8 text-left shadow-lg min-h-[240px] flex flex-col justify-between mx-2">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "Highly recommend this for anyone struggling with posture issues. It's comfortable and effective."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src="https://i.ibb.co/XYZ/avatar6.png"
                  className="w-12 h-12 rounded-full object-cover border"
                  alt="Sara Karim"
                />
                <div>
                  <h4 className="font-bold text-base">Sara Karim</h4>
                  <p className="text-sm text-gray-500">Physiotherapist</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="grid grid-cols-3 w-18 mx-auto mt-5">
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

/* Add this to your CSS */

