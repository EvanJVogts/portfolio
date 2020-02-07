import CSS from '../../Assets/Logos/CSS-Logo.png';
import HTML from '../../Assets/Logos/HTML-Logo.png';
import JS from '../../Assets/Logos/JS-Logo.png';
import ReactJS from '../../Assets/Logos/reactjs-Logo.png';
import NodeJS from '../../Assets/Logos/nodejslogo.png';
import ExpressJS from '../../Assets/Logos/express-logo.png';
import PostgreSQL from '../../Assets/Logos/postgreSQL.png';
import QuizApp from '../../Assets/Project-docs/quizApp/QuizApp1.png';
import BookmarksApp from '../../Assets/Project-docs/bookmarksApp/BookmarksApp1.png';
import WatchDog from '../../Assets/Project-docs/WatchDog/WDscreenshot.png';
import Semper from '../../Assets/Project-docs/Semper/semperScreen.png';
import DearBeer from '../../Assets/Project-docs/DearBeer/dearBeerScreen.png';

const ProjectStore = [
  {
    id: 0,
    title: 'Rock and Roll Quiz',
    date: '9/24/2019',
    overview: 'A web quiz app',
    description: 'An interactive quiz app taking the user through ' +
    'a series of five multiple choice questions on the topic of Rock ' + 
    'and Roll history.',
    stories: 'Upon starting the quiz, the first question, ' +
    'is rendered along with a list of multiple choices the user can select from. ' +
    'After submitting an answer, the user ' +
    'receives feedback on their answer. If correct, the app adds a point ' +
    'to their score and prompts the user to move on. If incorrect, the ' +
    'correct answer is rendered, and the user is prompted to move on. ' +
    'At the end of the quiz, the user is given their total score, and an ' +
    'option to retake the quiz.',
    tech: [CSS, HTML, JS],
    screenshot: QuizApp,
    frontRepo: 'https://github.com/thinkful-ei-heron/Evan-Larry_Quiz-App',
    backRepo: '',
    liveLink: 'https://thinkful-ei-heron.github.io/Evan-Larry_Quiz-App/',
  },
  {
    id: 1,
    title: 'Bookmarks App',
    date: '10/04/2019',
    overview: 'An app  to keep track of your bookmarks',
    description: 'A client-side bookmarking application that allows users to save' +
    ' bookmarks to their favorite sites by utilizing a RESTful Web API on the backend.',
    stories: 'The initial landing for the app greets the user ' +
    'with a condensed view of their bookmark list, if they have already added some, as well as an ' +
    '‘Add New Bookmark’ button, and a filter option. By clicking on the ‘New Bookmark +’ button, the ' + 
    'user asked to submit a title, URL, description, and rating for the new bookmark before submitting ' + 
    'it to the API, or cancelling, to return to their current list of bookmarks. The filter dropdown ' + 
    'menu allows the user to filter their current bookmarks by minimum rating, allowing them to sort ' +
    'their sites more easily. The user can also click on a current bookmark to toggle a more detailed ' +
    'view, and display the description, a visit site button, as well as an option to remove their bookmark ' +
    'from the list.',
    tech: [CSS, HTML, JS],
    screenshot: BookmarksApp,
    frontRepo: 'https://github.com/thinkful-ei-heron/Evan-Bookmark_App',
    backRepo: '',
    liveLink: 'https://thinkful-ei-heron.github.io/Evan-Bookmark_App/',
  },
  {
    id: 2,
    title: 'WatchDog',
    date: '12/30/2019',
    overview: 'The place to keep track of all your favorite movies!',
    description: 'An app that is to be used as a log for any and all movies the user has seen, or intends to see.',
    stories: 'New users are able to register for a new account, or log into an existing account. The user can then add movies to their list. ' +
    'If the user has not seen the movies yet, they can mark it as a movie they wish to watch, as well as where it is available to watch. ' +
    'If the user has just watched a movie, they can add a new movie or edit an existing movie they had as a movie they wished to see, and are then able to rate the movie, favorite the movie, and add any additional comments they may have.' +
    ' Once the user has a list of movies, they can view their to-see movies list, watched movies list, and favorite movies list from their dashboard.',
    tech: [CSS, HTML, JS, ReactJS, NodeJS, PostgreSQL, ExpressJS],
    screenshot: WatchDog,
    frontRepo: 'https://github.com/EvanJVogts/Watchdog-client',
    backRepo: 'https://github.com/EvanJVogts/WatchDog-Server',
    liveLink: 'https://watchdog.now.sh/',
  },
  {
    id: 3,
    title: 'SemperUbiSubUbi',
    date: '01/03/2020',
    overview: 'Learn latin through spaced repitition',
    description: 'This application is a platform for learning latin through the spaced repetition method. This method is known to help with memorization, and makes learning languages much easier.',
    stories: 'Users can sign up, login, and are presented with a dashboard containing a list of words they will learn. The user can then press "Start Practicing" to be given a Latin word that they must translate. The app keeps track of score for each word, as well as their total score.',
    tech: [CSS, HTML, JS, ReactJS, NodeJS, PostgreSQL, ExpressJS],
    screenshot: Semper,
    frontRepo: 'https://github.com/reifnotreef/spaced-rep-evan-reif',
    backRepo: 'https://github.com/reifnotreef/spaced-rep-api-evan-reif',
    liveLink: 'https://spaced-rep-evan-reif.now.sh/register',
  },
  {
    id: 4,
    title: 'DearBeer',
    date: '01/25/2020',
    overview: "DeerBear is a functional user friendly application for avid beer drinkers and aren't afraid to try new beers!",
    description: 'This application is intended to be used for beer drinkers to log all the different beers they have tried',
    stories: 'The app allows users to register and login. Once the user has entered their account, they are able to begin building their list of beers. The app will then provide the user with a detailed dashboard, where the user can see all their beers, and sort, filter or search for the beer of their choosing. The user is also able to customize the layout of the dashboard to their pleasing. The app is also linked to the Google maps API allowing users to mark exactly where they drank beer, as well as new places they might want to visit to try new beers.',
    tech: [HTML, CSS, JS, ReactJS, NodeJS, PostgreSQL, ExpressJS],
    screenshot: DearBeer,
    frontRepo: 'https://github.com/thinkful-ei-heron/Group4-Capstone-3',
    backRepo: 'https://github.com/thinkful-ei-heron/Group4-Capstone3-API',
    liveLink: 'https://dearbeer.now.sh/',
  },
  // {
  //   id: 0,
  //   title: '',
  //   date: '00/00/0000',
  //   overview: '',
  //   description: '',
  //   stories: '',
  //   tech: [],
  //   screenshot: null,
  //   repoLinks: [''],
  //   liveLink: '',
  // },
]
export default ProjectStore