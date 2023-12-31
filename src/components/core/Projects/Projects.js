import React, { useState } from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import loder from "../../../assets/Bar Loader.gif";

const Projects = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [btnTitle, setBtnTitle] = useState("Add Project");

  // create a submit handler function
  const handleSubmit = async (e) => {
    // prevent the default behavior of the form
    e.preventDefault();
    // call the fetch API with the post method and the input values as the body
    try {
      // create a FormData object and append the image file and other form values to it
      const data = new FormData();
      data.append("title", title);
      data.append("link", link);
      data.append("description", description);
      data.append("image", e.target.myimage.files[0]); // use the files property of the input element to access the file object

      setBtnTitle(
        <img
          src={loder}
          alt="loader"
          style={{
            objectFit: "cover",
            maxHeight: "3rem",
            maxWidth: "3rem",
            margin: "0",
            padding: "0",
          }}
        />
      );

      const response = await axios.post(
        "http://localhost:5000/api/v1/admin/addProject",
        data // do not use form here
        // remove the headers option
      );

      console.log(response.data);
      console.log(response.status);

      // check if the response is ok
      if (!response.status == 201) {
        throw new Error("Something went wrong");
      }
      // get the response body
      const { message } = response.data;
      // display a success message
      alert(message);
      // reset the form
      setTitle("");
      setLink("");
      setDescription("");
      setImage(null);
      setBtnTitle("Add Project");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile ">
      {/* add new project  */}
      <div className="addNewProj">
        {/* pass the handleSubmit function as an onSubmit prop to the form element */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Link"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <input
            type="file"
            name="myimage" // add a name attribute to the input element
            onChange={(e) => {
              // use the FileReader API to read the file as a data URL and set it as the src of the image element
              const reader = new FileReader();
              reader.onload = (e) => {
                setImage(e.target.result); // this will be a data URL
              };
              reader.readAsDataURL(e.target.myimage.files[0]);
            }}
          />
          {/* add an image element to show the preview of the file */}
          {/* {image && <img src={image} alt="Project image" />} */}
          {/* remove the onClick handler from the button element */}
          <button className="addProjBtn" type="submit">
            {btnTitle}
          </button>
        </form>
      </div>
      {/* projects  */}
      <div className="projectSection ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
