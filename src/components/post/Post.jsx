import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
      className="postImg" 
      src="https://mcdn.wallpapersafari.com/medium/27/63/tsi87S.jpg" 
      alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle"> Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem 
        sed pariatur error? Hic Lorem ipsum dolor sit amet, consectetur adipisicing
         elit. Autem molestias eos repellendus? Doloribus iure vitae aut id placeat 
         nostrum esse. 
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem 
        sed pariatur error? Hic Lorem ipsum dolor sit amet, consectetur adipisicing
         elit. Autem molestias eos repellendus? Doloribus iure vitae aut id placeat 
         nostrum esse. 
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem 
        sed pariatur error? Hic Lorem ipsum dolor sit amet, consectetur adipisicing
         elit. Autem molestias eos repellendus? Doloribus iure vitae aut id placeat 
         nostrum esse. 
         </p>
    </div>
  )
}
