// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1800);

});

// =========================
// TANGGAL OTOMATIS
// =========================

const currentDate = new Date();

document.getElementById("currentDate").innerText =
currentDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

// =========================
// ISI SURAT
// =========================

const letterText = `Halo sayangggg... cintaku, manisku, sayangku, mbg-ku, bebe gwehhh, pokonya punya gwehhhh, my luvvvv ^v^🫶🏻🫶🏻🫶🏻

Jadi aku membuat ini berniat untuk menghibur sayanggg. Walaupun hasilnya masih jelek, mohon dimaklumin yaa sayangg. Aku buatnya kurang dari 2 jam dan masih banyak perlu bantuan prompt AI untuk membuat ini. Tapi ini bukan pure buatan mereka lhooo, kan aku yang buat ini hehehehe 😚😚😚. Buktinya ini tulisan acuuuu cayanggg 🤗🤗🤗

Aku minta maaf yahhh karena siang tadi kurang care dengan sayanggg. Aku lebih sibuk dengan dunia aku sendiri dan lupa kalau sayang aku lagi sakit peyuttt sama kepayaa 🙆🏻‍♂️. Maaf yaaa sayanggg, bukannya aku nggak peduli dengan sayanggg. Emang tadi aku ngerespon sayang jelekkk bangetttt, wajar kalau sayang betmuttt 😇😇😇. Next I'll never try again again and again yaa sayanggg 🫶🏻🫶🏻🫶🏻 cinta 🩷🩷🩷 kekasihku 🤏🏻🤏🏻🤏🏻

Maaf juga selalu bikin sayang nerangin ke akuuuu. Aku orangnya emang pelupa sayanggg, dan aku juga nggak pekaan. Maaf yaah sayangg selalu minta penjelasan dulu ke sayang biar aku ngerti dan paham ke sayanggg 🙆🏻‍♂️🙆🏻‍♂️🙆🏻‍♂️. Ternyata rekeningku aja yang baru Mandiri, akunya belum hehe 🫰🏻🫰🏻🫰🏻

Sebagai permintaan maaf, aku buat ini untuk sayangg yahhh. Maaf yaa sayanggg aku belum bisa kasih apa-apa ke sayangggg, belum banyak effort aku ke sayanggg, dan aku juga selalu bingung mau ngelakuin apaa biar sayang aku selalu bahagiaaa dan nggak betmut lagiii 🫰🏻🫰🏻🫰🏻.

Maaf yaa sayang, cuma ini yang aku bisa buatin untuk sayanggg 🫶🏻🫶🏻🫶🏻. Aku buat ini menggunakan cinta, raga, waktu, dan segala-galanya untuk sayanggg hihi 😚😚😚

Saaaayaaaaanggg bebeeee, lovv uuuwww bebe. Semoga selalu bahagia yaa sayang sekarang dan selamanyaaaa 🫶🏻🫶🏻🫶🏻🩷💓💗💝💕💖💘

Sayang Aisyahhh banyak banyaakkkkkkkkk too muchhhh 🫶🏻🫶🏻🫶🏻🫶🏻😚😚😚😚😚😚😚😚💓💖💖💗💕💓💘🩷💘💝💕💖💗💘💕💖💓🩷💘🩷💝💝🩷🩷🩷

Tertanda,

Muripat, Palembang
03 Juni 2026

Teruntuk,
Kekasihku tersayang 🙆🏻‍♂️
Tercinta 🩷
Termanis 🫰🏻
Terimut 🫶🏻
Termenggemaskan 🤏🏻
Se-jagat alam semesta 🌍

Lovv uuu 3000 and forever sayangggg 🫶🏻🫶🏻🫶🏻🫰🏻🫰🏻🫰🏻🤏🏻🤏🏻🤏🏻💘💘💖💕🩷💓💝💗😚😚😚`;


// =========================
// OPEN LETTER
// =========================

const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        letterSection.classList.remove("hidden");

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

        startTyping();

    }, 1200);

});

// =========================
// TYPING EFFECT
// =========================

const typedText = document.getElementById("typedText");

let index = 0;
let started = false;

function startTyping() {

    if(started) return;

    started = true;

    function type() {

        if(index < letterText.length){

            typedText.innerHTML += letterText.charAt(index);

            index++;

            setTimeout(type, 25);

        }

    }

    type();

}

// =========================
// MUSIC
// =========================

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        bgMusic.play();

        musicBtn.innerText =
        "Pause Music ⏸️";

        playing = true;

    }else{

        bgMusic.pause();

        musicBtn.innerText =
        "Play Music 🎶";

        playing = false;

    }

});

// =========================
// POPUP
// =========================

const popup = document.getElementById("popup");

document.getElementById("sorryBtn")
.addEventListener("click", () => {

    popup.classList.remove("hidden");

});

document.getElementById("closePopup")
.addEventListener("click", () => {

    popup.classList.add("hidden");

});

// =========================
// SAKURA
// =========================

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
    Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
    (5 + Math.random() * 6) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 11000);

}

setInterval(createPetal, 500);

// =========================
// FLOATING HEARTS
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    heart.style.animationDuration =
    (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 2000);