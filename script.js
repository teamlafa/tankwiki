const AUTHOR_EMAIL = "teamalfa070@gmail.com";

let users =
    JSON.parse(localStorage.getItem("users")) || [];

let tanks =
    JSON.parse(localStorage.getItem("tanks")) || [];

let currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || null;

let selectedTank = null;


/* RASM EDITOR */

let imageX = 0;
let imageY = 0;
let imageZoom = 1;

let startX = 0;
let startY = 0;

let startImageX = 0;
let startImageY = 0;

let dragging = false;


/* LOGIN */

function showLogin() {

    document
        .getElementById("registerPage")
        .classList.add("hidden");

    document
        .getElementById("loginPage")
        .classList.remove("hidden");
}


function showRegister() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");

    document
        .getElementById("registerPage")
        .classList.remove("hidden");
}


/* REGISTER */

function register() {

    const email =
        document
            .getElementById("registerEmail")
            .value
            .trim()
            .toLowerCase();

    const password =
        document.getElementById("registerPassword").value;

    const confirm =
        document.getElementById("registerConfirm").value;

    const msg =
        document.getElementById("registerMsg");


    if (!email || !password || !confirm) {

        msg.textContent =
            "Barcha joylarni to‘ldiring.";

        return;
    }


    if (password.length < 6) {

        msg.textContent =
            "Parol kamida 6 ta belgidan iborat bo‘lsin.";

        return;
    }


    if (password !== confirm) {

        msg.textContent =
            "Parollar bir xil emas.";

        return;
    }


    if (
        users.some(
            user => user.email === email
        )
    ) {

        msg.textContent =
            "Bu email allaqachon mavjud.";

        return;
    }


    const user = {

        id: Date.now(),

        email: email,

        password: password,

        profileImage: null,

        savedTanks: []

    };


    users.push(user);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    currentUser = user;

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );


    enterSite();
}


/* LOGIN */

function login() {

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();

    const password =
        document
            .getElementById("loginPassword")
            .value;

    const msg =
        document.getElementById("loginMsg");


    const user =
        users.find(
            u =>
                u.email === email &&
                u.password === password
        );


    if (!user) {

        msg.textContent =
            "❌ Email yoki parol noto‘g‘ri.";

        return;
    }


    currentUser = user;


    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );


    enterSite();
}


/* SITE */

function enterSite() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");

    document
        .getElementById("registerPage")
        .classList.add("hidden");

    document
        .getElementById("site")
        .classList.remove("hidden");

    document
        .getElementById("bottomNav")
        .classList.remove("hidden");


    updateAuthor();

    showTanks();

    updateProfile();
}


/* AUTHOR */

function updateAuthor() {

    const button =
        document.getElementById("addButton");

    const badge =
        document.getElementById("authorBadge");


    if (
        currentUser &&
        currentUser.email === AUTHOR_EMAIL
    ) {

        button.classList.remove("hidden");

        badge.classList.remove("hidden");

    } else {

        button.classList.add("hidden");

        badge.classList.add("hidden");
    }
}


/* PROFILE */

function openProfile() {

    updateProfile();

    document
        .getElementById("profileModal")
        .classList.remove("hidden");
}


function closeProfile() {

    document
        .getElementById("profileModal")
        .classList.add("hidden");
}


function updateProfile() {

    if (!currentUser) return;


    document
        .getElementById("profileName")
        .textContent =
        currentUser.email;


    document
        .getElementById("profileEmail")
        .textContent =
        currentUser.email;


    const img =
        document.getElementById("profileImage");

    const icon =
        document.getElementById("profileDefault");


    if (currentUser.profileImage) {

        img.src =
            currentUser.profileImage;

        img.style.display =
            "block";

        icon.style.display =
            "none";

    } else {

        img.style.display =
            "none";

        icon.style.display =
            "flex";
    }
}


/* RASM TANLASH */

