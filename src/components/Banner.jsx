const Banner = (props) => {
  return (
    <div className="w-full h-full absolute top-0">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-full max-h-screen bg-cover bg-center box-border bg-black bg-opacity-30"
      />
    </div>
  );
};

export default Banner;
