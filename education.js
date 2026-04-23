// education.js

const educationData = {
  greeting: "Hello, I am Xiaogeng. <br> Here is a quick overview of my academic journey.",

  schools: [
    {
      id: "ucsd",
      name: "UC San Diego",
      logo: "./ucsd.png",
      period: "2024 - Current",
      major: "Computer Science",
      degree: "B.S.",
      departments: [
        {
          name: "Computer Science",
          courses: [      
            {
              "code": "CSE 29",
              "title": "Systems Programming and Software Tools",
              "description": "Learned how programs execute at a low level, including memory, processes, and system calls. Used C, gdb, valgrind, and UNIX tools for debugging and performance analysis."
            },
            {
              "code": "CSE 89",
              "title": "Introduction to Computer Science and Engineering Seminar",
              "description": "Explored different areas of computer science, current trends, and career paths through faculty-led discussions and seminars."
            },
            {
              "code": "CSE 100",
              "title": "Advanced Data Structures",
              "description": "Studied trees, heaps, hash tables, balanced search structures, and graph-based data organization. Focused on runtime and memory tradeoffs."
            },
            {
              "code": "CSE 101",
              "title": "Design and Analysis of Algorithms",
              "description": "Designed efficient algorithms for sorting, searching, and graphs. Analyzed time and space complexity and studied NP-complete problems."
            },
            {
              "code": "CSE 105",
              "title": "Theory of Computability",
              "description": "Studied formal languages, automata, and Turing machines. Learned about undecidability and the limits of computation."
            },
            {
              "code": "CSE 107",
              "title": "Introduction to Modern Cryptography",
              "description": "Learned symmetric and public-key cryptography, authentication, and secure protocols. Focused on formal definitions and proofs of security."
            },
            {
              "code": "CSE 110",
              "title": "Software Engineering",
              "description": "Worked on team-based software projects using agile methods. Covered design, testing, version control, and collaborative development."
            },
            {
              "code": "CSE 120",
              "title": "Operating Systems Principles",
              "description": "Studied processes, threads, scheduling, memory management, and file systems. Learned how operating systems manage resources."
            },
            {
              "code": "CSE 123",
              "title": "Computer Networks",
              "description": "Learned network protocols, layering, routing, congestion control, and internet architecture including TCP/IP."
            },
            {
              "code": "CSE 127",
              "title": "Introduction to Computer Security",
              "description": "Studied system vulnerabilities, attacks, and defenses. Covered access control, security models, and practical exploitation techniques."
            },
            {
              "code": "CSE 130",
              "title": "Programming Languages: Principles and Paradigms",
              "description": "Explored different programming paradigms and language design. Learned functional, logic, and object-oriented programming concepts."
            },
            {
              "code": "CSE 135",
              "title": "Online Database Analytics Applications",
              "description": "Designed databases and wrote SQL queries. Built data analytics applications and worked with data visualization and performance tuning."
            },
            {
              "code": "CSE 151A",
              "title": "Machine Learning: Learning Algorithms",
              "description": "Studied supervised and unsupervised learning including k-NN, decision trees, clustering, and model evaluation techniques."
            },
            {
              "code": "CSE 158",
              "title": "Recommender Systems and Web Mining",
              "description": "Built recommendation systems and worked with real-world datasets. Applied machine learning techniques for prediction and personalization."
            }
            
          ]
        },
        {
          name: "Cognitive Science",
          courses: [
            {
              code: "COGS 189",
              title: "Brain Computer Interfaces",
              description: "Worked with EEG + ML..."
            },
            {
              code: "COGS 108",
              title: "Data Science in Practice",
              description: "Worked with EEG + ML..."
            }
          ]
        },
        {
          name: "Mathematics & Related",
          courses: [
            {
              code: "Math 189",
              title: "Data Analysis and Inference",
              description: ""
            },
            {
              code: "Econ 120A",
              title: "Econometrics Statistics",
              description: ""
            }
          ],
          
        },
        {
          name: "Computer Science Education Studies",
          courses: [
            {
              code: "EDS 124AR",
              title: "Teach Computation/DigitalWorl",
              description: ""
            },
            {
              code: "EDS 124BR",
              title: "Teach Computational Thinking",
              description: ""
            }
          ]
        }, 
        {
          name: "Humanities",
          courses: [
            {
              code: "HUM 3",
              title: "Renaissance,Reform&Early Euro",
              description: ""
            },
            {
              code: "HUM 100",
              title: "Advanced Topics/Humanities",
              description: ""
            }
          ]
        }, 
        {
          name: "Social Science and Fine Arts",
          courses: [
            {
              code: "ENG 30",
              title: "Creative Problem Solving",
              description: ""
            },
            {
              code: "ECON 1",
              title: "Principles of Microeconomics",
              description: ""
            },
            {
              code: "MUS 95G",
              title: "Gospel Choir",
              description: ""
            }
          ]
        },
        {
          name: "American History and Institutions & Diversity, Equity and Inclusion",
          courses: [
            {
              code: "ETHN 2",
              title: "Intro: Circulations of Differe",
              description: ""
            },
            {
              code: "ANTH 21",
              title: "Race and Racisms",
              description: ""
            }
          ]
        }
        

      ]
    },
    {
      id: "ccsf",
      name: "CCSF",
      logo: "./ccsf.png",
      period: "2022 - 2024",
      major: "Computer Science",
      degree: "Transfer Preparation",
      departments: [
        {
          name: "Computer Science",
          courses: [
            {
              code: "CS 110A",
              title: "Intro to Python",
              description:
                "Built programming fundamentals through variables, loops, functions, files, and problem solving."
            },
            {
              code: "CS 111B",
              title: "Java Programming",
              description:
                "Focused on object-oriented programming, classes, inheritance, methods, debugging."
            },
            {
              code: "CS 131A",
              title: "Computer Architecture",
              description:
                "Learned low-level computing concepts including logic, memory, and machine organization."
            }
          ]
        }
      ]
    }
  ]
};

