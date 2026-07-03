import React, { memo, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Container, SectionHeading, Icon } from '@/components';

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
  ,
  {
    id: 'r4',
    name: 'Priya Kaur',
    designation: 'Facility Manager',
    company: 'Sunrise Towers',
    review: 'Professional, punctual and proactive — RCSS completely transformed our site security posture.',
    rating: 5,
    avatar: clientFemale
  },
  {
    id: 'r5',
    name: 'Amit Patel',
    designation: 'Operations Head',
    company: 'Centric Logistics',
    review: 'Their integrated CCTV installation and monitoring service gave us peace of mind. Fast response and clear reporting.',
    rating: 5,
    avatar: clientMale
  },
  {
    id: 'r6',
    name: 'Linda Park',
    designation: 'Event Producer',
    company: 'Spotlight Events',
    review: 'RCSS provided discreet and effective security for our event. Guests commented on their professionalism.',
    rating: 5,
    avatar: clientFemale
  },
  {
    id: 'r7',
    name: 'Omar Al-Sayed',
    designation: 'Property Director',
    company: 'Harbourview Estates',
    review: 'We switched to RCSS after poor service from the previous vendor — the improvement was instant.',
    rating: 5,
    avatar: clientMale
  },
  {
    id: 'r8',
    name: 'Grace Lee',
    designation: 'CEO',
    company: 'ClearWater Health',
    review: 'They designed a layered security plan tailored to our healthcare facility — outstanding expertise.',
    rating: 5,
    avatar: clientFemale
  }
];

const ROTATION_RANGE = 22;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function TiltTestimonialCard({ item }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });
  const transform = useMotionTemplate`perspective(1100px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = ((mouseY / rect.height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rotateY = (mouseX / rect.width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="rcss-testimonial-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', transform }}
    >
      <div className="rcss-testimonial-card__surface">
        <span className="rcss-testimonial-card__quote-mark">“</span>
        <div className="rcss-testimonial-card__stars">
          {[...Array(item.rating)].map((_, i) => (
            <Icon key={i} name="crown" size={16} className="rcss-text-gold" />
          ))}
        </div>
        <p className="rcss-testimonial-card__review">"{item.review}"</p>
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
      </div>
    </motion.div>
  );
}

/**
 * Testimonials slider — memoized since review data is static.
 * Avatar images use loading="lazy" for native browser lazy loading.
 */
export const Testimonials = memo(function Testimonials() {
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="rcss-testimonials-section">
      <Container>
        <SectionHeading
          // title="Endorsements From Our Partners"
          subtitle="Read how corporate heads, health systems, and residential properties secure their operations with our guarding."
          badgeText="Client Testimonials"
          align="center"
        />

        <div
          className="rcss-testimonials__slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={0}
            slidesPerView="auto"
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
              nextEl: '.rcss-swiper-next',
              prevEl: '.rcss-swiper-prev'
            }}
            onSlideChange={(s) => setCurrentIndex(s.activeIndex)}
            className="rcss-testimonials-swiper"
          >
            {REVIEWS_DATA.map((item) => (
              <SwiperSlide key={item.id} className="rcss-testimonials__slide">
                <TiltTestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          {/* Prev arrow: visible only when hovered and there is at least one previous slide */}
          <button
            type="button"
            className={`rcss-swiper-arrow rcss-swiper-prev ${currentIndex > 0 ? 'rcss-swiper-arrow--visible' : ''}`}
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon name="arrow-right" size={20} style={{ transform: 'rotate(180deg)' }} />
          </button>

          {/* Next arrow: visible only when hovered */}
          <button
            type="button"
            className={`rcss-swiper-arrow rcss-swiper-next ${isHovered ? 'rcss-swiper-arrow--visible' : ''}`}
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
