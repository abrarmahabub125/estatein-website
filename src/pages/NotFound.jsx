import Img from "../assets/images/404-image.svg";
const NotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <img className="w-1/2 object-cover" src={Img} alt="404" />
    </div>
  );
};

export default NotFound;
