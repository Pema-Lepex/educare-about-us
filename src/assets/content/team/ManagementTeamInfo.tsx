// You can use Lucide icons or any other library you prefer
import { Settings, Calculator, Headphones } from 'lucide-react';
export const managementData = [
  {
    title: "Operations Manager",
    icon: <Settings className="w-6 h-6 text-orange-500" />,
    description: "Our operations manager oversees daily operations to ensure efficiency, quality, and timely delivery across the organization. They coordinate teams, streamline processes, manage resources, and implement strategies that improve performance while supporting company growth.",
    fullWidth: true,
  },
  {
    title: "Accountant",
    icon: <Calculator className="w-6 h-6 text-orange-500" />,
    description: "Our accountant manages financial records, prepares reports, and ensures accuracy and compliance with accounting standards. They handle budgeting, invoicing, payroll, and tax-related tasks while providing financial insights to support informed business decisions.",
    fullWidth: false,
  },
  {
    title: "Administrative Officer",
    icon: <Headphones className="w-6 h-6 text-orange-500" />,
    description: "Our administration officers provide essential administrative support to ensure smooth daily operations. They manage office coordination, documentation, scheduling, and communication, while supporting staff and maintaining organized and efficient workplace systems.",
    fullWidth: false,
  },
];