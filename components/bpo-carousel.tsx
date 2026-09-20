"use client";

import { useEffect, useState } from "react";

type BpoService = {
  n: string;
  title: string;
  text: string;
  tags: string[];
};

type BpoCarouselProps = {
  items: BpoService[];
};

export function BpoCarousel({ items }: BpoCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Detect mobile screen
  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia("(max-width: 767px)");

  //     const updateScreenSize = () => {
  //       setIsMobile(mediaQuery.matches);
  //     };

  //     updateScreenSize();

  //     mediaQuery.addEventListener("change", updateScreenSize);

  //     return () => {
  //       mediaQuery.removeEventListener("change", updateScreenSize);
  //     };
  //   }, []);

  // -----------------------------------------------------
  // Detect mobile/desktop AND update when screen resizes.
  //
  // Important:
  // This also handles Chrome DevTools when switching
  // between desktop and mobile responsive mode.
  // -----------------------------------------------------
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateScreenSize = () => {
      setIsMobile(mediaQuery.matches);

      // Reset carousel position when layout changes
      // between desktop (2 cards) and mobile (1 card).
      setCurrentPage(0);
    };

    // Check size when component first loads
    updateScreenSize();

    // Listen for desktop <-> mobile changes
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  // Mobile = 1 card
  // Tablet/Desktop = 2 cards
  const cardsPerView = isMobile ? 1 : 2;

  const totalPages = Math.max(1, Math.ceil(items.length / cardsPerView));

  // Make sure page stays valid when resizing
  useEffect(() => {
    setCurrentPage((current) => Math.min(current, totalPages - 1));
  }, [totalPages]);

  // Automatically move every 5 seconds
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const interval = window.setInterval(() => {
      setDirection("next");

      setCurrentPage((current) =>
        current === totalPages - 1 ? 0 : current + 1,
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused, totalPages]);

  const handleNext = () => {
    setDirection("next");

    setCurrentPage((current) => (current === totalPages - 1 ? 0 : current + 1));
  };

  const handlePrevious = () => {
    setDirection("prev");

    setCurrentPage((current) => (current === 0 ? totalPages - 1 : current - 1));
  };

  const startIndex = currentPage * cardsPerView;

  const visibleItems = items.slice(startIndex, startIndex + cardsPerView);

  if (!items.length) {
    return null;
  }

  return (
    <div
      className="bpo-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Decorative background effects */}
      <div
        className="bpo-carousel__glow bpo-carousel__glow--left"
        aria-hidden="true"
      />

      <div
        className="bpo-carousel__glow bpo-carousel__glow--right"
        aria-hidden="true"
      />

      <div className="bpo-carousel__content">
        {/* Previous arrow */}
        <button
          type="button"
          className="bpo-carousel__arrow bpo-carousel__arrow--prev"
          onClick={handlePrevious}
          aria-label="Show previous BPO services"
        >
          ←
        </button>

        {/* Cards */}
        <div className="bpo-carousel__viewport">
          <div
            key={`${currentPage}-${cardsPerView}`}
            className={`bpo-carousel__track bpo-carousel__track--${direction}`}
            aria-live="polite"
          >
            {visibleItems.map((item) => (
              <article
                key={item.title}
                className="service-card bpo-carousel__card"
              >
                <span>{item.n}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          type="button"
          className="bpo-carousel__arrow bpo-carousel__arrow--next"
          onClick={handleNext}
          aria-label="Show next BPO services"
        >
          →
        </button>
      </div>

      {/* Bottom navigation dots */}
      <div className="bpo-carousel__dots" aria-label="BPO service slides">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentPage ? "true" : undefined}
            className={`bpo-carousel__dot ${
              index === currentPage ? "active" : ""
            }`}
            onClick={() => {
              setDirection(index > currentPage ? "next" : "prev");

              setCurrentPage(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
