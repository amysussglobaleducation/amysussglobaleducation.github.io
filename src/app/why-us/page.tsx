import type { Metadata } from "next";
const title = "Amysuss Global Education : Why Us";
const description="Amysuss Education is founded by Mr. Ashutosh Srivastava, a seasoned professional with over 20 years of rich experience spanning financial services and the education sector. An MBA in Finance and Marketing, Ashutosh has been associated with renowned organizations such as Bajaj Allianz, Bergurrean Education, Safeducate, and CII MCC."

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:"Career Counseling, Education Consulting, Study Abroad, Overseas Education, University Admissions, Test Preparation, Psychometric Testing, SOP Writing, Essay Writing, Internship Placement, Educational Guidance, Student Mentorship, School Workshops, Teachers Training, Location-Based Keywords, Study Abroad Consultants, Education Consultants, University Admissions, Psychometric Test for Students, Career Counseling for High School Students, Career Counseling for College Students, MBA Admission Consulting, IELTS/TOEFL Preparation, SOP Writing for University Applications, Internship Opportunities Abroad, Summer Programs for Students, Ashutosh Srivastava Education Consultant, Ashutosh Srivastava Career Counselor, Amysuss Global Education, Finding the right university for my career goals",
  openGraph: {
    title: title, 
    description: description,
    url: "https://www.amysussglobaleducation.com/why-us", // Replace with your actual URL
    siteName: "Amysuss Global Education",
    images: [
      {
        url: "https://your-website-url.com/your-image.jpg", // Replace with your image URL
        alt: "Amysuss Global Education Logo",
      },
    ],
  }
};
export default function WhyUs() {
  return (
    <main className="main">
 
  <section >

    <div className="container">

      <div className="row ">
      <h1>Why Us</h1>
        <div className="col content">
          <p>Amysuss Education is founded by <strong>Ashutosh Srivastava</strong>, a
            seasoned professional with over 20 years of rich experience spanning financial services and the education sector. An MBA in Finance and Marketing, Ashutosh has been associated with renowned organizations such as <strong>Bajaj Allianz, Bergurrean Education, Safeducate, and CII MCC</strong>.
          </p>
          <p>
            With a passion for guiding and mentoring, he has successfully counselled and trained over <strong>20,000
              individuals</strong> — ranging from students to seasoned professionals. Ashutosh brings a unique blend
            of
            corporate expertise and educational insight, ensuring that every student receives personalized guidance
            tailored to their aspirations. At Amysuss Education, Ashutosh is committed to empowering students to
            achieve their academic and professional goals with honesty, clarity, and a results-driven approach.
          </p>

        </div>

      </div>
      
    </div>

  </section>
</main>
  );
}
