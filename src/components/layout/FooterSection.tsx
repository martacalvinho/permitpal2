import { Link } from "react-router-dom";

interface FooterSectionProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm text-gray-600 hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;