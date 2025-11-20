const users = [
  {
    fullName: "Aarav Sharma",
    realImage: "https://randomuser.me/api/portraits/men/32.jpg",
    designation: "Software Engineer",
    tag: "Developer",
    salary: 85000,
    age: 26,
    description:
      "Aarav is a passionate full-stack developer with expertise in JavaScript and Node.js.",
  },
  {
    fullName: "Priya Verma",
    realImage: "https://randomuser.me/api/portraits/women/45.jpg",
    designation: "UI/UX Designer",
    tag: "Designer",
    salary: 65000,
    age: 24,
    description:
      "Priya specializes in creating intuitive user-centric designs and interactive prototypes.",
  },
  {
    fullName: "Rohit Mehta",
    realImage: "https://randomuser.me/api/portraits/men/67.jpg",
    designation: "Project Manager",
    tag: "Management",
    salary: 120000,
    age: 32,
    description:
      "Rohit is an experienced project manager who ensures smooth execution of agile workflows.",
  },
  {
    fullName: "Neha Kapoor",
    realImage: "https://randomuser.me/api/portraits/women/12.jpg",
    designation: "Data Analyst",
    tag: "Analytics",
    salary: 90000,
    age: 28,
    description:
      "Neha excels in analyzing datasets and delivering meaningful insights for business growth.",
  },
];

// --------------------------------------------------
// 1️⃣  FIRST: Create cards dynamically
// --------------------------------------------------

let markup = "";

users.forEach(function (elem) {
  markup += `
<div class="card">
    <img src="${elem.realImage}" />

    <h2 class="name">Stranger</h2>

    <div class="details">
        <h3 class="designation">Designation: ${elem.designation}</h3>
        <h3 class="tag">Tag: ${elem.tag}</h3>
        <p class="description">${elem.description}</p>
    </div>

    <button class="send">Send Request</button>
    <button disabled class="like">Like</button>

    <i class="ri-heart-3-fill"></i>
</div>
`;
});

document.querySelector(".container").innerHTML = markup;

// --------------------------------------------------
// 2️⃣  SELECT elements after HTML added
// --------------------------------------------------

let send = document.querySelectorAll(".send");
let names = document.querySelectorAll(".name");
let designations = document.querySelectorAll(".designation");
let tags = document.querySelectorAll(".tag");
let descriptions = document.querySelectorAll(".description");

let imga = document.querySelectorAll("img");
let hearts = document.querySelectorAll("i");
let likeBtn = document.querySelectorAll(".like");

// --------------------------------------------------
// 3️⃣ HEART animation function
// --------------------------------------------------

function showHeart(heart) {
  heart.style.opacity = 1;
  heart.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(() => {
    heart.style.transform = "translate(-50%, -450%) scale(1) rotate(30deg)";
  }, 800);

  setTimeout(() => {
    heart.style.opacity = 0;
  }, 1000);

  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1200);
}

// --------------------------------------------------
// 4️⃣ Add events to EACH card
// --------------------------------------------------

for (let i = 0; i < users.length; i++) {
  // ❤️ Like button

  likeBtn[i].addEventListener("click", function () {
    if (!likeBtn[i].disabled) showHeart(hearts[i]);
  });

  // ❤️ Double-click on image
  imga[i].addEventListener("dblclick", function () {
    if (!likeBtn[i].disabled) showHeart(hearts[i]);
  });

  // 👥 Friend Button
  let detailBoxes = document.querySelectorAll(".details");

  send[i].addEventListener("click", function () {
    if (send[i].innerText === "Send Request") {
      likeBtn[i].disabled = false;

      names[i].innerText = users[i].fullName;

      detailBoxes[i].classList.add("active"); // smooth show
      send[i].innerText = "Remove Friend";
    } else {
      names[i].innerText = "Stranger";

      likeBtn[i].disabled = true;

      detailBoxes[i].classList.remove("active"); // smooth hide
      send[i].innerText = "Send Request";
    }
  });
}
