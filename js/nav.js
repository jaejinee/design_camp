document.addEventListener("DOMContentLoaded", function () {
  const navList = document.getElementById("nav-list");
  const subnavList1 = document.getElementById("subnav-list-1");
  const subnavList2 = document.getElementById("subnav-list-2");
  const subnavList3 = document.getElementById("subnav-list-3");

  // Define navigation items
  const navItems = [
    { text: "p1. 로터리", link: "p1-a.html" },
    { text: "p2. 핑퐁", link: "p2-a.html" },
    { text: "p3. 미션", link: "p3-a.html" },
  ];
  const subnavItems1 = [
    { text: "a. 소개", link: "p1-a.html" },
    { text: "b. 주제 뽑기", link: "p1-b.html" },
    { text: "c. 지시사항 뽑기", link: "p1-c.html" },
  ];
  const subnavItems2 = [
    { text: "a. 소개", link: "p2-a.html" },
    { text: "b. 주제 뽑기", link: "p2-b.html" },
    // { text: "c. 타이머", link: "p2-c.html" },
  ];
  const subnavItems3 = [
    { text: "a. 소개", link: "p3-a.html" },
    // { text: "b. 타이머", link: "p3-b.html" },
  ];

  // Modify a specific navigation item for a specific page
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
  if (currentPage === "p1-a.html") {
    navItems[0].color = "black";
    subnavItems1[0].color = "black";
    navItems[1].class = "disabled";
  }
  if (currentPage === "p1-b.html") {
    navItems[0].color = "black";
    subnavItems1[1].color = "black";
  }
  if (currentPage === "p1-c.html") {
    navItems[0].color = "black";
    subnavItems1[2].color = "black";
  }
  if (currentPage === "p2-a.html") {
    navItems[1].color = "black";
    subnavItems2[0].color = "black";
  }
  if (currentPage === "p2-b.html") {
    navItems[1].color = "black";
    subnavItems2[1].color = "black";
  }
  if (currentPage === "p2-c.html") {
    navItems[1].color = "black";
    subnavItems2[2].color = "black";
  }
  if (currentPage === "p3-a.html") {
    navItems[2].color = "black";
    subnavItems3[0].color = "black";
  }
  if (currentPage === "p3-b.html") {
    navItems[2].color = "black";
    subnavItems3[1].color = "black";
  }
  // Create navigation list items dynamically
  navItems.forEach((item, index) => {
    const div = document.createElement("div");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.text;
    if (item.color) {
      a.style.color = item.color;
    }
    // disable nav
    // if (index === 2) {
    //   a.classList.add("isdisabled");
    //   a.onclick = function () {
    //     return false;
    //   };
    // }

    div.appendChild(a);
    navList.appendChild(div);
  });

  if (
    currentPage === "p1-a.html" ||
    currentPage === "p1-b.html" ||
    currentPage === "p1-c.html"
  ) {
    subnavItems1.forEach((item) => {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      if (item.color) {
        a.style.color = item.color;
      }
      div.appendChild(a);
      subnavList1.appendChild(div);
    });
  }

  if (
    currentPage === "p2-a.html" ||
    currentPage === "p2-b.html" ||
    currentPage === "p2-c.html"
  ) {
    subnavItems2.forEach((item) => {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      if (item.color) {
        a.style.color = item.color;
        // a.style.cursor = "default";
      }
      div.appendChild(a);
      subnavList2.appendChild(div);
    });
  }

  if (currentPage === "p3-a.html" || currentPage === "p3-b.html") {
    subnavItems3.forEach((item) => {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      if (item.color) {
        a.style.color = item.color;
        // a.style.cursor = "default";
      }
      div.appendChild(a);
      subnavList3.appendChild(div);
    });
  }
});
