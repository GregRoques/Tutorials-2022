// Markov Chain New Text Generator
// generates new text based on provided text string

const text = `
About five months ago, in the middle of a deadly and ferocious blizzard, Alexander and Andrea Campagna answered a knock on the door of their home near Buffalo. Outside were 10 South Korean travelers whose van had become stuck in the snow on their street. The Campagnas welcomed the stranded travelers in, and, in doing so, provided a much-shared story of compassion and good will during a vicious storm just before Christmas.

On Thursday, the Campagnas were in Seoul, the South Korean capital, touring some of the city’s most historic sights, marveling at the painted wood beams buttressing the curved roofs at Gyeongbokgung, a sprawling palace built in the late 14th century. Under a hazy sun, they strolled through Gwanghwamun Square, a plaza that serves as the beating heart of the city’s civic life, where they learned about Korean heroes who walked on this land centuries ago.

They were about a week into a 10-day all-expenses paid tour of the city as guests of the Korea Tourism Organization, to reward their generosity and promote tourism to Korea as well.

“It’s kind of a storybook situation that you could not have scripted,” Mr. Campagna, 40, said, in an interview at a cafe on the Gyeongbokgung grounds.

The government sought to highlight a wide range of Korean industry and culture, and to showcase the country’s natural beauty, said Kim Jang-Sil, the president of the tourism organization. Most of all, he said, he hoped to show the Campagnas the “warmhearted kindness” of the South Korean people.

The Campagnas had been welcomed as heroes. They sat for interviews with local media and filmed a promotional tourism video. They were feted by the Korean government, hosted at the Four Seasons, welcomed at Michelin-recommended restaurants and whisked away on private tours of the city’s attractions. There was a mountain hike, a visit to Buddhist temple, a trek to the Demilitarized Zone that splices the peninsula in two and of course, many delicious meals, including a Korean barbecue feast.

And they’d been reunited with six of the South Korean tourists they’d spontaneously invited into their home that snowy holiday weekend months ago. This time they met at a sun-filled restaurant in a traditional Korean house overlooking Changdeokgung Palace, another grand Joseon dynasty royal home.

Tears were shed as they encountered each other again. Guests and hosts alike, channeled through an interpreter, spoke of the gratitude they felt. They called each other lifelong friends and repeatedly emphasized that it felt like destiny to have met.

Editors’ Picks

What Rainn Wilson Learned Searching for Joy Around the World

Cool Tribal Tattoo. Is It From the ’90s?

Will ‘Superfood Powders’ Actually Make You Healthier?
Continue reading the main story
The rescued travelers recalled their relief upon seeing a rice cooker at the Campagnas’ home. “When I opened the refrigerator, it felt like it was made for us,” said Park Gun-Young, who stayed at the Campagna residence with his wife and daughter.

Mrs. Campagna, 43, said that despite having no blood ties to the country, Korea has been a part of the couple’s origin story from the beginning. On their first date seven years ago, they ate bibimbap and stir-fried pork at a local Korean restaurant in Buffalo.

In the months since that holiday weekend, the couple said they received an immense outpouring of gratitude from well-wishers near and far. There was even a year of free fried chicken from a Korean barbecue franchise. Mrs. Campagna said that the response, which she called “profoundly moving,” showed that the world was “hungry for a heartwarming story” in a news cycle that is typically anything but.

Over a four-course meal, including soy-braised beef stew, lotus wraps with spicy soybean paste and chocolate éclairs filled with yuzu cream, the reunited group reminisced about the winter weekend that had brought them together.

The Campagnas, beaming, presented their former houseguests with gifts of Christmas ornaments emblazoned with an image of their house blanketed in snow. Mrs. Campagna had designed the ornaments especially for the occasion.

“We bonded so much with them,” Mrs. Campagna said. “It was like reuniting with family.”
On the tour, the Campagnas, who had never visited Korea before, said they had been fully immersed in Korean culture. They’d learned about the concept of jeong, a feeling of compassion and warmth that grows in a close relationship, something they said they felt with their guests.

They also heard about inyeon, or fate. The holiday weekend had turned them into believers. One of the mysteries of the story has been how the stranded Korean travelers ended up at the door of the one house in the area that was likely to be stocked with Korean condiments like gochujang, or spicy red chili paste, and chamgileum, or sesame oil, and enough produce and proteins to cook Korean food for everyone.

“How did they end up on our street in Buffalo? In a home where we happened to love cooking Korean cuisine and have those spices?” Mrs. Campagna asked. “How did that all happen?”

Then she answered her own questions: “Fate,” she said.
`

const mChain = createMarkovChain(text)
const keys = Object.keys(mChain)

const firstWord = keys[getRandom(keys)];

const sentenceArr = [firstWord]
console.log(sentenceArr)
const newSentenceLength = 100;

while(sentenceArr.length < newSentenceLength){
	var nextWord = mChain[sentenceArr[sentenceArr.length-1]]

	if(nextWord.length > 0){
		newWord = nextWord[getRandom(nextWord)]
	} else{
		newWord = keys[(getRandom(keys))]
	}
	sentenceArr.push(newWord)
}
var finalSentence = sentenceArr.join(" ")
console.log(finalSentence)

// mChain function
function createMarkovChain(text){
	const words = text.replaceAll("[^A-Za-z]", "").split(/\s+/);
	const markovChain = {};

	for(let i = 0; i < words.length; i++){
		const currWord = words[i];
		const nextWord = words[i+1];
		
		if(!markovChain[currWord]){
			markovChain[currWord] = []
		}
		markovChain[currWord].push(nextWord);
	}
	return(markovChain)
	
}

// get random number
function getRandom(arr){
	return Math.floor(Math.random() * arr.length);
}