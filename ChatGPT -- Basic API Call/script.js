const chatGPT = document.getElementById('chatGPT');
const prompt = document.getElementById('prompt');
const answer = document.getElementById('answer');
let noSubmit = false;

chatGPT.addEventListener("submit", e=>{
    e.preventDefault();
    if(noSubmit){
        return false;
    };
    noSubmit = true;
    chatGPT.readOnly = true;
    answer.innerText = "Thinking...";

    const url = "http://localhost:2000/"
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: prompt.value
    }

    fetch(url,params )
    .then(res=>{
        answer.innerText = `${prompt.value}<br><br>`;
        const response = res.json();
        displayResponse(response)
    })
    .catch(e=>{
        answer.innerText = "";
        const error = `Error: ${e}`
        displayResponse(error)
    })
    .finally(()=>{
        clearPrompt()
    })
})

function clearPrompt(){
    noSubmit = false;
    chatGPT.readOnly = false;
    prompt.placeholder = "Enter another question/prompt?";
    prompt.value="";
}

function displayResponse(text){
    for(let i = 0; i < text.length; i++){
        setTimeout(()=>{
            answer.innerText += text[i]
        }, i * 100)
    }
}