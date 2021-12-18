const FEATURE_DATA = [
  {
    id: 1,
    imgUrl: "",
    introduce:  {
      title: '',
      summary: 'Features to help your team succeed',
      description: 'Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.'
    },
    learnMore: {}
  },
  {
    id: 2,
    imgUrl: require("../../../assest/feature/view.svg"),
    introduce: {
      title: 'CHOOSE A VIEW',
      summary: 'The board is just the beginning',
      description: 'Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.'
    },
    learnMore: 
      {
        description: 'You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:',
        item: [
          'Use a Timeline view for project planning',
          'Calendar helps with time management',
          'Table view connects work across boards',
          'See board stats with Dashboard, and more!'
        ]
      }
    
  },
  {
    id: 3,
    imgUrl: require("../../../assest/feature/card-back.svg"),
    introduce: {
      title: 'DIVE INTO THE DETAILS',
      summary: 'Cards contain everything you need',
      description: 'Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.'
    },
    learnMore: 
      {
        description: 'Spin up a Trello card with a click, then uncover everything it can hold. Break down bigger card tasks into steps with file attachment previews, reminders, checklists and comments—emoji reactions included! Plus, gain powerful perspective by seeing all cards by list and status at the board level.',
        item: [
          'Manage deadlines',
          'Provide and track feedback',
          'Assign tasks and hand off work'
        ]
      }
    
  },
  {
    id: 4,
    imgUrl: require("../../../assest/feature/automation.png"),
    introduce: {
      title: 'MEET YOUR NEW BUTLER',
      summary: 'No-code automation',
      description: 'Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.'
    },
    learnMore: 
      {
        description: 'Butler uses natural language commands to automate just about any task in Trello:',
        item: [
          'Automate common actions like moving lists',
          'Create custom buttons to build process quickly',
          'Surface upcoming deadlines to the team',
          'Schedule teammate assignments, and more!'
        ]
      }
    
  }
];

export default FEATURE_DATA;