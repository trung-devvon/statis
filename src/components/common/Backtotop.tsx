'use client'
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`
            fixed
            bottom-8
            right-8
            p-3
            bg-linear-1
            hover:bg-blue-600
            text-white
            rounded-full
            shadow-lg
            cursor-pointer
            transition-all
            duration-300
            ease-in-out
            hover:scale-110
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            focus:ring-opacity-50
            z-50
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          `}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Backtotop;