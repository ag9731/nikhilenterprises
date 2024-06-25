import React from "react";
import "./Testimonials.css"; // Importing CSS for styling

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Prathikshith",
      content:
        "Absolutely love the Pvc stripe curtain and Air curtain from Nikhil Enterprises! They've transformed our workspace, adding both style and functionality. Highly recommend!",
      design: "testimonial1", // CSS class name for styling
    },
    {
      id: 2,
      name: "Rakesh",
      content:
        "The Hand Dryer and Automatic Door are fantastic additions to our facility. They're efficient, stylish, and perfectly suited to our needs. Great products from Nikhil Enterprises!",
      design: "testimonial2", // CSS class name for styling
    },
    {
      id: 3,
      name: "Sachin",
      content:
        "We installed Monsoon blinds and Roller blinds at our office, and they are simply outstanding. They provide excellent protection against the weather and look elegant too.",
      design: "testimonial3", // CSS class name for styling
    },
    {
      id: 4,
      name: "Ashika",
      content:
        "The Automatic Sensor Door from Nikhil Enterprises has made access to our building effortless. It's reliable, secure, and has significantly improved the flow of traffic.",
      design: "testimonial4", // CSS class name for styling
    },
    {
      id: 5,
      name: "Anushka",
      content:
        "I highly recommend the Fly catcher and Soft wall curtain from Nikhil Enterprises. They are effective and essential for maintaining cleanliness and hygiene in our restaurant.",
      design: "testimonial5", // CSS class name for styling
    },
    {
      id: 6,
      name: "Shreya",
      content:
        "The Vartikacl blinds and Pvc blinds we purchased are of excellent quality. They add a touch of sophistication to our office while effectively controlling light and privacy.",
      design: "testimonial6", // CSS class name for styling
    },
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className={`testimonial ${testimonial.design}`}
        >
          <p className="testimonial-content">{testimonial.content}</p>
          <p className="testimonial-name">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
