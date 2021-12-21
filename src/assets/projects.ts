import IProject from '../interfaces/IProject';

export const projects: IProject[] = [
    {
        id: 11,
        name: "AirBender",
        description: "AirBender is a website that was created to provide a modern day solution of giving a family member the ability to check the status of their loved one.",
        tools: ["HTML", "CSS", "TypeScript", "Node.js", "MySQL"],
        image: "https://codemasterbrown.github.io/developer-portfolio/assets/images/airb.png",
        site: "https://jalontuttle.github.io/group-project-1/",
        code: "https://github.com/codemasterbrown/group-project-1",
    },
    {
        id: 1,
        name: "Note Taker",
        description: "TThis app allows a user to create and delete, and view previously saved notes. The app uses an Express backend to save and retrive note data from a JSON file. The back end contains the following routes:",
        tools: ["HTML", "CSS", "JavaScript", "Json", "MySQL", "Sequelize"],
        image: "https://codemasterbrown.github.io/developer-portfolio/assets/images/notes.png",
        site: "https://the-note-taker21.herokuapp.com/",
        code: "https://github.com/codemasterbrown/the-note-taker",
    },
    {
        id: 2,
        name: "Calendar App",
        description: "This project is a calendar application that allows a user to plan hourly time blocks in a day.",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "https://codemasterbrown.github.io/developer-portfolio/assets/images/code-quiz.png",
        site: "https://codemasterbrown.github.io/js-code-quiz/",
        code: "https://github.com/codemasterbrown/App-Calendar",
    },
    {
        id: 10,
        name: "Google Books Search and Save",
        description: "Google Books Search and Save is a MERN stack application to search for books using the Google Books API. Users can search for books with the search form. Users can also save a book, which will then appear on the saved books page. Saved books can be viewed or deleted from the database.The application also implements Socket.io messaging to alert all connected users when a book has been saved.",
        tools: ["HTML", "CSS", "JavaScript", "React", "Material UI", "Node.js", "MongoDB", "Mongoose"],
        image: "",
        site: "https://google-search-and-save.herokuapp.com/",
        code: "https://github.com/codemasterbrown/book-searcher",
    },


]