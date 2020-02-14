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
    date: 'CSS, HTML, JS',
    overview: 'A web quiz app',
    description: 'An interactive quiz app taking the user through ' +
    'a series of five multiple choice questions on the topic of Rock ' + 
    'and Roll history.',
    stories: 'Upon starting the quiz, the first question ' +
    'is rendered along with a list of multiple choice answers the user can select from. ' +
    'After submitting an answer, the user ' +
    'will receive the appropriate feedback. If correct, the app adds a point ' +
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
    date: 'CSS, HTML, JS',
    overview: 'An app  to keep track of your bookmarks',
    description: 'A client-side bookmarking application that allows users to save' +
    ' bookmarks to their favorite sites by utilizing a RESTful Web API on the backend.',
    stories: 'The initial landing for the app greets the user ' +
    'with a condensed view of their bookmark list, if the user has already added bookmarks. Above the list, ' +
    'an ‘Add New Bookmark’ button is prominently displayed along side a filter option. By clicking on the ‘New Bookmark +’ button, the ' + 
    'user is asked to submit a title, URL, description, and rating for the new bookmark before submitting ' + 
    'it to the API, or if they so choose cancelling, and returning to their current list of bookmarks. The filter dropdown ' + 
    'menu allows the user to filter their current bookmarks by minimum rating, allowing them to navigate to the site they desire ' +
    'even more easily. The user can also click on a current bookmark to toggle a more detailed ' +
    'view, which displays the site description, a visit site button, as well as an option to remove their bookmark ' +
    'from the bookmark list.',
    tech: [CSS, HTML, JS],
    screenshot: BookmarksApp,
    frontRepo: 'https://github.com/thinkful-ei-heron/Evan-Bookmark_App',
    backRepo: '',
    liveLink: 'https://thinkful-ei-heron.github.io/Evan-Bookmark_App/',
  },
  {
    id: 2,
    title: 'WatchDog',
    date: 'CSS, HTML, JS, ReactJS, NodeJS, PostgreSQL, ExpressJS',
    overview: 'The place to keep track of all your favorite movies!',
    description: 'An app that is to be used as a log for any and all movies the user has seen, or intends to see.',
    stories: 'New users are able to register for a new account, or log into an existing account. ' +
    'If the user has not seen the movies yet, they can mark it as a movie they wish to watch, as well as designate where it is available to watch. ' +
    'When the user watches a new movie, they can select the "add new movie" button or edit an existing movie they had as a movie they wished to see. ' +
    'Once the user has a list of movies, they can view their to-see movies list, watched movies list, and favorite movies list from their dashboard.',
    tech: [CSS, HTML, JS, ReactJS, NodeJS, PostgreSQL, ExpressJS],
    screenshot: WatchDog,
    frontRepo: 'https://github.com/EvanJVogts/Watchdog-client',
    backRepo: 'https://github.com/EvanJVogts/WatchDog-Server',
    liveLink: 'https://watchdog.now.sh/',
  },
  {
    id: 3,
    title: 'SemperUbiSubUbi',
    date: 'CSS, HTML, JS, ReactJS, NodeJS, PostgreSQL, ExpressJS',
    overview: 'Learn Latin through spaced repitition',
    description: 'This application is a platform for learning Latin through the spaced repetition method. This method is known to help with memorization, and makes learning languages much easier.',
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
    date: 'HTML, CSS, JS, ReactJS, NodeJS, PostgreSQL, ExpressJS',
    overview: "For avid beer drinkers that aren't afraid to try new beers!",
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