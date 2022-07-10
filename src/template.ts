const listTemplate = (video: any) => {
  return `
  <li class="video-item" id="${video.id}">
    <h2 class="video-item__title">${video.title}.</h2>
    <div class="grade">
      <div class="grade__item">
        <p class="grade__rating">Rating: ${video.grade} <span class="star star--filled">&#9733;</span></p>
      </div>
      <div class="grade__item">
        <p class="grade__rating">Add rating: </p>
        <form class="js-form-${video.id}">
        <input name="id" type="hidden" value="${video.id}">
        <span class="star-cb-group">
          <input type="radio" id="${video.id}-rating-5" name="grade" value="5"><label for="${video.id}-rating-5">5</label>
          <input type="radio" id="${video.id}-rating-4" name="grade" value="4"><label for="${video.id}-rating-4">4</label>
          <input type="radio" id="${video.id}-rating-3" name="grade" value="3"><label for="${video.id}-rating-3">3</label>
          <input type="radio" id="${video.id}-rating-2" name="grade" value="2"><label for="${video.id}-rating-2">2</label>
          <input type="radio" id="${video.id}-rating-1" name="grade" value="1"><label for="${video.id}-rating-1">1</label>
        </span>
        </form>
      </div>
    </div>
  </li>
`
}

export {listTemplate}