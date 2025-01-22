

const cardSectionproduct = {
  title: "card Section",
  name: "cardsSection",
  type: "object",
  fields: [
    {
      title: "Card",
      name: "Card",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Card Section Banner",
              name: "cardSecBanner",
              type: "string",
            },
            { title: "Card Section Image", name: "cardSecImg", type: "image" },
            {
              title: "Card Section Heading",
              name: "cardSectionHeading",
              type: "string",
            },
            {
              title: "Card Section SmallH",
              name: "cardSectionSmallH",
              type: "string",
            },
            {
              title: "Card Section Old Price",
              name: "cardSectionOldPrice",
              type: "number",
            },
            {
              title: "Card Section New Price",
              name: "cardSectionNewPrice",
              type: "number",
            },
            {
              title: "Card Section Colour",
              name: "cardSectionColour",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default cardSectionproduct