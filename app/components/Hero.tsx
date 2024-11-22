export const Hero: React.FC = () => {
  return (
    <div className="dark:bg-[#2D3748] min-h-[600px] flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-navy-800 dark:text-gray-100 mb-4">
          Monetize Your X Posts with BlinkVault!
        </h1>
        <p className="text-xl text-navy-600 dark:dark:text-gray-100 mb-8">
          Securely vault your posts and share them with a price tag.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 rounded-lg transition">
            Create Your Vault
          </button>
          <button className="border-2 border-navy-500 text-navy-500 px-6 py-3 rounded-lg hover:bg-navy-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
