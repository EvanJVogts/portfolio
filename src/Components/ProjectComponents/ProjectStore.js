import CSS from '../../Assets/Logos/CSS-Logo.png';
import HTML from '../../Assets/Logos/HTML-Logo.png';
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
    tech: [CSS, HTML],
  },
  {
    id: 1,
    title: '2',
    date: '10/04/93',
    overview: 'Test blah',
    description: 'Description blah',
    stories: 'user stories blahg',
    tech: [CSS]
  }
]
export default ProjectStore