// ===================================
// 1. PORTFOLIO DATA
// Add or update content here.
// ===================================

const skills = [
  {
    title: "Programming & Web",
    items: ["Python", "HTML", "CSS", "JavaScript",
            "FastAPI", "Docker", "Git"]
  },
  {
    title: "Data & Machine Learning",
    items: ["NumPy", "Pandas", "Matplotlib",
            "Scikit-learn", "XGBoost", "SQL",
            "Random Forest", "EDA"]
  },
  {
    title: "Generative AI",
    items: ["LLMs", "Hugging Face", "Transformers",
            "LangChain", "Ollama", "RAG",
            "PyTorch (Basic)"]
  }
];

const projects = [
  {
    name: "QuizForge",
    description: "A local LLM-powered MCQ generator that converts learning materials into interactive quizzes.",
    tech: ["Python", "Llama 3.2", "Transformers", "Streamlit"],
    link: "#"
  },
  {
    name: "Weather Prediction",
    description: "A machine learning application that predicts weather conditions using a trained classification model.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    link: "#"
  },
  {
    name: "Crop Recommendation",
    description: "A machine learning model that recommends suitable crops based on agricultural input parameters.",
    tech: ["Python", "ML", "Scikit-learn"],
    link: "#"
  },
  {
    name: "Heart Disease Prediction",
    description: "A classification project exploring machine learning for heart disease prediction.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "#"
  },
  {
    name: "Leukemia Classification",
    description: "A machine learning experiment involving classification and dimensionality reduction using PCA.",
    tech: ["Python", "PCA", "SVM", "Random Forest"],
    link: "#"
  }
];

// ===================================
// 2. RENDER SKILLS
// ===================================

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach(group => {
  skillsGrid.innerHTML += `
    <div class="card skill-group">
      <h3>${group.title}</h3>
      <div class="tags">
        ${group.items.map(item =>
          `<span class="tag">${item}</span>`
        ).join("")}
      </div>
    </div>
  `;
});

// ===================================
// 3. RENDER PROJECTS
// ===================================

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach(project => {
  projectsGrid.innerHTML += `
    <article class="card project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>

      <div class="tags">
        ${project.tech.map(tech =>
          `<span class="tag">${tech}</span>`
        ).join("")}
      </div>

      <a class="project-link"
         href="${project.link}">
         View Project ↗
      </a>
    </article>
  `;
});

// ===================================
// 4. MOBILE NAVIGATION
// ===================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ===================================
// 5. SCROLL ANIMATION
// ===================================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// ===================================
// 6. DYNAMIC FOOTER YEAR
// ===================================

document.getElementById("year").textContent =
  new Date().getFullYear();
