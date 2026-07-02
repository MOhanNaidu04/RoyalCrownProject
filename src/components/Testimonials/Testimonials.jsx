import React, { memo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Container, SectionHeading, Card, Icon } from '@/components';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';

import clientFemale from '@/assets/images/client_female.png';
import clientMale from '@/assets/images/client_male.png';

const REVIEWS_DATA = [
  {
    id: 'r1',
    name: 'Sarah Johnson',
    designation: 'Event Manager',
    company: 'Global Enterprises',
    review: 'Royal Crown Security Services has provided exceptional security for our corporate events. Their professionalism and attention to detail are unmatched.',
    rating: 5,
    avatar: clientFemale
  },
  {
    id: 'r2',
    name: 'Michael Chen',
    designation: 'HOA President',
    company: 'Lakeside Residences',
    review: "We've been using RCSS for our residential complex security for over 5 years. Their guards are always alert, courteous, and well-trained.",
    rating: 5,
    avatar: clientMale
  },
  {
    id: 'r3',
    name: 'David Rodriguez',
    designation: 'Owner',
    company: 'Premium Retail',
    review: 'The surveillance system installed by RCSS has significantly improved our store security. Their ongoing support and quick response time is impressive.',
    rating: 5,
    avatar: clientMale
  }
];

/**
 * Testimonials slider — memoized since review data is static.
 * Avatar images use loading="lazy" for native browser lazy loading.
 */
export const Testimonials = memo(function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section className="rcss-testimonials-section">
      <Container>
        <SectionHeading
          title="Endorsements From Our Partners"
          subtitle="Read how corporate heads, health systems, and residential properties secure their operations with our guarding."
          badgeText="Client Testimonials"
          align="center"
        />

        <div className="rcss-testimonials__slider-wrapper">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              bulletClass: 'rcss-swiper-bullet',
              bulletActiveClass: 'rcss-swiper-bullet--active'
            }}
            navigation={{
              nextEl: '.rcss-swiper-next'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="rcss-testimonials-swiper"
          >
            {REVIEWS_DATA.map((item) => (
              <SwiperSlide key={item.id} className="rcss-testimonials__slide">
                <Card hoverEffect="scale" className="rcss-testimonial-card">
                  {/* Decorative Quotation Mark */}
                  <span className="rcss-testimonial-card__quote-mark">“</span>

                  {/* Star Ratings */}
                  <div className="rcss-testimonial-card__stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <Icon key={i} name="crown" size={16} className="rcss-text-gold" />
                    ))}
                  </div>

                  {/* Review Paragraph */}
                  <p className="rcss-testimonial-card__review">
                    "{item.review}"
                  </p>

                  {/* Client Info Grid */}
                  <div className="rcss-testimonial-card__client">
                    <img
                      src={item.avatar}
                      alt={`${item.name}, ${item.designation} at ${item.company}`}
                      className="rcss-testimonial-card__avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                    <div className="rcss-testimonial-card__info">
                      <h4 className="rcss-testimonial-card__name">{item.name}</h4>
                      <span className="rcss-testimonial-card__company">
                        {item.designation}, {item.company}
                      </span>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            type="button"
            className="rcss-swiper-arrow rcss-swiper-next"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
});

export default Testimonials;
