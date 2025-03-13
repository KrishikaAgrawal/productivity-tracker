import { Carousel, CarouselItem } from "@/components/ui/carousel";

export function Testimonials() {
  const reviews = [
    "This app changed how I work!",
    "AI reminders keep me on track!",
    "Best productivity tool I've used!",
  ];

  return (
    <section className="px-10 py-10 text-center">
      <h2 className="text-2xl font-bold mb-5">What Our Users Say</h2>
      <Carousel>
        {reviews.map((review, index) => (
          <CarouselItem
            key={index}
            className="p-5 bg-gray-100 rounded-md shadow-md"
          >
            {review}
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}
