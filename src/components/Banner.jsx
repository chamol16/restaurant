const Banner = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="w-full h-full max-h-screen absolute bg-cover bg-center box-border bg-black bg-opacity-30"
    />
  );
};

export default Banner;
