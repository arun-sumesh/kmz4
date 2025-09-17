import React, { useState, useEffect, useRef } from "react";
import { FaNetworkWired, FaHome, FaVideo, FaCogs } from "react-icons/fa";
import "./Services.css";

const servicesData = [
  {
    icon: <FaNetworkWired />,
    title: "Networking Solutions",
    description:
      "We, KMZ Tech design and deploy reliable, high-performance networks that keep your home or business seamlessly connected. Our solutions ensure security, scalability, and consistent uptime.",
    items: [
      "Design & Installation",
      "Fiber Optics Solutions",
      "Structured Cabling",
      "Network Audits & Remediation",
      "Moves, Adds & Changes (MAC)",
      "Wireless Network Solutions (Wi-Fi / Access Points)",
      "Maintenance & Support",
      "Security & Compliance (Firewalls, Access Control)",
      "Warranty & Quality Assurance",
    ],
  },
  {
    icon: <FaHome />,
    title: "Home Automation",
    description:
      "KMZ Tech's smart automation systems that make your life easier and more efficient. Control lighting, climate, security, and appliances all from a single, intuitive interface.",
    items: [
      "Smart Lighting Control",
      "Climate & Thermostat Automation",
      "Voice Assistant Integration",
      "Smart Locks & Access",
      "Energy Monitoring",
    ],
  },
  {
    icon: <FaVideo />,
    title: "CCTV & Surveillance",
    description:
      "Advanced CCTV and surveillance solutions to protect your property. Monitor in real-time, store footage securely, and gain peace of mind with 24/7 coverage. KMZ Tech's promise.",
    items: [
      "HD & IP Camera Installation",
      "Remote Mobile Monitoring",
      "Video Storage & Backup",
      "Night Vision & Motion Detection",
      "Integration with Access Control",
    ],
  },
  {
    icon: <FaCogs />,
    title: "IT Infrastructure Setup",
    description:
      "Complete IT infrastructure services, from server and device setup to cloud integration. Optimize your business operations with secure, scalable, and reliable systems - thats what we are known for!",
    items: [
      "Server Deployment & Virtualization",
      "Workstation Setup",
      "Router & Firewall Configuration",
      "Cloud Integration",
      "Backup & Disaster Recovery",
    ],
  },
];

const skillsData = [
  { name: "Structured Cabling", percent: 100 },
  { name: "Home Automation", percent: 99 },
  { name: "CCTV Surveillance", percent: 90 },
  { name: "Wireless Technology", percent: 100 },
  { name: "Access Control", percent: 95 },
];

const Services = () => {
  const [animatedPercents, setAnimatedPercents] = useState(
    skillsData.map(() => 0)
  );
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = null;
        const duration = 2000;

        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);

          setAnimatedPercents(
            skillsData.map(({ percent }) => Math.round(percent * progress))
          );

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    const node = sectionRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      {/* ===== What We Do ===== */}
      <header className="services-header">
        <h2>What We Do.</h2>
        <p>
          We provide cutting-edge solutions for IT networking, automation, and
          security to make your home and business smarter and safer.
        </p>
        <div className="services-grid">
          {servicesData.map(({ icon, title, description, items }, idx) => (
            <article className="service-card" key={idx}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>

              {/* Smooth collapsible list */}
              {items && (
                <>
                  <div
                    className={`service-list-wrapper ${
                      expandedIndex === idx ? "expanded" : ""
                    }`}
                  >
                    <ul className="service-list">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="toggle-btn"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === idx ? null : idx)
                    }
                  >
                    {expandedIndex === idx ? "View Less ▲" : "View More ▼"}
                  </button>
                </>
              )}
            </article>
          ))}
        </div>
      </header>

      {/* ===== We Are Strong At ===== */}
      <section className="strengths-section">
        <div className="strengths-content">
          <h2>Why Businesses Trust Us</h2>
          <p>
            We deliver proven expertise in IT, security, and automation. Our
            strengths ensure that your business operates with reliability,
            scalability, and innovation.
          </p>

          <div className="strengths-grid">
            {skillsData.map(({ name }, idx) => {
              const radius = 45;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset =
                circumference - (circumference * animatedPercents[idx]) / 100;

              return (
                <div className="strength-card" key={idx}>
                  <div className="circle">
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r={radius} />
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        style={{
                          strokeDashoffset,
                          strokeDasharray: circumference,
                        }}
                        className="progress-circle"
                      />
                    </svg>
                    <div className="percent-text">{animatedPercents[idx]}%</div>
                  </div>
                  <h4>{name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
