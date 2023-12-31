const fetchData = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/data/allProjects"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error : ", error);
  }
};

export default fetchData;
