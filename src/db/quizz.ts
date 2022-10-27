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
    {
      ques:"Question 2: Which group of animals Tortoises are?",
      choose:['Reptile','Mammal', 'Amphibian'],
      ans: 0
    },
    {
      ques:"Question 3: Which is the reptile animal that can not swim?",
      choose:['Turtle','Tortoise','Sulcata Tortoise'],
      ans: 2
    },
  ],
  medium: [
    {
      ques:"Question 1: Where do Turtles lay eggs?",
      choose:['Under the sea','At the place they were born','On the sand'],
      ans: 1
    },
    {
      ques:"Question 2: Which group of animals Tortoises are?",
      choose:['Reptile','Mammal', 'Amphibian'],
      ans: 0
    },
    {
      ques:"Question 3: Which is the reptile animal that can not swim?",
      choose:['Turtle','Tortoise','Sulcata Tortoise'],
      ans: 2
    },
  ],
  hard: [
    {
      ques:"Question 1: Where do Turtles lay eggs?",
      choose:['Under the sea','At the place they were born','On the sand'],
      ans: 1
    },
    {
      ques:"Question 2: Which group of animals Tortoises are?",
      choose:['Reptile','Mammal', 'Amphibian'],
      ans: 0
    },
    {
      ques:"Question 3: Which is the reptile animal that can not swim?",
      choose:['Turtle','Tortoise','Sulcata Tortoise'],
      ans: 2
    },
  ],
};
