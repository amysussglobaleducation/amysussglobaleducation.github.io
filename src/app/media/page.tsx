import type { Metadata } from "next";
import { SITE_CONFIG} from '@/constants';
const title = SITE_CONFIG.NAME+" : Media";
const description="Amysuss Education is founded by Mr. Ashutosh Srivastava, a seasoned professional with over 20 years of rich experience spanning financial services and the education sector. An MBA in Finance and Marketing, Ashutosh has been associated with renowned organizations such as Bajaj Allianz, Bergurrean Education, Safeducate, and CII MCC."
export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(SITE_CONFIG.LINK), // Add this line
  alternates: {
    canonical: '/media/',
  },
  keywords:"Career Counseling, Education Consulting, Study Abroad, Overseas Education, University Admissions, Test Preparation, Psychometric Testing, SOP Writing, Essay Writing, Internship Placement, Educational Guidance, Student Mentorship, School Workshops, Teachers Training, Location-Based Keywords, Study Abroad Consultants, Education Consultants, University Admissions, Psychometric Test for Students, Career Counseling for High School Students, Career Counseling for College Students, MBA Admission Consulting, IELTS/TOEFL Preparation, SOP Writing for University Applications, Internship Opportunities Abroad, Summer Programs for Students, Ashutosh Srivastava Education Consultant, Ashutosh Srivastava Career Counselor, Amysuss Education Services, Finding the right university for my career goals",
  openGraph: {
    title: title, 
    description: description,
    url: SITE_CONFIG.LINK +"/media/", // Replace with your actual URL
    siteName: title,type: "website",
    images: [
      {
        url: SITE_CONFIG.LINK+"/amysussglobaleducation.png",type: "logo", // Replace with your image URL
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

        <div className="col">
        <h2>Media</h2>
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
