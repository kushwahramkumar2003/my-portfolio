const project = require("../models/project");

const dotenv = require("dotenv").config();
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.addProject = async (req, res) => {
  console.log(req.body);
  const { title, link, description } = req.body;
  // console.log(req.files);
  const { image } = req.files;

  try {
    if (!title || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(typeof image);
    const imgUrl = await uploadImageToCloudinary(
      image,
      process.env.FOLDER_NAME
    );
    console.log(imgUrl.url);
    if (!imgUrl) {
      return res.status(400).json({ message: "Image upload failed" });
    }
    const projectImageUrl = imgUrl.url;
    // use a different name for the instance of the model
    const newProject = new project({
      title,
      link,
      description,
      projectImageUrl,
    });
    console.log(newProject);
    const savedProject = await newProject.save();
    res.status(201).json({
      success: true,
      message: "Project added successfully",
      project: savedProject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, link, description } = req.body;
  // get the image from req.files
  const { image } = req.files;

  try {
    // use a different name for the instance of the model
    const projectDoc = await project.findById(id);
    if (projectDoc) {
      projectDoc.title = title || projectDoc.title;
      projectDoc.link = link || projectDoc.link;
      projectDoc.description = description || projectDoc.description;
      // check if there is a new image
      if (image) {
        // upload it to Cloudinary and update the projectImageUrl field
        const imgUrl = await uploadImageToCloudinary(
          image,
          process.env.FOLDER_NAME
        );
        console.log(imgUrl.url);
        if (!imgUrl) {
          return res.status(400).json({ message: "Image upload failed" });
        }
        projectDoc.projectImageUrl = imgUrl.url;
      }

      const updatedProject = await projectDoc.save();
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    // use a different name for the instance of the model
    const projectDoc = await project.findByIdAndDelete(id);
    if (projectDoc) {
      // send a status code of 204 (No Content)
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
};
