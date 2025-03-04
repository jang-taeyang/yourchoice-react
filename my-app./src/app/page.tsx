"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container } from "react-bootstrap";

const StussyClone: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }, []);

  return (
    <Container fluid style={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" }}>
      {/* Navbar - Static, does NOT scroll */}
      <nav 
        className="navbar navbar-expand-lg" 
        style={{ position: "absolute", top: 0, width: "100%", padding: "10px 20px", backgroundColor: "rgba(255, 255, 255, 0.8)", zIndex: 10 }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Stüssy Logo - Moved Further Left */}
          <a href="#" className="navbar-brand" style={{ marginLeft: "-80px" }}>
            <Image 
              src="/Stussy-Logo-500x281.png" 
              alt="Stussy Logo" 
              width={95}  // Slightly larger
              height={50} 
              priority 
            />
          </a>

          {/* Navbar Icons - Bigger & Moved Right */}
          <div className="d-flex gap-4" style={{ marginRight: "-45px" }}>
            <a href="#" style={{ fontSize: "1.5rem", color: "black" }}>
              <i className="fas fa-search"></i>
            </a>
            <a href="#" style={{ fontSize: "1.5rem", color: "black" }}>
              <i className="fas fa-shopping-bag"></i>
            </a>
            <a href="#" style={{ fontSize: "1.5rem", color: "black" }}>
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Header Divider */}
      <div style={{ width: "100%", height: "0.5px", backgroundColor: "#ccc", position: "absolute", top: "75px", left: 0, zIndex: 15 }}></div>

      {/* Hero Section with Video */}
      <section style={{ height: "103vh", margin: "2vh auto 0 auto", overflow: "hidden", borderTop: "9vh solid white", borderBottom: "2vh solid white", borderLeft: "1vw solid white", borderRight: "1vw solid white", maxWidth: "100vw", position: "relative" }}>
        <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", position: "absolute", objectFit: "cover" }}>
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "left", padding: "5px", fontSize: "16px", backgroundColor: "white", borderTop: "1px solid #ddd" }}>
        <p style={{ fontWeight: "bold", marginTop: "15px", marginBottom: "10px" }}>NEWSLETTER</p>
        <p style={{ color: "rgb(115, 114, 114)", marginBottom: "30px" }}>E-MAIL</p>
        <p style={{ color: "rgb(115, 114, 114)", fontSize: "15px" }}>&copy; 2025 STÜSSY</p>
      </footer>
    </Container>
  );
};

export default StussyClone;