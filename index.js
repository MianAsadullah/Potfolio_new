.container {
  max-width: 1280px;
  padding: 0 1.5rem;
  margin: auto;
  overflow: hidden; }

.btn-main, .btn-light, .btn-dark {
  display: inline-block;
  padding: 0.8rem 02rem;
  transition: all 0.5s;
  border: none;
  cursor: pointer; }

.btn-main {
  color: #333;
  background-color: #ffbc00; }

.btn-light {
  color: #333;
  background-color: #f4f4f4; }

.btn-dark {
  color: #f4f4f4;
  background-color: #333; }

button[class^='btn-']:hover,
a[class^='btn-']:hover,
input[class^='btn-']:hover {
  background-color: #ffbc00; }

.lead {
  font-size: 1.3rem;
  margin-bottom: 2rem; }

.text-center {
  text-align: center; }

.py-1 {
  padding: 1rem 0; }

.py-2 {
  padding: 2rem 0; }

.py-3 {
  padding: 3rem 0; }

.py-4 {
  padding: 4rem 0; }

.my-1 {
  margin: 1rem 0; }

.my-2 {
  margin: 2rem 0; }

.my-3 {
  margin: 3rem 0; }

.my-4 {
  margin: 4rem 0; }

.section-title {
  font-size: 2rem;
  display: block;
  padding-bottom: 0.5rem;
  text-align: center;
  font-weight: 100;
  text-transform: uppercase; }

.bottom-line {
  height: 2px;
  width: 3rem;
  background: #ffbc00;
  display: block;
  margin: 0 auto 1rem auto; }

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3); }

.item {
  position: relative;
  background: #ffbc00;
  overflow: hidden;
  /* Bring in main color */
  /* Scale image on hover */
  /* Bring in text on hover */ }
  .item::after {
    content: '';
    position: absolute;
    display: block;
    background: inherit;
    opacity: 0.9;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scale(2) translateX(-75%) translateY(-75%) rotate(-28deg);
    transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1); }
  .item:hover::after {
    transform: scale(2) translateX(0) translateY(0) rotate(-28deg); }
  .item:hover .item-image {
    transform: scale(1.2); }
  .item:hover .item-text {
    opacity: 1;
    transform: translateY(0); }
  .item-image {
    height: auto;
    transform: translateZ(0);
    transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1); }
  .item-image:before {
    content: '';
    display: block;
    padding-top: 75%;
    overflow: hidden; }
  .item-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    line-height: 0; }
  .item-text {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    text-align: center;
    z-index: 1;
    color: #fff;
    transform: translateY(-20%);
    transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1), transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
    transition-delay: 300ms; }
  .item-text-wrap {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%); }
  .item-text-title {
    font-size: 2rem;
    padding: 0 1rem;
    margin: 5px 0 0 0; }
  .item-text-category {
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.7;
    margin: 0; }

* {
  margin: 0;
  padding: 0; }

body {
  font-family: 'Dosis', sans-serif;
  line-height: 1.6;
  background: #fff; }

a {
  text-decoration: none;
  color: #333; }

ul {
  list-style: none; }

h2, h3, h4 {
  text-transform: uppercase; }

img {
  width: 100%; }

#logo {
  width: 70px;
  height: 70px;
  color: #fff;
  text-transform: uppercase; }

#main-nav {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem; }
  #main-nav ul {
    display: flex; }
  #main-nav li {
    padding: 1rem 1.5rem; }
  #main-nav a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    border-bottom: 3px transparent solid;
    padding-bottom: 0.5rem;
    transition: border-color 0.5s; }
    #main-nav a:hover {
      border-color: #ccc; }
    #main-nav a.current {
      border-color: #ffbc00; }

#header-home {
  background: url("../img/background.jpg") no-repeat center right/cover;
  height: 100vh;
  color: #fff; }
  #header-home .header-content {
    text-align: center;
    padding-top: 20%; }
    #header-home .header-content h1 {
      font-size: 4rem;
      line-height: 1.2; }

#header-inner {
  background: url("../img/background.jpg") no-repeat 20% 30%/cover;
  height: 5.5rem;
  border-bottom: 3px solid #ffbc00; }

#header .bg-main {
  background: #ffbc00;
  color: #fff; }

#home-a .specials {
  margin-top: 3rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr); }
  #home-a .specials .fas {
    color: #ffbc00;
    padding-bottom: 0.4rem; }

#home-b .stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr); }
  #home-b .stats li {
    line-height: 2; }
    #home-b .stats li.stats-title {
      font-size: 1.5rem; }
    #home-b .stats li.stats-number {
      font-size: 2rem;
      font-weight: bold; }
  #home-b .stats div {
    padding: 3rem 0; }
    #home-b .stats div:nth-child(odd) {
      background: #f4f4f4; }
    #home-b .stats div:nth-child(even) {
      background: #ccc; }

#home-c .process {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  text-align: center; }
  #home-c .process-step {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
    background: #ffbc00;
    color: #fff;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    line-height: 15px;
    padding: 1rem;
    transition: all 1s; }
  #home-c .process-icon {
    border-radius: 50%;
    background: #333;
    color: #fff;
    padding: 2rem;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    position: relative;
    transition: all 1s; }
    #home-c .process-icon:hover {
      background: #ffbc00;
      width: 90px;
      height: 90px;
      line-height: 90px; }
      #home-c .process-icon:hover .process-step {
        background: #ffbc00; }

#about-a .about-info {
  display: grid;
  grid-template-columns: 2rem;
  grid-gap: 1.2rem; }

#about-a .bio-image {
  grid-area: bioimage; }

#about-a .bio {
  grid-area: bio;
  border-left: 3px solid #ffbc00;
  padding: 0.8rem; }

#about-a img {
  width: 200px;
  height: 200px;
  margin-right: 0.5rem; }

#about-b .progress {
  overflow: hidden;
  height: 20px;
  background: #ccc;
  border-radius: 5px;
  margin-bottom: 0.3rem; }
  #about-b .progress div {
    height: 100%;
    color: #fff;
    text-align: center;
    background: #ffbc00; }

#about-c .testimonials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem; }
  #about-c .testimonials ul {
    list-style: none;
    margin-top: 1rem;
    display: flex;
    align-items: center; }
  #about-c .testimonials p {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem; }
  #about-c .testimonials img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 0.5rem; }

#contact-a .text-fields {
  display: grid;
  grid-template-areas: 'name email' 'subject phone' 'message message';
  grid-gap: 1.2rem;
  margin-bottom: 1.2rem; }
  #contact-a .text-fields .name-input {
    grid-area: name; }
  #contact-a .text-fields .subject-input {
    grid-area: subject; }
  #contact-a .text-fields .email-input {
    grid-area: email; }
  #contact-a .text-fields .phone-input {
    grid-area: phone; }
  #contact-a .text-fields .message-input {
    grid-area: message;
    height: 100px; }
  #contact-a .text-fields .text-input {
    padding: 0.5rem 1rem; }

#contact-a button[type='submit'] {
  width: 50%; }

#contact-b .contact-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center; }

#main-footer {
  background: #333;
  color: #fff;
  height: 5rem; }
  #main-footer .footer-content {
    display: flex;
    justify-content: space-between;
    height: 5rem;
    align-items: center; }
    #main-footer .footer-content .social .fab {
      margin-right: 1rem;
      border: 2px #fff solid;
      border-radius: 50%;
      height: 20px;
      width: 20px;
      line-height: 20px;
      text-align: center;
      padding: 0.5rem; }
      #main-footer .footer-content .social .fab:hover {
        background: #ffbc00; }
