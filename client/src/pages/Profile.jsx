import { useSelector } from "react-redux";
import { useRef, useState } from "react";

export default function Profile() {
  const {currentUser} = useSelector(state => state.user)
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  console.log(file);



  return (
    <div className="mx-auto max-w-lg mt-10">
      <h1 className="text-3xl font-bold text-center mt-3">Profile</h1>
      <form className="flex flex-col  gap-4">
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
          id="username"
          placeholder="username"
          className="p-3 rounded-lg"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="p-3 rounded-lg"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="p-3 rounded-lg"
        />
        <button className="bg-slate-800 text-white rounded-lg p-3">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-700">Delete account</span>
        <span className="text-red-700">Sign out</span>
      </div>
    </div>
  );
}
