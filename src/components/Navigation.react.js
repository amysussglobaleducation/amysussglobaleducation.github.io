"use client"; // Important for Next.js 13+ client components
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header
      id="header"
      className={`header d-flex align-items-center sticky-top ${
        isMobileNavOpen ? "mobile-nav-active" : ""
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="/" className="logo d-flex align-items-center me-auto">
          <img src="/assets/img/logo.png" alt="Amysuss Education Services" />
          <h1 className="sitename">Amysuss Education Services</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={pathname == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link
                href="/our-services/"
                className={
                  pathname == "/our-services/" || pathname == "/study-abroad/" || pathname == "/study-in-india/"
                    ? "active"
                    : ""
                }
              >
                Our Services{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link
                    href="/study-abroad/"
                    className={pathname == "/study-abroad/" ? "active" : ""}
                  >
                    Study Abroad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/study-in-india/"
                    className={pathname == "/study-in-india/" ? "active" : ""}
                  >
                    Study in India
                  </Link>
                </li>
              </ul>
            </li>
            <li></li>

            <li>
              <Link
                href="/psychometric-test/"
                className={pathname == "/psychometric-test/" ? "active" : ""}
              >
                Psychometric Test
              </Link>
            </li>
            <li>
              <Link
                href="/why-us/"
                className={pathname == "/why-us/" ? "active" : ""}
              >
                Why US
              </Link>
            </li>
            <li>
              <Link
                href="/for-schools/"
                className={pathname == "/for-schools/" ? "active" : ""}
              >
                For Schools
              </Link>
            </li>
            <li>
              <Link
                href="/exam-notifications/"
                className={pathname == "/exam-notifications/" ? "active" : ""}
              >
                Exam Notifications
              </Link>
            </li>
            <li>
              <Link
                href="/media/"
                className={pathname == "/media/" ? "active" : ""}
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us/"
                className={pathname == "/contact-us/" ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isMobileNavOpen ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <Link className="p-3" href="https://wa.me/919810241310?text=Hi">
          <i className="bi bi-whatsapp"></i>
        </Link>
      </div>
    </header>
  );
};

// Export the component
export default Navigation;
