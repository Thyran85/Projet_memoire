interface StatCardProps {
  title: string;
  value: string | number;
  color?: string;
}

const StatCard = ({ title, value, color = "green-600" }: StatCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className={`text-2xl font-bold text-${color}`}>{value}</p>
    </div>
  );
};

export default StatCard;