// AOS.init();

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

const pm1 = document.querySelector('.pm1');
const pm2 = document.querySelector('.pm2');
const pm3 = document.querySelector('.pm3');

const pm1d = document.querySelector('.pm1d');
const pm2d = document.querySelector('.pm2d');
const pm3d = document.querySelector('.pm3d');

const p1d = document.querySelector('.p1d');
const p2d = document.querySelector('.p2d');
const p3d = document.querySelector('.p3d');

const phaseOne = document.querySelector('.phaseOne');
const phaseTwo = document.querySelector('.phaseTwo');
const phaseThree = document.querySelector('.phaseThree');

function setPhaseOne(value){
    phaseOne.classList.remove('hidden');
    phaseOne.classList.add('flex');

    phaseTwo.classList.remove('flex');
    phaseTwo.classList.add('hidden');
    
    phaseThree.classList.remove('flex');
    phaseThree.classList.add('hidden');

    p1d.className = "p1d w-[20px] h-[20px] rounded-sm bg-gold";
    pm1d.className = "pm1d w-[20px] h-[20px] rounded-sm bg-gold";

    p2d.className = "p2d w-[10px] h-[10px] rounded-sm bg-gold";
    pm2d.className = "pm2d w-[10px] h-[10px] rounded-sm bg-gold";

    p3d.className = "p3d w-[10px] h-[10px] rounded-sm bg-gold";
    pm3d.className = "pm3d w-[10px] h-[10px] rounded-sm bg-gold";
}

function setPhaseTwo(value){
    phaseTwo.classList.remove('hidden');
    phaseTwo.classList.add('flex');

    phaseOne.classList.remove('flex');
    phaseOne.classList.add('hidden');

    phaseThree.classList.remove('flex');
    phaseThree.classList.add('hidden');

    p2d.className = "p2d w-[20px] h-[20px] rounded-sm bg-gold";
    pm2d.className = "pm2d w-[20px] h-[20px] rounded-sm bg-gold";

    p1d.className = "p1d w-[10px] h-[10px] rounded-sm bg-gold";
    pm1d.className = "pm1d w-[10px] h-[10px] rounded-sm bg-gold";

    p3d.className = "p3d w-[10px] h-[10px] rounded-sm bg-gold";
    pm3d.className = "pm3d w-[10px] h-[10px] rounded-sm bg-gold";
}

function setPhaseThree(value){
    phaseThree.classList.remove('hidden');
    phaseThree.classList.add('flex');

    phaseOne.classList.remove('flex');
    phaseOne.classList.add('hidden');

    phaseTwo.classList.remove('flex');
    phaseTwo.classList.add('hidden');

    p3d.className = "p3d w-[20px] h-[20px] rounded-sm bg-gold";
    pm3d.className = "pm3d w-[20px] h-[20px] rounded-sm bg-gold";

    p1d.className = "p1d w-[10px] h-[10px] rounded-sm bg-gold";
    pm1d.className = "pm1d w-[10px] h-[10px] rounded-sm bg-gold";

    p2d.className = "p2d w-[10px] h-[10px] rounded-sm bg-gold";
    pm2d.className = "pm2d w-[10px] h-[10px] rounded-sm bg-gold";
}

p1.addEventListener('click', setPhaseOne);
pm1.addEventListener('click', setPhaseOne);

p2.addEventListener('click', setPhaseTwo);
pm2.addEventListener('click', setPhaseTwo);

p3.addEventListener('click', setPhaseThree);
pm3.addEventListener('click', setPhaseThree);

window.addEventListener('scroll', function(){
    const header = document.querySelector('.navguy');
    header.classList.toggle('navDivDiv', window.scrollY > 0);
})

const faq1 = document.querySelector('.faq1');
const faq2 = document.querySelector('.faq2');
const faq3 = document.querySelector('.faq3');
const faq4 = document.querySelector('.faq4');
const faq5 = document.querySelector('.faq5');
const faq6 = document.querySelector('.faq6');
const faq7 = document.querySelector('.faq7');
const faq8 = document.querySelector('.faq8');
const faq9 = document.querySelector('.faq9');
const faq10 = document.querySelector('.faq10');

let showFaq;
let showing = false;

const displayFaq = faq => {
    switch (faq) {
        case 'faq1':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq1.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq1.style.display = 'block';
                showFaq = faq1;
                showing = true;
            }
            break;
        case 'faq2':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq2.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq2.style.display = 'block';
                showFaq = faq2;
                showing = true;
            }
            break;
        case 'faq3':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq3.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq3.style.display = 'block';
                showFaq = faq3;
                showing = true;
            }
            break;
        case 'faq4':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq4.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq4.style.display = 'block';
                showFaq = faq4;
                showing = true;
            }
            break;
        case 'faq5':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq5.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq5.style.display = 'block';
                showFaq = faq5;
                showing = true;
            }
            break;
        case 'faq6':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq6.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq6.style.display = 'block';
                showFaq = faq6;
                showing = true;
            }
            break;
        case 'faq7':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq7.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq7.style.display = 'block';
                showFaq = faq7;
                showing = true;
            }
            break;
        case 'faq8':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq8.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq8.style.display = 'block';
                showFaq = faq8;
                showing = true;
            }
            break;
        case 'faq9':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq9.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq9.style.display = 'block';
                showFaq = faq9;
                showing = true;
            }
            break;
        case 'faq10':
            showFaq && (showFaq.style.display = 'none');
            if(showing && showFaq.className.includes(faq)){
                faq10.style.display = 'none';
                showFaq = null;
                showing = false;
            } else {
                faq10.style.display = 'block';
                showFaq = faq10;
                showing = true;
            }
            break;
        default:
            break;
    }
}