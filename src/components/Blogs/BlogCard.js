// Import React and CSS
import React from "react";
import "./blogCard.css";

// Define the BlogCard component
const BlogCard = ({ blog }) => {
  // Destructure blog data
  const {
    title,
    caption,
    // body,
    user,
    // tags,
    // categories,
    createdAt,
    // updatedAt,
    photo,
  } = blog;

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust the format as needed
  };

  return (
    <div className="blog-card">
      {/* Display blog title */}
      <h2>{title}</h2>

      {/* Display blog photo if available */}
      {photo && <img src={photo} alt="Blog" className="blog-photo" />}

      {/* Display blog caption */}
      <div className="blog-content">
        <p>{caption}</p>

        {/* Display blog body */}
        {/* You might want to use a rich text renderer for the body content */}
        {/* For simplicity, we're just displaying the raw body content as text */}
        {/* <div className="blog-body">
          {body && body.content && body.content.join(" ")}
        </div> */}

        {/* Display user information */}
        <div className="user-info">
          <img src={user.avatar} alt="User Avatar" className="user-avatar" />
          <p>{user.name}</p>
        </div>

        {/* Display tags */}
        {/* <div className="tags">
          {tags && tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div> */}

        {/* Display categories */}
        {/* <div className="categories">
          {categories &&
            categories.map((category) => (
              <span key={category._id}>{category.title}</span>
            ))}
        </div> */}

        {/* Display created and updated dates */}
        <p>Posted at: {formatDate(createdAt)}</p>
        {/* <p>Updated at: {formatDate(updatedAt)}</p> */}
      </div>
    </div>
  );
};

// Export the BlogCard component
export default BlogCard;
