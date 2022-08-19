import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/artists/:searchTerm?", async (req: Request, res: Response) => {
  const searchTerm: string = req.params.searchTerm;
  if (!searchTerm) {
    return res.status(204).send();
  }
  const URL: string = buildURL("artist", searchTerm);
  const artists: [] = (await axios.get(URL)).data.results;
  if (artists.length) {
    return res.status(200).json({ data: artists });
  } else {
    return res.status(204).json();
  }
});

app.get("/albums/:searchTerm?", async (req: Request, res: Response) => {
  const searchTerm: string = req.params.searchTerm;
  if (!searchTerm) {
    return res.status(204).send();
  }
  const URL: string = buildURL("album", searchTerm);
  const albums: [] = (await axios.get(URL)).data.results;
  if (albums.length) {
    return res.status(200).json({ data: albums });
  } else {
    return res.status(204).json();
  }
});

app.get("/songs/:searchTerm?", async (req: Request, res: Response) => {
  const searchTerm: string = req.params.searchTerm;
  if (!searchTerm) {
    return res.status(204).send();
  }
  const URL: string = buildURL("song", searchTerm);
  const songs: [] = (await axios.get(URL)).data.results;
  if (songs.length) {
    return res.status(200).json({ data: songs });
  } else {
    return res.status(204).json();
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is runnsing at https://localhost:${port}`);
});

const buildURL = (
  searchType: string,
  searchTerm: string,
  limit: number = 200
): string => {
  const BASE_URL = "https://itunes.apple.com/search?";
  switch (searchType) {
    case "artists":
      return `${BASE_URL}term=${encodeURIComponent(
        searchTerm
      )}&media=music&entity=musicArtist&attribute=artistTerm&limit=${limit}`;
    case "album":
      return `${BASE_URL}term=${encodeURIComponent(
        searchTerm
      )}&media=music&entity=album&attribute=albumTerm&limit=${limit}`;
    case "song":
      return `${BASE_URL}term=${encodeURIComponent(
        searchTerm
      )}&media=music&entity=song&attribute=songTerm&limit=${limit}`;
    default:
      return `${BASE_URL}term=${encodeURIComponent(
        searchTerm
      )}&media=all&limit=${limit}`;
  }
};

export default app;
