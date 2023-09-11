const portfolio = [
    {
      name:"Cloudbrick",
      imgurl:"./images/cloudbrick.png",
      link: "https://cloudbrick.netlify.app/"
    },
    {
      name:"Business Finder",
      imgurl: "./images/businessfinder.png",
    "lin":"https://business-finderng.netlify.app/"
    },
    {
      name:"Instafiesta",
      imgurl: "./images/instafiesta.png",
      link: "https://instafiesta.com.ng/"
    },
    {
      name:"Unizik Clearance System",
      imgurl: "./images/clearance.png",
      link: "https://nau-clearance.netlify.app/"
    }
  ]
  const projectContent = document.querySelector(".project-content");

  window.addEventListener("DOMContentLoaded", function () {
    const showInHtml = portfolio.map((project, index) => {
      return `
    <a href=${project.link} target="_blank">
      <img src=${project.imgurl} class="project-img" alt=${project.name} />
    </a>
  
  `;
});

projectContent.innerHTML = showInHtml;
});

function toggle() {
    let x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
     else {
        x.style.display = "block";
    }
}