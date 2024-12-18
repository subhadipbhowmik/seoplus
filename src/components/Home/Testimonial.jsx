import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Brian Dean",
      role: "CEO",
      company: "Backlinko",
      image:
        "https://www.surges.co/perch/resources/brian-dean-interview-exploding-topics-w500h500@1.5x.jpg",
      content:
        "This SEO tool has revolutionized our online presence. Our organic traffic has increased by 150% in just three months!",
      rating: 5,
    },
    {
      name: "Shubhadip Bhowmik",
      role: "Intern",
      company: "Next Drive India ",
      image: "https://shubhadipbhowmik.vercel.app/me.png",
      content:
        "I've tried many SEO tools, but this one stands out. It's intuitive, comprehensive, and the results speak for themselves.",
      rating: 4,
    },
    {
      name: "Neil Patel",
      role: "Digital Marketer",
      company: " Crazy Egg",
      image:
        "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/00-Blog-Related_Images/neil_patel_hs.jpg?width=500&height=500&name=neil_patel_hs.jpg",
      content:
        "The keyword research feature is a game-changer. It's helped us create content that truly resonates with our audience.",
      rating: 5,
    },
  ];
  return (
    <>
      <section className="py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-6 text-lg leading-2 text-gray-600">
              Discover how our SEO tool has transformed businesses and boosted
              online visibility for companies across various industries.
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <h3 className="font-semibold leading-7 tracking-tight text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm leading-6 text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {testimonial.content}
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
