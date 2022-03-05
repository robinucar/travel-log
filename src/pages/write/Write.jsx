import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg"
      src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=" 
      alt="" 
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput"> 
            <i class="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup"> 
          <textarea placeholder="Tell us about your trip..." type="text" className="writeInput writeText"></textarea>
        </div>
          <button className="writeSubmit"> Publish</button>
      </form>
    </div>
  )
}
