// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let currentDay = $('#currentDay');

let hourTime = dayjs().format("H");

let today = dayjs();

// handle displaying the date
// function displayDate() {
//     var rightNow = today.format('MMM D, YYYY');
//     currentDay.text(rightNow);
// }

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    

    // Save button

    // $("#hour-9-save").click(function(){
    //     console.log("hour 9 save clicked");

    //     let inputText = $('#hour-9-text');
    //     let totalTasks = JSON.parse(localStorage.getItem("hour9-tasks")) || [];
    
    //     let saveText = inputText.value;
    //     setSaveText(saveText);
        
    
    //     function setSaveText(saveText) {
    //         let tasks = {
    //             inputText: saveText,
    //         }
            
    //         totalTasks.push(tasks);
    //         localStorage.setItem("hour9-tasks", JSON.stringify(totalTasks));
         
    //     }

    //     inputText.textContent = totalTasks[i].inputText;


    //   });

    $(".saveBtn").click(function(){
        console.log("save clicked");



        // let inputText = $('.description');
        // let totalTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        // let saveText = inputText.value;
        // setSaveText(saveText);
        
        
        // // this.appendChild(scoreCard);
    
        
        
        // function setSaveText(saveText) {
        //     let tasks = {
        //         inputText: saveText,
        //     }
            
        //     totalTasks.push(tasks);
        //     console.log('total tasks', totalTasks);
        //     localStorage.setItem("tasks", JSON.stringify(totalTasks));
         
        // }

    });

    // Reads projects from local storage and returns array of project objects.
    // Returns an empty array ([]) if there aren't any projects.
    // function readProjectsFromStorage() {
    //     var projects = localStorage.getItem('projects');
    //     if (projects) {
    //     projects = JSON.parse(projects);
    //     } else {
    //     projects = [];
    //     }
    //     return projects;
    // }
    
    // // Takes an array of projects and saves them in localStorage.
    // function saveProjectsToStorage(projects) {
    //     localStorage.setItem('projects', JSON.stringify(projects));
    // }
    
    // // Gets project data from local storage and displays it
    // function printProjectData() {
    //     // clear current projects on the page
    //     projectDisplayEl.empty();
    
    //     // get projects from localStorage
    //     var projects = readProjectsFromStorage();

    //     // Save the index of the project as a data-* attribute on the button. This
    //     // will be used when removing the project from the array.
    //     var deleteEl = $(
    //         '<td><button class="btn btn-sm btn-delete-project" data-index="' +
    //         i +
    //         '">X</button></td>'
    //     );

    //     // append elements to DOM to display them
    //     rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    //     projectDisplayEl.append(rowEl);
    // }
    // }
        
    // // Removes a project from local storage and prints the project data
    // function handleDeleteProject() {
    //     var projectIndex = parseInt($(this).attr('data-index'));
    //     var projects = readProjectsFromStorage();
    //     // remove project from the array
    //     projects.splice(projectIndex, 1);
    //     saveProjectsToStorage(projects);
    
    //     // print projects
    //     printProjectData();
    // }
    
    // // Adds a project to local storage and prints the project data
    // function handleProjectFormSubmit(event) {
    //     event.preventDefault();
    
    //     // read user input from the form
    //     var projectName = projectNameInputEl.val().trim();
    //     var projectType = projectTypeInputEl.val(); // don't need to trim select input
    //     var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format
    
    //     var newProject = {
    //     name: projectName,
    //     type: projectType,
    //     date: projectDate,
    //     };
    
    //     // add project to local storage
    //     var projects = readProjectsFromStorage();
    //     projects.push(newProject);
    //     saveProjectsToStorage(projects);
    
    //     // print project data
    //     printProjectData();
    
    //     // clear the form inputs
    //     projectNameInputEl.val('');
    //     projectTypeInputEl.val('');
    //     projectDateInputEl.val('');
    // }
    
    // projectFormEl.on('submit', handleProjectFormSubmit);
    
    // // Use jQuery event delegation to listen for clicks on dynamically added delete
    // // buttons.
    // projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);
    
    // displayTime();
    // setInterval(displayTime, 1000);
    
    // printProjectData();

    // changing block colors (class) based on the current time
    if(hourTime > 9) {
        $("#hour-9").addClass("past");
    } else if (hourTime < 9) {
        $("#hour-9").addClass("future");
    } else {
        $("#hour-9").addClass("present");
    }

    if(hourTime > 10) {
        $("#hour-10").addClass("past");
    } else if (hourTime < 10) {
        $("#hour-10").addClass("future");
    } else {
        $("#hour-10").addClass("present");
    }

    if(hourTime > 11) {
        $("#hour-11").addClass("past");
    } else if (hourTime < 11) {
        $("#hour-11").addClass("future");
    } else {
        $("#hour-11").addClass("present");
    }

    if(hourTime > 12) {
        $("#hour-12").addClass("past");
    } else if (hourTime < 12) {
        $("#hour-12").addClass("future");
    } else {
        $("#hour-12").addClass("present");
    }

    if(hourTime > 13) {
        $("#hour-13").addClass("past");
    } else if (hourTime < 13) {
        $("#hour-13").addClass("future");
    } else {
        $("#hour-13").addClass("present");
    }

    if(hourTime > 14) {
        $("#hour-14").addClass("past");
    } else if (hourTime < 14) {
        $("#hour-14").addClass("future");
    } else {
        $("#hour-14").addClass("present");
    }

    if(hourTime > 15) {
        $("#hour-15").addClass("past");
    } else if (hourTime < 15) {
        $("#hour-15").addClass("future");
    } else {
        $("#hour-15").addClass("present");
    }

    if(hourTime > 16) {
        $("#hour-16").addClass("past");
    } else if (hourTime < 16) {
        $("#hour-16").addClass("future");
    } else {
        $("#hour-16").addClass("present");
    }

    if(hourTime > 17) {
        $("#hour-17").addClass("past");
    } else if (hourTime < 17) {
        $("#hour-17").addClass("future");
    } else {
        $("#hour-17").addClass("present");
    }
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // the current date in the header of the page.
    function displayDate() {
        var rightNow = today.format('MMM D, YYYY');
        currentDay.text(rightNow);
    }

    displayDate();
  });
