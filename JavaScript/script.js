"use strict";

const script = () => {
  const mobileMenuIcon = () => {
    const mobileMenuContainer = document.querySelector("#mobile-sub-pages");
    const mobileMenu = document.querySelector("#sub-pages");
    const mobileMenuListItems = document.querySelectorAll("#sub-pages > li");
    const mobileMenuA = document.querySelectorAll("#sub-pages > li > a");
    const loginIcon = document.querySelector(
      "#sub-pages > li:last-child > a > .fa-solid"
    );

    const mobileMenuIcon = document.querySelector(".fa-bars");

    mobileMenuIcon.addEventListener("click", () => {
      const changeTheAction = (container) => {
        const customizeListItems = (listItems, listA) => {
          for (const element of listItems) {
            element.classList.add("mobile-li");
          }
          for (const element of listA) {
            element.classList.add("mobile-a");
          }
          if (document.URL.includes("login.html")) {
          } else {
            loginIcon.classList.add("mobile-fa-login");
          }
        };

        customizeListItems(mobileMenuListItems, mobileMenuA);

        if (container.classList.contains("mobile-sub-pages")) {
          container.classList.remove("mobile-sub-pages");
        } else {
          container.classList.add("mobile-sub-pages");
        }
      };

      changeTheAction(mobileMenuContainer);

      const switchFromMobileToDesktop = () => {};

      switchFromMobileToDesktop();
    });
  };

  mobileMenuIcon();

  if (document.URL.includes("about.html")) {
  } else if (document.URL.includes("staff.html")) {
  } else if (document.URL.includes("contact.html")) {
  } else if (document.URL.includes("login.html")) {
  } else {
  }
};

script();
