var users = [
  {
    profilePic: "https://images.unsplash.com/photo-1607957159143-de3859adca2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:"https://images.unsplash.com/photo-1607957158355-687bc9ae097c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    pendingMessage: 4,
    location: "Delhi,India",
    name: "Harshita",
    age: 23,
    interest: [{
      icon:` <i class="text-sm ri-music-2-fill"></i>`,
      interest:"music"},
      {icon:`<i class="ri-brush-line"></i>`,
      interest:"painting"}],
    bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut numquam facilis tenetur vitae vero?",
    isFriend:null
  },
  {
    profilePic: "https://images.unsplash.com/photo-1597143720565-bced1f64936d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1571653004769-e09d47494c0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    pendingMessage: 3,
    location: "Bhopal,India",
    name: "Shivangi",
    age: 26,
     interest: [{
      icon:` <i class="text-sm ri-music-2-fill"></i>`,
      interest:"music"},
      {icon:`<i class="ri-brush-line"></i>`,
      interest:"painting"}],
    bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut numquam facilis tenetur vitae vero?",
    isFriend:null
  },
  {
    profilePic: "https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    displayPic:"https://images.unsplash.com/photo-1634746709400-caa196a7d43f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 5,
    location: "Delhi,India",
    name: "Sneha",
    age: 23,
     interest: [{
      icon:` <i class="text-sm ri-music-2-fill"></i>`,
      interest:"music"},
      {icon:`<i class="ri-brush-line"></i>`,
      interest:"painting"}],
    bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut numquam facilis tenetur vitae vero?",
    isFriend:null
  },
  {
    profilePic: "https://images.unsplash.com/photo-1617644569393-7b96498e5695?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1645368221804-09dab96f3acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 3,
    location: "Bengal,India",
    name: "Nishi",
    age: 24,
     interest: [{
      icon:` <i class="text-sm ri-music-2-fill"></i>`,
      interest:"music"},
      {icon:`<i class="ri-brush-line"></i>`,
      interest:"painting"}],
    bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut numquam facilis tenetur vitae vero?",
    isFriend:null
  },
];

function select(elem) {
  return document.querySelector(elem);
}

var curr = 0;

document.querySelector(".accept").addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.innerHTML = "<p>Request sent</p>";
  document.body.appendChild(overlay);

  users.splice(curr, 1);

  if (users.length === 0) {
    showCompletionMessage();
    return;
  }

  moveNext();

  // Remove overlay after a delay or when next card is displayed
  setTimeout(() => {
    overlay.remove();
  }, 1000); // Remove after 2 seconds (adjust as needed)
});

document.querySelector(".deny").addEventListener("click", () => {
  users.splice(curr, 1);

  if (users.length === 0) {
    showCompletionMessage();
    return;
  }

  moveNext();
});

function showCompletionMessage() {
  const completionMessage = document.createElement("div");
  completionMessage.classList.add("completion-message");
  completionMessage.textContent = "You are done for today";
  document.body.appendChild(completionMessage);

  completionMessage.style.backgroundColor = "red";
  completionMessage.style.color = "white";
  completionMessage.style.zIndex = "555";
  completionMessage.style.position = "fixed";
  completionMessage.style.top = "0";
  completionMessage.style.left = "0";
  completionMessage.style.width = "100%";
  completionMessage.style.height = "100%";
  completionMessage.style.display = "flex";
  completionMessage.style.justifyContent = "center";
  completionMessage.style.alignItems = "center";
  setTimeout(() => {
    if (users.length === 0) {
      // Check if the "Request sent" message is displayed
      const overlay = select(".overlay");
      if (overlay) {
        overlay.remove();
      }
      showCompletionMessage();
    }
  }, 1000); // Added a comma before 1000
}

function moveNext() {
  curr = (curr + 1) % users.length;

  const detailsContainer = select(".detailscontainer");
  detailsContainer.classList.add("fadeOut");
  setTimeout(() => {
    updateUI();
  }, 500);

  setTimeout(() => {
    detailsContainer.classList.remove("fadeOut");

    if (users.length === 0) {
      // Check if the "Request sent" message is displayed
      const overlay = select(".overlay");
      if (overlay) {
        overlay.remove();
      }
      showCompletionMessage();
    }
  }, 1000);
}

function updateUI() {
  select(".prflimg img").src = users[curr].profilePic;
  select(".maincard img").src = users[curr].displayPic;
  select(".badge h5").textContent = users[curr].pendingMessage;
  select(".location h3").textContent = users[curr].location;
  select(".name h1:nth-child(1)").textContent = users[curr].name;
  select(".name h1:nth-child(2)").textContent = users[curr].age;
  var clutter = "";
  users[curr].interest.forEach(function (interest) {
    clutter += `<div class="tags flex gap-3 text-white">
          <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
          ${interest.icon}
          <h3 class="text-sm tracking-tighter capitalize">${interest.interest}</h3>
          </div>
          </div>`;
  });
  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[curr].bio;
  select(".incomingcard img").src = users[(curr + 1) % users.length].displayPic;
}

updateUI();
