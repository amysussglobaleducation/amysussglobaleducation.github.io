"use client"; // Important for Next.js 13+ client components
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG,SOCIAL_LINKS} from '@/constants';
const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setIsDropdownOpen(false);
  }
  const toggleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <header
      id="header"
      className={`header d-flex align-items-center sticky-top ${
        isMobileNavOpen ? "mobile-nav-active" : ""
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link onClick={closeMobileNav} href="/" className="logo d-flex align-items-center me-auto">
          <img src="/assets/img/logo.png" alt={SITE_CONFIG.NAME} />
          <h1 className="sitename">{SITE_CONFIG.NAME}</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link onClick={closeMobileNav} href="/" className={pathname == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link onClick={toggleDropdownOpen}
                href="/our-services/"
                className={
                  (isMobileNavOpen == false && (pathname ==  "/our-services/" || pathname == "/study-abroad/" || pathname == "/study-in-india/")) || isDropdownOpen
                    ? "active"
                    : ""
                }
              >
                Our Services{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul className={isDropdownOpen?"dropdown-active":""}>
                <li>
                  <Link onClick={closeMobileNav}
                    href="/study-abroad/"
                    className={pathname == "/study-abroad/" ? "active" : ""}
                  >
                    Study Abroad
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMobileNav}
                    href="/study-in-india/"
                    className={pathname == "/study-in-india/" ? "active" : ""}
                  >
                    Study in India
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link onClick={closeMobileNav}
                href="/psychometric-test/"
                className={pathname == "/psychometric-test/" ? "active" : ""}
              >
                Psychometric Test
              </Link>
            </li>
            <li>
              <Link onClick={closeMobileNav}
                href="/why-us/"
                className={pathname == "/why-us/" ? "active" : ""}
              >
                Why US
              </Link>
            </li>
            <li>
              <Link onClick={closeMobileNav}
                href="/for-schools/"
                className={pathname == "/for-schools/" ? "active" : ""}
              >
                For Schools
              </Link>
            </li>
            <li>
              <Link onClick={closeMobileNav}
                href="/exam-notifications/"
                className={pathname == "/exam-notifications/" ? "active" : ""}
              >
                Exam Notifications
              </Link>
            </li>
            <li>
              <Link onClick={closeMobileNav}
                href="/media/"
                className={pathname == "/media/" ? "active" : ""}
              >
                Media
              </Link>
            </li>
            <li>
              <Link onClick={closeMobileNav}
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

        <Link onClick={closeMobileNav} className="p-3" href={`https://wa.me/91${SOCIAL_LINKS.CONTACT.PHONE}?text=Hi`}>
          <i className="bi bi-whatsapp"></i>
        </Link>
      </div>
    </header>
  );
};

// Export the component
export default Navigation;
