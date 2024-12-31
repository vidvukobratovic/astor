import React from "react";
import { socialLinks } from "../config/socialLinks";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.colorClass} hover:underline`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
