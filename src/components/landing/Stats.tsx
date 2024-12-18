const stats = [
  { value: "1,000+", label: "Active Users" },
  { value: "5,000+", label: "Permits Managed" },
  { value: "98%", label: "Compliance Rate" },
  { value: "24/7", label: "Support" },
];

const Stats = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;