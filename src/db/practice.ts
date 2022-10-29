import { ImageSourcePropType } from "react-native";


export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques:"Question 1: Where do thyme come from? ",
      ans:['M','E','D','I','T','E','R','R','A','N','E','A','N'],
    },
    {
      ques:"Question 2: What minerals does cinnamon contain? ",
      ans:['I','R','O','N'],
    },
    {
      ques:"Question 3: When should lemon balm seeds be sown? ",
      ans:['S','P','R','I','N','G'],
    },
    {
      ques:"Question 4: Where do roses come from?",
      ans:['C','H','I','N','A'],
    },
  ],
  medium: [
    {
      ques:"Question 1: Where do thyme come from? ",
      ans:['M','E','D','I','T','E','R','R','A','N','E','A','N'],
    },
    {
      ques:"Question 2: What minerals does cinnamon contain? ",
      ans:['I','R','O','N'],
    },
    {
      ques:"Question 3: When should lemon balm seeds be sown? ",
      ans:['S','P','R','I','N','G'],
    },
    {
      ques:"Question 4: Where do roses come from?",
      ans:['C','H','I','N','A'],
    },
  ],
  hard: [
    {
      ques:"Question 1: Where do thyme come from? ",
      ans:['M','E','D','I','T','E','R','R','A','N','E','A','N'],
    },
    {
      ques:"Question 2: What minerals does cinnamon contain? ",
      ans:['I','R','O','N'],
    },
    {
      ques:"Question 3: When should lemon balm seeds be sown? ",
      ans:['S','P','R','I','N','G'],
    },
    {
      ques:"Question 4: Where do roses come from?",
      ans:['C','H','I','N','A'],
    },
  ],
};
