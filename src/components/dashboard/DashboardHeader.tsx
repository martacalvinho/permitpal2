interface DashboardHeaderProps {
  title: string;
  description: string;
}

const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default DashboardHeader;