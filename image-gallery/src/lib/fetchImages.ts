import axios from "axios";
import { ImageResults } from "../models/Images";
export default async function fetchImages(url: string) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    });
    return response.data as ImageResults;
  } catch (error) {
    console.error("Error fetching images:", error);
    return null;
  }
}
