"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/artists/:searchTerm?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.params.searchTerm;
    if (!searchTerm) {
        return res.status(204).send();
    }
    const URL = buildURL("artist", searchTerm);
    const artists = (yield axios_1.default.get(URL)).data.results;
    if (artists.length) {
        return res.status(200).json({ data: artists });
    }
    else {
        return res.status(204).json();
    }
}));
app.get("/albums/:searchTerm?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.params.searchTerm;
    if (!searchTerm) {
        return res.status(204).send();
    }
    const URL = buildURL("album", searchTerm);
    const albums = (yield axios_1.default.get(URL)).data.results;
    if (albums.length) {
        return res.status(200).json({ data: albums });
    }
    else {
        return res.status(204).json();
    }
}));
app.get("/songs/:searchTerm?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.params.searchTerm;
    if (!searchTerm) {
        return res.status(204).send();
    }
    const URL = buildURL("song", searchTerm);
    const songs = (yield axios_1.default.get(URL)).data.results;
    if (songs.length) {
        return res.status(200).json({ data: songs });
    }
    else {
        return res.status(204).json();
    }
}));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is runnsing at https://localhost:${port}`);
});
const buildURL = (searchType, searchTerm, limit = 200) => {
    const BASE_URL = "https://itunes.apple.com/search?";
    switch (searchType) {
        case "artists":
            return `${BASE_URL}term=${encodeURIComponent(searchTerm)}&media=music&entity=musicArtist&attribute=artistTerm&limit=${limit}`;
        case "album":
            return `${BASE_URL}term=${encodeURIComponent(searchTerm)}&media=music&entity=album&attribute=albumTerm&limit=${limit}`;
        case "song":
            return `${BASE_URL}term=${encodeURIComponent(searchTerm)}&media=music&entity=song&attribute=songTerm&limit=${limit}`;
        default:
            return `${BASE_URL}term=${encodeURIComponent(searchTerm)}&media=all&limit=${limit}`;
    }
};
exports.default = app;
