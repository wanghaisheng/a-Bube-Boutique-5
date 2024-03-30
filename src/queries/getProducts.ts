"use server";
import { groq } from "next-sanity";
import { NewInItems } from "../../typings";
import { client } from "../../sanity/lib/client";

export const getNewInProducts = async () => {
  const query = groq`*[_type == "newIn"] {
    ...,  
    images
  }`;

  //   "images": images[]{
  //     "url": asset->url
  //   }

  const newInItems: NewInItems[] = await client.fetch(query);
  //   {
  //     cache: "no-store", added after query to make next not cache"imageTest": imageTest.asset->url,
  //   }

  return newInItems;
};
