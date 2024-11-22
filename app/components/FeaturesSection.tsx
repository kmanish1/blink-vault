import { DollarSign, Lock, Share2 } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <DollarSign />,
      title: "Set Custom Prices",
      description:
        "Control the value of your content with flexible pricing options.",
    },
    {
      icon: <Lock />,
      title: "Secure Payments",
      description: "Accept payments via crypto or traditional fiat methods.",
    },
    {
      icon: <Share2 />,
      title: "Easy Sharing",
      description: "Generate unique Blinks to share your monetized content.",
    },
  ];

  return (
    <section className="pb-10 dark:bg-[#2D3748]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Features That Empower Creators
        </h2>
        <div className="flex justify-center space-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="max-w-xs p-6 rounded-lg shadow-lg dark:bg-[#1A202C]"
            >
              <div className=" mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-navy-600 dark:text-gray-100">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
