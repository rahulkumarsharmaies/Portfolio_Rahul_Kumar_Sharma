/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    const open =
        navLinks.classList.toggle("open");

    menuBtn.setAttribute(
        "aria-expanded",
        open
    );

    menuBtn.textContent =
        open ? "✕" : "☰";
});


/* Close mobile menu after clicking link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.textContent = "☰";

        });

    });


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const links =
    document.querySelectorAll(
        ".nav-links a"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    links.forEach(link => {

                        link.classList.toggle(

                            "active",

                            link.getAttribute("href")
                                === "#" + entry.target.id

                        );

                    });

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    observer.observe(section);

});


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* =====================================
   CONTACT FORM
===================================== */

document
    .getElementById("contactForm")
    .addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        /*
           IMPORTANT:

           Replace this email with
           your actual email address.
        */

        const myEmail =
            "your.email@example.com";


        const mailto =
            `mailto:${myEmail}?subject=${
                encodeURIComponent(subject)
            }&body=${
                encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                )
            }`;


        window.location.href =
            mailto;


        document
            .getElementById("formNote")
            .textContent =
            "Opening your email app...";

    });


/* =====================================
   PROJECT LINKS
===================================== */

document
    .querySelectorAll(
        ".github-link, .demo-link"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                /*
                   The "#" links are placeholders.

                   Replace them with your
                   real GitHub / Live Demo URLs.
                */

                if (
                    link.getAttribute("href")
                    === "#"
                ) {

                    event.preventDefault();

                    alert(
                        "Replace this # with your actual project URL."
                    );

                }

            }
        );

    });