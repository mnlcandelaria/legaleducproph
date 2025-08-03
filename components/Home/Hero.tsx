'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const slides = [
    {
        image: '/images/hero1.jpg',
        title: 'Legal Education Made Simple',
        description: 'Your partner in understanding PH law—easy, accessible, and reliable.',
    },
    {
        image: '/images/hero2.jpg',
        title: 'Learn Anywhere, Anytime',
        description: 'All your legal topics in one platform—tailored for Filipino students.',
    },
    {
        image: '/images/hero3.jpg',
        title: 'Ace the Bar Exams',
        description: 'Structured content for success. Study smarter with Legal Educ Pro PH.',
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full relative h-[700px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-5' : 'opacity-0 z-0'
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#176e79]/80 to-black/90 flex flex-col items-center justify-center px-6 text-white">
                        <div className="w-full max-w-7xl mx-auto text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                {slide.title}
                            </h2>
                            <p className="max-w-xl text-lg sm:text-xl">{slide.description}</p>
                            <Button className="mt-6 bg-secondary" size="lg">
                                Find out how we help
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default HeroCarousel;
