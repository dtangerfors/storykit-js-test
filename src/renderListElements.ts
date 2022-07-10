import { listTemplate } from "./template";
import { updateGrade } from "./update";

let throttleTimer: boolean;
 
const throttle = (callback: Function, time: number) => {
  if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
}

const renderVideos = (videos: any, element: HTMLElement) => {
  element.innerHTML = videos
    .map((video: any) => {
      return listTemplate(video)
    })
    .join("");

    element.querySelectorAll('input').forEach(input => {
      input.addEventListener('click', (element) => {
        throttle(() => {
         updateGrade(element)
        }, 1000)
      })
    })
};

export default renderVideos;
