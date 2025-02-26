const ForSchools = () => {
  return (
    <div className="row">
      <h2>For Schools</h2>
      <div className="col-xl-4 col-lg-4 col-md-12 content">
        <ul>
          <li>
            <i className="bi bi-file-earmark-bar-graph"></i>
            <span>Psychometric Test & Career Counselling</span>
          </li>
          <li>
            <i className="bi bi-person-hearts"></i> <span>Career Fair</span>
          </li>
        </ul>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-12 content">
        <ul>
          <li>
            <i className="bi bi-tools"></i> <span>Student Workshop</span>
          </li>
          <li>
            <i className="bi bi-globe-central-south-asia"></i>
            <span>Study Tour India & Abroad</span>
          </li>
        </ul>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-12 content">
        <ul>
          <li>
            <i className="bi bi-easel"></i>
            <span>Teachers Training Program</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ForSchools;
