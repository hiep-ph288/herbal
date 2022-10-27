import { MemberImageProps } from "../components/MemberImage";
import { MemberItemProps } from "../components/MemberItem";
import { cosmeticsItems, culinaryItems, medicineItems, otherItems, ritualItems, teasItems } from "./category";

export const headerSlide: MemberImageProps[] = [
  { image: require("../../assets/images/slide/bg1.png") },
  { image: require("../../assets/images/slide/bg2.png") },
  { image: require("../../assets/images/slide/bg3.png") },
  { image: require("../../assets/images/slide/bg4.png") },
  { image: require("../../assets/images/slide/bg5.png") },
];

// CategoryData
interface CategoryData {
  [key: string]: MemberItemProps[];
}

export const categoryData: CategoryData = {
  culinary: culinaryItems,
  teas: teasItems,
  medicine: medicineItems,
  ritual: ritualItems,
  cosmetics: cosmeticsItems,
  other: otherItems,
};
