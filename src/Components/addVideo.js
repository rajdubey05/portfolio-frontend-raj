import "./signup.css";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
// import app_config from "../config";
import Swal from "sweetalert2";
import { useState } from "react";

const Addvideo = () => {
  const videoform = {
    title: "",
    description: "",
    thumbnail: "",
    file: "",
  };

  const url = "http://localhost:5000";

  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");

  const videoSubmit = (values, {setSubmitting, resetForm}) => {
    values.thumbnail = thumbnail;
    values.file = video;
    console.log(values);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/videos/add", reqOpt)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "success",
          text: "video add Successfully",
        });
        resetForm();
        setThumbnail("");
        setVideo("");
      });
  };

  const uploadThumbnail = (e) => {
      let formdata = new FormData();
      let file = e.target.files[0];
      setThumbnail(file.name);
      formdata.append('file', file);
      
      fetch(url + "/util/uploadfile", {method: "POST", body: formdata})
      .then((res) => res.json())
      .then((data) => console.log(data))
  };

  const uploadVideo = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setVideo(file.name);
    formdata.append('file', file);
    
    fetch(url + "/util/uploadfile", {method: "POST", body: formdata})
    .then((res) => res.json())
    .then((data) => console.log(data))
};


  return (
    <div class="container mt-5">
      <div class="card">
        <div class="row">
          <div class="col-md">
            <div class="img-back"></div>
          </div>

          <div class="col-md">
            <div class="card-body my-card-body">
              <p class="h3">Add video</p>
              <p class="text-muted">Add new video</p>

              <hr />

              <Formik initialValues={videoform} onSubmit={videoSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mt-5"
                      variant="filled"
                      id="title"
                      type="text"
                      label="Video Name"
                      onChange={handleChange}
                      value={values.title}
                    />

                    <TextField
                      className="w-100 mt-3"
                      id="description"
                      type="text"
                      label="Description"
                      onChange={handleChange}
                      value={values.description}
                    ></TextField>
                    <label className="mt-3">Upload Thumbnail</label>
                    <input type="file" className="form-control mt-3" onChange={uploadThumbnail}/>

                    <label className="mt-3">Upload Video</label>
                    <input type="file" className="form-control mt-3" onChange={uploadVideo}/>

                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      className="mt-5 w-50"
                    >
                      Add Video
                    </Button>

                    <a
                      href="/"
                      class="text-muted mt-5"
                      style={{ display: "block" }}
                    >
                      Already Have an account?
                    </a>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addvideo;
