import axios from "axios";
import renderVideos from "./renderListElements"
import { Video } from "./model";

const form = document.querySelector(".js-form") as HTMLFormElement;
const searchInput = document.querySelector(".js-input") as HTMLInputElement;
const resultList = document.querySelector(".js-result") as HTMLUListElement;

// GET videos on search
const queryResult = async (query: String) => {
  let fetchURL = "http://localhost:3000/videos/";
  fetchURL += `?q=${query}`;
  if (query) {
    axios.get(fetchURL).then((res) => {
      const foundVideos: Video[] = res.data;
      renderVideos(foundVideos, resultList);
    });
    resultList.classList.add("has-results");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  queryResult(searchInput.value);
});