function chooseProfileImage(event) {

    const file =
        event.target.files[0];


    if (!file) return;


    const reader =
        new FileReader();


    reader.onload = function(e) {

        const image =
            document.getElementById("editImage");


        image.onload = function() {

            imageZoom = 1;

            document
                .getElementById("zoom")
                .value = 1;


            prepareEditor();


            document
                .getElementById("editor")
                .classList
                .remove("hidden");
        };


        image.src =
            e.target.result;
    };


    reader.readAsDataURL(file);
}


/* EDITORNI TAYYORLASH */

function prepareEditor() {

    const image =
        document.getElementById("editImage");

    const box =
        document.getElementById("cropBox");


    const boxWidth =
        box.clientWidth;

    const boxHeight =
        box.clientHeight;


    const imageWidth =
        image.naturalWidth;

    const imageHeight =
        image.naturalHeight;


    /*
       Rasm crop oynasini to‘liq yopadi.
    */

    const scale =
        Math.max(
            boxWidth / imageWidth,
            boxHeight / imageHeight
        );


    const width =
        imageWidth * scale;

    const height =
        imageHeight * scale;


    image.dataset.scale = scale;


    /*
       Boshlang‘ich joylashuv:
       aynan markaz.
    */

    imageX =
        (boxWidth - width) / 2;

    imageY =
        (boxHeight - height) / 2;


    updateEditorImage();
}


/* EDITOR RASMINI KO‘RSATISH */

function updateEditorImage() {

    const image =
        document.getElementById("editImage");


    const scale =
        Number(
            image.dataset.scale || 1
        ) * imageZoom;


    const width =
        image.naturalWidth * scale;

    const height =
        image.naturalHeight * scale;


    /*
       Zoom paytida markazdan kattalashadi.
    */

    const centerX =
        125 + imageX;

    const centerY =
        125 + imageY;


    image.style.width =
        width + "px";

    image.style.height =
        height + "px";


    image.style.left =
        centerX - width / 2 + "px";

    image.style.top =
        centerY - height / 2 + "px";
}


/* TOUCH + MOUSE */

const editImage =
    document.getElementById("editImage");


editImage.addEventListener(
    "pointerdown",
    function(event) {

        dragging = true;

        startX =
            event.clientX;

        startY =
            event.clientY;

        startImageX =
            imageX;

        startImageY =
            imageY;


        editImage.setPointerCapture(
            event.pointerId
        );
    }
);


editImage.addEventListener(
    "pointermove",
    function(event) {

        if (!dragging) return;


        imageX =
            startImageX +
            (event.clientX - startX);

        imageY =
            startImageY +
            (event.clientY - startY);


        updateEditorImage();
    }
);


editImage.addEventListener(
    "pointerup",
    function(event) {

        dragging = false;

        try {
            editImage.releasePointerCapture(
                event.pointerId
            );
        } catch {}
    }
);


editImage.addEventListener(
    "pointercancel",
    function() {

        dragging = false;
    }
);


/* ZOOM */

function changeZoom() {

    imageZoom =
        Number(
            document
                .getElementById("zoom")
                .value
        );


    updateEditorImage();
}


function zoomPlus() {

    imageZoom =
        Math.min(
            3,
            imageZoom + 0.1
        );


    document
        .getElementById("zoom")
        .value =
        imageZoom;


    updateEditorImage();
}


function zoomMinus() {

    imageZoom =
        Math.max(
            1,
            imageZoom - 0.1
        );


    document
        .getElementById("zoom")
        .value =
        imageZoom;


    updateEditorImage();
}


/* RASMNI SAQLASH */

