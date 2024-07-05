import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = "AIzaSyAQKmCdW_pdjXE8kplK4v2XZDGqOud1qXE";
const NOFLYZONE_API_KEY = "wck0rE00U7D3gSgiusMhImpgUXlU0-CM7R-s_UWn0";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro",
  generationConfig: { responseMimeType: "application/json" },
  systemInstruction: `User provides you prompt to find some location, you need to understand it and output in the following format:
{
  near: [<here should be the list of Cities, towns, villages or any other landmarks or points if the user ask to find something near it>{name: <place name>, type: <place type>, coordinates: {latitude: <latitude>, longitude: <longitude>}}],
  in: [<here should be the list of Countries, continents, Cities, towns, villages or any other landmarks or points if the user ask to find something in it or if you know where this place could be>{name: <place name>, type: <place type>, description: <place description>, coordinates: {latitude: <latitude>, longitude: <longitude>}, boundingBox: {north: <north latitude>, south: <south latitude>, east: <east longitude>, west: <west longitude>}}],
  location: [<provide here the list of coordinates for places you found. Provide as many as it is possible>{coordinates: {latitude: <latitude>, longitude: <longitude>}, name: <place name>, type: <place type>}],
  distance: <if in the prompt user provided a range from any location, it should be here. It should be converted to kilometres always. This field value should be integer or float or null>,
  description: <places you found summary description>,
  prompt: <prompt as is>
}`});

@Injectable()
export class AppService {
  async getData(): Promise<string> {
    const prompt = "Hot springs in a 220 km from Grindavik";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  }
}
