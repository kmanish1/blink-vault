import { Vault, Share, DollarSign } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Vault size={48} />,
      title: "Vault Your Post",
      description:
        "Create a secure vault for your premium content on BlinkVault.",
    },
    {
      icon: <Share size={48} />,
      title: "Share the Blink",
      description:
        "Generate a unique monetization link to distribute your content.",
    },
    {
      icon: <DollarSign size={48} />,
      title: "Earn Money",
      description:
        "Receive payments directly when users access your vaulted content.",
    },
  ];

  return (
    <section className="py-16 bg-gold-50 dark:bg-[#2D3748]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          How BlinkVault Works
        </h2>
        <div className="flex justify-center space-x-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="max-w-xs p-6 rounded-lg shadow-lg"
            >
              <div className="text-gold-500 dark:text-gold-300 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800 dark:text-gold-100">
                {step.title}
              </h3>
              <p className="text-navy-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
