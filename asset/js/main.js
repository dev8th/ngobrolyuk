
var closeCard = document.getElementsByClassName("closeCard")[0],
    openCard = document.getElementsByClassName("openCard"),
    deck = document.getElementsByClassName("deck")[0], 
    closeDiv = document.getElementsByClassName("close")[0],
    openDiv = document.getElementsByClassName("open")[0],
    kalimat;

fullText();

closeCard.addEventListener("click",start);

function start(){        
    var createCloseCard = document.createElement("div"),
        createOpenCard = document.createElement("div");

    openCard.length==0?closeCard.classList.add("to-top"):'';

    createCloseCard.classList.add("closeCard");
    createCloseCard.classList.add("fade-out-bottom");
    closeDiv.appendChild(createCloseCard);

    openCard.length>0?openCard[0].remove():'';

    setTimeout(() => {
        createCloseCard.remove();
        createOpenCard.classList.add("openCard");
        createOpenCard.classList.add("flip");
        openDiv.appendChild(createOpenCard);
        createOpenCard.innerHTML="<div class='content'><div class='text'></div></div>";
        document.getElementsByClassName("text")[0].innerHTML=chooseText();
    }, 250);
}

function chooseText(){
    kalimat.length==0?fullText():'';
    var randomNum = Math.floor(Math.random()*kalimat.length);
        text = kalimat[randomNum];
    kalimat.splice(randomNum,1);
    return text;    
}

function fullText(){
    kalimat = [
        "Siapa mantan terindahmu? mengapa ?",
        "Berapa kali kamu berpacaran?",
        "Apakah kamu pernah berciuman dengan mantanmu? Jika iya dengan siapa?",
        "Apa alasan putus sama mantan terakhirmu?",
        "Apa kamu pernah diselingkuhi? Bagaimana ceritanya?",
        "Apa kamu pernah selingkuh? bagaimana ceritanya?",
        "Pernahkah kamu ditikung temenmu? Bagaimana ceritanya?",
        "Apa pendapatmu tentang orang yang suka publikasi hubungan asmaranya di sosmed?",
        "Siapa anggota keluarga yang sering kamu rindukan? Kenapa?",
        "Siapa anggota keluarga yang paling kamu sakiti? Kenapa? Jika orang itu sedang didepanmu sekarang, apa yang ingin kamu katakan?",
        "Siapa anggota keluarga yang paling kamu sukai? Kenapa?",
        "Siapa yang memberi nama kamu? Apa artinya?",
        "Apa yang bisa membuat kamu marah, sebutkan alasannya?",
        "Apa yang bisa membuat kamu bahagia, sebutkan alasannya?",
        "Apa yang bisa membuat kamu kecewa, sebutkan alasannya?",
        "Ceritakan pengalaman lucu yang pernah kamu alami!",
        "Ceritakan pengalaman pahit yang pernah kamu alami!",
        "Jika waktu bisa diputar, apa yang akan kamu lakukan dalam hidupmu?",
        "Apakah kamu sudah puas dengan hidupmu sekarang? Kenapa?",
        "Apa hal yang ingin kamu capai? Mengapa?",
        "Adakah sesuatu yang sudah kamu lakukan sehingga membuat kamu bangga? Apa itu (Jika ada)?",
        "Adakah sesuatu yang tidak kamu sukai di tempat kerja? Apa itu (Jika ada)?",
        "Ceritakan pengalaman lucumu bersama bos kamu!",
        "Kekuatan super apa yang ingin kamu miliki? Sebutkan alasannya!",
        "Kalau bisa mengunjungi satu Planet, kamu ingin ke planet mana? Kenapa?",
        "Bahasa asing apa yang pengen kamu pelajari? Mengapa?",
        "Film apa yang pernah bikin kamu nangis? Sebutkan alasannya!",
        "Adakah novel atau cerpen yang pernah kamu baca dan bikin kamu berkesan sampai sekarang? Apa itu (Jika ada)?",
        "Sebutkan 3 top playlist lagu yang kamu favoritkan! Kenapa?",
        "Dari 7 keajaiban dunia, mana yang paling ingin kamu kunjungi? Kenapa?",
        "Apa mimpi terseram yang pernah kamu alami?",
        "Jika kamu bisa jadi hewan, kamu ingin menjadi hewan apa?",
        "Kalau bisa milih, kamu mending jadi cakep apa pintar?",
        "Hal apa yang bikin kamu nangis terakhir kali?",
        "Kapan terakhir kali kamu pacaran?",
        "Apa kebiasaan buruk yang sulit kamu ubah?",
        "Kalau tiba-tiba punya kekuatan untuk menghilang selama sehari, apa yang bakal kamu lakukan?",
        "Menurutmu, kamu kelihatan menarik saat apa?",
        "Jika besok adalah perang nuklir, hal apa yang bakal kamu lakukan?",
        "Apa momen paling berkesan dalam hidupmu?",
        "Siapa orang yang paling kamu kagumi di dunia? Kenapa?",
        "Definisi kecantikan menurut kamu.",
        "Apa kamu percaya dengan astrologi? Mengapa?",
        "Apakah kamu percaya cinta pada pandangan pertama? Mengapa?",
        "Apa yang sering kamu lakukan untuk menghabiskan waktu luang?",
        "Apa motto hidupmu?",
        "Definisi sukses menurut kamu.",
        "Apa yang membuat kamu merasa damai?",
        "Apa hal teraneh yang pernah kamu lakukan sendirian?",
        "Jika kamu bisa menjadi karakter film, kamu ingin menjadi siapa?",
        "Apa keahlian unik yang patut kamu banggakan ke orang lain?",
        "Apa hobi aneh yang sering kamu lakukan?",
        "Kamu lebih percaya flat earth atau globe earth? Mengapa?",
        "Apa ketakukan terbesarmu?",
        "Siapa artis yang pertama kali bikin kamu naksir? Kenapa?",
        "Pernahkah kamu diam-diam menyukai seseorang? Siapa dan Kenapa?",
        "Jika kita ada di jaman zombie apocalypse, siapa yang akan mati duluan? Kenapa?",
        "Paling jauh kamu pernah pergi traveling kemana? Bagaimana kesanmu?",
        "Apa film favorit yang pernah kamu tonton? Kenapa?",
        "Dari banyaknya negara di dunia, negara mana yang ingin kamu kunjungi? Mengapa?",
        "Apa band favoritmu?"
    ];
}