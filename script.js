41606842670071const tanks = [

    {
        name: "T-34",
        country: "SSSR",
        year: 1940,
        image: "images/t34.jpg",
        description: "Ikkinchi jahon urushining eng mashhur sovet tanklaridan biri."
    },

    {
        name: "T-44",
        country: "SSSR",
        year: 1944,
        image: "images/t44.jpg",
        description: "T-34 oilasining rivojlantirilgan modeli."
    },

    {
        name: "T-54",
        country: "SSSR",
        year: 1947,
        image: "images/t54.jpg",
        description: "Urushdan keyingi davrning keng tarqalgan sovet tanklaridan biri."
    },

    {
        name: "T-55",
        country: "SSSR",
        year: 1958,
        image: "images/t55.jpg",
        description: "T-54 asosida yaratilgan va uzoq vaqt xizmat qilgan tank."
    },

    {
        name: "T-62",
        country: "SSSR",
        year: 1961,
        image: "images/t62.jpg",
        description: "Sovet Ittifoqining yangi avlod asosiy jangovar tanklaridan biri."
    },

    {
        name: "T-64",
        country: "SSSR",
        year: 1966,
        image: "images/t64.jpg",
        description: "Yangi texnologiyalarni qo‘llagan sovet asosiy jangovar tanki."
    },

    {
        name: "T-72",
        country: "SSSR",
        year: 1969,
        image: "images/t72.jpg",
        description: "Dunyodagi eng keng tarqalgan asosiy jangovar tanklardan biri."
    },

    {
        name: "T-80",
        country: "SSSR",
        year: 1976,
        image: "images/t80.jpg",
        description: "Gaz turbinali dvigatelga ega sovet asosiy jangovar tanki."
    },

    {
        name: "Leopard 2",
        country: "Germaniya",
        year: 1979,
        image: "images/leopard2.jpg",
        description: "Germaniyaning zamonaviy asosiy jangovar tanklaridan biri."
    },

    {
        name: "Tiger I",
        country: "Germaniya",
        year: 1942,
        image: "images/tiger1.jpg",
        description: "Ikkinchi jahon urushidagi mashhur nemis og‘ir tanki."
    },

    {
        name: "M1 Abrams",
        country: "AQSh",
        year: 1980,
        image: "images/m1abrams.jpg",
        description: "AQShning asosiy jangovar tanklar oilasi."
    },

    {
        name: "M60 Patton",
        country: "AQSh",
        year: 1960,
        image: "images/m60.jpg",
        description: "AQSh tomonidan ishlab chiqilgan sovuq urush davri tanki."
    }

];


let currentCountry = "all";
let currentTank = null;


const container = document.getElementById("tankContainer");
const count = document.getElementById("tankCount");


function showTanks(list) {

    container.innerHTML = "";

    count.textContent = list.length + " tank";

    if (list.length === 0) {

        container.innerHTML = `
            <p style="
                grid-column: 1/-1;
                text-align:center;
                color:#89938d;
                padding:50px 0;
            ">
                Tank topilmadi 😔
            </p>
        `;

        return;
    }


    list.forEach(tank => {

        const card = document.createElement("div");

        card.className = "tank-card";

        card.onclick = () => openTank(tank);


        card.innerHTML = `

            <img
                class="tank-image"
                src="${tank.image}"
                alt="${tank.name}"
                onerror="this.style.display='none'"
            >

            <div class="tank-info">

                <small>${tank.country}</small>

                <h3>${tank.name}</h3>

                <p class="tank-year">
                    ${tank.year}
                </p>

                <p>
                    ${tank.description}
                </p>

            </div>

        `;


        container.appendChild(card);

    });

}


function filterCountry(country, button) {

    currentCountry = country;

    document
        .querySelectorAll(".filter")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    searchTanks();

}


function searchTanks() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    let result = tanks.filter(tank => {

        const matchesCountry =
            currentCountry === "all" ||
            tank.country === currentCountry;

        const matchesSearch =
            tank.name.toLowerCase().includes(search) ||
            tank.country.toLowerCase().includes(search);


        return matchesCountry && matchesSearch;

    });


    showTanks(result);

}


function openTank(tank) {

    currentTank = tank;

    document.getElementById("modalImage").src = tank.image;

    document.getElementById("modalCountry").textContent =
        tank.country;

    document.getElementById("modalName").textContent =
        tank.name;

    document.getElementById("modalYear").textContent =
        "Ishlab chiqarilgan: " + tank.year;

    document.getElementById("modalDescription").textContent =
        tank.description;


    document
        .getElementById("tankModal")
        .classList.add("show");

}


function closeTank() {

    document
        .getElementById("tankModal")
        .classList.remove("show");

}


function openProfile() {

    document
        .getElementById("profileModal")
        .classList.add("show");

}


function closeProfile() {

    document
        .getElementById("profileModal")
        .classList.remove("show");

}


function focusSearch() {

    document
        .getElementById("searchInput")
        .focus();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function saveTank() {

    if (!currentTank) return;

    localStorage.setItem(
        "savedTank",
        JSON.stringify(currentTank)
    );

    alert("Tank saqlandi ❤️");

}


function shareTank() {

    if (!currentTank) return;

    if (navigator.share) {

        navigator.share({
            title: currentTank.name,
            text: currentTank.description,
            url: window.location.href
        });

    } else {

        alert("Ulashish funksiyasi telefoningizda mavjud emas.");

    }

}


function showAbout() {

    alert(
        "Tank Encyclopedia\n\n" +
        "Tanklar haqida ma'lumot beruvchi ensiklopediya."
    );

}


showTanks(tanks);
