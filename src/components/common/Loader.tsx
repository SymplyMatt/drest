import loaderImage from "../../assets/images/logo.svg";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src={loaderImage}
        alt="Loading..."
        className="animate-zoom"
      />
    </div>
  );
};

export default Loader;
