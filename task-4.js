// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

const courses = [

  {
    name: "Basic HTML+CSS", 
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],  
  },

  {
    name: "Intermediate HTML+CSS",  
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },

  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ]
  },
  
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",    
      "NPM",    
      "Bundlers",    
      "Transpiling",    
      "Git",    
      "Promises",    
      "AJAX",    
      "GitHub",
    ]
  },
];

const allTopics = courses.flatMap(course => course.topics)
                          .filter((course, index, courses) => courses.indexOf(course) === index);

console.log(allTopics);