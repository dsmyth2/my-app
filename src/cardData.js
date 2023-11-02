import catPicture from "./assets/catPicture.webp";
import dogPicture from "./assets/dogPicture.webp";
import rabbitPicture from "./assets/rabbitPicture.webp";

// create some dynamic data

const data = [
  {
    id: 1,
    title: "Customized Japan trip",
    description: "Book a tour through Japan and watch cats",
    price: 45,
    coverImg: catPicture,
    stats: {
      rating: 5.0,
      reviewCount: 35,
    },
    location: "Japan",
    openSlots: 30,
  },
  {
    id: 2,
    title: "Customized Japan trip",
    description: "Book a tour through Japan and watch dogs",
    price: 6,
    coverImg: dogPicture,
    stats: {
      rating: 5.0,
      reviewCount: 11,
    },
    location: "Japan",
    openSlots: 0,
  },
  {
    id: 3,
    title: "Customized Japan trip",
    description: "Book a tour through Japan and watch rabbits",
    price: 8,
    coverImg: rabbitPicture,
    stats: {
      rating: 4.5,
      reviewCount: 110,
    },
    location: "Japan",
    openSlots: 15,
  },
];

export default data;
