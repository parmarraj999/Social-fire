// close and open tool of post card 
const tool_container = document.querySelectorAll(".post-card-tool-container");
const card_tool = document.querySelector(".tools")

for (let i = 0; i < tool_container.length; i++) {
    tool_container[i].addEventListener('click', () => {
        tool_container[i].style.height = "60%";
        tool_container[i].style.width = "70px";
        // card_tool.style.display = "flex";
    })
    var closebtns = document.getElementsByClassName("close-tool-btn");
    for (e = 0; e < closebtns.length; e++) {
        closebtns[e].addEventListener("click", function () {
           this.parentElement.parentNode.style.display = "none" ;
        }
        )
    }
}
// ------ done :) ----- ?
const likeBtn = document.querySelectorAll(".like");
for(let i = 0; i < likeBtn.length; i++){
    likeBtn[i].addEventListener("click",()=>{
        likeBtn[i].style.background = "#ca1f3d";
    })
}

const commentbtn = document.querySelectorAll(".comment");
for(let i = 0; i < commentbtn.length; i++){
    commentbtn[i].addEventListener("click",()=>{
        commentbtn[i].style.background = "#1c768f ";
    })
}

const shareBtn = document.querySelectorAll(".share");
for(let i = 0; i < shareBtn.length; i++){
    shareBtn[i].addEventListener("click",()=>{
        shareBtn[i].style.background = "#fa991c";
    })
}

const saveBtn = document.querySelectorAll(".save");
for(let i = 0; i < saveBtn.length; i++){
    saveBtn[i].addEventListener("click",()=>{
        saveBtn[i].style.background = "#25182e";
    })
}

// --------- profile container opener --- 
const profileBtn = document.querySelector(".profile-btn");
const profileContainer = document.querySelector(".profile-container")
const homeContainer = document.querySelector(".container")
const bottomNav = document.querySelector(".bottom-nav");
// ---- asign profile name value 
const profileNameTag = document.querySelector(".name");
const profileUsernameTag = document.querySelector(".username");
const profileName = document.querySelector('.profile-container-name')
profileBtn.addEventListener('click',openProfile)
function openProfile(){
    homeContainer.style.width = "0%";
    homeContainer.style.opacity = "0"
    profileContainer.style.width = "100%";
    bottomNav.style.opacity = "0";
    profileName.innerHTML = profileNameTag.innerHTML;
}
// ----- profile container closer ----- 
const backBtn = document.querySelector(".fa-angle-left");
backBtn.addEventListener("click",closeProfile)
function closeProfile(){
    homeContainer.style.width = "100%";
    homeContainer.style.opacity = "1";
    profileContainer.style.width = "0%";
    bottomNav.style.opacity = "1";
}
// --------- open edit folder with pen icon ----
const penIcon = document.querySelector(".fa-pen");
const editContainer = document.querySelector(".profile-edit-container");
penIcon.addEventListener('click',function(){
    editContainer.style.height = '80%';
})
function closeEditTool(){
    editContainer.style.height = '0%';
}

// -------- change profile name with edit tool 
const newNameInput = document.querySelector(".name-edit");
const newUsernameInput = document.querySelector(".username-edit");
const newNameSubmitBtn = document.querySelector(".submit-newName");
newNameSubmitBtn.addEventListener("click",function(){
    // newNameInput.innerHTML = profileNameTag.innerHTML;
    profileNameTag.innerHTML = newNameInput.value;
    profileUsernameTag.innerHTML = newUsernameInput.value;
    closeEditTool();
    // alert("j")
})

// --- open profile image cateloges ---- 
const profileDots = document.querySelector(".fa-ellipsis-h");
const profileBubble = document.querySelector(".profile-bubble");
const profileDetails = document.querySelector(".profile-details");
profileDots.addEventListener("click",function(){
    profileBubble.style.display = "flex";
    profileDetails.style.opacity = "0";
})

// ----- profile image change fucntion ---- 
const smallProfileImage = document.querySelector(".profile-small-image");
const mainProfileImage = document.querySelector(".profile-main-image");
function imgChanger(image){
    mainProfileImage.src = image;
    profileBubble.style.display = "none";
    profileDetails.style.opacity = "1";
    smallProfileImage.src = image;

}


// --- open harry add page ---- 
const codeBtn = document.querySelector(".fa-code");
const addContainer = document.querySelector('.harry-add-container');
codeBtn.addEventListener("click",function(){
    homeContainer.style.width = "0%";
    addContainer.style.width = "100%";
    bottomNav.style.opacity = "0"
})
const codeToHome = document.querySelector(".codeToHome");
codeToHome.addEventListener("click",function(){
    homeContainer.style.width = "100%";
    addContainer.style.width = '0%';
    bottomNav.style.opacity = "1";
})
function alertOfWork(){
    alert("Working on it ~ checkout other")
}
function alertOfThanks(){
    alert("thanks but this is demo website")
}