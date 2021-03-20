function changeLanguage(language) {
  const langEl = document.querySelector(".langWrapTest");
  const link = document.querySelectorAll(".language");

  const menu_about_me = document.getElementById("menu-about-me-lgn");
  const menu_experience = document.getElementById("menu-experience-lgn");
  const menu_education = document.getElementById("menu-education-lgn");
  const menu_skills = document.getElementById("menu-skills-lgn");
  const menu_interests = document.getElementById("menu-interests-lgn");
  const menu_awards = document.getElementById("menu-awards-lgn");

  link.forEach((el) => {
    el.addEventListener("click", () => {
      langEl.querySelector(".active").classList.remove("active");
      el.classList.add("active");

      const attr = language;
      menu_about_me.textContent = data[attr].menu_about_me;
      menu_experience.textContent = data[attr].menu_experience;
      menu_education.textContent = data[attr].menu_education;
      menu_skills.textContent = data[attr].menu_skills;
      menu_interests.textContent = data[attr].menu_interests;
      menu_awards.textContent = data[attr].menu_awards;
    });
  });

  var data = {
    english: {
      menu_about_me: "About me",
      menu_experience: "Experience",
      menu_education: "Education",
      menu_skills: "Skills",
      menu_interests: "Interests",
      menu_awards: "Awards",
    },
    italian: {
      menu_about_me: "Chi sono",
      menu_experience: "Esperienze",
      menu_education: "Formazione",
      menu_skills: "Skills",
      menu_interests: "Interessi",
      menu_awards: "Premi",
    },
    spanish: {
      menu_about_me: "Quien soy?",
      menu_experience: "Esperiencias",
      menu_education: "Educacion",
      menu_skills: "Abilidades",
      menu_interests: "Intereses",
      menu_awards: "Premios",
    },
  };
}
