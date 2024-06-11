const githubButton = document.querySelector(`.js-github-button`);

githubButton.addEventListener("click", () => {
  document.location = `https://github.com/MubeenMohammed`;
});

const resumeButtonElement = document.querySelector(`.js-resume-button`);

resumeButtonElement.addEventListener("click", () => {
  document.location = `resources/resume/mubeen_mohammed_resume.pdf`;
});

const experienceButtonElement = document.querySelector(`.js-experience-button`);

experienceButtonElement.addEventListener("click", () => {
  const aboutElement = document.querySelector(`.js-education-or-experience`);
  aboutElement.innerHTML = `<div class="experience-section">
          <div class="experience-box">
            <div class="organization-box">
              <img
                class="company-logo"
                src="resources/company-logos/ticket-sphere.png"
              />
              <div class="title-box">
                <div class="organization-name">Ticket Sphere</div>
                <div class="position-name">Software Developer, Remote</div>
                <div class="job-period">May 2024 - Present</div>
              </div>
            </div>
            <div class="job-description">
              <ul>
                <li>
                  Assisted in development of the front end of a mobile application
                  for iOS/Android using Dart and the Flutter framework.
                </li>
                <li>
                  Worked with Google Firebase to manage user-inputted data across
                  multiple platforms including web and mobile apps.
                </li>
                <li>
                  Collaborated with team members using version control systems
                  such as Git to organize modifications and assign tasks.
                </li>
                <li>
                  Utilized Android Studio and VS Code as a development environment
                  in order to visualize the application in both iOS and Android.
                </li>
              </ul>
            </div>
          </div>
          <div class="experience-box">
            <div class="organization-box">
              <img
                class="institution-logo"
                src="resources/company-logos/McGill-logo.png"
              />
              <div class="title-box">
                <div class="organization-name">
                  McGill Engineering Student Center (MESC)
                </div>
                <div class="position-name">Office Assistant, Montreal, CA</div>
                <div class="job-period">Dec 2022 - Present</div>
              </div>
            </div>
            <div class="job-description">
              <ul>
                <li>
                  Supported more than 500 students by answering general academic
                  and career-related questions, offering valuable insights.
                </li>
                <li>
                  Analyzed intern salary data by experience & major, and provided
                  Engineering Career Center (ECC) valuable insights.
                </li>
                <li>
                  Assisted the Software Co-op team by preparing mail merges,
                  updating Google forms, and analyzing 300+ students list.
                </li>
                <li>
                  Automated and streamlined the submission of Microsoft forms
                  using Power BI flows for the Graduate Funding Team.
                </li>
              </ul>
            </div>
          </div>
        </div>
        `;
});

const educationButtonElement = document.querySelector(`.js-education-button`);

educationButtonElement.addEventListener("click", () => {
  const aboutElement = document.querySelector(`.js-education-or-experience`);
  aboutElement.innerHTML = `<div class="education-section">
          <div class="education-box">
            <div class="institution-box">
              <img
                class="institution-logo"
                src="resources/institution-logos/McGill-logo.png"
              />
              <div class="degree-box">
                <div class="institution-name">
                  McGill University, Montreal, Canada
                </div>
                <div class="degree-name">
                  Bachelor of Software Engineering (Co-op)
                </div>
                <div class="degree-date">Aug 2022 - Present</div>
              </div>
            </div>
            <div class="GPA"><span>Grade :</span> 3.6 / 4.0 CGPA</div>
            <div class="related-coursework">
              <span>Related Coursework: </span>Data Structures and Algorithms,
              Model based Programming, Object Oriented Programming, Systems
              Programming, Web Development and Mobile App Development.
            </div>
          </div>
          <div class="education-box">
            <div class="institution-box">
              <img
                class="institution-logo"
                src="resources/institution-logos/shine-junior-college-logo.png"
              />
              <div class="degree-box">
                <div class="institution-name">
                  Shine Junior College, Telangana, India
                </div>
                <div class="degree-name">High School Diploma</div>
                <div class="degree-date">Jun 2019 - Jul 2021</div>
              </div>
            </div>
            <div class="GPA"><span>Grade: </span> 96 / 100</div>
            <div class="related-coursework">
              <span>Related Coursework: </span> Advanced Calculus, Differential
              Equations, Mechnaics and waves, Electromagnetism, Electric Circuits,
              Fluid Mechanics, General Chemistry, Organic Chemistry, English
              Literature and Basic Arabic.
            </div>
          </div>
        </div>
        `;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelector(".js-send-button").addEventListener("click", () => {
  document.querySelectorAll(".js-input").forEach((inputElement) => {
    inputElement.value = "";
  });
});


const positionElement = document.querySelector(".changing-position-name");
const positions = ['Web Developer', 'Mobile App Developer', 'Backend Developer', 'Fullstack Developer'];

let currentIndex = 0;

function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    positionElement.innerHTML = text.substring(0, i + 1);
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  } else if (typeof fnCallback === 'function') {
    setTimeout(fnCallback, 2000);
  }
}

function startAnimation(i) {
  if (typeof positions[i] == 'undefined') {
    setTimeout(function() {
      startAnimation(0);
    }, 2000);
  } else if (i < positions.length) {
    typeWriter(positions[i], 0, function() {
      startAnimation(i + 1);
    });
  }
}

startAnimation(currentIndex);
