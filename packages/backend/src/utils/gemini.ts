import { GoogleGenerativeAI } from "@google/generative-ai";
import { TGeminiResponseDescribeImage, TLocationSearchDescription, TTranslation } from "@types";

const GEMINI_API_KEY = "AIzaSyAQKmCdW_pdjXE8kplK4v2XZDGqOud1qXE";

export const geminiDescribeImage = async (image: File, details: string = ""): Promise<TGeminiResponseDescribeImage> => {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro",
        generationConfig: { responseMimeType: "application/json" },
        systemInstruction: `User will provide you an image, you need to describe it and detect as much objects as it is possible. If you see any buildings try to describe the style and epoch. Output in the valid json format with following fields:
        {
            keywords: [<here should be the list of objects you found on the image, including natural objects such as mountains, lakes, rivers, hills etc>],
            description: <description of the image>,
            location: <try to recognize where this shot has been made any landmarks or famous place on the photo. Return please following fields: {name: <place name>, type: <place type>, description: <place description>, coordinates: {latitude: <latitude>, longitude: <longitude>}}>
        }`});

    const imageBuffer = await image.arrayBuffer();
    const mimeType = image.type;

    const imageData = {
        inlineData: {
          data: Buffer.from(imageBuffer).toString("base64"),
          mimeType,
        },
      };

    const result = await model.generateContent([details, imageData]);
    
    console.log("gemini", result.response.text());

    return JSON.parse(result.response.text());
}

export const geminiDescribeSearchQuery = async (prompt: string): Promise<TLocationSearchDescription> => {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro",
    generationConfig: { responseMimeType: "application/json" },
    systemInstruction: `User provides you prompt to find some location, you need to understand it and output in the valid json format with following fields:
    {
        near: [<here should be the list of Cities, towns, villages or any other landmarks or points if the user ask to find something near it>{name: <place name>, type: <place type>, coordinates: {latitude: <latitude>, longitude: <longitude>}}],
        in: [<here should be the list of Countries, continents, Cities, towns, villages or any other landmarks or points if the user ask to find something in it or if you know where this place could be>{name: <place name>, type: <place type>, description: <place description>, coordinates: {latitude: <latitude>, longitude: <longitude>}, boundingBox: {north: <north latitude>, south: <south latitude>, east: <east longitude>, west: <west longitude>}}],
        location: [<provide here the list of coordinates for places you found. Provide as many as it is possible>{coordinates: {latitude: <latitude>, longitude: <longitude>}, name: <place name>, type: <place type>}],
        distance: <if in the prompt user provided a range from any location, it should be here. It should be converted to kilometres always. This field value should be integer or float or null>,
        description: <places you found summary description>,
        prompt: <prompt as is>
    }`});

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return JSON.parse(text);
}

export const geminiTranslateText = async (from: string, to: string, prompt: string): Promise<TTranslation> => {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" },
    systemInstruction: `User provides you string to translate, you need to tanslate it form ${from} to ${to} language and output in the valid json format with following fields:
    {
        from: <from language>,
        to: <to language>,
        original: <original string>,
        translated: <translated string>
    }`});

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return JSON.parse(text);
}
