import { Image } from "sanity";

type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

// interface Image {
//     // Define the properties of your image object
//     url: () => any; // Assuming the URL is a string
//     // Add other properties if necessary
//   }

interface NewInItems extends SanityBase {
  _type: "newIn";
  name: string;
  slug: string;
  cardText: string;
  price: number;
  colors: string[];
  description: string;
  images: Image[];
  imageTest: Image;
}

interface FooterType {
  title: string;
  links: string[];
}
