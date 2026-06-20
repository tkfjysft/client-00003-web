'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXTwitter, 
  faInstagram, 
  faLine, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

const SNS_LINKS = [
  { icon: faXTwitter, href: "#", label: "X" },
  { icon: faInstagram, href: "#", label: "Instagram" },
  { icon: faLine, href: "#", label: "LINE" },
] as const;

export default function SnsLinks() {
  return (
    <div className="flex items-center gap-5">
      {SNS_LINKS.map((sns) => (
          <FontAwesomeIcon 
		    key={sns.icon.iconName}
            icon={sns.icon} 
            className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" 
          />
      ))}
    </div>
  );
}


        // <a 
        //   key={sns.label}
        //   href={sns.href}
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   aria-label={sns.label}
        //   className="group text-clr-base-1 transition-all duration-300"
        // >