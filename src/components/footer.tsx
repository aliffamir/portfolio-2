import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  const links = [
    {
      href: 'https://github.com/your-profile',
      label: 'GitHub',
      icon: <FaGithub size={20} />,
    },
    {
      href: 'https://linkedin.com/in/your-profile',
      label: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
    },
    {
      href: 'mailto:aliff6406@gmail.com',
      label: 'Contact',
      icon: <CiMail size={20} />,
    },
  ];

  return (
    <div className="flex w-full items-center justify-start gap-5">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-muted-foreground transition-colors duration-200 hover:text-black"
        >
          {link.icon}
          <span className="text-lg">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default Footer;
