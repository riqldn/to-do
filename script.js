    var addBtn = document.getElementById("add")
    const txtBox = document.getElementById("todoTxt")
    txtBox.addEventListener('keypress',()=>{
        document.querySelector(".image-container").style.display = "none"
    })
    var container = document.querySelector(".todoContainer")
    //array of colors used for the to-do list
    const colors = ["linear-gradient(red,rgb(158, 22, 22))", "linear-gradient(rgb(255, 197, 8),rgb(211, 164, 8))","linear-gradient(rgb(8, 180, 8),green)"]
    var num = 0
    function reset() {
        var userTxt = document.getElementById("todoTxt")
        userTxt.value = ''
    }
    //click function that allows to-do tasks to be modified 
    function editfunc() {
        var tasklist = document.getElementsByClassName("task")
        var textbox = document.getElementById("todoTxt")
        var closeBtn = document.createElement("I")
        var checkBtn = document.createElement("I")
        var iconContainer = document.createElement("SPAN")
        var edit = document.createElement("I")
        var addBtn = document.getElementById("add")
                var editBtn = document.getElementById("edit")
        edit.className = "fas fa-edit"
        closeBtn.className = "fas fa-times-circle"
        checkBtn.className = "fas fa-check"
        iconContainer.appendChild(closeBtn)
        iconContainer.appendChild(edit)
        iconContainer.appendChild(checkBtn)
        console.log("tariq")
        Array.from(tasklist).forEach(element => {
            console.log(element)
            if (element.style.opacity == 0.51) {
                console.log(element)
                element.innerText = textbox.value
                element.style.opacity = "100%"
                element.appendChild(iconContainer)
                addBtn.style.display = "inline-block"
                editBtn.style.display = "none"
                edit.addEventListener('click', () => {
                    var textbox = document.getElementById("todoTxt")
                    textbox.value = element.innerText
                    addBtn.style.display = "none"
                    editBtn.style.display = "inline-block"
                    element.style.opacity = "51%"
                    
                })
                closeBtn.addEventListener('click', () => {
                    closeBtn.parentElement.parentElement.style.display = "none"

                })
                checkBtn.addEventListener('click', () => {
                    checkBtn.parentElement.parentElement.style.textDecoration = "line-through"
                    checkBtn.parentElement.parentElement.style.opacity = "0.5"
                    checkBtn.style.display = "none"
                    edit.style.display = "none"
                })
            }
        })
        textbox.value = ''
    }
        //function to add task to the to-do list
        function add() {
            if (document.getElementById("todoTxt").value != '') {
                var userTxt = document.getElementById("todoTxt").value
                //create task element
                var task = document.createElement("LI")
                task.className = "task"
                var iconContainer = document.createElement("SPAN")
                var closeBtn = document.createElement("I")
                var checkBtn = document.createElement("I")
                checkBtn.className = "fas fa-check"
                //changes the color of each task
                task.style.background = colors[num]

                if (num == 2)
                    num = 0
                else
                    num++

                closeBtn.className = "fas fa-times-circle"
                var edit = document.createElement("I")
                edit.className = "fas fa-edit"
                var tasktxt = document.createTextNode(userTxt)
                var addBtn = document.getElementById("add")
                var editBtn = document.getElementById("edit")
                //the task is hidden once the close button is clicked
                closeBtn.addEventListener('click', () => {
                    closeBtn.parentElement.parentElement.style.display = "none"

                })
                // the tasks is crossed off the list once the check button is clicked
                checkBtn.addEventListener('click', () => {
                    checkBtn.parentElement.parentElement.style.textDecoration = "line-through"
                    checkBtn.parentElement.parentElement.style.opacity = "0.5"
                    checkBtn.style.display = "none"
                    edit.style.display = "none"
                })
                //listener allows for the task to be edited 
                edit.addEventListener('click', () => {
                    var textbox = document.getElementById("todoTxt")
                    console.log(task.innerText)
                    textbox.value = task.innerText
                    addBtn.style.display = "none"
                    editBtn.style.display = "inline-block"
                    task.style.opacity = "51%"
                    
                })
              
                task.innerText = userTxt
                var userTxt = document.getElementById("todoTxt")
                userTxt.value = ''
                iconContainer.appendChild(closeBtn)
                iconContainer.appendChild(edit)
                iconContainer.appendChild(checkBtn)
                task.appendChild(iconContainer)
                //task is added to the list
                container.appendChild(task)
            }
            else//making sure user does not add blank tasks to the to-do list
                alert("Please enter input")
        }
        addBtn.addEventListener('click', add)
