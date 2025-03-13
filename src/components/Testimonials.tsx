import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
// import { StarIcon } from "lucide-react";
import { FaStar } from "react-icons/fa6";

export function Testimonials() {
  const reviews = [
    {
      name: "Alice Johnson",
      profile: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      review:
        "This app changed how I work! Absolutely love the AI-driven insights!",
    },
    {
      name: "Michael Smith",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      review:
        "AI reminders keep me on track! Highly recommended for busy professionals.",
    },
    {
      name: "Sophia Martinez",
      profile: "https://randomuser.me/api/portraits/women/29.jpg",
      rating: 5,
      review:
        "Best productivity tool I've used! The task automation is a lifesaver!",
    },
    {
      name: "David Brown",
      profile: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 4,
      review:
        "Great for managing daily tasks efficiently. The UI is intuitive and smooth.",
    },
    {
      name: "Emma Wilson",
      profile: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
      review: "AI-powered reminders have truly improved my time management!",
    },
  ];

  return (
    <section className="px-10 py-10 text-center">
      <h2 className="text-2xl font-bold mb-5">What Our Users Say</h2>
      <Carousel className="flex overflow-x-auto py-4">
        {reviews.map((user, index) => (
          <CarouselItem key={index} className="flex-none w-80">
            <Card className="p-5 rounded-md shadow-md flex flex-col items-center bg-gray-100">
              <img
                className="w-24 h-24 rounded-full -mb-4"
                src={user.profile}
                alt={user.name}
              />
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <div className="flex gap-1 -my-5">
                {[...Array(user.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
              </div>
              <CardContent>
                <p className="italic">"{user.review}"</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}