function finishImage() {

    const image =
        document.getElementById("editImage");

    const box =
        document.getElementById("cropBox");


    const canvas =
        document.createElement("canvas");


    canvas.width = 500;
    canvas.height = 500;


    const ctx =
        canvas.getContext("2d");


    const scale =
        Number(
            image.dataset.scale || 1
        ) * imageZoom;


    const width =
        image.naturalWidth * scale;

    const height =
        image.naturalHeight * scale;


    /*
       Crop oynasi 250x250.
       Canvas 500x500.
       Shuning uchun 2x qilamiz.
    */

    const drawX =
        (imageX - width / 2 + 125) * 2;

    const drawY =
        (imageY - height / 2 + 125) * 2;


    ctx.save();


    ctx.beginPath();

    ctx.arc(
        250,
        250,
        250,
        0,
        Math.PI * 2
    );

    ctx.clip();


    ctx.drawImage(
        image,
        drawX,
        drawY,
        width * 2,
        height * 2
    );


    ctx.restore();


    currentUser.profileImage =
        canvas.toDataURL(
            "image/jpeg",
            0.92
        );


    saveUser();


    document
        .getElementById("editor")
        .classList
        .add("hidden");


    document
        .getElementById("profileFile")
        .value = "";


    updateProfile();
}


/* USER SAVE */

function saveUser() {

    const index =
        users.findIndex(
            u =>
                u.id === currentUser.id
        );


    if (index !== -1) {

        users[index] =
            currentUser;
    }


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );
}


/* TANKLAR */

function showTanks(list = tanks) {

    const container =
        document.getElementById("tankList");


    container.innerHTML = "";


    list.forEach(tank => {

        const card =
            document.createElement("div");


        card.className =
            "tankCard";


        card.innerHTML = `

            <div class="tankImage">

                ${
                    tank.image
                    ?
                    `<img
                        src="${tank.image}"
                        alt="${tank.name}"
                    >`
                    :
                    "🛡️"
                }

            </div>

            <div class="tankContent">

                <p>
                    ${tank.country} • ${tank.year}
                </p>

                <h2>
                    ${tank.name}
                </h2>

                <p>
                    ${tank.description}
                </p>

            </div>
        `;


        card.onclick =
            function() {

                openTank(tank.id);
            };


        container.appendChild(card);
    });
}


/* SEARCH */

function searchTanks() {

    const value =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const result =
        tanks.filter(tank =>

            tank.name
                .toLowerCase()
                .includes(value)

            ||

            tank.country
                .toLowerCase()
                .includes(value)
        );


    showTanks(result);
}


/* TANK INFO */

function openTank(id) {

    selectedTank =
        tanks.find(
            tank =>
                tank.id === id
        );


    if (!selectedTank) return;


    document
        .getElementById("tankDetails")
        .innerHTML = `

            ${
                selectedTank.image
                ?
                `<img
                    src="${selectedTank.image}"
                    alt="${selectedTank.name}"
                >`
                :
                "<div class='tankImage'>🛡️</div>"
            }

            <h1>
                ${selectedTank.name}
            </h1>

            <p>
                <b>Davlat:</b>
                ${selectedTank.country}
            </p>

            <p>
                <b>Yil:</b>
                ${selectedTank.year}
            </p>

            <p>
                ${selectedTank.description}
            </p>
        `;


    document
        .getElementById("tankModal")
        .classList
        .remove("hidden");
}


function closeTank() {

    document
        .getElementById("tankModal")
        .classList
        .add("hidden");
}


/* SAVE */

function saveTank() {

    if (!currentUser || !selectedTank) return;


    if (!currentUser.savedTanks) {

        currentUser.savedTanks = [];
    }


    if (
        !currentUser.savedTanks.includes(
            selectedTank.id
        )
    ) {

        currentUser.savedTanks.push(
            selectedTank.id
        );

        saveUser();

        alert(
            "⭐ Tank profilingizga saqlandi!"
        );

    } else {

        alert(
            "Bu tank allaqachon saqlangan."
        );
    }
}


/* SHARE */

async function shareTank() {

    if (!selectedTank) return;


    const text =
        selectedTank.name +
        " — Tank Encyclopedia";


    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    selectedTank.name,

                text:
                    text
            });

        } catch {}

    } else {

        try {

            await navigator.clipboard
                .writeText(text);

            alert("🔗 Nusxalandi.");

        } catch {

            alert(text);
        }
    }
}


