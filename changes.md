# Requirements for Unit 02 CSS and Bootstrap Homework: Responsive Portfolio

## TO DO
Recreate the portfolio using Bootstrap

2. Using Bootstrap, recreate your portfolio site with the following items:
  5. A responsive layout
     * Improve header (two lines on xs screen, one line left and right aligned on sm and larger screens)
     * Improve main area (on xs fill the area; on sm and larger show more of the wallpaper)

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
  * https://stackoverflow.com/questions/48506610/bootstrap-4-border-utilities for clarifying that Bootstrap doesn't have anything built in and to look out for !important. 
  * https://stackoverflow.com/questions/16466240/adjusting-and-image-size-to-fit-a-div-bootstrap#30252800 for the clarification on bootstrap images

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
  2. A main content area
    * Each page has placeholder content rather than images, forms, etc.
     1. Content in index.html.
     2. Form in contact.html
     3. Portfolio images in portfolio.html.
  3. A wallpaper background
    * Turns out that setting the wallpaper on the grid container doesn't stretch it to
      the edges of the viewport because the container has a max-wdith set. Rather than
      removing that, because keeping it a multiple of 12 is necessary for grid layout,
      I moved the navbar into its own container and wrapped the main content in a new 
      div that only sets the wallpaper. The navbar had to be moved into its own 
      container because it requires a white background and it also has to line up with 
      the left and right of the main container. 
  4. A footer
    * Needed to recreate styles.css because Bootstrap doesn't have a built-in class to set the border thickness. Also, because Bootstrap makes many of its classes !important I had to make my override !important too or it didn't have any effect. 
  5. A responsive layout
     * footer
     * header
     * main area
     * On About page, make the image stretch 100% width when on xs screen. 
     * On xs screen, hide the footer - UNDONE! Realized that other pages showed the footer on xs screens. Portfolio image was cropped due to length.

