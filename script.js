const headerHTML = `
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="logo">
            <img src="gallery 2/infra-Copy.avif" alt="" class="logo-img">
            <span class="school-name">BRIGHT<span class="highlight">FUTURE SCHOOL</span></span>
        </a>

        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="admission.html">Admission</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="mandatory.html">Mandatory Disclosure</a></li>
            <li><a href="facilities.html">Facilities</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
</nav>`;

const footerHTML = `
<footer>
    <div class="footer-container">
        <div>
            <h3 class="footer-logo">
                <img src="images/logo.png" alt="School Logo" class="footer-logo-img">
                BRIGHT FUTURE
            </h3>
            <p class="footer-text">
                Empowering minds since 1998 with colorful innovation.
            </p>
        </div>

        <div class="footer-section">
            <h5>Quick Links</h5>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
            <li><a href="admission.html">Admission</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="mandatory.html">MandatoryDisclosure</a></li>
            <li><a href="facilities.html">Facilities</a></li>
            <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h5>Connect</h5>
            <p>+91 7735135408</p>
            <p>fbright395@gmail.com</p>
        </div>
    </div>
</footer>`;

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header-placeholder");
    const footer = document.getElementById("footer-placeholder");

    if (header) header.innerHTML = headerHTML;
    if (footer) footer.innerHTML = footerHTML;
});
