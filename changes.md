# Requirements for Unit 02 CSS and Bootstrap Homework: Responsive Portfolio

## TO DO
Recreate the portfolio using Bootstrap

2. Using Bootstrap, recreate your portfolio site with the following items:
  2. A main content area
  3. A wallpaper background
  5. A responsive layout
  6. Responsive images

3. In addition, the site must meet the following requirements:
  1. Minimize the use of media queries.
  2. Use Bootstrap's grid system (containers, rows, and columns).
  3. On an `xs` screen, content should take up the entire screen. On `sm` and larger screens, you should have some margins on the left and right sides of the screen. Check out various sites on your mobile device vs. your computer to see examples of these differences.

4. Update the credits to reflect the new tools:
  * Bootstrap
  * Bootstrap documentation
  * https://stackoverflow.com/questions/19733447/bootstrap-navbar-with-left-center-or-right-aligned-items (Showed a code example of how to create a navbar with the branding on the left and the navigation on the right)
  * https://stackoverflow.com/questions/56329671/information-about-bootstrap-4-class-dual-collapse2 explaining that the dual-collapse2 class used in the above example was prorpietary rather than vanilla Bootstrap. (I deleted that class after finding that out.)

5. Submit
  1. GitHub repository with README describing the project
  2. GitHub.io pages rendering the portfolio

## DONE
1. Initial commit and setup
  1. Create the following pages: `index.html`, `portfolio.html` and `contact.html`. 
  2. Add the include for the bootstrap CSS into each of the 3 files. Delete the unreferenced image file. 
  3. Create the assets directory as before. 
  4. Create this file to track the development plan. 

2. Using Bootstrap, recreate your portfolio site with the following items:
  1. A navbar
    * Initial creation on index.html, portfolio.html, contact.html
    * Replaced custom colours with Bootstrap colours
    * Removed all external CSS styling
    * Active tab is now bold instead of a different colour background
  4. A footer
    * Needed to recreate styles.css because Bootstrap doesn't have a built-in class to set the border thickness. Also, because Bootstrap makes many of its classes !important I had to make my override !important too or it didn't have any effect. 

