'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Image from 'next/image';
import { CarouselApi } from "@/components/ui/carousel"; // <-- required for typing

const slides = [
    {
        image: "/images/hero1.jpg",
        title: "Legal Education Made Simple",
        description: "Your partner in understanding PH law—easy, accessible, and reliable.",
    },
    {
        image: "/images/hero2.jpg",
        title: "Learn Anywhere, Anytime",
        description: "All your legal topics in one platform—tailored for Filipino students.",
    },
    {
        image: "/images/hero3.jpg",
        title: "Ace the Bar Exams",
        description: "Structured content for success. Study smarter with Legal Educ Pro PH.",
    },
];

const HeroCarousel = () => {
    const carouselRef = useRef<CarouselApi | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            carouselRef.current?.scrollNext();
        }, 4000); // every 3 seconds

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <section className="w-full relative">
            <Carousel
                opts={{ loop: true }}
                setApi={(api) => (carouselRef.current = api)}
                className="w-full"
            >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-[500px] w-full overflow-hidden">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6 text-white">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                                        {slide.title}
                                    </h2>
                                    <p className="max-w-xl text-lg sm:text-xl">{slide.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
        </section>
    );
};

export default HeroCarousel;
