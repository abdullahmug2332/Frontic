import React from "react";

export default function Blogs() {
  return (
    <>
      <h1 className="blogposts">Blog Posts</h1>

      <div className="blogscontainer">
        <div className="blog1">
          <img className="blog1img" src="blog1.webp" width={337} alt="" />
          <i className='fas fa-pen' ></i>
          <p className="blogpara">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex corrupti
            aspernatur eligendi molestias excepturi ipsa possimus amet quam, rem
            similique.
            <p className="readmore">Read More</p>
          </p>
        </div>
        <div className="blog2">
          <img className="blog2img" src="blog2.webp" width={337} alt="" />

          <p className="blogpara">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit maxime
            provident facilis dolore enim accusamus doloremque esse eaque
            laudantium
            <p className="readmore">Read More</p>
          </p>
        </div>
        <div className="blog3">
          <img className="blog3img" src="blog3.jpeg" width={337} height={239} alt="" />
          <p className="blogpara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus enim veniam velit corporis nemo repellendus blanditiis
            libero molestiae quae magni?
            <p className="readmore">Read More</p>
          </p>
        </div>
      </div>
    </>
  );
}
