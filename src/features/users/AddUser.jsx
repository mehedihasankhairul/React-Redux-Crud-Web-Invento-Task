import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextFiled from "../../components/TextFiled";
import { useAddPostMutation, useGetPostByIdQuery } from "../../services/postData";

const AddUser = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id: "",
    title: "",
    body: "",
  });

  const handleAddUser = () => {
    localStorage.setItem("posts", JSON.stringify(...values, values));
    navigate("/");
    setValues({ id: "", title: "", body: "" });
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextFiled
        label="id"
        inputProps={{ type: "text", placeholder: "1" }}
        value={values.id}
        onChange={(e) => setValues({ ...values, id: e.target.value })}
      />
      <br />
      <TextFiled
        label="Title"
        inputProps={{ type: "text", placeholder: "Bangladesh is a Small country" }}
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
      />
      <TextFiled
        label="Body"
        inputProps={{ type: "text", placeholder: "hsfjsfjsfasf asmpfjasofsaf'safpasfhsa " }}
        value={values.body}
        onChange={(e) => setValues({ ...values, body: e.target.value })}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
