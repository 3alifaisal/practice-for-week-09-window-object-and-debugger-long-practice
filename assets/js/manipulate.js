export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Ali Awada's Portfolio"
    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.querySelector("h1").innerText = "I am Ali Awada"
    // Your code here
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

     const sectionDiv  = document.querySelector(".section");
     const h2Element  = sectionDiv.querySelector("h2");


     if(h2Element.innerText === "About me"){
        sectionDiv.children[1].innerText = "so i am a mutlinational person with two personalities from one side i ma lebanase"
        sectionDiv.children[2].innerText = "from the other I am ukrainian "
     }

    // Your code here
}