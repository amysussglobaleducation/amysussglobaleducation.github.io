import type { Metadata } from "next";
const title = "Amysuss Global Education : Our Services";
const description="Amysuss Education is founded by Mr. Ashutosh Srivastava, a seasoned professional with over 20 years of rich experience spanning financial services and the education sector. An MBA in Finance and Marketing, Ashutosh has been associated with renowned organizations such as Bajaj Allianz, Bergurrean Education, Safeducate, and CII MCC."

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:"Career Counseling, Education Consulting, Study Abroad, Overseas Education, University Admissions, Test Preparation, Psychometric Testing, SOP Writing, Essay Writing, Internship Placement, Educational Guidance, Student Mentorship, School Workshops, Teachers Training, Location-Based Keywords, Study Abroad Consultants, Education Consultants, University Admissions, Psychometric Test for Students, Career Counseling for High School Students, Career Counseling for College Students, MBA Admission Consulting, IELTS/TOEFL Preparation, SOP Writing for University Applications, Internship Opportunities Abroad, Summer Programs for Students, Ashutosh Srivastava Education Consultant, Ashutosh Srivastava Career Counselor, Amysuss Global Education, Finding the right university for my career goals",
  openGraph: {
    title: title, 
    description: description,
    url: "https://www.amysussglobaleducation.com/our-services",
    siteName: "Amysuss Global Education",
    images: [
      {
        url: "https://your-website-url.com/your-image.jpg", // Replace with your image URL
        alt: title,
      },
    ],
  }
};
export default function WhyUs() {
  return (
    <main className="main">
 
  <section id="about" className="about section">

    <div className="container">
      <div className="row">
        <h1>Our Services</h1>
        <div className="col-xl-4 col-lg-4 col-md-12 content">

          <ul>
            <li><i className="bi bi-check-circle"></i> <span>Psychometric Test</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Career Counselling</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Stream Selection/ Program Selection</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Shortlisting Universities India/Abroad</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Profile Building </span></li>
            <li><i className="bi bi-check-circle"></i> <span>Summer Program Listing India & Abroad</span></li>
            <li><i className="bi bi-check-circle"></i> <span>University Deadline Listing</span></li>
          </ul>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 content">
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>Essay/SOP Writing</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Research paper writing & Publication</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Internship</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Application Indian/Abroad</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Test Preparation Guidance</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Application Service</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Upcoming Entrance exam Test</span></li>
          </ul>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 content">
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>List of career Choice</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Study Tour India & Abroad</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Teachers Training Program</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Career Counselling center at your school </span></li>
            </ul>
        </div>
      </div>

    </div>

  </section>
</main>
  );
}
