import axios from "axios";
import React from "react";
import { PrimaryButton } from "../utils";

const constructURL = (query) =>
  `https://g.tenor.com/v1/search?q=${query}&key=${process.REACT_APP_API_KEY}&limit=1`;

function MemeContent({ editor }) {
  const fetchMemeFromApi = async (query) => {
    if (query) {
      const { status, data } = await axios.get(constructURL(query));
      if (status === 200) {
        return { memeURL: data.results[0].media[0]?.gif.preview };
      }
    }
    return { memeURL: null };
  };

  const insertMeme = async () => {
    try {
      let editorContent = editor.getHTML();
      const results = editorContent.match(/\{\{(.+?)_meme\}\}/);
      if (!results) return;
      const [text, query] = results;
      const { memeURL } = await fetchMemeFromApi(query);
      if (memeURL && query) {
        editorContent = editorContent.replace(text, "");
        editor.commands.setContent(editorContent);
        editor.chain().focus().setImage({ src: memeURL }).run();
      }
    } catch (error) {
      alert("Couldn't fetch Meme!");
    }
  };

  return (
    <>
      <PrimaryButton onClick={insertMeme}>Insert Meme</PrimaryButton>
    </>
  );
}

export default MemeContent;
