import {
  Phone,
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
} from 'lucide-react';

import './ContactSection.css';

// Keep contact details in one place for easy maintenance.
const CONTACT_DETAILS = {
  phone: '+917875621161',
  email: 'anjorrane112003@gmail.com',
  github: 'https://github.com/Anjor99',

  // Add your actual LinkedIn profile URL before publishing.
  linkedin: 'https://in.linkedin.com/in/anjor-rane-4a6111245',
};

// Contact methods displayed on the page.
const contactMethods = [
  {
    label: 'Call me',
    detail: '+91 7875621161',
    href: `tel:${CONTACT_DETAILS.phone}`,
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    detail: 'Message me directly',
    href: `https://wa.me/${CONTACT_DETAILS.phone.replace('+', '')}`,
    icon: MessageCircle,
    external: true,
  },
  {
    label: 'Email',
    detail: CONTACT_DETAILS.email,
    href: `mailto:${CONTACT_DETAILS.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    detail: 'Explore my repositories',
    href: CONTACT_DETAILS.github,
    icon: Github,
    external: true,
  },
  ...(CONTACT_DETAILS.linkedin
    ? [
        {
          label: 'LinkedIn',
          detail: 'Connect professionally',
          href: CONTACT_DETAILS.linkedin,
          icon: Linkedin,
          external: true,
        },
      ]
    : []),
];

/**
 * Contact section containing only direct contact methods
 * and professional profile links.
 */
export default function ContactSection() {
  return (
    <section
      className="section-wrap contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-panel">
          <header className="contact-heading">
            <span className="section-kicker">
              Contact
            </span>

            <h2 id="contact-title">
              Get in <span>touch.</span>
            </h2>

            <p>
              Feel free to reach out through any of the
              following channels.
            </p>
          </header>

          <div className="contact-methods">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  className="contact-method"
                  href={method.href}
                  key={method.label}
                  target={method.external ? '_blank' : undefined}
                  rel={
                    method.external
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <span className="contact-method-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <span className="contact-method-copy">
                    <strong>{method.label}</strong>
                    <span>{method.detail}</span>
                  </span>

                  <ArrowUpRight
                    className="contact-method-arrow"
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}