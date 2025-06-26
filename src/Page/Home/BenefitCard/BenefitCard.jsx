const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="card w-full max-w-5xl shadow-md border hover:shadow-lg transition-all p-6">
      <div className="card-body flex flex-col sm:flex-row items-start gap-6 text-black">
        <img src={image} alt={title} className="w-42 h-42 object-contain" />
            <div className="hidden lg:block w-px h-38 bg-gray-300"></div>
        <div>

          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default BenefitCard;