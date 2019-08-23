    const URL="http://localhost:3000/snacks"
    const commentURL = "http://localhost:3000/comments"
    const divTag= document.getElementById("snack-collection")
    const divTagForCreateSnack = document.getElementById("second-container")

    fetch(URL)
    .then(resp=>resp.json())
    .then(renderAllSnacks)

    function renderAllSnacks(snacks){
        snacks.forEach(slapOneSnack)
    }

    function slapOneSnack(snack){
        //console.log(snack)
        //find the div tag to place the snacks
        //then I would create an li tag to list out a single snack
        //name, description, image and iterate through all of the comments for the snack 
        //append
        const li = document.createElement("li")
        li.className = "snacks-tag"
        li.innerHTML= `
        <h3>${snack.name}</h3>
        <p>${snack.description}</p>
        <img src=${snack.image} alt="Image-of-90's-snack" style="width:250px;height:250px" >
        <p id="vote-tag-${snack.id}" data-id=${snack.id}> ${snack.vote}  </p>
        <button id="vote-btn" class="vote-snack" data-id=${snack.id}> Vote &#9829 </button>
        <ul data-id=${snack.id}></ul>
        <form class="add-comment-form" data-id=${snack.id}>
            <h3>What do you think about this snack?</h3>
            <input type="text" name="newName" class="form-control" id="new-name" placeholder="Your Name">
            <br>
            <input type="text" name="newComments" class="form-constrol" id="new-comment" placeholder="Munch Munch Munch!">
            <br>
            <input type="submit" name="submit" value="Submit" class="submit">
        </form>
        `
        divTag.append(li)
       
        snack.comments.forEach(renderEachComment)

        function renderEachComment(comment){
            // Reference the LI that represents the snack
            // Find the UL, hint: querySelector
            const ulTag= li.querySelector("ul")
            ulTag.id = "unorderlist"
            ulTag.innerHTML += `
            <li>
                <p>${comment.user_name}<br>
                    ${comment.comment_content}
                    <button id="delete-btn" class="delete-comment" data-id=${comment.id}> Delete </button>
                </p>
            </li>
            
            `
            li.append(ulTag)
        }
    }
//////-------Post a New Snack-----------////////
    divTagForCreateSnack.addEventListener("submit", e =>{
        e.preventDefault()
        let snackName = document.getElementById("snack-name").value
        let snackImage = document.getElementById("snack-image").value
        let snackDescription = document.getElementById("snack-description").value
        
        fetch(URL,{
            method : "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : snackName,
                description : snackDescription,
                image : snackImage
            })
        })
        .then(resp => resp.json())
        .then(slapOneSnack)

        e.target.reset()
})

    ///-------Post a New comment-----////
    divTag.addEventListener('submit', ()=>{
        //debugger
       event.preventDefault()
    const id= event.target.dataset.id
    //console.log(event.target.newName.value)
    let newName= event.target.newName.value
    //console.log(event.target.newName.value)
    let newComment= event.target.newComments.value
    //console.log(event.target.newComments.value)
        //console.log(newName)
        //console.log(newComment)
    fetch(commentURL, {
        method: "POST",
        headers: {
            "Application" : "application/json",
            "Content-Type" : "application/json" 
        },
        body: JSON.stringify({
            snack_id : id,
            user_name : newName,
            comment_content : newComment
        })
    })
    .then(resp=>resp.json())
    .then(data => {
        // Find the appropriate ul with the data-id that matches
        // Append the comment (aka. data)
        const ul= document.querySelector(`ul[data-id='${id}']`)
        ul.innerHTML += `
            <li>
                <p>${data.user_name}<br>
                    ${data.comment_content}
                    <button id="delete-btn" class="delete-comment" data-id=${data.id}> Delete </button>
                </p>
            </li>
            `

    })
    event.target.reset()
})
//////-------Delete Comment--------/////
    divTag.addEventListener("click", e =>{
    if (e.target.className === "delete-comment"){
            const id= event.target.dataset.id
        fetch(`http://localhost:3000/comments/${id}`,{
            method : "DELETE"
        })
        e.target.parentNode.parentNode.remove()
    }
    })
////////-----increase vote count-------Patch----Update---Edit------///
    divTag.addEventListener("click", e =>{
        if (e.target.className = "vote-snack"){
        const id= event.target.dataset.id
        //console.log(id)
        let votesTag= document.getElementById(`vote-tag-${id}`)
        console.log(votesTag.innerText)
        
           let numberOfVotes = parseInt(votesTag.innerText)
           numberOfVotes++
           votesTag.innerText = numberOfVotes
           

           fetch(`http://localhost:3000/snacks/${id}`,{
               method : "PATCH",
               headers: {
                   "Accept" : "application/json",
                   "Content-Type" : "application/json"
               },
               body: JSON.stringify({
                   vote : numberOfVotes
               })
           })
        }

    })