// Option 2: read from local JSON file
// async function loadEducationData() {
//   const response = await fetch("./education-data.json");
//   return await response.json();
// }

// Option 3: read from API
// async function loadEducationData() {
//   const response = await fetch("https://your-api-url.com/education");
//   return await response.json();
// }

async function loadEducationData() {
  return educationData;
}

function renderOverview(data) {
  const greetingElement = document.getElementById("educationGreeting");
  const overviewCard = document.getElementById("educationOverviewCard");

  if (!greetingElement || !overviewCard) return;

  greetingElement.innerHTML = data.greeting;

  overviewCard.innerHTML = `
    <div class="education-overview-grid">
      ${data.schools.map((school) => `
        <div class="education-school-card">
          <div class="education-school-header">
            <img src="${school.logo}" alt="${school.name}" class="education-school-logo"/>
            <h2 class="education-school-card-name">${school.name}</h2>
          </div>

          <div class="education-school-card-body">
            <p><strong>Period:</strong> ${school.period}</p>
            <p><strong>Major:</strong> ${school.major}</p>
            <p><strong>Degree:</strong> ${school.degree}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderCourseSection(school, schoolTitleId, listId, detailId) {
  const titleElement = document.getElementById(schoolTitleId);
  const listElement = document.getElementById(listId);
  const detailElement = document.getElementById(detailId);

  if (!listElement || !detailElement) return;

  // set school title (FIXED)
  if (titleElement) {
    titleElement.textContent = school.name;
  }

  const departments = school.departments || [];

  // render LEFT
  listElement.innerHTML = departments
    .map(
      (dept, index) => `
      <button class="coursework-department-button ${
        index === 0 ? "coursework-department-button--active" : ""
      }" data-index="${index}">
        ${dept.name}
      </button>
    `
    )
    .join("");

  // render default RIGHT
  if (departments.length > 0) {
    renderDepartmentCourses(departments[0], detailId);
  }

  // prevent duplicate listeners (FIXED)
  listElement.onclick = (e) => {
    const btn = e.target.closest(".coursework-department-button");
    if (!btn) return;

    const deptIndex = Number(btn.dataset.index);
    const dept = departments[deptIndex];
    if (!dept) return;

    listElement.querySelectorAll(".coursework-department-button")
      .forEach((b) => b.classList.remove("coursework-department-button--active"));

    btn.classList.add("coursework-department-button--active");

    renderDepartmentCourses(dept, detailId);
  };
}

function renderDepartmentCourses(department, detailId) {
  const detailElement = document.getElementById(detailId);
  if (!detailElement) return;

  detailElement.innerHTML = department.courses
    .map(
      (course) => `
      <div class="coursework-course-block">
        <div class="coursework-course-title-block">
          <h3 class="coursework-course-code">${course.code}</h3>
          <h3 class="coursework-course-name">${course.title}</h3>
        </div>
        <p class="coursework-course-description">${course.description}</p>
      </div>
    `
    )
    .join("");
}

async function initEducationPage() {
  const data = await loadEducationData();
  const [ucsd, ccsf] = data.schools;

  renderOverview(data);
  renderCourseSection(ucsd, "ucsdSchoolTitle", "ucsdCourseList", "ucsdCourseDetail");
  renderCourseSection(ccsf, "ccsfSchoolTitle", "ccsfCourseList", "ccsfCourseDetail");
}

initEducationPage();