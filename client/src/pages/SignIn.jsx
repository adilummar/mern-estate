import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      setLoading(false)
      setError(null)
    } catch (error) {
      setError(error)
    }
  };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold my-7">sign in</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="bg-slate-700 p-3 text-white rounded-lg hover:opacity-90"
        >
          {loading ? 'loading...' : 'sign in'}
        </button>
      </form>
      {error && <p>{error.statusText}</p>}
    </div>
  );
}
