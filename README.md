# **HORROR TOP TRUMPS**

Based on the popular card game of the late 80s called top trumps.

This game seeks to give a flavour of the game using some basic javascript.
The subject matter is famous horror film villains.

![](assets/images/toptriumps-amiresponsive.png)
[Horror Top Trumps Live Site](https://jeffreybull76.github.io/CI_project2/)

-----------------------------------------

## [**Table of Contents**](<#table-of-contents>)
   [**Early Concept / User Experience**](<#early-concept>)
   * [**Design Ethos**](<#design-ethos>)
   * [**Typography**](<#typography>)
   * [**Colors**](<#colors>)
   * [**Coding**](<#coding>)

## [**Development Process**](<#development-process-1>)
   * Git Commits
   * Code Comments

# [**FINAL DESIGN**](<#final-design-1>)

## [**Features**](<#features-1>)
   * [**Landing Page**](<#landing-page>)
   * [**Game Page**](<#game-page>)
   * [**Future roadmap**](<#future-roadmap>)

## [**TECHNOLOGY**](<#technology-1>)
   * HTML5
   * CSS
   * Javascript
   * Gitpod
   * Github
   * GIMP
   * Midjourney

## [**TESTING**](<#testing-1>)
   * [**W3C HTML**](<#w3c-html>)
   * [**JIGSAW**](<#jigsaw-css>)
   * [**JSHINT**](<#jshint>)
   * [**LIGHTHOUSE**](<#lighthouse>)
   * [**UNFIXED BUGS**](<#unfixed-bugs>)

## [**DEPLOYMENT**](<#deployment-1>)
   * To Deploy
   * To Fork
   * To Clone

## [**CONTENT**](<#content-1>)
   * Media & 3rd Party resources

## [**FINAL THOUGHTS**](<#final-thoughts-1>)
   * Lessons learned
   * Acknowledgements

## Early Concept

   * ### Design Ethos
   * The basic design required a simple landing page and a link to the game page
      * I wanted this to have a gothic horror feel in terms of design
      * Midjourney was used to create the graphical elements
      * I wanted the experience to be clear and concise
   * I decided early on to not follow a specific tutorial to build the game. I wanted the experience (for better and worse) of writing something from the ground up. As is detailed below I did use a pre-written randomise function and simply adapted it to the game.
   
   * ## Rough Test Version
   ![](assets/images/toptriumps-earlyconcept.png)
   * [Link to live site](https://jeffreybull76.github.io/Card_Array_Test/)
   * [Link to git repo](https://github.com/JeffreyBull76/Card_Array_Test)
   
   
   * The above is the first very rough mock up of how the game page might look. 
   * Bold colours were used for test purposes and all code has console logs left in
   * Code comments were left out as it was purely for my own use. It is provided here to show how the concept went from that to what the site ended up with.
   * I felt it important to test the actual concept outside of writing the project for real to see if it was something I could feasibly complete.
   * You will note this version uses more crude methods such as timeouts to progress the game and has a different win condition (among many other changes) 

[Go back](<#table-of-contents>)
-----------------------------------------

 * ### Typography
 * The fonts chose for the site were
      * Alice from googlefonts - Using the standard embedded code method
      * New Rocker from font squirrel - This required using their onsite webfont generator and uploading the files to my repo
 * Fonts were chosen to keep in line with the gothic horror feel while remaining readable.

[Go back](<#table-of-contents>)
-----------------------------------------

 * ### Colors
 * The following general color palette was chosen. I wasn't able to narrow this down to 4 specific colours as heavy detailed raster graphics are used extensively so it felt wrong. But overall the colours used fall into the following general tones.
     * Bone color / yellowy off white
     * Dark black 
     * Reds
 * These were picked to keep in line with the graphical elements and create a washed out dark gothic feeling.
 
[Go back](<#table-of-contents>)
-----------------------------------------

 * ### Coding
 * All code was written from scratch except were explicitly stated below:

   * The splice method was taken from here and adapted for use in my code
     * [Splice method guide](https://thewebdev.info/2022/06/26/how-to-split-array-into-two-arrays-with-javascript/)
 
   * The randomiser code was taken from here and used to shuffle the card array ready for splicing. This was required so that the cards for each player were different each game
     * [Randomiser code](https://javascript.info/task/shuffle)
 
   * The text shadows were created using this code generator 
     * [Text shadow generator](http://owumaro.github.io/text-stroke-generator/)

   * Lessons learned - As the functions and interactions of the game becmae more complex from the test to live version, many errors were introduced relating to calling functions in the correct order. I attempted to keep the code as clear as possible from errors, but as I was learning while doing it there are some areas of code are probably far more complex and less concise than is required.

[Go back](<#table-of-contents>)
-----------------------------------------

* ### Development process
* Git Commits - I attempted to commit often especially with the complexity of the JS      
* Code Comments - Comments have been added to all files to make future editing easier
* JS comments - I left fairly verbose comments in to describe the more complex code blocks
* What I'd do differently - More so than the first project I feel this one taught me how complex code become and how adding seemingly small features or ideas can exponentially balloon the complexity of said code out of control. This was a very simply 1 page game, I can see clearer than before how a methodical and clear process would be paramount on a project of any real size.
   
[Go back](<#table-of-contents>)
-----------------------------------------

# **FINAL DESIGN**

## Features

* ### Landing page 
* An early decision was made to have two simple versions of the site across all browsers. As the images used are all detailed raster graphics I needed to avoid ugly resizing. I felt a mobile or 'small screen' version under 768px in size and a single layout for all screen sizes above that was best.
* The site was designed mobile first and then a media query is used to restyle elements on larger screens. 
* I Received feedback on various early drafts about making the rules clearer. Hopefully the final design conveys the rules of the game in a more concise way.
* As this page is mostly static I encountered very few problems coding it. Fixed sizes were used to minimise scaling and display issues.
* See below for visual examples

* Full size landing page 
* ![](assets/images/toptriumps-finaldesign.png)
[Horror Top Trumps Landing Page](https://jeffreybull76.github.io/CI_project2/)
* Mobile size landing page 
* ![](assets/images/toptriumps-finaldesignmob.png)

-----------------------------------------
   
* ### Game page
* The meat and potatoes (so to speak) of the project rests here. This went through numerous ittertions. 
* The full size version was easier to design, it simply needed the two cards to be displayed in the game area side by side with the computers card hidden.
* This was achieved with a mixture of CSS styles and template literals passed by the JS code to the live page on user interaction.
     * On load the array of cards (held in a separate JS file) is randomly shuffled and the spliced into two decks of 20, these are held in two arrays the player and computer deck.
     * Once done the 'play cards' function runs (inside the listeners function), this sets the 'active card' for each player by grabbing the first card from each deck.
     * Then it loads the values of those cards into the HTML so the player can see their card. Also this 'hides' the computers card setting its 'hidden' values to true. 
         * Within this a template literal was used for loading responsive images which changed based on browser size.
     * Each round starts when the player selects a number. It first sets the active field with a fairly simple function, this was done to prevent multiple fields being clicked. By having the active field stored in its own variable I was able to isolate the players selection, then remove the listeners until a new card was dealt.
     * It then runs two other functions and 'flips' the computer card by changing its background image.
         * It then runs the 'playcards' function and then the 'determine winner' function in turn
         * 
     * It changes the background image and unhides the text & image elements of the computers card, to give an illusion of the card being turned over. 
     * On doing so the JS adds the clicked field to a variable which is then passed to a function which does a few things
         * It first checks if the game is over by tracking the first to 21 points
         * If this is not the case it then runs through 

* Full size Game page 
* ![](assets/images/toptriumps-finaldesign2.png)
* [Horror Top Trumps Game Page](https://jeffreybull76.github.io/CI_project2/gamepage.html)
* Mobile size landing page 
* ![](assets/images/toptriumps-finaldesignmob2.png)

-----------------------------------------

* ### Future roadmap

![]()

[Go back](<#features>)
-----------------------------------------

* ## Future roadmap

[Go back](<#features>)
-----------------------------------------
* ## Technology
   * HTML - used for main structure of site
   * CSS - external stylesheet used to apply visual style, effect and functionality to the html
   * Javascipt - two external sheets for game code
   * GIThub - used for hosting and editing the site via a repository
   * GITpod - used to deploy the site and edit the code via a workspace in chrome
   * GIMP - open source raster image editing software used to alter, crop and scale the photographic elements
   * Midjourney - Used for creating art assets

[Go back](<#table-of-contents>)
-----------------------------------------

* ## Testing

* ### W3C HTML

* ### JIGSAW CSS

* ### JSHINT

* ### Lighthouse
   * See output for lighthouse tests on each page

  *  Landing Page
  *  ![]()
   
  *  Game page
  *  ![]()
   
* ### Unfixed bugs

[Go back](<#table-of-contents>)
-----------------------------------------

* ## Deployment

   * The site was deployed to GitHub pages. The steps to deploy are as follows: 
   * In the GitHub repository, navigate to the Settings tab 
   * From the source section drop-down menu, select the Master Branch
   * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
      * The live link can be found - [Here](https://jeffreybull76.github.io/CI_Project2/index.html)

* ### Forking the repository
   * A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and changes can be made to the copy without affecting the original repository. Take the following steps to fork the repository;
   * Log in to GitHub and locate the repository.
   * On the right hand side of the page inline with the repository name is a button called 'Fork', click on the button to create a copy of the original repository in your GitHub Account.

* ### Cloning the repository
   * Under the repo’s name, click on the code tab.
   * In the Clone with HTTPS section, click on the clipboard icon to copy the given URL.
   * In your IDE of choice, open Git Bash.
   * Change the current working directory to the location where you want the cloned directory to be made.
   * Type git clone, and then paste the URL copied from GitHub.
   * Press enter and the local clone will be created.

[Go back](<#table-of-contents>)
-----------------------------------------

* ## Content
* ADD DETAILS OF SITE CONTENT HERE 

[Go back](<#table-of-contents>)
-----------------------------------------

* ## Final Thoughts
* THANK YOUS, THOUGHTS, GENERAL COMMENTS
 
[Go back](<#table-of-contents>)
-----------------------------------------
