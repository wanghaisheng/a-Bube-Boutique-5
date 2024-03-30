import { defineField, defineType } from "sanity";

export default defineType({
  name: "newIn",
  title: "New In",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
    }),
    defineField({
      name: "cardText",
      title: "Card Text",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "imageTest",
      title: "Image Test",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

// export default defineType({
//   name: "foodItems",
//   title: "Food Items",
//   type: "document",
//   fields: [
//     defineField({
//       name: "name",
//       title: "Name",
//       type: "string",
//     }),
//     defineField({
//       title: "Tags Text",
//       name: "tagsTest",
//       type: "array",
//       of: [{ type: "string" }],
//       options: {
//         layout: "tags",
//       },
//     }),
//     defineField({
//       name: "image",
//       title: "Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//       name: "tags",
//       title: "Tags",
//       type: "array",
//       of: [
//         {
//           type: "string",
//         },
//       ],
//     }),
//     defineField({
//       name: "rating",
//       title: "Rating",
//       type: "number",
//       validation: (rule: NumberRule) => rule.required().min(1).max(5),
//     }),
//   ],
// });
