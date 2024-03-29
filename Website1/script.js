window.onload = function () {
  function nav() {
    const nav = document.getElementsByClassName("nav");
    const logo = document.createElement("img");
    logo.src = "/Website1/assets/007.png";
    nav[0].appendChild(logo);
    const rightNav = document.createElement("div");
    rightNav.className = "right-nav";
    const connect = document.createElement("button");
    connect.className = "connect";
    connect.innerHTML = `Let's Chat`;
    connect.onclick = function () {
      window.location.href = "/Website1/contact.html";
    };
    connect.style =
      'padding: 0.5rem 2rem; border: none; border-radius: 5rem; background-color: #CB413F; color: white; font-size: 1rem; cursor: pointer; font-weight: 900; font-family:"Roboto Slab", sans-serif;';
    rightNav.appendChild(connect);
    nav[0].appendChild(rightNav);
  }
  nav();
};
