import type { Fragrance } from "@/types/fragrance"

export const fragrances: Fragrance[] = [
  {
    id: 1,
    brand: "Acqua di Parma",
    name: "Osmanthus",
    accords: ["Floral", "Fruity", "Fresh", "Citrus", "Soft Spicy"],
    character: ["Elegant", "Delicate", "Cheerful"],
    reviews: [{ user: "Cathy", text: "", liked: true }],
  },
  {
    id: 2,
    brand: "Byredo",
    name: "Mojave Ghost",
    accords: ["Floral", "Powdery", "Woody", "Violet", "Musky"],
    character: ["Mysterious", "Ethereal", "Dreamy"],
    reviews: [{ user: "Brian", text: "", liked: true }],
  },
  {
    id: 3,
    brand: "Byredo",
    name: "Bibliothèque",
    accords: ["Fruity", "Leather", "Powdery", "Sweet", "Violet"],
    character: ["Intellectual", "Nostalgic", "Moody"],
    reviews: [
      {
        user: "Brian",
        text: "Kinda cool but not my favourite. A bit too leathery, moldy smell of a vibe. Prefer something slightly cleaner or brighter.",
        liked: false,
      },
    ],
  },
  {
    id: 4,
    brand: "Byredo",
    name: "La Tulipe",
    accords: ["Floral", "Green", "Soft Spicy", "Fruity", "Aromatic"],
    character: ["Romantic", "Fresh", "Playful"],
    reviews: [
      {
        user: "Brian",
        text: "Floral but balanced. I like it, but too feminine for me.",
        liked: true,
      },
    ],
  },
  {
    id: 5,
    brand: "Byredo",
    name: "Rose of No Man's Land",
    accords: ["Rose", "Floral", "Soft Spicy", "Woody", "Amber"],
    character: ["Romantic", "Sophisticated", "Poetic"],
    reviews: [
      {
        user: "Brian",
        text: "Romantic and sophisticated. I like it but probably wouldn't wear it.",
        liked: true,
      },
    ],
  },
  {
    id: 6,
    brand: "Byredo",
    name: "Bal d’Afrique",
    accords: ["Woody", "Aromatic", "Earthy", "Violet", "Floral"],
    character: ["Warm", "Artistic", "Carefree"],
    reviews: [
      {
        user: "Cathy",
        text: "my go to in winter usually",
        liked: true,
      },
    ],
  },
  {
    id: 7,
    brand: "Byredo",
    name: "Casablanca Lily",
    accords: ["White Floral", "Honey", "Sweet", "Tuberose", "Fruity"],
    character: ["Sensual", "Opulent", "Dramatic"],
    reviews: [{ user: "Cathy", text: "", liked: true }],
  },
  {
    id: 8,
    brand: "Byredo",
    name: "Sellier",
    accords: ["Leather", "Woody", "Smoky", "Tobacco", "Animalic"],
    character: ["Mysterious", "Confident", "Rebellious"],
    reviews: [
      {
        user: "Cathy",
        text: "this is like a way better santal33 if I recall correctly lol but also too $$$",
        liked: true,
      },
    ],
  },
  {
    id: 9,
    brand: "Chanel",
    name: "1957",
    accords: ["Powdery", "Musky", "Iris", "Aldehydic", "Woody"],
    character: ["Elegant", "Refined", "Understated"],
    reviews: [{ user: "Cathy", text: "", liked: true }],
  },
  {
    id: 10,
    brand: "Creed",
    name: "Original Vetiver",
    accords: ["Citrus", "Woody", "Aromatic", "Fresh Spicy", "Earthy"],
    character: ["Confident", "Professional", "Assertive"],
    reviews: [
      {
        user: "Brian",
        text: "Gives rich and confident. A little too herbal and minty.",
      },
      {
        user: "Cathy",
        text: "the one i wanted to spray on my bf aka u but idk if u would like it lol",
        liked: true,
      },
    ],
  },
  {
    id: 11,
    brand: "Creed",
    name: "Wild Vetiver",
    accords: ["Rose", "Fresh Spicy", "Aromatic", "Woody", "Citrus"],
    character: ["Grounded", "Mature", "Adventurous"],
    reviews: [
      {
        user: "Brian",
        text: "A bit earthier than Original Vetiver. Better, but not my style.",
      },
    ],
  },
  {
    id: 12,
    brand: "Creed",
    name: "Millésime Impérial",
    accords: ["Marine", "Citrus", "Salty", "Fruity", "Aromatic"],
    character: ["Luxurious", "Carefree", "Confident"],
    reviews: [
      {
        user: "Brian",
        text: "Don't like.",
      },
    ],
  },
  {
    id: 13,
    brand: "Creed",
    name: "Acqua Fiorentina",
    accords: ["Citrus", "Fruity", "Woody", "Fresh", "Fresh Spicy"],
    character: ["Playful", "Romantic", "Youthful"],
    reviews: [
      {
        user: "Brian",
        text: "Sweet and salty.",
      },
      {
        user: "Cathy",
        text: "if I wanna feel pretty in spring 🌸",
        liked: true,
      },
    ],
  },
  {
    id: 14,
    brand: "Diptyque",
    name: "L’Eau Papier",
    accords: ["Musky", "Powdery", "Yellow Floral", "Woody", "Sweet"],
    character: ["Introspective", "Gentle", "Minimalist"],
    reviews: [
      {
        user: "Cathy",
        text: "smell like rice",
        liked: true,
      },
    ],
  },
  {
    id: 15,
    brand: "Diptyque",
    name: "Orphéon",
    accords: ["Powdery", "Woody", "Aromatic", "Fresh Spicy", "White Floral"],
    character: ["Intellectual", "Nostalgic", "Sophisticated"],
    reviews: [{ user: "Cathy", text: "", liked: true }],
  },
  {
    id: 16,
    brand: "Glossier",
    name: "You",
    accords: ["Musky", "Iris", "Amber", "Soft Spicy", "Powdery"],
    character: ["Approachable", "Effortless", "Intimate"],
    reviews: [
      {
        user: "Cathy",
        text: "my go to if I dont wanna think about it lol",
        liked: true,
      },
    ],
  },
  {
    id: 17,
    brand: "Le Labo",
    name: "Eucalyptus 20",
    accords: ["Woody", "Amber", "Aromatic", "Fresh Spicy", "Camphor"],
    character: ["Calm", "Grounded", "Contemplative"],
    reviews: [
      {
        user: "Brian",
        text: "Nicer, less strong version of Vetiver 46, which is like being at a temple with incense.",
      },
    ],
  },
  {
    id: 18,
    brand: "Le Labo",
    name: "Ylang 49",
    accords: ["Woody", "Earthy", "Yellow Floral", "Patchouli", "Mossy"],
    character: ["Mysterious", "Earthy", "Bohemian"],
    reviews: [
      {
        user: "Brian",
        text: "Like tea, I think osmanthus at dim sum. It's okay, not that good, but I like it as an idea?",
      },
    ],
  },
  {
    id: 19,
    brand: "Le Labo",
    name: "Another 13",
    accords: ["Musky", "Amber", "Woody", "Animalic", "Fruity"],
    character: ["Minimalist", "Intimate", "Enigmatic"],
    reviews: [
      {
        user: "Cathy",
        text: "love on rainy days",
        liked: true,
      },
    ],
  },
  {
    id: 20,
    brand: "Le Labo",
    name: "Vanille 44",
    accords: ["Vanilla", "Woody", "Smoky", "Amber", "Balsamic"],
    character: ["Sophisticated", "Reserved", "Mysterious"],
    reviews: [{ user: "Cathy", text: "", liked: true }],
  },
  {
    id: 21,
    brand: "Le Labo",
    name: "Thé Matcha 26",
    accords: ["Woody", "Fruity", "Citrus", "Green", "Aromatic"],
    character: ["Calm", "Introspective", "Understated"],
    reviews: [{ user: "Cathy", text: "", liked: true }],
  },
  {
    id: 22,
    brand: "Phlur",
    name: "Cashmere Skin",
    accords: ["Musky", "Powdery", "Almond", "Floral", "Vanilla"],
    character: ["Cozy", "Gentle", "Comforting"],
    reviews: [
      {
        user: "Cathy",
        text: "was gifted but its nice for cold weather",
        liked: true,
      },
    ],
  },
  {
    id: 23,
    brand: "Tom Ford",
    name: "Lost Cherry",
    accords: ["Cherry", "Sweet", "Almond", "Nutty", "Fruity"],
    character: ["Seductive", "Playful", "Daring"],
    reviews: [
      {
        user: "Cathy",
        text: "if I wanna feel 🫦",
        liked: true,
      },
    ],
  },
  {
    id: 24,
    brand: "Tom Ford",
    name: "White Suede",
    accords: ["Musky", "Powdery", "Leather", "White Floral", "Warm Spicy"],
    character: ["Elegant", "Sensual", "Understated"],
    reviews: [{ user: "Cathy", text: "", liked: true }],
  },
]
