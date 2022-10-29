import { ImageSourcePropType } from "react-native";


export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require('../../assets/images/quiz/1.png'),
      ques:"Question 1: What climate do aloe vera live in?",
      choose:['Arid climat','Temperate climate','Polar climate'],
      ans: 0
    },
    {
      image: require('../../assets/images/quiz/2.png'),
      ques:"Question 2: When do chamomiles bloom",
      choose:['From January to February','From March to April', 'From June to July'],
      ans: 2
    },
    {
      image: require('../../assets/images/quiz/3.png'),
      ques:"Question 3: When did chives become popular?",
      choose:['20th century','19th century', '18th century'],
      ans: 1
    },
    {
      image: require('../../assets/images/quiz/4.png'),
      ques:"Question 4: Where do thyme come from?",
      choose:['Asia','Mediterranean', 'Africa'],
      ans: 1
    },
    {
      image: require('../../assets/images/quiz/5.png'),
      ques:"Question 5: What are the medicinal uses of ginger?",
      choose:['Anti-inflammatory','Regulate blood sugar', 'Both options above'],
      ans: 2
    },
    {
      image: require('../../assets/images/quiz/6.png'),
      ques:"Question 6: How many minutes should ginseng seeds be soaked in 10% bleach solution?",
      choose:['3 minutes','5 minutes', '10 minutes'],
      ans: 2
    },
    {
      image: require('../../assets/images/quiz/7.png'),
      ques:"Question 7: Silymarin is extracted from milk thistle, what properties?",
      choose:['Antioxidant','Anti-viral and anti-inflammatory', 'Both options above'],
      ans: 2
    },
  ],
  medium: [
    {
      image: require('../../assets/images/quiz/8.png'),
      ques:"Question 1: How many times more vitamin C in guava than orange?",
      choose:['4 times','5 times', '6 times'],
      ans: 0
    },
    {
      image: require('../../assets/images/quiz/9.png'),
      ques:"Question 2: The earliest known medicinal properties of Myrtle were used in what year BC?",
      choose:['500 B.C.E.','600 B.C.E.', '700 B.C.E.'],
      ans: 1
    },
    {
      image: require('../../assets/images/quiz/10.png'),
      ques:"Question 3: What minerals does cinnamon contain?",
      choose:['Calcium','Iron', 'Potassium'],
      ans: 1
    },
    {
      image: require('../../assets/images/quiz/11.png'),
      ques:"Question 4: What weather conditions are suitable for dandelion growth?",
      choose:['Full sun','Cold', 'Dry hot'],
      ans: 0
    },
    {
      image: require('../../assets/images/quiz/12.png'),
      ques:"Question 5: Besides its medicinal and culinary uses, lemon balm is also used in?",
      choose:['Cosmetics','Perfume', 'Both options above'],
      ans: 2
    },
    {
      image: require('../../assets/images/quiz/13.png'),
      ques:"Question 6: When should lemon balm seeds be sown?",
      choose:['Spring','Summer', 'Autumn'],
      ans: 0
    },
    {
      image: require('../../assets/images/quiz/14.png'),
      ques:"Question 7: What is the pH in the soil so that the uva ursi plant can favorably grow?",
      choose:['From 4.5 to 5.5','From 5.5 to 7', 'From 7.5 to 8.5'],
      ans: 0
    },
  ],
  hard: [
    {
      image: require('../../assets/images/quiz/15.png'),
      ques:"Question 1: Poorly drained soil can cause the uva ursi plant to contract what diseases?",
      choose:['Black mildew','Root rots', 'Both options above'],
      ans: 2
    },
    {
      image: require('../../assets/images/quiz/16.png'),
      ques:"Question 2: Why is lemongrass used in medicine because?",
      choose:['Antifungal','Antibacterial, and antimicrobial', 'Both options above'],
      ans: 2
    },
    {
      image: require('../../assets/images/quiz/17.png'),
      ques:"Question 3: What is lemongrass oil used for?",
      choose:['Natural insect repellent','Cooking', 'Both options above'],
      ans: 0
    },
    {
      image: require('../../assets/images/quiz/18.png'),
      ques:"Question 4: What nutrients do tomatoes provide?",
      choose:['Lycopene','Potassium', 'Both options above'],
      ans: 2
    },
    {
      image: require('../../assets/images/quiz/19.png'),
      ques:"Question 5: What climate do lavender live in?",
      choose:['Arid climate','Temperate climate', 'Polar climate'],
      ans: 0
    },
    {
      image: require('../../assets/images/quiz/20.png'),
      ques:"Question 6: Where do roses come from?",
      choose:['Japan','China', 'America'],
      ans: 1
    },
  ],
};
