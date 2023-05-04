import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const UserList = () => {
  const [post, setPost] = useState([]);
  console.log(post);

  useEffect(() => {
    const Hasannujaman = JSON.parse(localStorage.getItem("posts"));
    setPost(Hasannujaman);
  }, []);

  // if (isFetching) {
  //   return <p className="text-center col-span-2 text-gray-700 font-semibold">Loading...</p>;
  // }
  // // return <p className="text-center col-span-2 text-gray-700 font-semibold">Something went wrong</p>;
  // else if (isLoading) {
  //   return <p className="text-center col-span-2 text-gray-700 font-semibold">Loading...</p>;
  // }

  const userCard = () =>
    post?.map((user) => (
      <div className="bg-blue-100 p-5 flex flex-col items-center justify-between" key={user.id}>
        <div>
          <p className="text-gray-700 font-semibold">{user.id}</p>
          <h3 className="text-lg font-bold text-gray-700">{user.title}</h3>
          <span className="font-normal text-gray-500">{user.body}</span>
        </div>

        <div className="flex gap-4">
          <Link to={`/edit-user/${user.id}`}>
            <button>
              <FaEdit />
            </button>
          </Link>

          <Link>
            <button>
              <AiOutlineDelete />
            </button>
          </Link>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/add-user">
        <Button>Add Posts</Button>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {/* {"" ? userCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No user found</p>} */}
        {userCard()}
      </div>
    </div>
  );
};

export default UserList;
