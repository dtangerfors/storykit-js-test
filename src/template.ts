const renderVideos = (videos: any, element: HTMLElement) => {
  element.innerHTML = videos
    .map((video: any) => {
      return `
       <li class="video-item" id="${video.id}">
         <h2 class="video-item__title">${video.title}.</h2>
         <div class="grade">
           <div class="grade__item">
             <p class="grade__rating">Rating: ${video.grade} <span class="star star--filled">&#9733;</span></p>
           </div>
           <div class="grade__item">
             <p class="grade__rating">Add rating: </p>
             <span class="star-cb-group">
               <input type="radio" id="rating-5" name="gradeLevel" value="5"><label for="rating-5">5</label>
               <input type="radio" id="rating-4" name="gradeLevel" value="4"><label for="rating-4">4</label>
               <input type="radio" id="rating-3" name="gradeLevel" value="3"><label for="rating-3">3</label>
               <input type="radio" id="rating-2" name="gradeLevel" value="2"><label for="rating-2">2</label>
               <input type="radio" id="rating-1" name="gradeLevel" value="1"><label for="rating-1">1</label>
             </span>
           </div>
         </div>
       </li>
     `;
    })
    .join("");
};

export default renderVideos;
