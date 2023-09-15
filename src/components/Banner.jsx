const Banner = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="w-full h-full absolute min-h-screen bg-cover bg-center box-border block bg-black bg-opacity-30"
    />
  );
};

export default Banner;
