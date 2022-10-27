import { CategoryInfoProps } from "../components/CategoryInfo";
import { MemberItemProps } from "../components/MemberItem";

// Use in Home and Category
export const categoriesData: CategoryInfoProps[] = [
  {
    image: require("../../assets/images/category/culinary.png"),
    quantity: "74 species",
    title: "Culinary",
    summary:
      "include humans and all other animals that are warm-blooded vertebrates (vertebrates have backbones) with hair. They feed their young with milk and have a more well-developed brain than other types of animals.",
  },

  {
    image: require("../../assets/images/category/teas.png"),
    quantity: "8225 species",
    title: "Teas",
    summary:
      "Reptiles are cold-blooded vertebrates. (Vertebrates have backbones.) They have dry skin covered with scales or bony plates and usually lay soft-shelled eggs.",
  },

  {
    image: require("../../assets/images/category/medicine.png"),
    quantity: "6 - 10 million species",
    title: "Medicine",
    summary:
      "Any member of the largest class of the phylum Arthropoda, which is itself the largest of the animal phyla. Insects have segmented bodies, jointed legs, and external skeletons.",
  },

  {
    image: require("../../assets/images/category/ritual.png"),
    quantity: "2 species",
    title: "Ritual",
    summary:
      "Feathered Species are warm-blooded vertebrates (vertebrates have backbones) and are the only animals with feathers. Although all birds have wings, a few species can't fly.",
  },

  {
    image: require("../../assets/images/category/cosmetics.png"),
    quantity: "44000 species",
    title: "Cosmetics",
    summary:
      "Crustaceans make up a very large group of the Arthropods which include the crabs, lobsters, crayfish, shrimp, krill,... Crustaceans are found in a wide range of habitats - most are free-living freshwater or marine animals, but some are terrestrial, some are parasitic and some do not move.",
  },

  {
    image: require("../../assets/images/category/other.png"),
    quantity: "7000 species",
    title: "Other",
    summary:
      "Amphibians are cold-blooded vertebrates (vertebrates have backbones) that don’t have scales. They live part of their lives in water and part on land.",
  },
];

export const culinaryItems: MemberItemProps[] = [
  { image: require("../../assets/images/Culinary/Thyme(1).jpg"), name: 'Thyme' },
  { image: require("../../assets/images/Culinary/Sorrel(1).jpg"), name: 'Sorrel' },
  { image: require("../../assets/images/Culinary/Shiso(1).jpg"), name: 'Shiso' },
  { image: require("../../assets/images/Culinary/Parsley(1).jpg"), name: 'Parsley' },
  { image: require("../../assets/images/Culinary/Oregano(1).jpg"), name: 'Oregano' },
  { image: require("../../assets/images/Culinary/Dill(1).jpg"), name: 'Dill' },
  { image: require("../../assets/images/Culinary/Chives(1).jpg"), name: 'Chives' },
  { image: require("../../assets/images/Culinary/Basil(1).jpg"), name: 'Basil' },
];

export const teasItems: MemberItemProps[] = [
  { image: require("../../assets/images/Teas/Uva_ursi(1).jpg"), name: 'Uva Ursi' },
  { image: require("../../assets/images/Teas/Sage(1).jpg"), name: 'Sage' },
  { image: require("../../assets/images/Teas/Rooibos(1).jpg"), name: 'Rooibos' },
  { image: require("../../assets/images/Teas/passionflowers(1).jpg"), name: 'Passion Flowers' },
  { image: require("../../assets/images/Teas/Lemongrass(1).jpg"), name: 'Lemon Grass' },
  { image: require("../../assets/images/Teas/Lemon_balm(1).jpg"), name: 'Lemon Balm' },
  { image: require("../../assets/images/Teas/Eucalyptus(1).jpg"), name: 'Eucalyptus' },
  { image: require("../../assets/images/Teas/Dandelion(1).jpg"), name: 'Dandelion' },
  { image: require("../../assets/images/Teas/Cinnamon(1).jpg"), name: 'Cinnamon' },
];

export const medicineItems: MemberItemProps[] = [
  { image: require("../../assets/images/Medicine/St_john_s_wort(1).jpg"), name: "Saint John's wort" },
  { image: require("../../assets/images/Medicine/Milk_thistle(1).jpg"), name: 'Milk Thistle' },
  { image: require("../../assets/images/Medicine/Guava(1).jpg"), name: 'Guava' },
  { image: require("../../assets/images/Medicine/Goldenseal(1).jpg"), name: 'Goldenseal' },
  { image: require("../../assets/images/Medicine/Ginseng(1).jpg"), name: 'Ginseng' },
  { image: require("../../assets/images/Medicine/Ginkgo(1).jpg"), name: 'Gingko' },
  { image: require("../../assets/images/Medicine/Ginger(1).jpg"), name: 'Ginger' },
  { image: require("../../assets/images/Medicine/Garlic(1).jpg"), name: 'Garlic' },
];

export const ritualItems: MemberItemProps[] = [
  { image: require("../../assets/images/Ritual/Rosemary(1).jpg"), name: 'Rosemary' },
  { image: require("../../assets/images/Ritual/Common_Myrtle(1).jpg"), name: 'Myrtle' },
];

export const cosmeticsItems: MemberItemProps[] = [
  { image: require("../../assets/images/Cosmetics/Tomato(1).jpg"), name: 'Tomato' },
  { image: require("../../assets/images/Cosmetics/Rose(1).jpg"), name: 'Rose' },
  { image: require("../../assets/images/Cosmetics/Marigold(1).jpg"), name: 'Marigold' },
  { image: require("../../assets/images/Cosmetics/Lavender(1).jpg"), name: 'Lavender' },
  { image: require("../../assets/images/Cosmetics/Hibiscus(1).jpg"), name: 'Hibiscus' },
  { image: require("../../assets/images/Cosmetics/Cucumder(1).jpg"), name: 'Cucumber' },
  { image: require("../../assets/images/Cosmetics/Chamomilla(1).jpg"), name: 'Chamomilla' },
  { image: require("../../assets/images/Cosmetics/Aloe_vera(1).jpg"), name: 'Aloe Vera' },
];

export const otherItems: MemberItemProps[] = [
  { image: require("../../assets/images/Culinary/Ajwain.png"), name: 'Ajwain' },
  { image: require("../../assets/images/Culinary/Allspice.png"), name: 'Allspice' },
  { image: require("../../assets/images/Culinary/Smyrnium.png"), name: 'Smyrnium olusatrum' },
];