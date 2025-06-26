import tracking from "../../assets/live-tracking.png";
import call from "../../assets/safe-delivery.png";
import support from "../../assets/safe-delivery.png";
import BenefitCard from "./BenefitCard/BenefitCard";


const benefits = [
  {
    id: 1,
    title: 'Live Parcel Tracking',
    description:
      'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment\'s journey and get instant status updates for complete peace of mind.',
    image: tracking,
  },
  {
    id: 2,
    title: '100% Safe Delivery',
    description:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    image: call,
  },
  {
    id: 3,
    title: '24/7 Call Center Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    image: support,
  },
];


const Benefits = () => {
  return (

    <div className="py-16 bg-white">
       
      <div className="max-w-6xl   mx-auto my-6  p-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Choose Us</h2>
        <div className="flex flex-col gap-6">
           
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;