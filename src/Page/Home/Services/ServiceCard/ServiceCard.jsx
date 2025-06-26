const ServiceCard = ({ service }) => {
  if (!service) return null;

  const { icon: Icon, title, description } = service;

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md   hover:bg-lime-100 cursor-pointer animate-all duration-300 text-center">
      <div className="text-primary text-4xl  flex justify-center mb-4">
        <Icon />
      </div>
      <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
 export default ServiceCard