import type { Metadata } from "next";
import { SITE_CONFIG} from '@/constants';
const title = SITE_CONFIG.NAME+" : Contact Us";
const description="Amysuss Education is founded by Mr. Ashutosh Srivastava, a seasoned professional with over 20 years of rich experience spanning financial services and the education sector. An MBA in Finance and Marketing, Ashutosh has been associated with renowned organizations such as Bajaj Allianz, Bergurrean Education, Safeducate, and CII MCC."
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:"Career Counseling, Education Consulting, Study Abroad, Overseas Education, University Admissions, Test Preparation, Psychometric Testing, SOP Writing, Essay Writing, Internship Placement, Educational Guidance, Student Mentorship, School Workshops, Teachers Training, Location-Based Keywords, Study Abroad Consultants, Education Consultants, University Admissions, Psychometric Test for Students, Career Counseling for High School Students, Career Counseling for College Students, MBA Admission Consulting, IELTS/TOEFL Preparation, SOP Writing for University Applications, Internship Opportunities Abroad, Summer Programs for Students, Ashutosh Srivastava Education Consultant, Ashutosh Srivastava Career Counselor, Amysuss Education Services, Finding the right university for my career goals",
  openGraph: {
    title: title, 
    description: description,
    url: "https://www.amysussglobaleducation.com/contact-us/", // Replace with your actual URL
    siteName: title,
    images: [
      {
        url: "amysussglobaleducation.png", // Replace with your image URL
        alt: title,
      },
    ],
  }
};
export default function Home() {
  return (
    <main className="main">
 
  <section id="about" className="about section">

    <div className="container">

      <div className="row ">
        <div className="col content">
          <h2>Contact Us</h2>
          <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd9KUFYZQYVSMbjtYXKmVETL_1UczNpTKwGIstU8bL-4CJu_g/viewform?usp=header"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                }}
               
              />
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
