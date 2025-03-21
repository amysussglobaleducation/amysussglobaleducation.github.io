import type { Metadata } from "next";
import dynamic from 'next/dynamic'
const StudyinIndia = dynamic(() => import('../components/StudyinIndia'))
const StudyAbroad = dynamic(() => import('../components/StudyAbroad'))
const ForSchools = dynamic(() => import('../components/ForSchools'))
import { SITE_CONFIG} from '@/constants';
import Link from "next/link";
const description="Amysuss Education is founded by Mr. Ashutosh Srivastava, a seasoned professional with over 20 years of rich experience spanning financial services and the education sector. An MBA in Finance and Marketing, Ashutosh has been associated with renowned organizations such as Bajaj Allianz, Bergurrean Education, Safeducate, and CII MCC."
export const metadata: Metadata = {
  title: SITE_CONFIG.NAME,
  description: description,
  keywords:"Career Counseling, Education Consulting, Study Abroad, Overseas Education, University Admissions, Test Preparation, Psychometric Testing, SOP Writing, Essay Writing, Internship Placement, Educational Guidance, Student Mentorship, School Workshops, Teachers Training, Location-Based Keywords, Study Abroad Consultants, Education Consultants, University Admissions, Psychometric Test for Students, Career Counseling for High School Students, Career Counseling for College Students, MBA Admission Consulting, IELTS/TOEFL Preparation, SOP Writing for University Applications, Internship Opportunities Abroad, Summer Programs for Students, Ashutosh Srivastava Education Consultant, Ashutosh Srivastava Career Counselor, Amysuss Education Services, Finding the right university for my career goals",
  metadataBase: new URL(SITE_CONFIG.LINK), // Add this line
  alternates: {
    canonical: '/', // Add this line
  },
  openGraph: {
    title: SITE_CONFIG.NAME, 
    description: description,
    url: SITE_CONFIG.LINK, // Replace with your actual URL
    siteName: SITE_CONFIG.NAME,
    images: [
      {
        url: SITE_CONFIG.LINK+"/amysussglobaleducation.png",type: "logo", // Replace with your image URL
        alt: SITE_CONFIG.NAME,
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

        <div className="col p-3">
        <h2 className="homepage-subhead">Career counselling & mentoring for top 100 colleges worldwide</h2>
        <Link href="/contact-us" className=" btn btn-primary">Start Now</Link>
        </div>
        <div className="col p-0 text-center">
          
        <img src="/your_door_to_top_100_universities.jpeg" alt="Career counselling & mentoring for top 100 colleges worldwide"/>
        </div>

      </div>
      <StudyinIndia/>
      <StudyAbroad/>
      <ForSchools/>
    </div>

  </section>
</main>
  );
}
