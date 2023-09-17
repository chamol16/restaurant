const Title = (props) => {
  return (
    <div className="p-6 self-start">
      <h1 className="text-2xl font-bold uppercase text-white">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
