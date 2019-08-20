    const URL="http://localhost:3000/snacks"
    const commentURL = "http://localhost:3000/comments"
    const divTag= document.getElementById("snack-collection")
    
///////Fetches//////

    fetch(URL)
    .then(resp=>resp.json())
    .then(renderAllSnacks)

//// Functions///////
    function renderAllSnacks(snacks){
        //console.log(snacks)
        snacks.forEach(slapOneSnack)
    }

    function slapOneSnack(snack){
        //console.log(snack)
        //find the div tag to place the snacks
        //then I would create an li tag to list out a single snack
        //name, description, image and iterate through all of the comments for the snack 
        //append
        //console.log(li)
        const li = document.createElement("li")
        li.className = "snacks-tag"
        li.innerHTML= `
        <h4>${snack.name}</h4>
        <p>${snack.description}</p>
        <img src=${snack.image} alt="Image-of-90's-snack" style="width:250px;height:250px" >
        <ul></ul>
        <form class="add-comment-form">
            <h3>What do you think about this snack?</h3>
            <input type="text" name="name" value="" placeholder="Your Name" class="input-text">
            <br>
            <input type="text" name="comment" value="" placeholder="Your thoughts about the snack" class="input-text">
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
            ulTag.innerHTML += `
            <li>
                <p>${comment.user_name}<br>
                    ${comment.comment_content}
                    <button id="delete-comment"> Delete </button>
                    <button id="edit-comment"> Edit </button>
                </p>
            </li>
            
            `
            //li.append(ulTag)
            // Create an li for the comment and add it to the ul
            // append or plus equals because we need to add each indiviual comment 
            
            //
            newComment()

        
        }

    }

    ///-------Post a New comment-----////
   function newComment (){

    const commentForm = document.querySelector(".add-comment-form")


   }



   document.addEventListener('DOMContentLoaded', ()=>{

 
})


