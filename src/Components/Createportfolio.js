import { Formik } from "formik";
import "./createportfolio.css";

const Createportfolio = () => {
  const url = "http://localhost:5000";
  const createportfolioform = {
    title: "",
    heroimage: "",
    links: "",
    backimage: "",
    skills: "",
    description: "",
    upload: "",
  };
  const CreateportfolioSubmit = (values) => {
    console.log(values);
    fetch(url + "/portfolio/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="my-card container-fluid">
      <h3>Tell Us..</h3>
      <p className="text-muted">Tell us for creating your onelink</p>
      <Formik
        initialValues={createportfolioform}
        onSubmit={CreateportfolioSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              className="my-input"
              type="text"
              placeholder="Titile"
              id="title"
              onChange={handleChange}
              values={values.title}
            />
            <input
              className="my-input"
              type="text"
              placeholder="Description"
              id="description"
              onChange={handleChange}
              values={values.description}
            />
            <input
              className="my-input"
              type="text"
              placeholder="Skills"
              id="skills"
              onChange={handleChange}
              values={values.skills}
            />
            <input
              className="my-input"
              type="text"
              placeholder="Links"
              id="links"
              onChange={handleChange}
              values={values.links}
            />
            <input
              className="my-input"
              type="file"
              placeholder="Upload"
              id="upload"
              onChange={handleChange}
              values={values.upload}
            />

            <button type="submit" className="my-btn">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Createportfolio;
