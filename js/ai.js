const apiendpoint = "https://vircrum.up.railway.app/api"

window.addEventListener('scroll', function(){
    const header = document.querySelector('.navDivDiv');
    header.classList.toggle('!hidden', window.scrollY > 0);
})

const chatParent = document.querySelector('.chatParent');
const chatInput = document.querySelector('.chatInput');
const chatForm = document.querySelector('.chatForm');
const chatHistory = [];

const product = document.querySelector('.product');
const welcomeMsg = document.querySelector('.welcomeMsg');
const textArea = document.querySelector('.textArea');

product.addEventListener('change', () => {
    console.log("changed...");
    welcomeMsg.innerText = product.value == 'text' ? "Hello, I am Texxa, How can I help you?" : product.value == 'image' ? "Hello, I am Texxa, what image can I generate for you?" : "Hello! I'm Texxa. I regret to inform you that only the Text-to-Text and Text-to-Image feature is currently available to you.";
    if(product.value == "speech" || product.value == "video"){
        textArea.placeholder = "Please select Text or Image feature"
        textArea.disabled = true;
    } else {
        textArea.disabled = false;
        textArea.placeholder = product.value == 'text' ? "Message Texxa" : "Describe your image"
    }
})

async function sendMessage(e){
    
    e.preventDefault();

    if(!chatInput.value.trim()) return;

    const msg = chatInput.value;

    const sendDiv = document.createElement('div');
    sendDiv.className = "w-full flex justify-end my-7";
    sendDiv.innerHTML = `
        <div class="bg-[#1b17074e] border border-gold border-opacity-10 overflow-hidden p-3 w-[80%] max-w-[320px] rounded-xl">
            <p class="dmsans text-sm text-gray-300">${msg}</p>
        </div>
    `
    
    chatParent.appendChild(sendDiv);

    const resDiv = document.createElement('div');
    resDiv.className = `border border-white border-opacity-10 bg-[#00000074] w-[80%] max-w-[380px] rounded-xl my-7 ${product.value == 'image' ? 'p-1' : 'p-3'}`;
    resDiv.innerHTML = `<p class="dmsans text-sm text-gold">${product.value == "image" ? "Texxa is generating image..." : "Texxa is typing..."}</p>`;

    chatParent.appendChild(resDiv);
    chatInput.value = "";

    document.querySelector('.chatBody').scrollTo({
        top: document.querySelector('.chatBody').scrollHeight,
        behavior: "smooth"
    });

    product.value == 'text' && chatHistory.push(["user", msg]);
    
    try {
        if(product.value == 'text'){
            const body = {
                chatHistory,
                message: msg,
            }
            const { data } = await axios.post(`${apiendpoint}/ai/message?model=texxa`, body);
            resDiv.innerHTML = `<p class="dmsans text-sm text-gray-200">${data?.message}</p>`;
            chatHistory.push(["assistant", data?.message]);
        } else if(product.value == 'image'){
            const body = { prompt: msg }
            const { data } = await axios.post(`${apiendpoint}/ai/image`, body);
            resDiv.innerHTML = `<img src=${data} class="object-contain rounded-xl">`;
        }
    } catch (error) {
        console.log(error);
        resDiv.innerHTML = `<p class="dmsans text-sm text-gray-200">Sorry an error occured</p>`;
    }
}

chatForm.addEventListener('submit', sendMessage);