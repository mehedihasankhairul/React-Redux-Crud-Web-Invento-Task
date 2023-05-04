import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextFiled from "../../components/TextFiled";
import { useEditPostMutation } from "../../services/postData";

const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextFiled
        label="Name"
        inputProps={{ type: "text", placeholder: "Mehedi Hasan Khairul" }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextFiled
        label="Email"
        inputProps={{ type: "email", placeholder: "mhkhairul78@gmail.com" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
