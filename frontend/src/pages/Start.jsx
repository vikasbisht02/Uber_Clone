import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('https://s3.envato.com/files/451578047/N6CPrkfrRjPWLXBVfVYbmsaDQzMxL8cEoLwbODfd.jpg')] h-screen w-full  pt-8 flex justify-between flex-col">
        <img
          className="w-14 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7 ">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
