function toggleMenu() {
    const navButtons = document.querySelectorAll(".btn-nav");
    const navMenu = document.querySelector("nav ul");
  
    navButtons.forEach((element) => {
      element.addEventListener("click", function () {
        navMenu.classList.toggle("active");
      });
    });
  }
  
toggleMenu();

async function getServices(){
   const response = await fetch("http://localhost:3000/services");
   const services = await response.json();

   services.map(service => createServiceItem(service.image, service.title, service.description, "Learn more",service.link))
}

getServices();

async function getTestimonials() {
  const response = await fetch("http://localhost:3000/testimonials");
  const testimonials = await response.json();

  testimonials.forEach(function (testimonial) {
    createTestimonialItem(
      testimonial.author,
      testimonial.image,
      testimonial.area,
      testimonial.testimonial
    );
  });
}


getTestimonials();

async function getFAQ() {
  const response = await fetch("http://localhost:3000/faq");
  const faqs = await response.json();

  faqs.forEach(function (item) {
    createFAQItem(item.question, item.answer);
  });
}

getFAQ();

function createFAQItem(question, answer) {
  const faqsList = document.querySelector(".faq-list");
  const faqItemContainer = document.createElement("div");
  faqItemContainer.classList.add("faq-item");

  const faqContainer = document.createElement("details");
  const faqQuestion = document.createElement("summary");
  faqQuestion.textContent = question;
  const faqAnswer = document.createElement("p");
  faqAnswer.textContent = answer;

  faqContainer.append(faqQuestion, faqAnswer);
  faqItemContainer.append(faqContainer);
  faqsList.append(faqItemContainer);
}


async function getProjects() {
  const response = await fetch("http://localhost:3000/projects");
  const projects = await response.json();

  projects.forEach(function (item) {
    createProjectItem(item.image, item.title, item.category);
  });
}

getProjects();

function createProjectItem(image, title, category){
  const projectsList = document.querySelector(".projects-container");
  const projectItemContainer = document.createElement("div");
  projectItemContainer.classList.add("projects-t");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image)
  projectItemContainer.append(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  projectItemContainer.append(titleElement);

  const paragraph = document.createElement("p");
  paragraph.textContent = category
  projectItemContainer.append(paragraph);

  projectsList.append(projectItemContainer);
}


function createServiceItem(imageURL, title, description, linkText, linkHref){
    const servicesList = document.querySelector(".services-list");
    const serviceItemContainer = document.createElement("div");
    serviceItemContainer.classList.add("service-item");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageURL)
    serviceItemContainer.append(imageElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    serviceItemContainer.append(titleElement);

    const paragraph = document.createElement("p");
    paragraph.textContent = description
    serviceItemContainer.append(paragraph);

    const link= document.createElement("a");
    link.textContent = linkText;
    link.setAttribute("href",linkHref)
    serviceItemContainer.append(link);

    servicesList.append(serviceItemContainer);
}

function createTestimonialItem(author, image, area, testimonial){
  const testimonialsList = document.querySelector(".testimonials-list");
  const testimonialsItemContainer = document.createElement("div");
  testimonialsItemContainer.classList.add("testimonials-item");

  const paragraph = document.createElement("p");
  paragraph.textContent = testimonial;

  const testimonialAuthorContainer = document.createElement("div");
  testimonialAuthorContainer.classList.add("author");

  const testimonialImageContainer = document.createElement("div");
  testimonialImageContainer.classList.add("img");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  testimonialImageContainer.append(imageElement);
  
  const testimonialBioContainer = document.createElement("div");
  testimonialBioContainer.classList.add("bio");

  const authorElement = document.createElement("h3");
  authorElement.textContent = author;
  testimonialBioContainer.append(authorElement);

  const areaElement = document.createElement("p");
  areaElement.textContent = area;
  testimonialBioContainer.append(areaElement);

  testimonialAuthorContainer.append(
    testimonialImageContainer,
    testimonialBioContainer
  );

  testimonialsItemContainer.append(paragraph, testimonialAuthorContainer);
  testimonialsList.append(testimonialsItemContainer);
}

async function getTeam() {
  const response = await fetch("http://localhost:3000/team");
  const team = await response.json();

  team.forEach(function (item) {
    createTeamItem(item.image, item.name, item.area, item.slogan);
  });
}

getTeam();

function createTeamItem(image, name, area, slogan){
  const teamList = document.querySelector(".team-list");
  const teamItemContainer = document.createElement("div");
  teamItemContainer.classList.add("team-item");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image)
  teamItemContainer.append(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = name;
  teamItemContainer.append(titleElement);

  const paragraph = document.createElement("p");
  paragraph.textContent = area
  teamItemContainer.append(paragraph);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = slogan
  teamItemContainer.append(paragraph2);

  teamList.append(teamItemContainer);
}

async function getStrategy() {
  const response = await fetch("http://localhost:3000/strategy");
  const strategy = await response.json();

  strategy.forEach(function (item) {
    createStrategyItem(item.id, item.title, item.description);
  });
}

getStrategy()

function createStrategyItem(id, title, description){
  const strategyList = document.querySelector(".cards-container");
  const strategyItemContainer = document.createElement("div");
  strategyItemContainer.classList.add("st-card");

  const orderItem = document.createElement("div");
  orderItem.classList.add("order");
  orderItem.textContent = '0'+ id;

  const infoItem = document.createElement("div");
  infoItem.classList.add("text");

  const infoTitle = document.createElement("h3");
  infoTitle.textContent = title;

  const infoDescription = document.createElement("p");
  infoDescription.textContent = description;

  infoItem.append(infoTitle, infoDescription)

  strategyItemContainer.append(orderItem, infoItem); 

  strategyList.append(strategyItemContainer);
}