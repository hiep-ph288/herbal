import { MemberImageProps } from "../components/MemberImage";
import { PartSummaryProps } from "../components/PartSummary";
import { ImageSourcePropType } from "react-native";

export interface MemberDetailData {
  [key: string]: {
    imgbg: ImageSourcePropType;
    weight: string;
    length: string;
    width: string;
    climateZone: string;
    population: string;
    habit: string;
    facts: string[];
    seed: string[];
    grow: string;
    care: string[];
    harvest: string;
    refer: string[];
  };
}

export const memberDetailData: MemberDetailData = {
  thyme: {
    imgbg: require("../../assets/images/Culinary/Thyme(3).jpg"),
    weight: "2.43 ounces",
    length: "20 to 80 cm",
    width: "15 to 41 cm",
    climateZone:
      "Semi-tropical",
    population:
      "Over 300 thyme varieties",
    habit: 
      'Thyme (Thymus vulgaris) is a low-growing, woody perennial that performs especially well in somewhat dry, sunny conditions. A beloved Mediterranean herb, it holds its taste in cooking and blends well with other flavors of its native region, such as garlic, olive oil, and tomatoes',
    facts: [
      "- Thyme is thought to have antibacterial, insecticidal, and possibly antifungal properties.",
      "- Forms of thyme include fresh and dried herbs and essential oil.",
    ],
    seed: [
      "Plant thyme in free-draining soil or compost, and water in. Once established, you won't need to water your thyme plants.",
      "Thyme thrives in almost drought conditions with minimal soil nutrients, so it won't grow happily alongside other herbs in a mixed container.",
    ], 
    grow: 
      "Grow thyme in well-drained soil in full sun. Some varieties of thyme work well planted in gravel gardens, cracks in paving or as an alternative to a lawn. Others do best in pots, which you can bring indoors in autumn. Cut back thyme after flowering and protect tender species in winter.",
    care: [
      "Trim thyme back after it's finished flowering to promote new growth. This will give you more leaves to harvest through autumn.",
      "If you don’t tidy them up, plants become woody and will need replacing after three years. Once established, thyme won’t need watering. If you're growing your plant in a container, give it a weekly feed from March until May with liquid seaweed.",
    ],

    harvest: 
      "Thyme is an evergreen perennial, so leaves can be picked fresh all year round. However, the best time to pick thyme is in early summer, when the plant is at its most productive, before flowering.",
    refer: [
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-chamomile/",
      "https://www.gardeningknowhow.com/edible/herbs/thyme/types-of-thyme-plants.htm",
    ],
  },
  sorrel: {
    imgbg: require("../../assets/images/Culinary/Sorrel(3).jpg"),
    weight: "6.7 ounces",
    length: "48 to 64 cm",
    width: "8 to 15 cm",
    climateZone:
      "a sunny or partially-shady spot, in fertile and moisture-retentive soil",
    population:
      "Three popular varieties",
    habit: 
      "Native to Europe and Asia, sorrel is a member of the Polygonaceae, or buckwheat, plant family, it has a dual identity as an herbaceous herb and a baby-leaf green for salads and cooking.",
    facts: [
      "- Fruit of sorrel is golden brown, three-edged achene filled with miniature seed. Wind and insects facilitate dispersal of seed",
      "- Common sorrel is rich source of dietary fibers, vitamins A and C and minerals such as iron, magnesium and potassium",
    ],
    seed: [
      "Sorrel thrives in a sunny or partially-shady spot, in fertile and moisture-retentive soil. It can be grown from seed, but as a perennial plant, you could also take a rooted cutting or a division from an existing plant.",
      "Sow sorrel seeds in spring, a few in small pots filled with seed compost, cover and water well. Sorrel seeds will take up to six weeks to germinate. When the seedlings are large enough to handle, pot them up into individual containers. You can grow them on in containers, or plant out later into borders.",
    ],
    grow: 
      "Sow sorrel seeds 1/2 inch deep, spaced about 3 inches apart. When the plants are 1 to 2 inches tall, thin to a spacing of 12 to 15 inches. Typically, two or three plants meet the needs of the average family. Sorrel does not need any supports to grow",
    care: [
      "Keep sorrel well-watered, particularly in dry weather as this can make the plant run to seed.",
      "Keeping plants moist will also encourage plenty of fresh new growth. Once your sorrel plants are established, the foliage will die back over winter.", 
      "Every few years, plants should be divided in spring or autumn to rejuvenate them and ensure they keep producing good foliage.",
    ],
    harvest: 
      "Pick leaves regularly through the growing season. This will encourage more fresh new growth for salad leaves. For mature leaves, simply leave the plants for longer before picking",
    refer: [
      "https://gardenerspath.com/plants/herbs/grow-sorrel/",
      "https://www.gardeningknowhow.com/edible/herbs/sorrel/sorrel-herb.html",
      "https://www.softschools.com/facts/plants/sorrel_facts/1219/",
      "https://www.thespruce.com/how-to-grow-sorrel-4121351",
      "https://www.gardenersworld.com/how-to/grow-plants/sorrel-grow-guide/",
      "http://mgsantaclara.ucanr.edu/garden-help/herbs/sorrel",
    ],
  },
  shiso: {
    imgbg: require("../../assets/images/Culinary/Shiso(3).jpg"),
    weight: "4.2 ounces",
    length: "45 to 91 cm",
    width: "15 to 100 cm",
    climateZone:
      "warm to hot climates in partial shade",
    population:
      "3 main tyoes",
    habit: 
      "Shiso, otherwise known as perilla, beefsteak plant, Chinese basil, or purple mint, is a member of the Lamiaceae or mint family. For centuries, growing perilla mint has been cultivated in China, India, Japan, Korea, Thailand, and other Asian countries but is more often classified as a weed in North America",
    facts: [
      "- Shiso is a Japanese name referring to Perilla frutescens, a herb belonging to the mint family. People use different terms to refer to this herb",
      "- Shiso leaves find wide use in the culinary world, particularly in cooking and garnishing. Usually, people prefer them due to their unique flavor and remarkable health benefits.",
    ],
    seed: [
      "Soaking the seed for four to eight hours before sowing speeds up germination. Perilla needs to germinate in damp conditions at around 20C so it’s best started off in a heated propagator with either a propagator lid or a clear plastic bag to keep in moisture.",
    ],
    grow: 
      "If you want large leaves, you’ll need to give them space, 30cm each way between plants, and both green and purple forms will do best in full sun, well-drained soil and can happily be grown in a pot – just keep pinching out the growing tips",
    care:[
      "It also needs light to germinate, so cover it with the bare minimum of compost or surface sow. It should be up in 14 days and you can prick plants out at three to five leaves.",
      "Perilla is not frost hardy, so plant out well after any threat. Mature leaves can be harvested eight weeks after sowing and you’ll be able to continue to harvest all summer",
    ], 
    harvest: 
      "You can start harvesting perilla leaves about two months after planting. Continue to harvest as needed throughout the summer. To harvest, cut a sprig just above the junction of a pair leaves on the plant.",
    refer: [
      "https://harvesttotable.com/how-to-grow-shiso/",
      "https://www.gardeningknowhow.com/edible/herbs/mint/growing-perilla-shiso-mint.htm",
      "https://www.theguardian.com/lifeandstyle/2018/apr/14/how-to-grow-the-herb-shiso-perilla",
      "https://www.burpee.com/blog/encyclopedia__perilla-article.html",
      "https://www.evergreenseeds.com/shiso",
    ],
  },
  parsley: {
    imgbg: require("../../assets/images/Culinary/Parsley(3).jpg"),
    weight: "0.9 ounces",
    length: "30 to 45 cm",
    width: "30 to 60 cm",
    climateZone:
      "Temperate",
    population:
      "4 species of parsley",
    habit: 
      "Parsley is native to the eastern Mediterranean. It was widely used by the ancient Greeks and Romans, who did not distinguish it from celery. Well known as a cool season crop, parsley is easily grown outdoors in the New York City area, and in areas from Zone 5a to 9b",
    facts: [
      "- The herb is in the same family as celery, carrots, and cumin.",
      "- The name “parsley” comes from a Greek word meaning rock celery. The plant thrives on rocks and walls",
    ],
    seed: [
      "Sow parsley seeds directly into well-prepared soil, in rows 1cm deep and 30cm apart. Lightly cover the seeds and water in well. When seedlings are large enough, thin them to 15cm apart.",
      "Alternatively, if you have less space available, fill a pot with seed compost and sow seeds thinly, covering with a light layer of compost and watering in. Make sure the compost does not dry out. Seeds can take six weeks to germinate and should be thinned out and potted on when big enough.",
      "When moving to a larger pot, use a mix of garden and soil-based compost, to prevent the young plants from drying out. Sow batches of seeds a few weeks apart so you have a continuous supply of parsley.",
    ],
    grow: 
      "Grow curled and flat-leaf parsley in moist but well-drained soil in sun to partial shade. Harvest the leaves as and when you need to. Sow seed every few weeks for a successional harvest. Parsley is biennial and treated as an annual, so you'll need to sow fresh seed every year",
    care: [
      "Parsley needs plenty of water, particularly during dry weather, and benefits from the occasional feed of general seaweed fertiliser to boost leafy growth.", 
      "Cut back any yellowing foliage. A biennial plant, flowers will be produced in the second year, if plants are not regularly cut back. If you want to save seed, allow some plants to flower",
    ],
    harvest: 
      "Parsley is best picked as needed, cutting the stems at the base, so that new leaves grow back quickly. You may want to grow several plants so that you can harvest from one while another is left to produce new growth.",
    refer: [
      "https://libguides.nybg.org/parsley",
      "https://www.herbazest.com/herb-garden/growing-parsley",
      "https://blog.aghires.com/powerful-parsley-facts/",
      "https://www.littleyellowwheelbarrow.com/guide-to-types-of-parsley/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-chamomile/",
    ],
  },
  oregano: {
    imgbg: require("../../assets/images/Culinary/Oregano(3).jpg"),
    weight: "1.69 ounces",
    length: "10 to 25 cm",
    width: "30 to 60 cm",
    climateZone:
      "semi-tropical",
    population:
      "4 species of oregano",
    habit: 
      "Part of the Origanum genus, which belongs to the wider Mint family, this is a Mediterranean herb. It is commonly found in parts of western Asia and North Africa as well as many parts of the Mediterranean",
    facts: [
      "- Oregano is high in antioxidant activity, due to a high content of phenolic acids and flavonoids",
      "- Oregano is a powerfully antiseptic plant thanks largely to its constituents known as carvacrol and rosmarinic acid. Unlike antibiotic drugs that work only on harmful bacteria, these compounds in oregano work against bacteria, viruses, fungi and even parasites like worms, making it a well-rounded antiseptic to keep in your natural medicine cabinet.",
    ],
    seed: [
      "To grow oregano from seed, fill small pots with peat-free seed compost and water well, allowing to drain. Sow a few seeds on the surface of the compost.",
      "The seeds need heat to germinate, so place pots in either a heated propagator or on a warm windowsill. When seedlings are large enough to handle, pot them on into larger pots filled with peat-free, multi-purpose compost.",
      "Alternatively, buy ready-grown plants from your local garden centre or nursery, and plant them into a dedicated herb garden or pot.",
    ],
    grow: 
      "Grow oregano in free-draining soil or compost in a sunny, sheltered spot. Harvest the leaves as and when you need to, cutting the plant back completely every so often to encourage a fresh flush of foliage. If growing in pots, repot every couple of years in fresh compost. Prevent water-logging in winter by adding grit to the planting hole.",
    care: [
      "Keep your oregano in a sunny, sheltered spot and water sparingly throughout the growing season.", 
      "Plants will die back in winter and regrow from woody stems spring. In spring, it's a good idea to repot pot-grown oregano into fresh compost with added slow-release fertilizer.", 
      "This is also a good time to cut the woody stems back to the base of the plant to encourage fresh new growth.",
    ], 
    harvest: 
      "Harvest the leaves as and when you need to, either pinching them out with your thumb and finger or using scissors to cut a good-sized bunch. Cut plants back completely in midsummer to encourage fresh new leaves. Alternatively let the plants flower to provide nectar and pollen for bees.",
    refer: [
      "https://justfunfacts.com/interesting-facts-about-oregano/",
      "https://happydiyhome.com/types-of-oregano/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-chamomile/",
    ],
  },
  dill: {
    imgbg: require("../../assets/images/Culinary/Dill(1).jpg"),
    weight: "0.3 ounces",
    length: "8 to 14 cm",
    width: "5 to 8 cm",
    climateZone:
      "very cold-hardy and can tolerate temperatures that dip as low as 25 degrees Fahrenheit",
    population:
      "13 type",
    habit: 
      "Dill was originally cultivated in Southeast Asia, Russia and the Mediterranean areas, but today it is grown in all different areas of the world",
    facts: [
      "- Dill was mentioned both in the Bible and in ancient Egyptian writings.",
      "- It is an aromatic herb with delicate, feathery green leaves.",
      "- ",
    ],
    seed: [
      "Sow dill seeds outdoors directly into well prepared soil in a sheltered, sunny position. Sow seeds thinly in rows 1cm deep. Dill can also be sown directly in large pots.",
      "Make regular sowings for a continuous supply of fresh leaves through the summer. Dill tends to bolt if its roots have been disturbed on planting.",
      "But if you want to get a head start, you can sow seeds under cover a little earlier in the season, using plug trays. Plant out the plugs after all risk of frost has passed.",
    ],
    grow: 
      "Dill does not normally need feeding, but an occasional liquid feed of a balanced fertiliser can give the plant a boost",
    care: [
      "When seedlings are large enough to handle, thin them out to 20cm apart.", 
      "Keep plants well-watered, particularly during hot, dry weather.", 
      "Keep weed-free to stop any competition for water and nutrients.", 
      "Plants may need additional support from canes, as strong winds can flatten them",
    ],
    harvest: 
      "The leaves are best used fresh, but can be frozen for later use. Dill seeds should be stored in an airtight container",
    refer: [
      "https://www.thespruce.com/dill-tips-for-growing-and-using-1402606",
      "http://bioweb.uwlax.edu/bio203/s2012/grumke_matt/habitat.htm",
      "https://justfunfacts.com/interesting-facts-about-dill/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-dill/",
      "https://www.thespruce.com/dill-tips-for-growing-and-using-1402606",
      "https://gardenerspath.com/plants/herbs/best-dill-varieties/",
    ],
  },
  chives: {
    imgbg: require("../../assets/images/Culinary/Chives(3).jpg"),
    weight: "1.7 ounces",
    length: "30 to 50 cm",
    width: "32 cm",
    climateZone:
      "full sun and well drained soil rich in organic matter",
    population:
      "4 species of chives",
    habit: 
      "A perennial plant, it is widespread in nature across much of Europe, Asia, and North America",
    facts: [
      "- Chives have been harvested from the wild for many millenniums though are thought to begin cultivation in the middle ages.",
      "- This herb only became popular in the 19th century.",
    ],
    seed: [
      "Sow chive seeds into a small pot or module. Chives need between 20-25°C to germinate so use a heated propagator, or place on a warm windowsill. Seedlings should appear within three weeks. There's no need to thin them out unless your pot is very crowded.",
      "When your seedlings are about 5cm high, they can be moved from the propagator and transplanted into 15-20 cm (6–8 inch) pots of peat-free multi-purpose compost. Grow these young plants on in cooler conditions, taking care to harden them off for about a week before planting them outside.",
      "For their final growing conditions, plant chives in a large pot or the ground.",
    ],
    grow: 
      "Grow chives in moist but well-drained soil or compost in full sun to partial shade. Harvest the leaves and flowers as and when you need to. Chives are perennial so will come back year after year. They grow well in pots but are best suited to growing in the ground.",
    care: [
      "Chives do best in fertile, well-drained soil in sun or partial shade.", 
      "Keep plants well watered, particularly during hot weather.", 
      "Chives are perennial plants, so they will die back in winter and regrow in spring.", 
      "Pot grown chives will need dividing and repotting every couple of years.", 
      "Chives growing in the ground can also become congested. Lift and divide congested clumps to rejuvenate them.", 
      "Plant out the divisions to make new chive plants, or pass them on to friends.",
    ],
    harvest: 
      "Snip chives with scissors as required, cutting the leaves from the base of the plant. This will encourage more leaves to grow. If you want to use the flowers as a decorative garnish, snip the heads off, as the stems of flowering shoots are not edible.",
    refer: [
      "https://foodgardening.mequoda.com/articles/types-of-chives/",
      "https://en.wikipedia.org/wiki/Chives",
      "https://www.thekitchn.com/everything-you-need-to-know-about-growing-chives-220337",
      "https://justfunfacts.com/interesting-facts-about-chives/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-chives/",
      "https://extension.umn.edu/vegetables/growing-chives",
    ],
  },
  basil: {
    imgbg: require("../../assets/images/Culinary/Basil(2).jpg"),
    weight: "2.5 ounces",
    length: "3 to 11 cm",
    width: "1 and 6 cm",
    climateZone:
      "semi-tropical",
    population:
      "50 to 150 species of basil",
    habit: 
      "Basil is native to India and other tropical regions stretching from Africa to South East Asia, but has now become globalized due to human cultivation.",
    facts: [
      "- Basil is a versatile annual herb, used in pasta sauces, pizzas, salads and Thai curries. Sweet basil tends to dominate the supermarket shelves, but there are many more exciting types to try when you grow your own",
    ],
    seed: [
      "Grow basil in well-drained, fertile soil in a warm, sheltered position out of direct midday sun. To get a quality crop that lasts from early spring to mid-autumn, it’s best to grow basil in a container.",
      "Start your seeds off in pots of moist peat-free multi-purpose compost on a warm but not sunny windowsill. When seedlings are big enough to handle, pot them on into individual pots filled with a peat-free, soil-based compost. Put them outside in early summer after the last frost. To acclimatise them to conditions outdoors, stand them outside in a sheltered, lightly shaded spot during the day, and bring them back in at night. Do this daily for about two weeks",
    ],
    grow: 
      "Sow basil seed successionally from spring to summer so you have a continuous crop. Pot on individual pots when plants are big enough to handle. Water sparingly – basil hates to sit in wet compost. Harvest the leaves individually rather than chopping the plant with scissors, as this will enable new leaves to grow.",
    care: [
      "Outdoors, basil needs protection from wind and frost. Always water with care, ideally before midday, and avoid splashing the leaves. This should help prevent botrytis (powdery mould).",
      "Plants will grow fast in containers, so expect to pot them up a few times during the growing season.",
      "Basil is a half-hardy annual, so new plants will be needed each year. However, in autumn, when temperatures start to dip, bring a few plants back indoors to provide a fresh supply of leaves in winter.",
    ],
    harvest: 
      "Pick the leaves and tops of basil regularly throughout the summer to use fresh. You can be quite ruthless, so long as you leave at least three pairs of side shoots so your plants can regrow. Don’t wash the leaves until you’re ready to use them as they’ll turn slimy.",
    refer: [
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-chamomile/",
    ],
  },
  'uva ursi': {
    imgbg: require("../../assets/images/Teas/Uva_ursi(3).jpg"),
    weight: "",
    length: "15 to 30 cm",
    width: "90 to 180 cm",
    climateZone:
      "colder, northern climates",
    population:
      "",
    habit: 
      "Arctostaphylos uva-ursi is a plant species of the genus Arctostaphylos widely distributed across circumboreal regions of the subarctic Northern Hemisphere",
    facts: [
      "- Name 'bearberry' refers to the fact that black and grizzly bears like to eat fruit of this plant during the autumn and early spring. Bearberry also represents important source of food for the wild species of sheep and goats, elk, deer, wild turkey and grouse.",
      "- Scientific name of the plant 'Arctostaphylos' means 'bunch of bear's grape' in Greek language. Uva-ursi is another name of the plant with the same meaning (bear's grape in Latin language).",
    ],
    seed: [
      "",
    ],
    grow: 
      "The Bearberry shrub grows best in well-drained rocky or sandy soil. Poorly drained soils can make this plant more susceptible to certain conditions, such as black mildew and root rot. Although a rich, fertile soil is not required, it is important that this shrub grows in an acidic soil with a pH level between 4.5 and 5.5. The bearberry thrives best in direct sunlight and in cool alpine regions. Because Arctostaphylos uva-ursi is tolerant of salty conditions, it makes them a smart option for gardens near the coast.",
    care: [
      "The bearberry is a low aintenance plant and does not require any pruning.",
    ],
    harvest: 
      "",
    refer: [
      "https://www.gardenia.net/plant/arctostaphylos-uva-ursi-bearberry",
      "https://wa.kaiserpermanente.org/kbase/topic.jhtml?docId=hn-2178007",
      "https://en.wikipedia.org/wiki/Arctostaphylos_uva-ursi",
      "https://www.softschools.com/facts/plants/bearberry_facts/1451/",
      "https://www.gardenershq.com/Arctostaphylos-uva-ursi.php",
    ],
  },
  sage: {
    imgbg: require("../../assets/images/Teas/Sage(3).jpg"),
    weight: "1.1 ounces",
    length: "63 to 95 cm",
    width: "48 to 63 cm",
    climateZone:
      "full sun",
    population:
      "over 900",
    habit: 
      "It is a plant that requires a large amount of sun and can be commonly found near limestone and in places where the soil is shallow, dry, and rocky. Since sage has adapted to dry conditions, if the soil becomes too wet, the roots will become saturated and prolonged wetness will lead to root rot and plant death",
    facts: [
      "- Sage is part of the mint family, alongside oregano, lavender, rosemary, thyme, and basil",
      "- Over recent years, studies demonstrating the health benefits of sage have grown in number",
      "- Sage appears to contain a range of anti-inflammatory and antioxidant compounds",
    ],
    seed: [
      "Sow seeds 3mm (1/8″) deep, and keep soil just moist, not wet. Thin or transplant to 45-60cm (18-24″) apart. In spring, trim established plants back by a third to encourage new growth. Once the flowers have finished in June/early July, trim the plants back again.",
    ],
    grow: 
      "Grow garden sage in well-drained soil in full sun. Annual and biennial sages can be grown from seed, while perennial sages are best grown from young plants. Many sages do well in pots. Harvest the leaves as and when you need to and trim back perennial types after flowering. Sage does best in full sun, which brings out the flavour of the leaves. Choose free-draining soil or compost – sages can die in waterlogged soils in winter. Add grit to the planting hole if you have heavy soil.",
    care: [
      "After flowering, give sage plants a gentle prune to stop them getting woody. Don’t prune into old wood because it won’t regrow",
      "Some sages need frost protection, others will survive outside as long as their roots don’t become waterlogged.",
      "At the start and end of summer, sprinkle a couple of handfuls of bonemeal or other slow-release fertiliser around the sage plants, gently working it into the soil.",
      "Perennial sages can be short-lived. Take cuttings every couple of years to insure against losses.",
    ],
    harvest: 
      "Perennial sages are evergreen so you can pick fresh leaves all year round. For the best flavour, pick them before the flowers appear and wait until late morning or early evening when the aromatic oils are concentrated in the leaves. Pick the leaves of annual and biennial sages before they flower.",
    refer: [
      "https://thegardeningcook.com/sage-plant-care/",
      "http://bioweb.uwlax.edu/bio203/s2012/blazel_mark/habitat.htm",
      "https://www.medicalnewstoday.com/articles/266480",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-sage/",
      "https://www.westcoastseeds.com/blogs/garden-wisdom/grow-sage",
    ],
  },
  rooibos: {
    imgbg: require("../../assets/images/Teas/Rooibos(3).jpg"),
    weight: "",
    length: "50 to 200 cm",
    width: "53 to 159 cm",
    climateZone:
      "Desert Climate, Mediterranean Climate, Subtropics Climate",
    population:
      "13",
    habit: 
      "Rooibos tea was traditionally used by the indigenous people of Southern Africa, but has been cultivated for commercial sale within the last 100 years. Grown on farms in its native range, the rooibos plant is a very hardy crop which can withstand periods of drought.",
    facts: [
      "- Hach cup of Rooibos tea is packed with healthy flavonoids, including aspalathin – a powerful antioxidant unique to the plant.",
      "- Rooibos is also caffeine-free, low in tannins and contains no fat or proteins and is therefore kilojoule-free. Up to six cups can be enjoyed daily.",
    ],
    seed: [
      "Rooibos can be grown from seed and planted in the late summer or spring, commercial growers germinate seeds in greenhouses and plant them out into the fields after four months during autumn. Seeds need to be scarifiedby cutting the seed coat using abrasion or thermal stress to encourage germination",
    ],
    grow: 
      "Rooibos growing conditions include full sun and well-drained sandy soil which has moisture-retaining capabilities. This shrub can reach a maximum height of about 6.5 feet (2 m.) and it has the ability to fix nitrogen. In the United States, the hardiness of rooibos ranges from zones 8 to 11, but it can be grown in containers elsewhere. Propagation of the rooibos tea plant is by seed or vegetative means. This hermaphrodite species produces yellow flowers in spring to mid-summer. These are followed by small, lance-shaped pods containing one or two seeds. Seeds require scarification and soaking, before sowing in an acidic sand mixture. Rooibos plants require protection from winter elements as well as wet conditions. Growing young plants indoors or in a greenhouse for their first winter is recommended. Additionally, home gardeners may find it takes a year or more before a rooibos plant produces a harvestable quantity of leaves.",
    care: [
      "",
    ],
    harvest: 
      "In its native lands, the rooibos leaf is harvested one time per year. After cutting young branches by hand, the stems and leaves are bundled for ease of transport to a processing center. Here, the rooibos is chopped, piled in rows and allowed to ferment overnight. Enzymatic oxidation changes the green Rooibos plant material to the shade of reddish amber which gives this tea its characteristic color. The tea is then dried naturally by spreading the fermented plant material out in the sun. The entire process takes less than 24 hours. After drying, the tea is graded before being packaged for commercial distribution.",
    refer: [
      "https://nathaliestrassburg.com/2021/02/25/rooibos-growing-guide/",
      "https://www.gardeningknowhow.com/edible/rooibos-tea.htm",
      "https://www.klipopmekaar.co.za/rooibos-interesting-facts/",
      "https://www.growplants.org/growing/rooibos",
    ],
  },
  'passion flowers': {
    imgbg: require("../../assets/images/Teas/passionflowers(2).jpg"),
    weight: "",
    length: "316 to 475 cm",
    width: "95 to 158 cm",
    climateZone:
      "warm weather",
    population:
      "400",
    habit: 
      "The plant grows on a wide range of soils from peats through loams to sands, as well as on soils derived from corals and volcanic debris.",
    facts: [
      "- Passion Flowers have a vast range of pollinators from large bees and butterflies, to bats and hummingbirds. The distinctive floral structures often mean that a Passion Flower relies on a single, special pollinator.",
    ],
    seed: [
      "On heavy soils, improve the drainage by digging in horticultural grit. Plant your passion flower, tilting it slightly against the obelisk, wall or fence you're growing it up. Water well and firm in.",
    ],
    grow: 
      "Grow passion flowers in full sun to partial shade, in well-drained soil in a warm, sheltered spot. Cut back after flowering to keep plants neat, or cut away damaged growth in spring. Most varieties need winter protection. Plant passion flowers in well-drained soil in full sun in a sheltered spot, such as the foot of a sheltered, sunny wall. You can train passion flowers up a pergola, obelisk or galvanised wires run across a wall. Guide the plant on to the support with a garden cane. The plants are self-clinging thanks to tendrils, so when mature they won't need tying in. It is possible to grow passion flowers in containers, however you'll need to feed and water them more often, and they won't grow quite as vigorously as those growing in the ground. Choose a gritty, free-draining, peat-free compost",
    care: [
      "Prune passion flowers after flowering just to keep them neat, cutting back to a healthy bud. There's no need to cut them back hard. If plants have got out of hand and need retraining, cut them back in spring.",
      "Passion flowers grown in a container can be moved into a frost-free place for winter, if necessary. If growing in a greenhouse or conservatory, protect the plants from too much direct sunlight with greenhouse shading.",
      "Cut back any foliage damaged by cold winds, in spring.",
    ],
    harvest: 
      "If you wish to harvest your flowers before they become fruit, you need to pull them from the vine during the flowering of the late spring and early summer, but this time might differ depending on your part of the country.",
    refer: [
      "https://www.epicgardening.com/passion-fruit-vine/",
      "https://www.thespruce.com/passion-flowers-1403114",
      "https://www.gardeningknowhow.com/ornamental/vines/passion-flower/passion-flower-varieties.htm",
      "https://www.cabi.org/isc/datasheet/38800",
      "https://www.kew.org/read-and-watch/passion-flowers-ignite-your-senses",
      "https://www.gardenersworld.com/how-to/grow-plants/grow-guide-passion-flowers/",
      "https://www.gardenguides.com/109942-harvest-eat-passion-flower.html",
    ],
  },
  'lemon grass': {
    imgbg: require("../../assets/images/Teas/Lemongrass(3).jpg"),
    weight: "2.36 ounces",
    length: "3 to 5 feet",
    width: "up to 2 feet",
    climateZone:
      "hot and humid climates",
    population:
      "",
    habit: 
      "It is a tropical plant native to southeast Asia, often grown in North America, South America, Australia, and Africa.",
    facts: [
      "- Lemongrass is utilized in the field of medicine because of its anti-fungal, antibacterial, and antimicrobial properties.",
      "- Lemongrass oil or lemongrass extract may act as a natural insect repellent.",
      "- Lemongrass is also known as citronella and you can buy citronella candles, soaps, insect repellents, and disinfectants. These products are not only natural and don't harm the environment, they also smell nice and are kinder to flora and fauna than commercial manmade products.",
    ],
    seed: [
      "Growing from seed is easier than you might think. Sow seeds in spring, sowing thinly on the surface of moist compost and don't cover them. If you need to water the pot after sowing then do so from the bottom, by placing the pot in a dish of water for an hour or so. Keep the pot covered in a heated propagator to aid germination.",
      "When the seeds are large enough to handle, prick them out into larger pots, and then place these in a sunny spot, away from any risk of frost. Once the roots are showing through the bottom, transplant into a larger pot. You can repeat this process a number of times.",
    ],
    grow: 
      "Grow lemongrass in pots – it's a tender plant so can be kept outside in summer before moving indoors for the winter months. Lemongrass needs a lot of moisture, so ensure the compost doesn't dry out. Reduce watering in winter but keep the soil just moist.",
    care: [
      "Lemongrass is best grown in a container so you can keep it in a sunny, sheltered spot outside during summer, and move it indoors for winter. When the foliage turns brown, cut back the stems to 10cm. Once new growth appears in spring, feed weekly with a liquid fertiliser",
    ],
    harvest: 
      "Once your new plant matures and produces lots of stems (at least 10), you can start using them for cooking. Cut stems just below the base, but make sure you leave plenty on the plant to allow it to produce new growth",
    refer: [
      "https://www.hgtv.com/outdoors/gardens/grow-your-own-lemongrass",
      "https://kidadl.com/facts/lemongrass-facts-benefits-uses-side-effects-and-much-more",
      "https://daylilynursery.com/2018/11/20/lemon-grass-growing-guide/",
    ],
  },

  'lemon balm': {
    imgbg: require("../../assets/images/Teas/Lemon_balm(2).jpg"),
    weight: "",
    length: "31 to 63 cm",
    width: "31 to 63 cm",
    climateZone:
      "cool weather",
    population:
      "2",
    habit: 
      "Lemon balm (Melissa officinalis) is a perennial herbaceous plant in the mint family and native to south-centaral Europe, the Mediterranean Basin, Iran, and Central Asia, but now naturalised elsewhere",
    facts: [
      "- Lemon balm is not only grown for Medicine and medicinal purposes but is also cultivated for its essential oil and is commonly used to make perfumes, cosmetics, and even furniture polish",
    ],
    seed: [
      "Lemon balm (Melissa officinalis) is easy to grow from seed in spring, but named varieties are only available as ready-grown plants",
      "Sow seeds indoors from March to May, scattering a few seeds into a small pot or tray of seed compost. Cover with a thin layer of perlite, vermiculite or finely sieved compost, then water gently. Place the pot in a heated propagator or cover with a clear plastic bag and place in a warm spot",
      "As soon as seedlings appear, which can take up to three weeks, take the pot out of the propagator or remove the cover. Prick out the seedlings into individual pots when they are large enough to handle.",
      "Transplant the young plants outdoors once all danger of frost has passed"
    ],
    grow: 
      "Traditional lemon balm is a vigorous plant that eventually makes a large leafy clump, and sends up flower stems that can reach 80cm (32in) tall. There are several cultivars too, with variegated leaves or a more compact form. The flowers are a magnet for bees. Keep plants well watered during dry spells in summer, and cut back after flowering to encourage a fresh flush of leaves. Lemon balm will self-seed readily, so if you don’t want more plants, remember to remove the faded flowers before they set seed.",
    care: [
      "Seed-raised young plants or bought plants can be transplanted outdoors from spring onwards. Named cultivars are generally only available as ready-grown plants in spring.",
      "Water the plants well, both before and after planting",
      "Choose a planting site in sun or light shade, with soil that is moist but drains freely. Lemon balm can also be planted into large pots filled with soil-based compost – a 20cm (8in) container would be ideal.",
    ],
    harvest: 
      "Pick fresh leaves as required throughout summer. Leaves for drying are best harvested before plants start to flower",
    refer: [
      "https://harvesttotable.com/how_to_grow_lemon_balm/",
      "https://en.wikipedia.org/wiki/Lemon_balm",
      "https://plantura.garden/uk/herbs/lemon-balm/lemon-balm-overview",
      "https://specialtyproduce.com/produce/Lemon_Balm_2573.php",
      "https://www.rhs.org.uk/herbs/lemon-balm/grow-your-own",
    ],
  },
  eucalyptus: {
    imgbg: require("../../assets/images/Teas/Eucalyptus(3).jpg"),
    weight: "1000 pounds to about 2 million pounds",
    length: "3000 to 6000 cm",
    width: "316 to 475 cm",
    climateZone:
      "sunny, dry climates",
    population:
      "over 700 species",
    habit: 
      "Most eucalyptus have been artificially established, usually in and around urban/rural areas. Other habitats found in proximity to eucalyptus include cropland, valley foothill riparian, Orchard-vineyard, Coastal Scrub, Chamise Redshank Chaparral, Annual Grass, Pasture and Residential Park",
    facts: [
      "- Eucalyptus leaves and oil have been used for generations as a cure-all for respiratory issues, particularly in removing catarrh from the respiratory tracts.",
    ],
    seed: [
      "Sow indoors 10-12 weeks before the last frost date. That’s mid-winter for most gardeners. Germination should occur in 14-21 days.",
      "Lightly cover the seeds and keep moist and warm until germination. Once the seeds sprout, remove from bottom heat and remove any humidity dome. It seems that Eucalyptus seedlings are prone to damping off, so provide bright light and air circulation around the plants. At 10-13cm (4-5″), transplant on to a container if keeping indoors. Or transplant outdoors once night time temperatures are consistently above 10°C (50°F).",
    ],
    grow: 
      "Grow eucalyptus in milder areas of the country, in a sheltered, sunny spot protected from cold winds. Plant in spring or early summer and keep watered during dry spells for the first growing season. If growing as a shrub, hard prune the whole plant in early spring. Plant eucalyptus in spring or early summer to give sufficient time for the plant to establish before the colder months. Plant into reasonably fertile, well drained soil, but without additional organic matter or fertilizer. Ensure the top of the rootball is level with the surrounding soil, firm in and water well. Secure the tree with a short stake and a tree tie.",
    care: [
      "Choose a sunny spot with well-draining soil. Eucalyptus plants prefer areas that receive at least eight to 10 hours of full sun. If you plant your eucalyptus indoors, place the potted eucalyptus near a south-facing window so that it gets plenty of sunlight. If you're planting eucalyptus in your garden, make sure the soil drains well. Likewise, if you're planting eucalyptus in a pot, use high-quality potting soil and a pot that has drainage holes to let out excess moisture.",
      "Water your eucalyptus plant regularly. Eucalyptus plants are only partially drought-tolerant once they're established. Water your new plants regularly to prevent their leaves from drooping and falling off. If planting outdoors, placing a layer of mulch around the base of the plant will help retain moisture where it needs it most.",
      "Fertilize your houseplants. Outdoor eucalyptus trees rarely need fertilizer, but your eucalyptus houseplants can benefit from some liquid fertilizer every few weeks during the spring.",
      "Prune your eucalyptus plant as needed. Eucalyptus plants are fast growers. The best way to keep that growth in check, and keep the plant healthy, is to regularly prune and shape it"
    ],
    harvest: 
      "Choose a clean area for your harvest. If you don’t have a dedicated garden bed or container for your dandelions, make sure the area that you’re harvesting your dandelions from is free of animal waste or foot traffic damage. You only want to pick and consume the cleanest and healthiest-looking dandelion flowers. Avoid harvesting dandelions from areas that have been chemically treated with pesticides or herbicides. Cover the area with dark fabric for a few days. A few days before you harvest your dandelions, cover the area you will be harvesting with some dark fabric. This blocks out the light and slows down the maturing of the dandelion leaves which can make them more bitter",
    refer: [
      "https://www.bhg.com/gardening/plant-dictionary/tree/eucalyptus/",
      "https://www.blueplanetbiomes.org/eucalyptus.php",
      "https://www.plantsnap.com/blog/eucalyptus-tree-types/",
      "https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=67348",
      "https://www.westcoastseeds.com/blogs/garden-wisdom/how-to-grow-eucalyptus",
      "https://www.masterclass.com/articles/eucalyptus-plant-guide",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-a-eucalyptus-tree/",
    ],
  },
  dandelion: {
    imgbg: require("../../assets/images/Teas/Dandelion(2).jpg"),
    weight: "1.94 ounces",
    length: "5 to 63 cm",
    width: "",
    climateZone:
      "full sun",
    population:
      "250 species",
    habit: 
      "Prefers open areas (including gravel), grassy alpine slopes, moist tundra, heath and woodland",
    facts: [
      "- Considered as a native to Mediterranean, dandelion plants were known quite well by ancient Egyptians, Romans, and Greeks. The leaves and roots of the plant were medicinally used as a tonic for removing toxins from bloodstream, as they serve as a mild diuretic to improve the digestive system functioning",
    ],
    seed: [
      "Sow your dandelion seeds directly into your garden soil six weeks before the last frost of the spring. The ground temperature should be at least 50 degrees Fahrenheit. Plant your seeds a quarter of an inch below the soil surface and only lightly cover them with soil to help the sunlight germinate them. If you’re planting your seeds in rows, sow each seed a few inches apart and give the rows about a foot of space in between them",
    ],
    grow: 
      "Dandelion plants can grow up to six inches tall in six-inch-wide clusters. Once your dandelions have sprouted a few inches above the ground soil, thin them back to about six inches between each plant to prevent overgrowth.",
    care: [
      "Water them regularly. Dandelions like moist soil, so you should water them regularly to keep them hydrated. Make sure that the top two inches of the soil are dry before each round of watering.",
      "Watch the sunlight. Make sure your dandelions get at least six hours of sun every day when you’re growing them. Once they’re well-established, make sure that they can get plenty of shade to prevent the greens from getting too bitter if you plan to eat them.",
      "Avoid mulching. Mulching is a popular way to prevent weeds but it blocks out the light that dandelions need for their seeds to germinate. Avoid using mulch on your dandelions.",
    ],
    harvest: 
      "Choose a clean area for your harvest. If you don’t have a dedicated garden bed or container for your dandelions, make sure the area that you’re harvesting your dandelions from is free of animal waste or foot traffic damage. You only want to pick and consume the cleanest and healthiest-looking dandelion flowers. Avoid harvesting dandelions from areas that have been chemically treated with pesticides or herbicides. Cover the area with dark fabric for a few days. A few days before you harvest your dandelions, cover the area you will be harvesting with some dark fabric. This blocks out the light and slows down the maturing of the dandelion leaves which can make them more bitter",
    refer: [
      "https://extension.umaine.edu/signs-of-the-seasons/indicator-species/dandelion-fact-sheet/",
      "http://ipm.ucanr.edu/PMG/PESTNOTES/pn7469.html",
      "https://www.gardeningknowhow.com/edible/herbs/dandelion/dandelion-flower-varieties.htm",
      "https://www.naturewatch.ca/plantwatch/dandelion/",
      "https://www.masterclass.com/articles/growing-dandelions-explained",
    ],
  },
  cinnamon: {
    imgbg: require("../../assets/images/Teas/Cinnamon(2).jpg"),
    weight: "4.4 ounces",
    length: "less than 1500 cm",
    width: "",
    climateZone:
      "warm and humid climate",
    population:
      "4",
    habit: 
      "Cinnamon is native to India and Sri Lanka, though it is also considered to be native to the Tenasserim Hills of Myanmar",
    facts: [
      "- Cinnamon is a powerful antioxidant that aids in controlling blood sugar.",
      "- Cinnamon also contains other minerals such as iron and magnesium",
    ],
    seed: [
      "Birds relish the fruits of cinnamon plants. But if you're able to save some, you can start new plants from seed. Clean off the berry pulp from the seeds, and dry them thoroughly. Plant the seeds while they're fresh, as they lose viability quickly. Plant them about an inch deep in pots filled with a sterile seed-starting mix. Keep them moist and warm at around 75 degrees Fahrenheit. Germination should occur in about three weeks",
    ],
    grow: 
      "Cinnamon is a tropical plant, so if you garden in a warm climate, USDA hardiness zones 10 through 12, you can grow cinnamon plants outdoors. Most gardeners start with young nursery plants rather than seeds. When planting cinnamon outdoors, choose a location that provides enough room for the mature size of the species. Make sure the planting site is several feet away from other trees and shrubs so that your plant will receive enough sunlight. Dig a hole twice the size of your plant's root ball, and amend the soil with compost. Backfill the planting hole with soil, gently press down to remove air pockets, and water deeply",
    care: [
      "Light: Full sun, meaning at least six hours of direct sunlight on most days, is best for cinnamon plants. However, they will benefit from some afternoon shade in very hot and dry weather.",
      "Soil: Cinnamon plants prefer a rich, well-draining soil. A sandy loam will work well. Cinnamon plants don't do well in waterlogged soils, and thus heavy clay or hardpan soils are not a recipe for success. If your garden soil is not suitable for growing cinnamon, grow it in containers to provide the type of well-drained, sandy loam soil l it needs.",
      "Water: These species like the regular rainfall they receive in the tropics, so you should try to replicate this with irrigation when rain is scarce. Do not let the soil dry out completely. Water whenever the top two inches of soil have dried out, and use mulch to keep the roots cool and maintain soil moisture.",
      "Temperature and Humidity: Cinnamon plants love a warm and humid climate. In their native habitat, temperatures that average 80 degrees Fahrenheit promote healthy growth. They don't do well when temperatures fall below 40 degrees Fahrenheit or in very dry conditions.If you garden in a cold climate north of the plant's cold hardiness zone, you can grow cinnamon in containers in a greenhouse or keep the container outdoors during the summer months and overwinter it indoors as a houseplant.",
      "Fertilizer: Use a balanced, slow-release fertilizer in the planting hole to get your cinnamon plant started. Then, fertilize every spring, following label instructions.",
    ],
    harvest: 
      "You can harvest your cinnamon two to three years after planting and then every two years after that. Cut off individual branches, or cut the entire tree at the trunk. (Trees growing in the ground often produce new shoots that will become a new tree.) Scrape away the outer bark until you see the yellowish-orange layer beneath, which reveals the edible part of the plant. Peel strips of this cinnamon layer with a sharp knife or paint scraper, stopping when you see the lighter core. Let the pieces dry indoors in a single layer for about a week. They will curl into the typical shape you see in cinnamon sticks. Then, you can grind them or leave them in stick form. Store your cinnamon in a sealed container in a cool, dry place, and it should keep for a couple of years.",
    refer: [
      "https://www.britannica.com/plant/cinnamon",
      "https://www.thespruce.com/cinnamon-plant-care-and-growing-guide-4690725",
      "https://www.allrecipes.com/article/types-of-cinnamon/",
      "https://www.cabi.org/isc/datasheet/13573",
      "https://www.thatsitfruit.com/blogs/default-blog/blogcinnamon-10-interesting-facts-about-the-classic-spice",
      "https://www.thespruce.com/cinnamon-plant-care-and-growing-guide-4690725",
    ],
  },
  "Saint John's wort": {
    imgbg: require("../../assets/images/Medicine/St_john_s_wort(2).jpg"),
    weight: "",
    length: "30 to 91 cm",
    width: "46 to 61 cm",
    climateZone:
      "temperate marine climate",
    population:
      "",
    habit: 
      "St John's Wort is most commonly found in grasslands, pastures, meadows, and rangelands. But it also occurs in forested areas in natural clearings, openings, or areas that have been disturbed by fire, logging, or road construction",
    facts: [
      "- St. John’s wort can weaken the effects of many medicines, including crucially important medicines such as: Antidepressants; Birth control pills; Cyclosporine, which prevents the body from rejecting transplanted organs; Some heart medications, including digoxin and ivabradine; Some HIV drugs, including indinavir and nevirapine; Some cancer medications, including irinotecan and imatinib; Warfarin, an anticoagulant (blood thinner); Certain statins, including simvastatin",
      "- St. John’s wort may cause increased sensitivity to sunlight, especially when taken in large doses. Other side effects can include insomnia, anxiety, dry mouth, dizziness, gastrointestinal symptoms, fatigue, headache, or sexual dysfunction",
    ],
    seed: [
      "John's Wort seeds are easy to grow. Plant the herb seeds indoors 6 - 8 weeks before the last frost, or outside after danger of frost has passed. Press the Hypericum seeds into the soil, but do not cover it as the seed will germinate better with light. Transplant the Hypericum seedlings when they are 2 - 3 inches tall.",
    ],
    grow: 
      "Hypericum perforartum is perfect for growing in a wildflower meadow or other wild planting scheme. Shrubby types, including Hypericum 'Hidcote', are ideal for ornamental borders, while low-growing St John's wort are best used as ground cover. Some species, including Hypericum inodorium, can be grown in pots. Plant St. John's wort as you would any plant – dig a hole slightly wider but no deeper than the original pot, Medicinee any restricted roots out from the base of the rootball and place it into the hole before backfilling with soil. Firm around the rootball gently with your foot and water well.",
    care: [
      "All St John's worts are easy to grow and tolerant of a wider range of conditions, including temporary flooding. However, during prolonged periods of drought they will benefit from supplementary watering, particularly young plants. Many shrubby varieties can look untidy over the year and should be cut back in spring. If they've out-grown their space they can be cut back hard",
    ],
    harvest: 
      "To harvest, cut the top 2-3 inches of the plant to get some leaves, flowers, and buds, as they all have some benefits. Because St. John's wort often grows in locations that aren't ideal for foraging (roadsides in particular), be sure to harvest in an area that is free of sprays and road runoff.",
    refer: [
      "https://www.gardeningknowhow.com/edible/herbs/st-johns-wort/st-johns-wort-plant-care.htm",
      "https://www.stjohns.ca/living-st-johns/newcomers/about-st-johns/geography-and-climate",
      "https://www.nrcs.usda.gov/Internet/FSE_PLANTMATERIALS/publications/njpmcpg11318.pdf",
      "https://www.nccih.nih.gov/health/st-johns-wort",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-st-johns-wort/",
      "https://www.outsidepride.com/seed/flower-seed/st-johns-wort-flower-seed.html",
      "https://www.growforagecookferment.com/st-johns-wort/",
    ],
  },
  'milk thistle': {
    imgbg: require("../../assets/images/Medicine/Milk_thistle(3).jpg"),
    weight: "",
    length: "30 to 200 cm",
    width: "",
    climateZone:
      "sub-freezing winter weather",
    population:
      "13",
    habit: 
      "Milk thistle is commonly found in poorly managed pastures, agricultural fields, and along roadsides. It prefers full sun or part shade and grows best in fertile soils.",
    facts: [
      "- The active ingredients in milk thistle are a group of plant compounds collectively known as silymarin.",
      "- The silymarin extracted from milk thistle is known to have antioxidant, antiviral and anti-inflammatory properties",
    ],
    seed: [
      "To grow milk thistle outdoors, spread the seed directly over the desired area in the spring or fall. Milk thistle seeds only take two weeks to germinate. Since it grows in clumps, it is recommendable to space the plant 12-15 inches (30-38 cm) apart.",
    ],
    grow: 
      "As milk thistle is often considered a weed itself, virtually no weed control is needed. Plant your seeds ¼ inch (5 mm.) deep just after the last frost in a spot that receives full sun. Harvest the flower heads just as the flowers start to dry and a white pappus tuft (like on a dandelion) begins to form in its place.",
    care: [
      "Watering: Milk thistle is a very drought tolerant plant and prefers dry conditions. It should not be necessary to water milk thistle unless there are very extreme conditions of drought",
      "Fertilizing: If you wish to increase the seed production of milk thistle, you can fertilize this plant with nitrogen and potassium. However, that is rarely necessary because milk thistle is a hardy plant that thrives in poor soils.",
      "Weed Control: Milk thistle itself is often considered a weed. In order to control its spread it is advised to harvest the seeds before they become over-mature. To prevent re-seeding, it is recommended to mulch around the plant. However, milk thistle competes well with other plants, so a bit of light cultivation, especially when the plant is young, should suffice to control overgrowth",
    ],
    harvest: 
      "Harvest the flower heads just as the flowers start to dry and a white pappus tuft (like on a dandelion) begins to form in its place. Place the flower heads in a paper bag in a dry place for a week to continue the drying process. Once the seeds are dried, hack at the bag to separate them from the flower head. The seeds can be stored in an air-tight container.",
    refer: [
      "https://en.wikipedia.org/wiki/Silybum_marianum",
      "https://tualatinswcd.org/species/milk-thistle/",
      "https://www.healthline.com/nutrition/milk-thistle-benefits",
      "https://www.gardeningknowhow.com/ornamental/flowers/milk-thistle/milk-thistle-in-gardens.htm",
      "https://www.herbazest.com/herb-garden/growing-milk-thistle",
    ],
  },
  guava: {
    imgbg: require("../../assets/images/Medicine/Guava(3).jpg"),
    weight: "1.7 – 2.1 ounces",
    length: "4 to 12 cm",
    width: "",
    climateZone:
      "tropical and subtropical climate",
    population:
      "around 150 varieties of guava",
    habit: 
      "Guava trees are native to tropical America and are grown in tropical and subtropical areas worldwide.",
    facts: [
      "- Guava is used, in some form or another, to treat an array of ailments including fever, constipation and diarrhea, high blood pressure, hypercholesterolemia and dysentery",
      "- Guava wood is prized in the world of meat smoking.",
      "- Guavas contain 4 times more fiber than a pineapple and 4 times more vitamin C than an orange",
      "- The young guava leaves are boiled to make a tea to cleanse wounds.",
    ],
    seed: [
      "The guava fruit tree started from seed will produce fruit in 1 to 3 years. Buy good quality guava seeds from a garden shop",
      "To speed up the germination, soak the seeds in water for 10-15 days, or boil them for 5 minutes before planting. This will soften the hard coating of the guava seeds, encouraging the inner embryo to germinate",
      "Take a small pot and fill it with seed raising soil. Sow the seeds about a quarter inch about 0.5 cm below the soil and water. Keep the soil moist. Cover the pot with a plastic wrap to maintain a high humidity inside the soil",
      "Guava fruit seeds germinate at temperatures between 20 to 25°C. If the temperature is low, you can germinate the guava seeds indoors. The guava seeds germination takes about 3-10 weeks when the tiny sprouts will emerge from the soil. Remove the top plastic cover from soil.",
      "Transplant the seedlings when they are 4 to 18 inch high plant",
    ],
    grow: 
      "Prepare a planting site in full sun that is sheltered from a prevailing breeze or wind. A south-facing wall that can collect and radiate solar heat is a good spot in cooler locations. Work well-rotted compost or manure into the soil. Dig a hole half again as deep and twice as wide as the tree’s roots. Add a cupful of all-purpose fertilizer to the bottom of the hole. Put a tree stake in place before planting. Drive the stake into the ground to the side of the hole to at least 2 feet deep. Set the plant in the hole so that the soil mark from the nursery pot on the stem is at the surface level as the surrounding soil. Spread the roots out in all directions.",
    care: [
      "Keep the soil evenly moist for best fruit production; allow the top 2 or 3 inches of soil to dry before watering again. If the soil goes completely dry, flowering may be delayed or fruit may drop. Reduce water in winter.",
      "Guavas are heavy feeders; make monthly applications of an organic balanced fertilizer such as 5-5-5.",
      "Protect guavas from cold weather and frost; cover plants with a plant blanket if frost threatens or place a frame around the plant and cover the frame with clear plastic sheeting. A string of electric lights can be placed inside the frame for added warmth. Move guavas in containers to a protected and warm spot",
    ],
    harvest: 
      "Guava grown from seed will bear fruit in about 8 years; from seedling, guava will produce fruit in 3 to 5 years. Guava fruit will be ripe and ready for harvest about 20 to 28 weeks after flowering and pollination. In warm year-round locations, guava can produce two crops each year, a large crop in summer followed by a smaller crop in winter or spring. Ripe guavas will develop mature colors as they ripen; ripe guava will be fully colored and have a sweet aroma. Ripe guava will give slightly to gentle pressure.",
    refer: [
      "https://agrotexglobal.com/guava/",
      "https://en.wikipedia.org/wiki/Guava",
      "https://www.britannica.com/plant/common-guava",
      "https://www.thefactsite.com/guava-facts/",
      "https://urbanplants.co.in/blogs/news/germinating-guava-seed-for-guava-plants",
      "https://harvesttotable.com/how-to-grow-guava/",
    ],
  },
  goldenseal: {
    imgbg: require("../../assets/images/Medicine/Goldenseal(2).jpg"),
    weight: "",
    length: "15 to 50 cm",
    width: "",
    climateZone:
      "sub-freezing winter weather",
    population:
      "13",
    habit: 
      "is native to North America with a natural range from southern Quebec to northern Georgia and west to Missouri. Goldenseal is an herbaceous perennial and can be found growing naturally in rich, densely shaded, deciduous forests.",
    facts: [
      "- The goldenseal root has been around for hundreds of years. In fact, Native Americans used the root for many of their common ailments. Skin disorders, digestive problems and eye irritations were just a few of the many problems that goldenseal was said to solve.",
      "- When the European settlers arrived in the area, the Iroquois tribe introduced the healing properties of goldenseal to them. As a result, the herb gained popularity throughout the 19th century. It was also heralded by a renowned herbalist as a cure-all.",
    ],
    seed: [
      "To collect seed from goldenseal, harvest fruit when fully ripe (red). Mash the fruit by kneading, being careful not to damage the seed, and ferment in water until the flesh can be easily removed from the seed. This usually takes several days. Add water, decant, and rinse until the water and seed are clean. Alternately, spread the seeds out on a fine-mesh screen and spray with a high pressure stream of water. For the large-scale producer there are seed cleaners available that will do all this in one step. Goldenseal seed are small, round, black, and hard. Like ginseng seed, they should never be allowed to dry out. If the seed will not be sown immediately, the most common way to handle it is to mix it with fine, clean, damp sand and place it in a screen pouch or a wooden box with a fine-mesh screen top and bottom. Bury in a shaded, well-drained area exposed to natural rain. If the weather has been very wet or dry, after two weeks, uncover the box and ensure that the sand is damp and not waterlogged. The seed can be planted in late fall or early spring.",
      "Seeds are best planted in a nursery bed. Sow 10 to 12 seeds per ft in rows three inches apart with seeds 1⁄2 inch deep. Use of a mechanical seeding device can be employed. Cover lightly with a mulch to prevent drying of the soil. Goldenseal seed is most commonly sown in the fall. It can also be planted in the spring, but it must be done very early and handled very gently because some of the seed will certainly have germinated by that time",
    ],
    grow: 
      "Goldenseal can be propagated from rhizome pieces, root cuttings, or seed. To propagate from seed, the fruit must be harvested as soon as it is mature, then processed by carefully mashing the fruit to separate out the seeds. This process can take several days, as the seeds and pulp need to ferment in water until they can easily be separated. The seeds must never be allowed to dry out. When cleaned and rinsed thoroughly, sow the seeds one-quarter to one-half inch deep in a shaded nursery bed, and space the seeds 1 to 2 inches apart. Cover with several inches of leaf mulch to prevent the soil from drying out. Germination of goldenseal seed can be slow, erratic, and unpredictable. It is not uncommon for all or part of a seed bed to take two seasons before germinating.",
    care: [
      "",
    ],
    harvest: 
      "Roots are harvested in the fall after the tops have died down. Harvesting usually begins five to seven years from seeding or four to six years from planting rhizome pieces. Dig roots carefully, keeping the fibrous roots intact. Small plots can be dug with a fork, but a larger field requires a mechanical digger like a modified potato, horseradish, or bulb digger. If enough fibrous roots are left behind, the bed will often reestablish itself, making replanting in that area unnecessary. Select large, healthy plants for replanting (in a new area) and have a container available to keep them moist and cool. Carefully wash the remaining roots by spraying with a hose over a large-mesh screen. Commercial root washers are available that consist of a drum that turns and tumbles the roots as water is sprayed over them. Remove all dirt, breaking larger roots if necessary, but do not use a brush. Spread the washed roots on screens, and dry in a well-ventilated area in the shade or in a forced air dryer. Simple dryers can be constructed from small sheds or rooms in barns. Bulk tobacco barns can also be modified for drying goldenseal roots. Keep temperatures in the dryer low, around 95° to 100°F, and provide good airflow around the roots. Roots will lose about 70 percent of their weight during drying. To test for dryness, break a large root. It should snap but not be brittle. Pack dried roots loosely into cardboard cartons or barrels, clean untreated burlap sacks, or poly-sacks. Store in a cool, dry, dark area free from insects and rodents",
    refer: [
      "https://en.wikipedia.org/wiki/Goldenseal",
      "https://forest-farming.extension.org/goldenseal-hydrastis-canadensis-l/",
      "https://www.everydayhealth.com/diet-nutrition/5-facts-about-goldenseal-extract/",
      "https://content.ces.ncsu.edu/commercial-goldenseal-cultivation"
    ],
  },
  ginseng: {
    imgbg: require("../../assets/images/Medicine/Ginseng(2).jpg"),
    weight: "26 ounces",
    length: "15 to 46 cm",
    width: "",
    climateZone:
      "sub-freezing winter weather",
    population:
      "13",
    habit: 
      "",
    facts: [
      "- Due to possible effects on mood and body temperature, American ginseng is known as “cooling” ginseng in traditional Chinese medicine. Asian ginseng is considered to be warming.",
    ],
    seed: [
      "Seeds can be stored until you are ready to plant. Before planting, soak them for 10 minutes in a 10% bleach solution to prevent fungal infections. Sow seeds 1 ½ inches apart. Seeds will sprout in early to mid-spring, at which point, thin them to 3 inches apart",
    ],
    grow: 
      "Whether starting from stratified seed or root, select a well-shaded location with good drainage. Select sloping ground with 75-80 percent shade. Plant where competition from weeds is minimal and plants are unlikely to be disturbed by foot traffic. Conditions may be simulated in raised beds covered with netting. Ginseng can also be grown successfully indoors using containers with drainage reservoirs placed out of direct sunlight. Seeds are to be sown in the fall at a depth of about 1 ½ inches, while roots should be planted under 3 inches of soil and do best when planted in early spring. Ginseng plants do best in moist conditions, but require little attention to develop. Refrain from fertilizing plants. Water ginseng grown outdoors when conditions are especially dry. Seeds of the deciduous plant will germinate in the year following planting and plants over a year old will often flower and produce red berries, from which seeds may be harvested, but the valued part of the ginseng plant is the root, which reaches maturity only after 5 to 10 years and after it has developed three or more prongs. Prongs do not necessarily reflect the age of the plant, but are an indicator of maturity.",
    care: [
      "Ginseng is a woodland plant, so your goal should be to reproduce those conditions as much as possible. Once planted, however, your ginseng will need little care.",
      "Light and Air: Ginseng grows in partial to full shade, with good air circulation. If you can't find a natural tree canopy to plant under, you can create your own with artificial structures.",
      "Soil and Nutrients: Prepare a bed with soil up to 8 inches deep underneath mature hardwood trees, preferably on a northeast-facing slope. Ginseng requires well-draining soil, rich in humus, with a slightly acidic pH level",
      "Water: Before your plants reach maturity, water regularly only as much so that the soil does not dry out. Once your plants have reached maturity, to retain moisture you can cover your plants with leaf litter — the only soil supplement your plants will need. During an extended drought, be sure to keep the bed watered — frequent applications of a moderate amount of moisture is better than infrequent deep soakings.",
      "Temperature and Humidity: American ginseng is a wide-ranging plant, with a native habitat from Louisiana to Quebec province, but it is best grown in a cooler climate that replicates the relatively constant humidity of its woodland environment. An area subject to flooding or standing water will rot the valuable roots.",
    ],
    harvest: 
      "Even the harvesting of commercially grown ginseng is limited to mature plants (at least three years old) and only in late summer and fall. So if you're considering growing ginseng, know that the first thing you'll need is patience before your plants are ready to harvest and market. Ginseng can outlive humans, so there is no reason to hurry a harvest. Starting no earlier than the plant's fourth year, carefully dig up your crop with a shovel so as not to damage the roots. Gently wash off the dirt, then dry your ginseng in a cool, dry, well-ventilated room. Larger roots can take multiple weeks to dry, so turning the roots daily will speed up the process and prevent mold.",
    refer: [
      "https://en.wikipedia.org/wiki/American_ginseng",
      "https://profitableplants.com/questions-to-ask-before-growing-ginseng/",
      "https://www.ginsanaproducts.com/health-insights/energy-immune-system/a-history-of-ginseng/",
      "https://www.nutritionaloutlook.com/view/popcorn-cereal",
      "https://www.treehugger.com/how-to-grow-ginseng-5176203",
      "https://www.hgtv.com/outdoors/flowers-and-plants/how-to-grow-ginseng-at-home",
    ],
  },
  ginkgo: {
    imgbg: require("../../assets/images/Medicine/Ginkgo(3).jpg"),
    weight: "5,4 ounces",
    length: "64 to 132 cm",
    width: "64 to 93 cm",
    climateZone:
      "a temperate climate",
    population:
      "1",
    habit: 
      "Ginkgo biloba originated in China and has long been cultivated there and in other parts of Asia. The species grows in a temperate climate with deep soil. Ginkgo trees are extremely adaptable and are resistant to pollutants, fungicides, insects, and drought",
    facts: [
      "- Known as a 'living fossil', the Ginkgo biloba is one of the world's oldest living tree species: it was around 350 million years ago!",
      "- The leaves contain ginkgolides, which are used to improve blood circulation to the brain and to relieve Alzheimer’s, tinnitus and Reynaud's Syndrome. It is usually Europe’s number one selling herbal medication",
    ],
    seed: [
      "Soak seeds in warm water for 24-hours.",
      "Plant your seeds 1 inch deep in moist sand and place in the fride to stratify the ginkgo biloba tree seeds for 90 days to break dormancy",
      "Ginkgo tree seeds require consistently warm conditions to successfully germinate.  Your seeds will germinate best when kept under controlled warm conditions. A cold frame can be utilized to provide the right conditions for germination. You make also start your ginkgo tree seeds indoors in a bright, sunny room. Warm the seeds to around 70 degrees Fahrenheit during the day and keep the soil moist.  Your ginkgo tree seeds will germinate in 6-8 weeks.",
    ],
    grow: 
      "Plant your ginkgo tree in full sun or partial shade. Ginkgo trees are excellent shade trees that thrive in full sun. Choose a planting location that receives at least four hours of sunshine every day. Fertilize the planting hole. Before planting your new ginkgo tree, place a small amount of fertilizer in the planting hole to encourage growth. Choose a location with well-draining soil. Ginkgo trees grow well in acidic, moist, and sandy soil. Ginkgo trees are a good option for coastal properties. Ginkgo trees also work well as street trees in cities because they are resistant to air pollution.",
    care: [
      "Regularly water young trees. During your ginkgo tree’s first growing season, water it several times a week. Once established, ginkgo trees survive without regular watering.",
      "Prune your ginkgo tree annually. To help your tree thrive, use clean, sharp shears to prune competing branches on your ginkgo tree during its dormancy in late winter.",
      "Lay down mulch around your tree’s base. If you plant a ginkgo tree in a grassy lawn, consider placing wood chips around the base of your tree to give it space to breathe",
    ],
    harvest: 
      "",
    refer: [
      "https://www.arborday.org/trees/treeguide/TreeDetail.cfm?ItemID=1092",
      "https://e360.yale.edu/features/peter_crane_history_of_ginkgo_earths_oldest_tree",
      "https://naturewalk.yale.edu/trees/ginkgoaceae/ginkgo-biloba/ginkgo-41",
      "https://www.edenproject.com/visit/things-to-do/outdoor-gardens/ginkgo",
      "https://www.gardenersworld.com/plants/ginkgo-biloba/ ",
      "https://www.masterclass.com/articles/ginkgo-tree-care-tips",
      "https://www.sacredplantco.com/post/how-to-grow-ginkgo-biloba-trees-from-seed",
    ],
  },
  ginger: {
    imgbg: require("../../assets/images/Medicine/Ginger(2).jpg"),
    weight: "26 ounces",
    length: "12 to 14 cm",
    width: "",
    climateZone:
      "warm and humid climate",
    population:
      "1600",
    habit: 
      "Edible or culinary ginger is the fat, knobby, aromatic rhizome of Zingiber officinale, a tender herbaceous perennial plant in the large ginger family (Zingiberaceae) native to humid, partly-shaded habitats in moist tropical and subtropical forests of Southeast Asia.",
    facts: [
      "- The ginger plant is an herb",
      "- Ginger has many health benefits, some including ant-inflammatory properties, blood sugar regulation, and gastrointestinal relief",
    ],
    seed: [
      "",
    ],
    grow: 
      "You can place a whole piece of ginger in a pot or cut it into sections, ensuring each piece has at least two 'eyes' to grow shoots from. If cutting the ginger, leave it for a couple of days so the wounds callus over. Then, part fill a seed tray or pot with compost, and place the ginger on the surface, with its eyes facing upwards. Cover the ginger root with a couple of centimetres of compost, leaving the eyes exposed. Water using a watering can with a rose attached, and keep in a warm spot in partial shade. After a couple of weeks your ginger root will have developed roots and shoots. Gently lift it from the seed tray and transplant into a pot of compost, placing it on the surface and covering gently with 5cm compost. Ensure the stem is sticking out at the top. Firm gently and water well, allowing to drain.",
    care: [
      "As your ginger plant grows, keep it in a warm, partially shaded spot and water regularly, ensuring the compost remains just moist. Top up with additional compost as the stem grows. You can pot on your ginger plant and grow it on as a house plant or even outside in the summer months, taking care to ensure it's not exposed to cold winds. If growing your ginger outside, move it back indoors when temperatures start to fall in autumn.",
    ],
    harvest: 
      "Your ginger plant will stop producing leaves in late summer. Harvest the roots any time after this, or before the first frosts if growing outside. To harvest ginger, simply remove the rhizome from the soil. Harvest all or some of the roots – you can cut the rhizome and pot up the rest, as long as you keep it in a warm, centrally heated spot over winter. Wash thoroughly before eating. You can store some roots in the freezer to use as and when you need to.",
    refer: [
      "https://www.howmuchisin.com/produce_converters/ginger",
      "https://vikaspedia.in/agriculture/crop-production/package-of-practices/spices/ginger",
      "https://animals.sandiegozoo.org/plants/ginger",
      "https://hort.extension.wisc.edu/articles/ginger-zingiber-officinale/",
      "https://www.thatsitfruit.com/blogs/default-blog/10-interesting-facts-about-ginger",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-ginger/",
    ],
  },
  garlic: {
    imgbg: require("../../assets/images/Medicine/Garlic(2).jpg"),
    weight: "4,8 ounces",
    length: "12 to 14 cm",
    width: "",
    climateZone:
      "cold temperate climate",
    population:
      "",
    habit: 
      "The plant is native to central Asia but grows wild in Italy and southern France and is a classic ingredient in many national cuisines. The bulbs have a powerful onion like aroma and pungent taste and are not usually eaten raw.",
    facts: [
      "- China produces the most garlic.",
      "- Garlic’s health benefits are myriad, including an ability to reduce cholesterol.",
    ],
    seed: [
      "If you have heavy clay soil, you can start garlic off by planting cloves singly in module trays in autumn and growing them on in a cold frame. This prevents the bulbs rotting off in very wet soil during winter. You can then plant these out in spring, when the soil has dried out a little. You could also try growing garlic in mounds 15cm tall and 20cm wide at the base. Plant the garlic cloves into these mounds, 15-20cm apart and 7-10cm deep. Because the soil is slightly raised, it doesn't get as wet, so the garlic is less likely to rot.",
      "If you have no space, or your plot has been affected by onion white rot in the past, then growing in containers is for you. Use any pot that's at least 15cm wide and deep, filled with multipurpose compost. Sow three cloves in a 15cm wide pot, six in a 30cm one. Feed from April when you see strong spring growth, using a high nitrogen feed such as dried chicken manure pellets, or fill the container to the top with more compost. Stop feeding in mid May.",
    ],
    grow: 
      "Most varieties of garlic are best planted in late autumn or early winter, as the cloves need a period of cold weather to develop into bulbs. Make sure your soil is cleared of weeds and the remains of summer crops. Before planting, dig in some home-made compost or well-rotted manure and rake over well. Push cloves in, or use a dibber to make holes 15cm apart, leaving 30cm between rows. Birds have a penchant for the bulbs and will pull them out of the soil, so lay bird netting or horticultural fleece over new plants until the shoots are 5cm tall. In cold areas, you may need to cover plants with cloches over winter. This extra protection will encourage root growth, so plants are ready to grow next spring.",
    care: [
      "Garlic needs little care. Water regularly in spring and early summer, but reduce once you see the foliage turning yellow – this is a sign that the bulbs are reaching maturity. Weed between the plants to reduce the competition for water and nutrients. This is best done by hand, as hoeing could damage the developing bulbs. Remove any flowers, or 'scapes' the plants produce – you can eat these in stir-fries.",
    ],
    harvest: 
      "Harvest garlic in summer when the leaves turn yellow. Gently lift out bulbs with a fork or trowel, taking care not to damage the bulbs. Leave the garlic to dry out for a couple of days, by laying it out on a table or tray, in full sun.",
    refer: [
      "https://www.britannica.com/plant/garlic",
      "https://greenharvest.com.au/Plants/Information/GarlicGrowing.html",
      "https://savvygardening.com/garlic-varieties/",
      "https://www.mentalfloss.com/article/63100/11-things-you-might-not-have-known-about-garlic",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-garlic/",
    ],
  },
  rosemary: {
    imgbg: require("../../assets/images/Ritual/Rosemary(2).jpg"),
    weight: "0,96 ounces",
    length: "3 to 5 feet",
    width: "",
    climateZone:
      "Mediterranean",
    population:
      "",
    habit: 
      "native to the hills along the Mediterranean, Portugal, and northwestern Spain. Characteristic habitat of rosemary, southern France near Pont du Gard.",
    facts: [
      "- Rosemary is used as a culinary condiment, to make bodily perfumes, and for its potential health benefits. Rosemary is a member of the mint family Lamiaceae, along with many other herbs, such as oregano, thyme, basil, and lavender.",
    ],
    seed: [
      "Choose a container. You can use small pots or egg cartons, but your best choice is to purchase a seed-starting tray with a plastic humidity dome",
      "Prepare a seed-starting mix. Ensure that the soil you use has good drainage. You can create your own mix with equal parts perlite and peat moss or purchase a sterile, soilless seed-starting mix. Lightly moisten the mix before adding it to your container.",
      "Add the rosemary seeds. Sprinkle three to four seeds on top of the seed-starting mix. Cover the seeds with a small amount of mix, but not so much that they don’t get sunlight.",
      "Lightly water, then cover the container. Mist the seeds with water using a spray bottle, making sure the surface is moist but not sopping wet. This helps settle the seeds into the mix. Cover the container with the plastic dome or plastic wrap.",
      "Store in a sunny, warm location until germination. Place the seed-starting tray somewhere that receives plenty of direct sunlight. A heat mat and an indoor full-spectrum light can be used if you're unable to find a warm, sunny area. If the surface of the seed-starting mix appears dry, remove the plastic cover and lightly mist with water until moist. The germination process typically takes two to four weeks.",
      "Once seedlings appear, remove the plastic cover. When the rosemary seedlings emerge from the soil, place the seed-starting tray in a shallow water tray. Water will seep up into the soil through the container's drainage holes. Keep the seedlings in direct light.",
      "Transplant the seedlings. Once seedlings are three to six inches tall, transplant them outdoors. Plant rosemary seedlings in compost-rich soil with good drainage. Choose a location where they receive six to eight hours of direct sunlight each day. You can transplant your rosemary seedlings into a garden bed or, if you want to bring the plants inside during cold winters, a pot.",
    ],
    grow: 
      "Grow rosemary in well-drained soil in full sun. Young plants can suffer if their roots are sitting in wet soil in winter, so it's a good idea to grow rosemary in a container for a couple of years before planting into the garden. Cut back annually to prevent the plant from becoming woody, and mulch in autumn with leaf mould, well-rotted compost or manure. Plant rosemary in spring or autumn. Although rosemary is frost-hardy, the combination of cold and waterlogging can kill immature plants. With this in mind, choose a well-drained soil in a sunny, sheltered spot. If you have a cold clay soil, dig in lots of bark, grit or leaf mould to improve drainage. Alternatively, grow rosemary in a pot.",
    care: [
      "Rosemary requires little maintenance during the year except cutting back after flowering to prevent plants becoming straggly and woody. Save the trimmings to propagate new plants or dry them for cooking.",
      "Rosemary does well in containers in a soil-based, peat-free compost. Add crocks to the bottom of pots to aid drainage. Keep rosemary plants well watered during dry spells and feed with a general fertiliser during the growing season. In cold winters, bring plants under cover for protection.",
    ],
    harvest: 
      "Harvest rosemary by gently pulling small sprigs away from the main stem. You can also use secateurs to remove large branches of rosemary, for roasting.",
    refer: [
      "https://link.springer.com/article/10.1007/s12231-019-09477-w",
      "https://bonnieplants.com/blogs/how-to-grow/growing-rosemary",
      "https://www.canr.msu.edu/news/rosemary_the_herb_with_winter_problems",
      "https://hort.extension.wisc.edu/articles/rosemary-rosemarinus-officinalis/",
      "https://www.medicalnewstoday.com/articles/266370",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-rosemary/",
      "https://www.masterclass.com/articles/how-to-grow-and-care-for-rosemary",
    ],
  },
  myrtle: {
    imgbg: require("../../assets/images/Ritual/Common_Myrtle(2).jpg"),
    weight: "",
    length: " 5-6 tall",
    width: "",
    climateZone:
      "Mediterranean",
    population:
      "",
    habit: 
      "It is an evergreen shrub native to southern Europe, North Africa, Western Asia, Macaronesia, and the Indian Subcontinent, and also cultivated.",
    facts: [
      "- The medicinal properties of Myrtus communis were utilized as early as 600 B.C.E. Symbolically and ritually important in ancient times, it was used to represent honor, justice, prosperity, generosity, hope, love, and happiness.",
      "- In Greco-Roman mythology, numerous gods were associated with the common myrtle and its flowers, such as Aphrodite and Demeter. Also a key part of various Jewish traditions, it is one of the four species used in the festival of Sukkot, and the Bible records its use in purification ceremonies.",
      "- As a shrub that thrives along waterways, it was also seen as a symbol of restoration and recovery",
    ],
    seed: [
      "Sow seed under a cold frame in autumn. When new growth begins to firm up, clip non-flowering shoots. If a shoot is flowering, remove the buds first. Plant in a 50/50 mixture of sand and compost out of direct sunlight. Rooting takes six to 12 weeks. Pot each specimen in gritty compost and overwinter indoors in a frost-free location. Transplant outdoors or indoors in spring.",
    ],
    grow: 
      "Myrtus communis can be planted in a raised bed, in a container, grouped to form a hedge or border, or as a standalone accent. Drought-tolerant, deer resistant, and low-maintenance, Myrtle works well in a variety of garden types from city to coastal to cottage where it will fill out any sheltered, sunny space gracefully.",
    care: [
      "Light: Give the plant full to partial sun in a west or south-facing location sheltered from the cold, drying wind. If growing as a bonsai indoors, it will need a lot of light and air. Set in semi-shade outside in the hot summer. In autumn, bring inside a cool room where temperatures are around 50 degrees Fahrenheit. Place on a south-facing windowsill or beneath grow lights",
      "Soil: Establish Myrtus communis in moist but well-drained soil. It will adapt to clay or sand, though, for best results, plant under glass in loam-based compost in filtered light with good ventilation. Beware of iron chlorosis in highly alkaline soil that has a pH higher than 8.3. If this occurs, lower the soil pH with a treatment of elemental sulfur or nitrogen fertilizer",
      "Water: Water the root ball regularly (once a week or more) when the plant is young, but do not soak as this could also contribute to possible iron chlorosis. An older plant prefers a deeper watering every two to four weeks but can do well without water for shorter periods, as well. Myrtle does not do well with high concentrations of lime found in tap water. It may benefit the plant to harvest rainwater for waterings.",
      "Temperature and Humidity: Hardy in USDA Zones 8-11, the common myrtle is frost tender and hardy to 10 degrees Fahrenheit. It does not tolerate high humidity.",
      "Fertilizer: Outdoors, fertilize once a year in early spring. Indoors, use a liquid fertilizer weekly during the growing season. Watch the plant in the winter because if it's growing even a little bit, you may need to fertilize it every two weeks."
    ],
    harvest: 
      "",
    refer: [
      "https://link.springer.com/article/10.1007/s12231-019-09477-w",
      "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?taxonid=282870",
      "https://www.nparks.gov.sg/florafaunaweb/flora/3/4/3430",
      "https://en.wikipedia.org/wiki/Myrtus_communis",
      "https://www.thespruce.com/growing-myrtus-communis-5089132",
    ],
  },
  tomato: {
    imgbg: require("../../assets/images/Cosmetics/Tomato(3).jpg"),
    weight: "4 to 8 ounces.",
    length: "",
    width: "1–10 cm",
    climateZone:
      "tropical and temperate climates/temperate climate",
    population:
      "There are more than 10,000 tomato varieties available.",
    habit: 
      "Tomatos are found in over 75% of North America alone, but are grown world wide both in greenhouses and on farms as it is a popular fruit in today's agriculture.",
    facts: [
      "- Tomatoes are the richest source of lycopene available to us naturally. Lycopene is a very powerful antioxidant which is important for the health of the prostate gland in men. It’s also what gives red and pink fruits their colour. Tomatoes, watermelons and papayas. are all coloured with lycopene. There are also some reports that suggest lycopene can reduce and protect against certain types of cancer",
      "- Tomatoes contain some anti-inflammatory properties and are linked to general heart and brain well-being. Tomatoes are also a good source of potassium, which is linked with lowering elevated blood pressure in the body.  Therefore, this works against preventing cardiovascular issues.",
    ],
    seed: [
      "Tomatoes are available to buy as young plants, but if you’d like to try some of the more unusual varieties it’s worth growing tomatoes from seed.",
      "Start sowing in late-January until late-March. Sow seeds in 7.5cm pots of moist peat free compost, top with a thin layer of vermiculite, then water and cover with cling film. Stand on a warm, bright windowsill or in a propagator.",
      "When your seeds have germinated, remove the cling film (or take them out of the propagator) and keep the compost damp. Transplant seedlings when they reach about 2-3cm tall into 5cm pots filled with moist multi-purpose compost. Return them to the windowsill. Keep potting on as necessary. Support stems by tying them to a pea stick with soft string.",
    ],
    grow: 
      "Planting tomatoes outside: Move your tomatoes outside after the last frost in May. Choose a sunny, sheltered spot, where you can plant them into a border (into soil that has had plenty of well-rotted garden compost added), or into 30cm pots, or put two or three plants in a growing bag. If growing tomatoes in a greenhouse, try growing alongside basil, which thrives in the same conditions. Planting tomatoes in a greenhouse: Growing tomatoes in a greenhouse is very similar to growing them outside, except you get a longer growing season. You'll need to shade your plants from excessive heat, which could cause tough skins, blotchy ripening and, if you forget to water regularly, blossom-end rot. So fit some blinds, use shade paint, or hang woven shading fabric.",
    care: [
      "Tall-growing cordon tomatoes will require pinching out (removing side-shoots) and staking (tying plants to canes with soft string). When the first tiny fruits begin to appear, strip away the leaves underneath to allow light and air to reach them better. When there are four trusses (clusters) of flowers, pinch out the plant’s growing tip.",
      "Once flowers appear, feed your plants weekly with liquid tomato food, such as Tomorite. Keep tomatoes well watered because irregular watering causes fruit to split or develop hard black patches, known as blossom-end rot. This is caused by a lack of calcium, which is found in water.",
      "With bush tomatoes, which have a sprawling habit, you can pretty much leave them to get on with it. If the fruits are hidden under the leaves, thin out the foliage a little to let the sun through to ripen them. Support heavy trusses on top of upturned flowerpots to prevent their stems snapping.",
    ],
    harvest: 
      "Leave tomatoes on the plants so they can ripen naturally, which greatly improves the flavour. Towards the end of the season, prune off the older leaves to let in more light and prevent grey mould fungus taking hold. If the weather turns cold, pick the trusses to ripen indoors.",
    refer: [
      "https://greenupside.com/how-much-does-a-tomato-weigh-tables-in-grams-and-ounces/",
      "https://en.wikipedia.org/wiki/Tomato",
      "https://en.wikipedia.org/wiki/List_of_tomato_cultivars",
      "https://www.oecd-ilibrary.org/tomato-solanum-lycopersicum_5jfj3qftwbzs.pdf",
      "https://www.campbellsoup.co.uk/blog/fun-facts-about-tomatoes/",
    ],
  },
  rose: {
    imgbg: require("../../assets/images/Cosmetics/Rose(2).jpg"),
    weight: "8.6 ounces",
    length: "30 to 60 cm",
    width: "1,3 to 17,5 cm",
    climateZone:
      "full sun",
    population:
      "150 species of rose",
    habit: 
      "Roses are native to China but are now grown across the world and thrive in sunny, well-drained soil. They particularly like clay soils and it is best to grow roses away from other plants so their roots are not disturbed.",
    facts: [
      "- Roses Are One of the Oldest Flowers.",
      "- You Can Eat Roses",
      "- Their Fragrance is Used in Perfumes.",
      "- Each Rose Color Has a Different Meaning",
    ],
    seed: [
      "Plant roses in a well-prepared hole with added compost to improve soil structure and aid water retention. Back-fill with soil and firm in well, then water thoroughly.",
    ],
    grow: 
      "Pruning is essential for the overall health, vitality and appearance of roses. Winter is the key time to cut back most varieties, except rambling roses, which are pruned in summer immediately after flowering. The basic principles of pruning are the same: cutting back hard will promote the strongest growth, while light pruning will result in less vigour. The other basic rules include cutting to an outward-facing bud to prevent compacted growth, and removing closely positioned stems that might rub or compete for space. Also remove stubby ‘snags’ (short, dead lengths of stem with no growth on them) and thin, twiggy stems, which are unlikely to produce anything worthwhile in terms of growth and flowering potential.",
    care: [
      "Plant your roses in a sunny location with good drainage. Fertilize them regularly for impressive flowers. Water them evenly to keep the soil moist. Prune established rose bushes in early spring",
    ],
    harvest: 
      "Remove faded flowers to encourage new bloom.  Deadhead single-flower roses back to the first 5 leaflet leaf to encourage stouter and stronger stems.  Remove only individual flowers as they fade within a cluster.  Once all the flowers are done blooming you can remove the flower stem back to the first 5 leaflet leaf.  Always leave at least two, 5 leaflet leaves attached to the plant.",
    refer: [
      "https://www.avantegardens.com/Rose-Comparisons.html",
      "https://www.britannica.com/plant/rose-plant",
      "http://www.flowers.org.uk/flowers/flowers-names/q-t/rose/",
      "https://www.bhg.com/gardening/flowers/roses/rose-facts/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-roses/",
      "https://www.melindamyers.com/audio-video/melindas-garden-moment-audio-tips/trees-shrubs-roses/harvesting-enjoying-roses",
      "https://www.gardendesign.com/roses/care.html",
      "https://www.ftd.com/blog/share/types-of-roses",
      "https://www.bhg.com/gardening/flowers/roses/ultimate-rose-care-guide/",
    ],
  },
  marigold: {
    imgbg: require("../../assets/images/Cosmetics/Marigold(2).jpg"),
    weight: "",
    length: "6 to 12 inches",
    width: "6 to 9 inches",
    climateZone:
      "mild climate",
    population:
      "50 species of marigold",
    habit: 
      "native to southwestern North America, tropical America, and South America.",
    facts: [
      "- The earliest use of marigolds was by the Aztec people who attributed magical, religious and medicinal properties to marigolds. The first recorded use of marigolds is in the De La Crus-Badiano Aztec Herbal of 1552.",
      "- The Herbal records the use of marigolds for treatment of hiccups, being struck by lightening, or “for one who wishes to cross a river or water safely.” The last use confirms the magical properties ascribed to marigolds.",
    ],
    seed: [
      "Tagetes marigolds flower within a few weeks of sowing and can either be sown indoors in early spring to flower from early summer or sown outside in late spring, for later blooms. For early sowings indoors, sow seed in a warm place, transplant the seedlings into small pots or modular trays, and grow on in a warm, well-lit place. Plant outside once the frosts have passed, first hardening off (acclimatising plants to the outside) over a couple of weeks.",
      "Alternatively, sow outside in late spring directly where plants are to flower. Sow the seed thinly into moist well-prepared soil and thin the seedlings to 10-20 cm apart, depending on variety size.",
      "In borders, improve poor soil with well-rotted compost or soil conditioner. Use peat-free multi-purpose potting compost for pots. Water in well after planting.",
    ],
    grow: 
      "Marigolds need full sun and a reasonably fertile, well-drained soil. Smaller marigolds make good edging plants for borders and do well in pots, while taller or larger-flowered marigolds can be grown in large pots or in borders. Marigolds do best in a sheltered site, particularly the large-flowered African marigolds, as the big blooms can be easily damaged by wind. Tagetes marigolds can be used as what is referred to as ‘companion plants’, because their leaves are strongly aromatic and this scent deters some pests. A popular companion planting technique is to plant tagetes marigolds around tomato and cucumber plants to deter whitefly, particularly in a greenhouse.",
    care: [
      "As long as marigolds are planted in reasonably fertile soil, little care is needed apart from an occasional thorough watering during dry spells. Removing the dead heads encourages more flowers to be produced, while pinching out shoots of tall varieties can encourage bushy growth.",
      "Water pot-grown marigolds regularly and apply a liquid fertiliser every 7-14 days from midsummer onwards.",
    ],
    harvest: 
      "Letting Marigold Flowers Dry: It’s important to wait until the right time to collect marigold seeds. You can harvest the seeds when the petals are dry already (when the base of each flower turning brownish). However, make sure there’s still is a bit of green color left in the base of the bloom. If you also wait until it is completely turned brown, it may start to rot or mold. It’s important to wait for the perfect time to harvest marigolds since the timing is crucial to have the right quality of marigold seeds. Tip in harvesting: While you are harvesting, simply cut each marigold flower heads using your cutting equipment or either pinch it with your finger. However, be sure not to pull the flowers as it can harm the roots of your marigolds.",
    refer: [
      "https://www.gardendesign.com/flowers/marigold.html",
      "http://www.celkau.in/crops/Ornamental%20Crops/marigold.aspx",
      "https://www.britannica.com/plant/marigold",
      "https://justfunfacts.com/interesting-facts-about-marigolds/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-marigolds/",
    ],
  },
  lavender: {
    imgbg: require("../../assets/images/Cosmetics/Lavender(2).jpg"),
    weight: "",
    length: "53 to 63 cm",
    width: "53 to 63 cm",
    climateZone:
      "arid climates like the Mediterranean",
    population:
      "47 species of lavender",
    habit: 
      "Lavender loves full sun (at least 8 hours per day or more). Lavender's native habitat is the area around the Mediterranean Sea which has dry, chalky/rocky ground, so it thrives on hot, dry, rocky, or sandy soil. Good drainage is a must - too much rain and it drowns.",
    facts: [
      "- The ancient Egyptians used lavender to make their ‘mummies’ smell sweet",
      "- In the “language” of flowers, it is said that lavender can mean devotion, luck, success and happiness. Also purity, devotion, serenity, grace and calmness.",
      "- In electroencephalography (EEG) studies, inhalation of 10% lavender oil increased alpha and theta wave activity in the brain, patterns which are also consistent with relaxation and better mood.",
    ],
    seed: [
      "The best time to plant tender lavender is in spring, from March through to May. If you have heavy soil, improve drainage by adding horticultural grit to the planting hole before planting. Planting on a slight mound can also help prevent water-logging. Plant lavender at the same depth it was in its pot. Add a sprinkling of bonemeal to the planting hole, place the plant in the hole, backfill and firm in. Water well.",
    ],
    grow: 
      "Lavenders thrive in an open site in full sun in a well-drained, neutral to alkaline soil (got acid soil? Try French lavender, Lavandula stoechas, instead). They cope well with drought conditions and may suffer in wet, heavy soils, particularly over winter. Half-hardy and tender lavenders, such as Lavandula stoechas, are best grown in pots so that they can be moved to a light, airy frost-free spot for winter.",
    care: [
      "Hardy lavenders (Lavandula angustifolia and Lavandula x intermedia types) can cope with temperatures down to about -15°C, and can therefore be left in the garden all year round. Prune after flowering, typically in August. Cut back quite hard but don't cut into old wood, as this can reduce flowering potential the following year. Be careful not to remove green shoots as this can kill the plant.",
      "Half-hardy lavenders, such as Lavandula stoechas, flower for a long season but may not survive winter. Prune after their first flush of flowers have faded but avoid pruning any later than early September",
      "If growing the more tender lavenders, such as Lavandula denata, deadhead and prune only if the plants become scruffy.",
    ],
    harvest: 
      "Harvesting and drying lavender is simple – simply snip off the stems just before the flowers open and when you've gathered enough for your needs, tie the stems together and hang them up to dry somewhere sheltered.",
    refer: [
      "https://bonnieplants.com/blogs/how-to-grow/growing-lavender",
      "https://www.auntyamys.com.au/blogs/lets-get-earthy/top-10-fun-facts-about-lavender",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-lavender/",
      "https://www.growveg.com/guides/how-to-grow-and-harvest-lavender/",
      "https://www.cedarbrooklavender.com/post/how-to-grow-lavender-growing-lavender-in-every-climate",
    ],
  },
  hibiscus: {
    imgbg: require("../../assets/images/Cosmetics/Hibiscus(2).jpg"),
    weight: "0,9 ounces",
    length: "95 to 190 cm",
    width: "1,3 to 17,5 cm",
    climateZone:
      "tropical hot and humid regions, cool climates or cold places",
    population:
      "over 200 species of hibiscus",
    habit: 
      "Originally native to tropical Asia it is now grows throughout warm- temperate, subtropical and tropical regions throughout the world. Hibiscus is easily grown over a wide range of conditions. Their diverse habitats range from wetlands to savannahs and woodlands",
    facts: [
      "- In 1960, the hibiscus or shoe flower was Malaysia's national flower.",
      "- Hibiscus flowers comprise 15-30% plant acids.",
      "- In the United States, hibiscus tea is widely recognized as a 'zinger' type of tea due to its astringent, cool, and acidic flavor.",
    ],
    seed: [
      "Germinate indoors. Hibiscus seeds can take a long time to germinate depending on your plant hardiness zone, so you’ll need to jump-start the process indoors (around two to three months before the last frost date). Germinate the seeds by using a knife to nick the round end of the hard seed coating, which will allow more moisture to enter and speed up the germination process. Soak the seeds in room temperature water anywhere from one to eight hours",
      "Plant in a tray or pot. Choose a potting soil or seed-starting mix for your germinating seeds. Plant seeds about a quarter-inch deep in your potting mix, and keep in warm, sunny conditions—at least 75 to 85 degrees Fahrenheit. After two to three weeks, your hibiscus seedlings should sprout. As your hibiscus plants grow indoors, you’ll need to place them into bigger pots to accommodate their increasing size. Hibiscus have extremely fragile stems before they become fully established plants, so avoid planting outdoors until they are strong enough to survive adverse weather.",
    ],
    grow: 
      "Grow outdoor hibiscus in moist but well-drained soil in a warm and sunny spot, ideally sheltered from winds. They do well in pots of loam-based, peat-free compost. Grow indoor hibiscus in a bright spot away from direct, strong sunlight. They need a minimum temperature of 7-10°C and a high humidity, so do well in bright, but not sunny, bathrooms. Both types of hibiscus do well in pots of moist but well-drained soil or compost. Repot in spring every two-three years to keep it fresh.",
    care: [
      "Feed outdoor hibiscus annually in spring, with a slow-release, high potash formula, such as rose food. Mulch in autumn to help maintain soil moisture levels and suppress weeds. Don't be alarmed if your outdoor hibiscus dies back after a hard frost in autumn – remember they are deciduous and this is perfectly normal. Simply cut back dead stems to around 10cm above ground level. They will regrow the following May to June (again, don't be alarmed by the late development of leaves, spring growth is slow to appear on outdoor hibiscus).",
      "After three years (or when it's reached a height of around 1.5m), start pruning your hardy hibiscus annually to keep in shape. If left unpruned, the outer branches can fall outwards from the weight of the leaves.",
      "Prune after flowering, cutting each branch back to a leaf node at a desired height. Removing old wood from the centre of the plant can improve air circulation.",
      "Water indoor hibiscus regularly during the growing season (spring to early autumn) and feed fortnightly with a high potash liquid feed. Cut down on watering from late autumn to spring, when the plant is dormant. Always let the top few centimetres of compost dry out before watering again.",
      "Indoor hibiscus benefit from annual pruning to keep it in shape. In early spring, simply shorten the previous year’s growth to produce a main framework of branches, which will then produce flowering shoots. Unwanted long shoots can be pruned back to 5-7.5cm from their base and thin non-flowering shoots removed",
    ],
    harvest: 
      "Harvest the hibiscus petals and sepals when the flower is in full bloom by removing the calyx — the bulb-like part of the plant between the flower and the stem.",
    refer: [
      "https://hgic.clemson.edu/factsheet/hibiscus/",
      "https://chaucayxuatkhau.com/cay-hoa-dam-but/",
      "https://www.gardenloversclub.com/ornamental/flowers/hibiscus/varieties-of-hibiscus/",
      "http://www.coterc.com/uploads/1/6/1/8/16182092/hibiscus.pdf",
      "https://kidadl.com/facts/hibiscus-facts-learn-everything-about-the-shoe-flower",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-hibiscus/",
      "https://www.masterclass.com/articles/how-to-grow-hibiscus-from-a-seed",
      "https://senchateabar.com/blogs/blog/how-to-make-hibiscus-tea",
    ],
  },
  cucumber: {
    imgbg: require("../../assets/images/Cosmetics/Cucumder(3).jpg"),
    weight: "14 ounces",
    length: "61 to 91 cm (plant)",
    width: "61 to 91 cm (plant)",
    climateZone:
      "hot and humid climate",
    population:
      "nearly 100 different varieties",
    habit: 
      "grows on moist, well-drained (sandy) soils rich in organic matter and slightly alkaline. It prefers full sun exposure in warm and humid climates; it is not frost resistant.",
    facts: [
      "- Cucumbers contain most of the vitamins you need every day, just one cucumber contains Vitamin B1, Vitamin B2, Vitamin B3, Vitamin B5, Vitamin B6, Folic Acid, Vitamin C, Calcium, Iron, Magnesium, Phosphorus, Potassium and Zinc",
    ],
    seed: [
      "Cucumber seeds need heat to germinate – at least 20°C – so place pots in a greenhouse, heated propagator or on a sunny windowsill for the best results. Sow in February or March if your greenhouse is heated, or in April if you have an unheated greenhouse. Fill small 5cm pots with peat-free, multi-purpose compost and sow the seeds vertically or on their sides (not flat), 1cm-2cm deep. Sow two cucumber seeds per pot, then water. You should see the seeds germinating in 7-10 days. Once the seedlings appear, remove the weakest seedling to leave one per pot. Pot seedlings on into a 9cm pot after they have developed their first pair of large 'true' leaves.",
      "You can also sow outdoor cucumber seed directly outdoors in late May or June – wait until the risk of frost has passed. Cover the ground with a cloche or fleece after planting to warm the soil."
    ],
    grow: 
      "Whether you're growing indoor or outdoor cucumbers, sow the seeds in late winter or early spring, or buy young plants at the garden centre in late spring. Sow the seeds into pots of peat-free, multi-purpose compost. They need a temperature of at least 20ºC to germinate. Pot seedlings on after they have developed their first pair of 'true' leaves. If growing outdoor cucumbers, harden off your plants by gently acclimatising them to outdoor conditions, after all risk of frost has passed. Tie them into a sturdy support, such as a bamboo cane, and water regularly. When your cucumbers start to flower, feed weekly with a high potash fertiliser, such as a liquid tomato food. Harvest cucumbers as and when they are ready.",
    care: [
      "In the greenhouse, water cucumber plants regularly and mulch the soil to retain moisture and keep the area around them weed-free. Increase humidity by damping down the greenhouse regularly, or spraying the cucumber plants with a fine mist from your hose. You could even section off an area of your greenhouse, using plastic sheeting, to further aid humidity.",
      "When your cucumbers start to flower, feed weekly with a high potash fertiliser, such as a liquid tomato food. Cucumbers bear male and female flowers and in the greenhouse, you will need to remove the male ones, as pollination can make the fruits taste bitter and be full of seed. You can tell them apart as female flowers have an immature fruit behind it, whereas the male ones have a normal stem. Some F1 greenhouse varieties, such as cucumber 'Bella', bear only female flowers.",
      "Pinch out the growing tip of the plant once it has reached the top of its support to encourage side shoots (and therefore bigger crops) to form. Pinch out the tip of each flowering side shoot once the fruits begin to develop, leaving two leaves after each fruit. You can also pinch out the tips of flowerless side shoots once they reach 60cm long.",
      "Outdoor varieties also need plenty of watering to keep the soil moist. Do not remove the male flowers on outdoor cucumber varieties – the flowers are pollinated by insects, so both the male and female flowers are needed.",
      "Pinch out the growing tip once seven leaves have formed. You can train the side shoots up a support, or leave them to trail on the ground. You can also pinch out the flowerless tips once the stem has formed seven leaves."
    ],
    harvest: 
      "You can start harvesting cucumbers from around 12 weeks after sowing, in midsummer. The more cucumbers you pick, the more the plant will produce. Outdoor types will crop until September, while greenhouse types can fruit into October if it's warm. The length of the cucumbers will depend on the particular variety, so check the packet. Harvest the fruits as and when you need them, but don't leave them on the plant for too long as older fruits can taste bitter and their skins can get hard. Harvest cucumbers early in the morning when it is cool. Cut the fruits from the plant using secateurs or a sharp knife. Some longer cucumber varieties can be cut in half while still on the plant and left to form a callus, so they can be used later.",
    refer: [
      "https://www.cookipedia.co.uk/recipes_wiki/Cucumbers",
      "https://climbers.lsa.umich.edu/",
      "https://www.lovemysalad.com/blog/cucumber-fun-facts",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-cucumbers/",
      "https://harvesttotable.com/how_to_grow_cucumber/",
      "https://www.finedininglovers.com/article/cucumber-types-characteristics",
    ],
  },
  chamomilla: {
    imgbg: require("../../assets/images/Cosmetics/Chamomilla(2).jpg"),
    weight: "8,3 ounces",
    length: "35 to 80 cm",
    width: "22 to 26 cm",
    climateZone:
      "cool conditions",
    population:
      "about 25 species",
    habit: 
      "Sandy or loamy arable soils in Britain. Also found on saline steppes in Europe. A weedy species, preferring sunny sites (slightly shaded sites are tolerated) and found on wasteland, roadsides and fields",
    facts: [
      "- Chamomile has green, feathery leaves that are alternately arranged on the stem.",
      "- Flower consists of large number of individual flowers called florets. Outer part of the flower consists of 18 white ray florets. Yellow disk, located in the center of the flower, consists of miniature florets that have tubular shape",
      "- Chamomile blooms from June to July. Flies are main pollinator of chamomile flowers",
    ],
    seed: [
      "Chamomile is easy to grow from seed – sow direct in a prepared seedbed in autumn, or indoors from March, scattering the seed over the surface of moist, peat-free seed compost. Chamomile needs light to germinate, so cover with a thin layer of vermiculite or don't cover at all. Pot up indoor-grown seedlings into individual pots and harden off before planting out after all risk of frost has passed.",
    ],
    grow: 
      "Both German and Roman chamomile grow in similar conditions – they need well-drained soil in full sun to partial shade. Once established, both species are drought tolerant and need watering only during times of drought.",
    care: [
      "Chamomile plants need very little care. Once established they are fairly drought-tolerant. Water pot-grown plants regularly, ensuring there is sufficient drainage so the roots are not sitting in waterlogged compost.",
      "Trim chamomile regularly to maintain bushy growth and prevent plants from becoming leggy",
    ],
    harvest: 
      "Pick chamomile flowers as and when you need to. Picking regularly will encourage more flowers to form – if you don't want to use the flowers straight away, you can dry them by laying them out on a baking tray or similar, and keeping them in a warm, dry spot, out of sunlight, for a week or two. Once dried, store them in an air-tight jar in a cool, dark spot such as a cupboard.",
    refer: [
      "https://plants.ces.ncsu.edu/plants/matricaria-chamomilla/",
      "https://tropical.theferns.info/viewtropical.php?id=Matricaria+chamomilla",
      "https://www.softschools.com/facts/plants/chamomile_facts/607/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-chamomile/",
      "https://www.gardeningknowhow.com/edible/herbs/chamomile/growing-chamomile.htm",
      "https://plantura.garden/uk/herbs/chamomile/types-of-chamomile",
    ],
  },
  'aloe vera': {
    imgbg: require("../../assets/images/Cosmetics/Aloe_vera(2).jpg"),
    weight: "8.8 ounces",
    length: "60 to 100 cm",
    width: "8 cm",
    climateZone:
      "arid climates",
    population:
      "140 species of aloe vera ",
    habit: 
      "Aloe species are mostly inhabitants of arid climates, and are widely distributed in Africa, India, and other arid areas. The largest number of Aloe species is approximately 140, and most are found in South Africa. However, they could also be grown in subtropical summer rainfall and winter rainfall regions.",
    facts: [
      "- Aloe produces two substances, gel and latex, which are both used medicinally. Aloe gel is the clear, jelly-like substance found in the inner part (inner fillet) of the aloe plant leaf. Aloe latex comes from just under the plant's skin and is yellow in color. Some aloe products are made from the whole crushed leaf, so they contain both gel and latex",
    ],
    seed: [
      "A terracotta pot is ideal for an Aloe vera – it is porous, so allows the soil to dry out between watering. Ensure that it has a drainage hole. Choose a pot that's the same size as the root ball. Use house plant or cactus compost, or ordinary peat-free multi-purpose compost with some horticultural grit or perlite added. You could top the compost with a layer of grit, too – this will keep the base of the plant dry and will prevent it rotting.",
    ],
    grow: 
      "Grow your aloe in a bright spot. Aloes are killed by overwatering, so water sparingly. Water only when the top few centimetres of compost have dried out, allowing any excess to drain away fully, and don't water at all in winter.",
    care: [
      "Aloe vera are succulents, so they store water in their leaves. It is important not to overwater them – water whenever the top few centimetres of compost to dry out between waterings. Make sure you let the water drain away fully – do not let the plant sit in water as this may cause the roots to rot. Aloes need very little water in winter.",
      "Aloes are slow growing so repot when the plant has outgrown its pot, usually every two or three years.",
      "Feed every couple of months from April to September with a weak plant food. Wipe the leaves occasionally, to prevent dust building up",
    ],
    harvest: 
      "Harvesting aloe leaves extends past the acquisition stage and into the preparation stage. Just getting a healthy leaf will get you nowhere if you don’t know how to prepare it properly. Aloe leaves contain a yellowish sap, called aloin, which can be very bitter and cause stomach upset in some individuals. After you harvest an aloe vera plant, hold the cut end down so the aloin can run out. This will keep the gel from tasting so bitter. Wash the leaf then lay it flat on the table and cut off the serrated edges. Start on one side and filet off the skin, much like you take the skin off a fish. Continue removing the skin on all sides, including the yellowish layer, until a clear to white, translucent flesh is exposed. This is the good stuff and is ready to use after a quick rinse.",
    refer: [
      "https://en.wikipedia.org/wiki/Aloe_vera",
      "https://www.joyusgarden.com/aloe-vera-an-easy-care-succulent/",
      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6163315/",
      "https://www.gulleygreenhouse.com/10-amazing-aloe-facts/",
      "https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-aloe-vera/",
      "https://www.gardeningknowhow.com/houseplants/aloe-vera/harvest-aloe-vera-leaves.htm",
    ],
  },
}