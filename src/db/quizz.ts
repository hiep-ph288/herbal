import { ImageSourcePropType } from "react-native";


export interface QuizzData {
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      ques:"Question 1: Where do Turtles lay eggs?",
      choose:['Under the sea','At the place they were born','On the sand'],
      ans: 1
    },
  ],
  medium: [
    {
      ques:"Question 1: Where do Turtles lay eggs?",
      choose:['Under the sea','At the place they were born','On the sand'],
      ans: 1
    },
  ],
  hard: [
    {
      ques:"Question 1: Where do Turtles lay eggs?",
      choose:['Under the sea','At the place they were born','On the sand'],
      ans: 1
    },
  ],
};
