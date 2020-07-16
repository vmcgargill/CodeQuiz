/// Questions Array ///
let questions = [
    {
        question: "What is HTML?",
        A: "Hypertext Markup Language",
        B: "A styling language",
        C: "A microsoft word document",
        D: "A website",
        answer: "Hypertext Markup Language" 
    },
    {
        question: "What is JavaScript?",
        A: "Hyper text transfer protocal",
        B: "A programming language",
        C: "A computer application",
        D: "An addressbook for the internet",
        answer: "A programming language"
    },
    {
        question: "What is CSS?",
        A: "An internet web browser",
        B: "A control system",
        C: "Casscading Style Sheet",
        D: "A software program",
        answer: "Casscading Style Sheet"
    },
    {
        question: "What is an API?",
        A: "A programming language",
        B: "A database",
        C: "Application Programming Interface",
        D: "HTML navigation bar",
        answer: "Application Programming Interface"
    },
    {
        question: "What is an XML?",
        A: "A runtime environment",
        B: "Operating System",
        C: "A company",
        D: "Extensible Markup Language",
        answer: "Extensible Markup Language"
    },
    {
        question: "What is Python?",
        A: "A Snake",
        B: "High-level programming language",
        C: "The language that Lord Voldemort speaks",
        D: "A type of web browser",
        answer: "High-level programming language"
    },
    {
        question: "What is JSON?",
        A: "A method that HTML gets CSS",
        B: "A JavaScript function",
        C: "JavaScript Object Notation",
        D: "My friend named Jason",
        answer: "JavaScript Object Notation"
    },
    {
        question: "What is Object Oriented Programming?",
        A: "A programming paradigm that involves objects and datasets",
        B: "An application that uses physical objects",
        C: "A website that displays pictures of objects",
        D: "An object that is used to write programs",
        answer: "A programming paradigm that involves objects and datasets"
    },
    {
        question: "What is git?",
        A: "The word 'get' but mispelled",
        B: "A programming language",
        C: "Distributed version control system that tracks changes",
        D: "Web application",
        answer: "Distributed version control system that tracks changes"
    },
    {
        question: "What is MySQL?",
        A: "An acronym for my squirrel",
        B: "HTML framework",
        C: "CSS framework",
        D: "Open source relational database system",
        answer: "Open source relational database system"
    },
    {
        question: "How do you run JavaScript code outside of browsers such as FireFox or Google Chrome?",
        A: "By using Java",
        B: "Switch web browsers",
        C: "By using runtime environments such as node.js",
        D: "By running a function outside of object oriented programming",
        answer: "By using runtime environments such as node.js"
    },
    {
        question: "What is bootstrap?",
        A: "Desktop app",
        B: "Web app",
        C: "Open source CSS framework for responsive websites",
        D: "A strap for your boot",
        answer: "Open source CSS framework for responsive websites"
    },
    {
        question: "How do you store data on a local machine using JavaScript?",
        A: "localStorage.setItem()",
        B: "localStorage.getItem()",
        C: "localStorage.removeItem()",
        D: "localStorage.clear()",
        answer: "localStorage.setItem()"
    },
    {
        question: "How do you access data on a local machine using JavaScript?",
        A: "localStorage.setItem()",
        B: "localStorage.getItem()",
        C: "localStorage.removeItem()",
        D: "localStorage.clear()",
        answer: "localStorage.getItem()"
    },
    {
        question: "How do you delete data on a local machine using JavaScript?",
        A: "localStorage.setItem()",
        B: "localStorage.getItem()",
        C: "localStorage.removeItem()",
        D: "None of the above",
        answer: "localStorage.removeItem()"
    },
    {
        question: "How do you clear ALL data on a local machine using JavaScript?",
        A: "localStorage.setItem()",
        B: "localStorage.getItem()",
        C: "localStorage.removeItem()",
        D: "localStorage.clear()",
        answer: "localStorage.clear()"
    },
    {
        question: "What is a JavaScript Array?",
        A: "A collection",
        B: "A feature on GitHub",
        C: "Stores objects with collection of the same elements",
        D: "Website feature",
        answer: "Stores objects with collection of the same elements"
    },
    {
        question: "What is a JavaScript Object?",
        A: "A div container",
        B: "Collection of properties with names, keys, and values",
        C: "An image URL",
        D: "Database",
        answer: "Collection of properties with names, keys, and values"
    },
    {
        question: "How do you access database information on the web?",
        A: "Create local database",
        B: "Loading a local database",
        C: "By asking for permission",
        D: "By using APIs",
        answer: "By using APIs"
    },
    {
        question: "Which language is used to build a website?",
        A: "HTML",
        B: "CSS",
        C: "JavaScript",
        D: "All of the above",
        answer: "All of the above"
    },
    {
        question: "Which language is used to style a website?",
        A: "HTML",
        B: "CSS",
        C: "JavaScript",
        D: "All of the above",
        answer: "CSS"
    },
    {
        question: "Which language creates electronic documents?",
        A: "HTML",
        B: "CSS",
        C: "JavaScript",
        D: "All of the above",
        answer: "HTML"
    },
    {
        question: "Which language is used to make websites responsive and interactive?",
        A: "HTML",
        B: "CSS",
        C: "JavaScript",
        D: "All of the above",
        answer: "JavaScript"
    },
    {
        question: "What is C#?",
        A: "A general purpose programming language",
        B: "A website",
        C: "A letter and a pound sign",
        D: "A typo",
        answer: "A general purpose programming language"
    },
    {
        question: "What is C++?",
        A: "Math equation",
        B: "Javascript Function",
        C: "Mobile App",
        D: "A general purpose programming language",
        answer: "A general purpose programming language"
    },
    {
        question: "What is JQuery?",
        A: "A programming language",
        B: "An object",
        C: "JavaScript library",
        D: "A question",
        answer: "JavaScript library"
    },
    {
        question: "What is NoSql?",
        A: "Programming Language",
        B: "Web API",
        C: "Type of database",
        D: "Acronym for No Squirrel",
        answer: "Type of database"
    },
    {
        question: "What is the difference between MySQL and NoSql?",
        A: "They have different tables",
        B: "MySQL sores data and NoSQL distributes it",
        C: "MySQL is a relational database, NoSQL is non-relational",
        D: "They are both the same",
        answer: "MySQL is a relational database, NoSQL is non-relational"
    },
    {
        question: "Which of the following is a cloud-based platform that can be used to deploy apps for businesses?",
        A: "Amazon AWS",
        B: "Microsoft Azure",
        C: "Heroku",
        D: "All of the above",
        answer: "All of the above"
    },
    {
        question: "What is Laravel?",
        A: "App extension",
        B: "Browser extension",
        C: "Open source PHP framework",
        D: "API",
        answer: "Open source PHP framework"
    },
    {
        question: "What is PHP?",
        A: "Hypertext Preprocessor",
        B: "Desktop app",
        C: "HTML Framework",
        D: "Database",
        answer: "Hypertext Preprocessor"
    },
    {
        question: "What does VPN stand for?",
        A: "Virtual Processor Network",
        B: "Virtual Privacy Neutrality",
        C: "Virtual Public Network",
        D: "Virtual Private Network",
        answer: "Virtual Private Network"
    },
    {
        question: "What does MVC stand for?",
        A: "Manual View Control",
        B: "Model View Control",
        C: "Made View Central",
        D: "Math Version Control",
        answer: "Model View Control"
    },
    {
        question: "What does SQL stand for?",
        A: "Standard Query Labeling",
        B: "Structured Query Labeling",
        C: "Standard Query Language",
        D: "Structured Query Language",
        answer: "Structured Query Language"
    },
    {
        question: "What does DNS stand for?",
        A: "Domain Name System",
        B: "Domain Name Server",
        C: "Domain Number System",
        D: "Dictionary Name System",
        answer: "Domain Name System"
    },
    {
        question: "What does IP stand for?",
        A: "Information Protocol",
        B: "Internet Page",
        C: "Input",
        D: "Internet Protocol",
        answer: "Internet Protocol"
    },
    {
        question: "Which of the following is a library that is often used to build user interfaces?",
        A: "Apache servers",
        B: "MongoDB",
        C: "React.js",
        D: "JSON",
        answer: "React.js"
    },
    {
        question: "Database ______ is a broad topic about how data is stored and used in management systems.",
        A: "Apache servers",
        B: "Theory",
        C: "Relativity",
        D: "Organization",
        answer: "Theory"
    },
    {
        question: "______ Line is an interface used to execute certain commands on a computer.",
        A: "Server",
        B: "Computer",
        C: "Program",
        D: "Command",
        answer: "Command"
    },
    {
        question: "What does MERN Stack involve?",
        A: "React",
        B: "Express",
        C: "Node.js",
        D: "All of the above",
        answer: "All of the above"
    },
    {
        question: "Which of the following languages is object oriented?",
        A: "HTML",
        B: "Java",
        C: "CSS",
        D: "XML",
        answer: "Java"
    },
    {
        question: "True or False: MongoDB is considered NoSQL.",
        A: "True",
        B: "False",
        C: "MongoDB is a relational database",
        D: "MongoDB is considered to be MySQL",
        answer: "True"
    },
    {
        question: "True or False: Express.js is a web app framework for Node.js?.",
        A: "True",
        B: "False",
        C: "Express.js is a database",
        D: "All answers above are wrong",
        answer: "True"
    },
    {
        question: "Fill in the blank: <br> A JavaScript data interchange format",
        answer: "json",
        fillin: true
    },
    {
        question: "Fill in the blank: <br> We use ____ to structure a web page.",
        answer: "html",
        fillin: true
    },
    {
        question: "Fill in the blank: <br> We use ____ for colors, fonts, padding, margin, position, and style.",
        answer: "css",
        fillin: true
    },
    {
        question: "Fill in the blank what DB stand for:",
        answer: "database",
        fillin: true
    },
    {
        question: "Fill in the blank: <br> _______ is a document database",
        answer: "mongodb",
        fillin: true
    },
    {
        question: "Fill in the blank: <br> A _______ database contains items with pre-defined relationships between them.",
        answer: "relational",
        fillin: true
    },
    {
        question: "Fill in the blank: <br> You can push/pull code, open additional branches on a project, and even track changes using ___.",
        answer: "git",
        fillin: true
    }
]