/* DOWNLOAD */

function downloadTank() {

    if (!selectedTank) return;


    const text =

`Tank Encyclopedia

Nomi: ${selectedTank.name}

Davlati: ${selectedTank.country}

Yili: ${selectedTank.year}

Ma'lumot:
${selectedTank.description}`;


    const blob =
        new Blob(
            [text],
            {
                type: "text/plain"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        selectedTank.name + ".txt";


    document.body.appendChild(link);

    link.click();

    link.remove();


    URL.revokeObjectURL(url);
}


/* ADMIN */

function openAdmin() {

    if (
        !currentUser ||
        currentUser.email !== AUTHOR_EMAIL
    ) {

        alert(
            "⛔ Faqat muallif uchun."
        );

        return;
    }


    document
        .getElementById("adminModal")
        .classList
        .remove("hidden");
}


function closeAdmin() {

    document
        .getElementById("adminModal")
        .classList
        .add("hidden");
}


/* ADD TANK */

function addTank() {

    if (
        !currentUser ||
        currentUser.email !== AUTHOR_EMAIL
    ) {

        alert(
            "⛔ Faqat muallif tank qo‘sha oladi."
        );

        return;
    }


    const name =
        document
            .getElementById("tankName")
            .value
            .trim();


    const country =
        document
            .getElementById("tankCountry")
            .value
            .trim();


    const year =
        document
            .getElementById("tankYear")
            .value
            .trim();


    const description =
        document
            .getElementById("tankDescription")
            .value
            .trim();


    const file =
        document
            .getElementById("tankFile")
            .files[0];


    if (
        !name ||
        !country ||
        !year ||
        !description
    ) {

        alert(
            "⚠️ Barcha ma'lumotlarni kiriting."
        );

        return;
    }


    if (!file) {

        alert(
            "⚠️ Tank rasmini tanlang."
        );

        return;
    }


    const reader =
        new FileReader();


    reader.onload =
        function(event) {

            const tank = {

                id: Date.now(),

                name: name,

                country: country,

                year: year,

                description:
                    description,

                image:
                    event.target.result
            };


            tanks.push(tank);


            localStorage.setItem(
                "tanks",
                JSON.stringify(tanks)
            );


            showTanks();


            closeAdmin();


            document
                .getElementById("tankName")
                .value = "";

            document
                .getElementById("tankCountry")
                .value = "";

            document
                .getElementById("tankYear")
                .value = "";

            document
                .getElementById("tankDescription")
                .value = "";

            document
                .getElementById("tankFile")
                .value = "";


            alert(
                "✅ Tank qo‘shildi!"
            );
        };


    reader.readAsDataURL(file);
}


/* NAV */

function home() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
}


function searchFocus() {

    const input =
        document.getElementById(
            "searchInput"
        );


    input.focus();


    input.scrollIntoView({

        behavior: "smooth",

        block: "center"
    });
}


function about() {

    alert(
        "Tank Encyclopedia\n\n" +
        "Tanklar haqida ensiklopedik " +
        "ma'lumotlar sayti.\n\n" +
        "© 2026"
    );
}


/* LOGOUT */

function logout() {

    if (
        !confirm(
            "Rostdan ham akkauntdan chiqmoqchimisiz?"
        )
    ) {
        return;
    }


    currentUser = null;


    localStorage.removeItem(
        "currentUser"
    );


    document
        .getElementById("site")
        .classList
        .add("hidden");


    document
        .getElementById("bottomNav")
        .classList
        .add("hidden");


    document
        .getElementById("profileModal")
        .classList
        .add("hidden");


    document
        .getElementById("loginPage")
        .classList
        .remove("hidden");
}


/* START */

if (currentUser) {

    enterSite();

} else {

    showLogin();
}