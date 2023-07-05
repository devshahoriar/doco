const InnerPageBlockLeft = ({ title, desc }) => {
  return(<div className="text-secondary flex flex-col bg-white justify-center items-center py-3">
  <h1 className="text-center mb-1">{title}</h1>
  <span className="bg-secondary h-[1px] w-[80%] bg-opacity-50" />
  <h1 className="text-center mt-1">{desc}</h1>
</div>);
};

export default InnerPageBlockLeft;