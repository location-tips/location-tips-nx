import { GoogleGenerativeAI, Part } from '@google/generative-ai';
import type {
  TGeminiResponseDescribeImage,
  TLocationSearchDescription,
  TTranslation,
} from '@types';
import { CATEGORIES } from '@const';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const geminiDescribeImage = async (
  image: File,
  details: string = ''
): Promise<TGeminiResponseDescribeImage> => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
    generationConfig: { responseMimeType: 'application/json' },
    systemInstruction: `User will provide you an image, you need to describe it and detect as much objects as it is possible. If you see any buildings try to describe the style and epoch. Output in the valid json format with following fields:
        {
            title: <location name or guess the title by image>
            keywords: [<here should be the list of objects you found on the image, including natural objects such as mountains, lakes, rivers, hills etc, landmark, location name, country, state, region, city, town, village name, architecture style>],
            description: <Provide detailed and practical description, including objects you see, lanscape and the category of the environment.>,
            location: <try to recognize where this shot has been made any landmarks or famous place on the photo. Return please following fields: {name: <place name>, type: <place type>, description: <place description>, coordinates: {latitude: <latitude>, longitude: <longitude>}}>
        }
        Important! <place type> should be one of the following categories: ${CATEGORIES.join(
          ','
        )} 
        `,
  });

  const imageBuffer = await image.arrayBuffer();
  const mimeType = image.type;

  const imageData = {
    inlineData: {
      data: Buffer.from(imageBuffer).toString('base64'),
      mimeType,
    },
  };

  const result = await model.generateContent([details, imageData]);

  return JSON.parse(result.response.text());
};

export const geminiDescribeSearchQuery = async (
  prompt: string,
  image?: File,
  voice?: File
): Promise<TLocationSearchDescription> => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
    generationConfig: { responseMimeType: 'application/json' },
    systemInstruction: `Translate prompt to english and follow the instructions. Very important: Answer should be a VALID JSON. User provides you prompt to find some location, also it could provide and image or audio you need to understand it and output in the valid json format with following fields:
    {
        near: [<here should be the list of Cities, towns, villages or any other landmarks or points if the user ask to find something near it>{name: <place name>, type: <place type>, coordinates: {latitude: <latitude>, longitude: <longitude>}}],
        in: [<here should be the list of Countries, continents, Cities, towns, villages or any other landmarks or points if the user ask to find something in it or if you know where this place could be>{name: <place name>, type: <place type>, description: <place description>, coordinates: {latitude: <latitude>, longitude: <longitude>}, boundingBox: {north: <north latitude>, south: <south latitude>, east: <east longitude>, west: <west longitude>}}],
        location: [<provide here the list of coordinates for places you found. Provide as many as it is possible>{coordinates: {latitude: <latitude>, longitude: <longitude>}, name: <place name>, type: <place type>}],
        distance: <if in the prompt user provided a range from any location, it should be here. It should be converted to kilometres always. This field value should be integer or float or null, if user is not provide defined number but asked something like near, not far from, in front of etc, try to estimate radius for example: "near" - 10km, "not far from" - 20km>,
        description: <places you found summary description>,
        originalPrompt: <original prompt user provided>,
        prompt: <prompt essencial for vector search, just keywords excluding places that already has been added in to the "near" or "in" fields>,
        voice: <if user provided audio file, you should provide here its transcription>,
        voiceKeywords: <if user provided audio file, transcription essencial for vector search, just keywords excluding places that already has been added in to the "near" or "in" fields >,
        image: <if user provided image file, provide keywords of main objects you found on a picture including the place where this shot was made>
    }`,
  });
  // ask gemini to prepare propmt for vector search, just essetial information excluding any place names that already in "near" or "in" fields
  const requestData: Array<string | Part> = [prompt];

  if (image?.size) {
    const imageBuffer = await image.arrayBuffer();
    const imageMimeType = image.type;

    const imageData = {
      inlineData: {
        data: Buffer.from(imageBuffer).toString('base64'),
        mimeType: imageMimeType,
      },
    };

    requestData.push(imageData);
  }

  if (voice?.size) {
    const voiceBuffer = await voice.arrayBuffer();
    const voiceMimeType = voice.type;

    const voiceData = {
      inlineData: {
        data: Buffer.from(voiceBuffer).toString('base64'),
        mimeType: voiceMimeType,
      },
    };

    requestData.push(voiceData);
  }

  const result = await model.generateContent(requestData);
  const response = await result.response;
  const text = response.text();

  console.log('response', text);

  try {
    return JSON.parse(text);
  } catch (error) {
    throw Error(`Error parsing JSON: ${error}\n ${text}`);
  }
};

export const geminiTranslateToEnglish = async (
  prompt: string
): Promise<TTranslation> => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: { responseMimeType: 'application/json' },
    systemInstruction: `User provides you string to translate, you need to detect language the texts is written on and tanslate it to English. Then output in the valid json format with following fields:
    {
        from: <iso code of language this prompt is written on>,
        to: <iso code of english>,
        original: <original string>,
        translated: <translated string>
    }`,
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  try {
    return JSON.parse(text);
  } catch (error) {
    throw Error(`Error parsing JSON: ${error}\n ${text}`);
  }
};

export const geminiTranslateText = async (
  from: string,
  to: string,
  prompt: string
): Promise<TTranslation> => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: { responseMimeType: 'application/json' },
    systemInstruction: `User provides you string to translate, you need to tanslate it form ${from} to ${to} language and output in the valid json format with following fields:
    {
        from: <iso code of language this prompt is written on>,
        to: <iso code of language this prompt is translated to>,
        original: <original string>,
        translated: <translated string>
    }`,
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  try {
    return JSON.parse(text);
  } catch (error) {
    throw Error(`Error parsing JSON: ${error}\n ${text}`);
  }
};
