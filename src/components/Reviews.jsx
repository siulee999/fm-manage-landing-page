import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Reviews = () => {
  return (
    <section className="flex flex-col items-center mb-section-narrow sm:mb-section-wide">
      <h3 className="text-3xl text-primary-9 font-bold text-center">What they've said</h3>
      <div className="w-full">
        <Swiper 
          modules={[Pagination]}
          pagination={{ clickable: true }}
          style={{
            '--swiper-pagination-color': 'var(--color-accent-4)',
            '--swiper-pagination-bullet-inactive-color': '#ffffff',
            '--swiper-pagination-bullet-size': '8px',
            '--swiper-pagination-bullet-horizontal-gap': '3px'
          }}
          slidesPerView={1} 
          centeredSlides={false} 
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              centeredSlides: true,
            },
            800: {
              slidesPerView: 2.6,
              centeredSlides: true,
            },
          }}

          >
          <SwiperSlide className="pt-20 pb-10 px-page-padding">
            <div className="bg-n-1 relative pt-12 pb-6 px-4 flex flex-col gap-4 max-w-[500px] mx-auto justify-center h-[220px]">
              <div className="absolute w-18 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img src="assets/avatar-ali.png"/>
              </div>
              <span className="font-medium text-primary-9 text-center">
                Ali Bravo
              </span>
              <p className="text-center line-clamp-4">
                "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-20 pb-10 px-page-padding">
            <div className="bg-n-1 relative pt-12 pb-6 px-4 flex flex-col gap-4 max-w-[500px] mx-auto justify-center h-[220px]">
              <div className="absolute w-18 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img src="assets/avatar-richard.png"/>
              </div>
              <span className="font-medium text-primary-9 text-center">
                Richard Watts
              </span>
              <p className="text-center line-clamp-4">
                "Manage allows us to provide structure and process. It keeps us organized and focused."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-20 pb-10 px-page-padding">
            <div className="bg-n-1 relative pt-12 pb-6 px-4 flex flex-col gap-4 max-w-[500px] mx-auto justify-center h-[220px]">
              <div className="absolute w-18 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img src="assets/avatar-shanai.png"/>
              </div>
              <span className="font-medium text-primary-9 text-center">
                Shanai Gough
              </span>
              <p className="text-center line-clamp-4">
                "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-20 pb-10 px-page-padding">
            <div className="bg-n-1 relative pt-12 pb-6 px-4 flex flex-col gap-4 max-w-[500px] mx-auto justify-center h-[220px]">
              <div className="absolute w-18 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img src="assets/avatar-anisha.png"/>
              </div>
              <span className="font-medium text-primary-9 text-center">
                Anisha Li
              </span>
              <p className="text-center line-clamp-4">
                "Manage has superchaassets/rged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-20 pb-10 px-page-padding">
            <div className="bg-n-1 relative pt-12 pb-6 px-4 flex flex-col gap-4 max-w-[500px] mx-auto justify-center h-[220px]">
              <div className="absolute w-18 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img src="assets/avatar-shanai.png"/>
              </div>
              <span className="font-medium text-primary-9 text-center">
                Marry Lee
              </span>
              <p className="text-center line-clamp-4">
                "Manage has superchaassets/rged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-20 pb-10 px-page-padding">
            <div className="bg-n-1 relative pt-12 pb-6 px-4 flex flex-col gap-4 max-w-[500px] mx-auto justify-center h-[220px]">
              <div className="absolute w-18 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img src="assets/avatar-richard.png"/>
              </div>
              <span className="font-medium text-primary-9 text-center">
                Jasmine Fong
              </span>
              <p className="text-center line-clamp-4">
                "Manage has superchaassets/rged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="primary-btn">Get Started</button>
    </section>
  )
}
