import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteUserFailiur,
  deleteUserStart,
  deleteUserSuccess,
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
  signOutFailure,
  signOutSuccess,
  signOutStart,
} from "../redux/user/UserSlice";

export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  // console.log(formData);
  // console.log(file);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success == false) {
        return dispatch(updateUserFailed(data.message));
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailed(error.message));
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });

      const data = await res.json;

      if (data.success == false) {
        return dispatch(deleteUserFailiur(data.message));
      }

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailiur(error.message));
    }
  };

  const handleSignOut = async () => {
    dispatch(signOutStart());
    try {
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success == false) {
        return dispatch(signOutFailure(data.message));
      }

      dispatch(signOutSuccess(data));
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };

  return (
    <div className="mx-auto max-w-lg mt-10">
      <h1 className="text-3xl font-bold text-center mt-3">Profile</h1>
      <form onSubmit={onSubmitHandler} className="flex flex-col  gap-4">
        <input
          type="file"
          ref={fileRef}
          accept="image/*"
          hidden
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <img
          onClick={() => fileRef.current.click()}
          src={currentUser.avathar}
          alt="profile"
          className="rounded-full h-24 w-24 self-center mt-4"
        />
        <input
          type="text"
          name="username"
          defaultValue={currentUser.username}
          id="username"
          placeholder="username"
          className="p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          defaultValue={currentUser.email}
          id="email"
          placeholder="email"
          className="p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          defaultValue={currentUser.password}
          id="password"
          placeholder="password"
          className="p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-800 text-white rounded-lg p-3 hover:opacity-90"
        >
          {loading ? "loading..." : "UPDATE"}
        </button>
        <Link
          className="bg-green-800 text-white p-3 rounded-lg text-center hover:opacity-90"
          to={"/create-listing"}
        >
          CREATE LISTING
        </Link>
      </form>
      <div className="flex justify-between mt-3">
        <span onClick={handleDelete} className="text-red-700">
          Delete account
        </span>
        <span onClick={handleSignOut} className="text-red-700">
          Sign out
        </span>
      </div>
      {error && <p className="text-red-700 text-center">{error}</p>}
      {updateSuccess && (
        <p className="text-green-700 text-center mt-5">
          updated data successfully{" "}
        </p>
      )}
    </div>
  );
}
