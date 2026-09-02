const tanks = [
    // 🇷🇺 ROSSIYA / SSSR
    ["T-34", "SSSR", 1940, "Ikkinchi jahon urushining eng mashhur sovet tanklaridan biri.", "t34.jpg"],
    ["T-44", "SSSR", 1944, "T-34 oilasining rivojlantirilgan modeli.", "t44.jpg"],
    ["T-54", "SSSR", 1947, "Urushdan keyingi davrning keng tarqalgan sovet tanklaridan biri.", "t54.jpg"],
    ["T-55", "SSSR", 1958, "T-54 asosida yaratilgan va uzoq vaqt xizmat qilgan tank.", "t55.jpg"],
    ["T-62", "SSSR", 1961, "Sovet Ittifoqining yangi avlod asosiy jangovar tanklaridan biri.", "t62.jpg"],
    ["T-64", "SSSR", 1966, "Yangi texnologiyalarni qo‘llagan sovet asosiy jangovar tanki.", "t64.jpg"],
    ["T-72", "SSSR", 1969, "Dunyoda keng tarqalgan sovet asosiy jangovar tanki.", "t72.jpg"],
    ["T-80", "SSSR", 1976, "Gaz turbinali dvigateldan foydalanishi bilan mashhur sovet tanki.", "t80.jpg"],
    ["T-80U", "SSSR", 1985, "T-80 oilasining takomillashtirilgan varianti.", "t80u.jpg"],
    ["T-90", "Rossiya", 1992, "T-72B asosida rivojlantirilgan Rossiya asosiy jangovar tanki.", "t90.jpg"],
    ["T-90A", "Rossiya", 2004, "T-90 oilasining modernizatsiya qilingan varianti.", "t90a.jpg"],
    ["T-90M", "Rossiya", 2020, "T-90 oilasining zamonaviy modernizatsiya qilingan versiyasi.", "t90m.jpg"],
    ["T-14 Armata", "Rossiya", 2015, "Yangi avlod platformasi asosida yaratilgan Rossiya tanki.", "t14.jpg"],
    ["KV-1", "SSSR", 1939, "Ikkinchi jahon urushining og‘ir sovet tanki.", "kv1.jpg"],
    ["IS-2", "SSSR", 1943, "Ikkinchi jahon urushidagi mashhur og‘ir sovet tanki.", "is2.jpg"],
    ["IS-3", "SSSR", 1945, "Urush oxirida paydo bo‘lgan sovet og‘ir tanki.", "is3.jpg"],
    ["BT-7", "SSSR", 1935, "Sovet Ittifoqining tezkor tanklaridan biri.", "bt7.jpg"],
    ["T-26", "SSSR", 1931, "1930-yillarda sovet armiyasida keng qo‘llangan yengil tank.", "t26.jpg"],
    ["T-28", "SSSR", 1933, "Ko‘p minorali sovet o‘rta tanki.", "t28.jpg"],
    ["T-35", "SSSR", 1935, "Besh minorali og‘ir sovet tanki.", "t35.jpg"],

    // 🇩🇪 GERMANIYA
    ["Panzer I", "Germaniya", 1934, "Germaniyaning dastlabki seriyali tanklaridan biri.", "panzer1.jpg"],
    ["Panzer II", "Germaniya", 1935, "Ikkinchi jahon urushining dastlabki davrida ishlatilgan yengil tank.", "panzer2.jpg"],
    ["Panzer III", "Germaniya", 1937, "Germaniyaning muhim o‘rta tanklaridan biri.", "panzer3.jpg"],
    ["Panzer IV", "Germaniya", 1939, "Ikkinchi jahon urushida uzoq vaqt xizmat qilgan nemis tanki.", "panzer4.jpg"],
    ["Panther", "Germaniya", 1943, "Nemislarning mashhur o‘rta tanklaridan biri.", "panther.jpg"],
    ["Tiger I", "Germaniya", 1942, "Ikkinchi jahon urushining mashhur og‘ir nemis tanki.", "tiger1.jpg"],
    ["Tiger II", "Germaniya", 1944, "Tiger oilasining yanada og‘ir varianti.", "tiger2.jpg"],
    ["Leopard 1", "Germaniya", 1965, "Urushdan keyingi G‘arbiy Germaniyaning asosiy tanki.", "leopard1.jpg"],
    ["Leopard 2", "Germaniya", 1979, "Germaniyaning zamonaviy asosiy jangovar tanklar oilasi.", "leopard2.jpg"],
    ["Leopard 2A4", "Germaniya", 1985, "Leopard 2 oilasining keng tarqalgan varianti.", "leopard2a4.jpg"],
    ["Leopard 2A5", "Germaniya", 1995, "Leopard 2A4 ning modernizatsiya qilingan varianti.", "leopard2a5.jpg"],
    ["Leopard 2A6", "Germaniya", 2001, "Leopard 2 oilasining takomillashtirilgan modeli.", "leopard2a6.jpg"],
    ["Leopard 2A7", "Germaniya", 2014, "Leopard 2 oilasining zamonaviy modernizatsiyasi.", "leopard2a7.jpg"],
    ["Leopard 2A7V", "Germaniya", 2020, "Leopard 2 platformasining zamonaviylashtirilgan versiyasi.", "leopard2a7v.jpg"],
    ["Maus", "Germaniya", 1944, "Juda katta va og‘ir eksperimental nemis tanki.", "maus.jpg"],
    ["Panzer 35(t)", "Germaniya", 1939, "Chexoslovakiya dizaynidan Germaniya tomonidan foydalanilgan tank.", "pz35t.jpg"],
    ["Panzer 38(t)", "Germaniya", 1939, "Chexoslovakiya LT vz. 38 asosidagi tank.", "pz38t.jpg"],
    ["StuG III", "Germaniya", 1940, "Panzer III shassisiga asoslangan zirhli jangovar mashina.", "stug3.jpg"],
    ["E-100", "Germaniya", 1945, "Urush oxirida ishlab chiqilishi rejalashtirilgan juda og‘ir tank loyihasi.", "e100.jpg"],
    ["VK 30.01", "Germaniya", 1941, "Germaniya tanklarini rivojlantirish loyihalaridan biri.", "vk3001.jpg"],

    // 🇺🇸 AQSH
    ["M3 Stuart", "AQSh", 1941, "Ikkinchi jahon urushida ishlatilgan Amerika yengil tanki.", "m3stuart.jpg"],
    ["M4 Sherman", "AQSh", 1942, "Ikkinchi jahon urushining eng ko‘p ishlab chiqarilgan Amerika tanklaridan biri.", "sherman.jpg"],
    ["M26 Pershing", "AQSh", 1945, "Ikkinchi jahon urushining oxirida xizmatga kirgan Amerika og‘ir tanki.", "m26.jpg"],
    ["M46 Patton", "AQSh", 1949, "Patton tanklar oilasining dastlabki vakillaridan biri.", "m46.jpg"],
    ["M47 Patton", "AQSh", 1951, "AQShning urushdan keyingi asosiy jangovar tanki.", "m47.jpg"],
    ["M48 Patton", "AQSh", 1952, "Patton oilasining keng tarqalgan tanki.", "m48.jpg"],
    ["M60", "AQSh", 1960, "AQShning Sovuq urush davridagi asosiy tanklaridan biri.", "m60.jpg"],
    ["M1 Abrams", "AQSh", 1980, "AQShning mashhur zamonaviy asosiy jangovar tanki.", "m1abrams.jpg"],
    ["M1A1 Abrams", "AQSh", 1985, "Abrams oilasining takomillashtirilgan varianti.", "m1a1.jpg"],
    ["M1A2 Abrams", "AQSh", 1992, "Abrams oilasining rivojlantirilgan asosiy jangovar tanki.", "m1a2.jpg"],
    ["M1A2 SEP", "AQSh", 1999, "Abrams platformasining elektronika va himoya tizimlari yangilangan versiyasi.", "m1a2sep.jpg"],
    ["T95", "AQSh", 1950, "AQShning eksperimental tank loyihalaridan biri.", "t95.jpg"],
    ["M103", "AQSh", 1957, "AQSh dengiz piyodalari va armiyasi uchun yaratilgan og‘ir tank.", "m103.jpg"],
    ["M551 Sheridan", "AQSh", 1967, "Yengil zirhli razvedka va jangovar mashina sifatida yaratilgan tank.", "sheridan.jpg"],
    ["M60A1", "AQSh", 1962, "M60 tankining modernizatsiya qilingan versiyasi.", "m60a1.jpg"],
    ["M60A3", "AQSh", 1978, "M60 oilasining rivojlantirilgan varianti.", "m60a3.jpg"],
    ["M4A3E8 Sherman", "AQSh", 1944, "Sherman oilasining takomillashtirilgan varianti.", "m4a3e8.jpg"],
    ["M24 Chaffee", "AQSh", 1944, "Ikkinchi jahon urushidagi yengil Amerika tanki.", "m24.jpg"],
    ["M22 Locust", "AQSh", 1942, "Havo orqali tashishga mo‘ljallangan yengil tank.", "m22.jpg"],
    ["M2 Light Tank", "AQSh", 1935, "Amerika tank dizaynining dastlabki namunalari.", "m2light.jpg"],

    // 🇬🇧 BUYUK BRITANIYA
    ["Matilda II", "Buyuk Britaniya", 1939, "Kuchli himoyasi bilan tanilgan britan piyoda tanki.", "matilda2.jpg"],
    ["Churchill", "Buyuk Britaniya", 1941, "Ikkinchi jahon urushining mashhur britan piyoda tanki.", "churchill.jpg"],
    ["Cromwell", "Buyuk Britaniya", 1943, "Britaniyaning tezkor o‘rta tanklaridan biri.", "cromwell.jpg"],
    ["Comet", "Buyuk Britaniya", 1944, "Urush oxirida xizmatga kirgan britan kreyser tanki.", "comet.jpg"],
    ["Centurion", "Buyuk Britaniya", 1945, "Urushdan keyingi davrning mashhur britan tanki.", "centurion.jpg"],
    ["Chieftain", "Buyuk Britaniya", 1966, "Sovuq urush davridagi britan asosiy jangovar tanki.", "chieftain.jpg"],
    ["Challenger 1", "Buyuk Britaniya", 1983, "Britaniyaning zamonaviy asosiy jangovar tanklaridan biri.", "challenger1.jpg"],
    ["Challenger 2", "Buyuk Britaniya", 1998, "Britaniyaning asosiy jangovar tanki.", "challenger2.jpg"],
    ["Challenger 3", "Buyuk Britaniya", 2027, "Challenger 2 asosida ishlab chiqilayotgan yangi avlod modernizatsiyasi.", "challenger3.jpg"],
    ["Vickers 6-Ton", "Buyuk Britaniya", 1928, "Britaniyada ishlab chiqilgan mashhur eksport tanki.", "vickers6.jpg"],
    ["Valentine", "Buyuk Britaniya", 1940, "Ikkinchi jahon urushidagi britan piyoda tanki.", "valentine.jpg"],
    ["Crusader", "Buyuk Britaniya", 1941, "Britaniyaning muhim kreyser tanklaridan biri.", "crusader.jpg"],
    ["Black Prince", "Buyuk Britaniya", 1945, "Churchill asosida yaratilgan eksperimental og‘ir tank.", "blackprince.jpg"],
    ["FV214 Conqueror", "Buyuk Britaniya", 1955, "Sovuq urush davridagi britan og‘ir tanki.", "conqueror.jpg"],
    ["FV4201", "Buyuk Britaniya", 1960, "Chieftain loyihasining dastlabki belgilaridan biri.", "fv4201.jpg"],

    // 🇫🇷 FRANSIYA
    ["Renault FT", "Fransiya", 1917, "Zamonaviy tank dizayniga katta ta’sir ko‘rsatgan fransuz tanki.", "renaultft.jpg"],
    ["Char B1", "Fransiya", 1935, "Ikkinchi jahon urushidan oldingi fransuz og‘ir tanki.", "charb1.jpg"],
    ["Somua S35", "Fransiya", 1935, "Fransiyaning mashhur o‘rta kavaleriya tanki.", "somua.jpg"],
    ["AMX-13", "Fransiya", 1952, "Fransiyaning yengil tanklaridan biri.", "amx13.jpg"],
    ["AMX-30", "Fransiya", 1966, "Fransiyaning asosiy jangovar tanki.", "amx30.jpg"],
    ["AMX-30B2", "Fransiya", 1982, "AMX-30 ning modernizatsiya qilingan varianti.", "amx30b2.jpg"],
    ["Leclerc", "Fransiya", 1992, "Fransiyaning zamonaviy asosiy jangovar tanki.", "leclerc.jpg"],
    ["Leclerc XLR", "Fransiya", 2020, "Leclerc tankining modernizatsiya qilingan versiyasi.", "leclercxlr.jpg"],
    ["Char 2C", "Fransiya", 1921, "Juda katta fransuz og‘ir tanki.", "char2c.jpg"],
    ["Renault R35", "Fransiya", 1935, "Fransiyaning piyoda tanklaridan biri.", "r35.jpg"],
    ["Hotchkiss H35", "Fransiya", 1936, "Fransiyaning yengil tanki.", "h35.jpg"],
    ["ARL 44", "Fransiya", 1949, "Urushdan keyingi fransuz og‘ir tanki.", "arl44.jpg"],
    ["AMX-50", "Fransiya", 1950, "Fransiyaning eksperimental og‘ir tank loyihasi.", "amx50.jpg"],
    ["AMX-40", "Fransiya", 1983, "Fransiyaning tajriba tank loyihalaridan biri.", "amx40.jpg"],
    ["AMX-56", "Fransiya", 1990, "Leclerc tankining ishlab chiqilishidagi zavod belgilaridan biri.", "amx56.jpg"],

    // 🇮🇱 ISROIL
    ["Merkava Mk 1", "Isroil", 1979, "Isroilning Merkava oilasidagi birinchi asosiy jangovar tank.", "merkava1.jpg"],
    ["Merkava Mk 2", "Isroil", 1983, "Merkava oilasining rivojlantirilgan modeli.", "merkava2.jpg"],
    ["Merkava Mk 3", "Isroil", 1990, "Merkava oilasining kuchaytirilgan varianti.", "merkava3.jpg"],
    ["Merkava Mk 4", "Isroil", 2004, "Merkava oilasining zamonaviy avlod tanki.", "merkava4.jpg"],
    ["Merkava Mk 4 Barak", "Isroil", 2023, "Merkava Mk 4 platformasining yangi modernizatsiyasi.", "merkava4barak.jpg"],
    ["Magach 6", "Isroil", 1970, "Isroilda modernizatsiya qilingan Patton oilasi tanki.", "magach6.jpg"],
    ["Sabra", "Isroil", 2002, "M60 platformasining Isroil modernizatsiyasi.", "sabra.jpg"],

    // 🇨🇳 XITOY
    ["Type 59", "Xitoy", 1959, "Sovet T-54 asosida ishlab chiqarilgan Xitoy tanki.", "type59.jpg"],
    ["Type 69", "Xitoy", 1982, "Type 59 oilasining rivojlantirilgan varianti.", "type69.jpg"],
    ["Type 79", "Xitoy", 1981, "Xitoyning rivojlantirilgan asosiy jangovar tanklaridan biri.", "type79.jpg"],
    ["Type 88", "Xitoy", 1988, "Xitoyning yangi avlod tanklaridan biri.", "type88.jpg"],
    ["Type 96", "Xitoy", 1997, "Xitoy armiyasining keng tarqalgan asosiy jangovar tanki.", "type96.jpg"],
    ["Type 96A", "Xitoy", 2006, "Type 96 ning modernizatsiya qilingan varianti.", "type96a.jpg"],
    ["Type 99", "Xitoy", 2001, "Xitoyning zamonaviy asosiy jangovar tanklaridan biri.", "type99.jpg"],
    ["Type 99A", "Xitoy", 2011, "Type 99 oilasining zamonaviylashtirilgan versiyasi.", "type99a.jpg"],
    ["Type 15", "Xitoy", 2018, "Xitoyning yengil asosiy jangovar tanki.", "type15.jpg"],

    // 🇯🇵 YAPONIYA
    ["Type 61", "Yaponiya", 1961, "Urushdan keyingi Yaponiya mudofaa kuchlarining dastlabki tanklaridan biri.", "type61.jpg"],
    ["Type 74", "Yaponiya", 1974, "Yaponiyaning mashhur asosiy jangovar tanki.", "type74.jpg"],
    ["Type 90", "Yaponiya", 1990, "Yaponiyaning zamonaviy asosiy jangovar tanklaridan biri.", "type90.jpg"],
    ["Type 10", "Yaponiya", 2012, "Yaponiyaning zamonaviy asosiy jangovar tanki.", "type10.jpg"],

    // 🇮🇹 ITALIYA
    ["M13/40", "Italiya", 1940, "Ikkinchi jahon urushidagi Italiya o‘rta tanki.", "m1340.jpg"],
    ["P26/40", "Italiya", 1943, "Italiyaning og‘irroq tank loyihalaridan biri.", "p2640.jpg"],
    ["OF-40", "Italiya", 1981, "Italiya tomonidan ishlab chiqilgan asosiy jangovar tank.", "of40.jpg"],
    ["Ariete", "Italiya", 1995, "Italiyaning asosiy jangovar tanki.", "ariete.jpg"],

    // 🇸🇪 SHVETSIYA
    ["Strv m/38", "Shvetsiya", 1939, "Shvetsiyaning Ikkinchi jahon urushi davridagi yengil tanki.", "strvm38.jpg"],
    ["Strv 74", "Shvetsiya", 1958, "Shvetsiyaning o‘rta tanklaridan biri.", "strv74.jpg"],
    ["Strv 103", "Shvetsiya", 1967, "G‘ayrioddiy past profilli Shvetsiya tanki.", "strv103.jpg"],
    ["Strv 122", "Shvetsiya", 1997, "Leopard 2 platformasining Shvetsiya versiyasi.", "strv122.jpg"],

    // 🇰🇷 JANUBIY KOREYA
    ["K1", "Janubiy Koreya", 1987, "Janubiy Koreyaning asosiy jangovar tanklaridan biri.", "k1.jpg"],
    ["K1A1", "Janubiy Koreya", 1999, "K1 tankining kuchaytirilgan varianti.", "k1a1.jpg"],
    ["K2 Black Panther", "Janubiy Koreya", 2014, "Janubiy Koreyaning zamonaviy asosiy jangovar tanki.", "k2.jpg"],

    // 🇹🇷 TURKIYA
    ["M60T Sabra", "Turkiya", 2007, "Turkiya tomonidan modernizatsiya qilingan M60 tanki.", "m60t.jpg"],
    ["Altay", "Turkiya", 2024, "Turkiyaning yangi avlod asosiy jangovar tank loyihasi.", "altay.jpg"],

    // 🇵🇱 POLSHA
    ["PT-91 Twardy", "Polsha", 1995, "T-72 platformasining Polsha modernizatsiyasi.", "pt91.jpg"],
    ["K2PL", "Polsha", 2020, "K2 platformasining Polsha uchun ishlab chiqilayotgan varianti.", "k2pl.jpg"],

    // 🇨🇿 CHEXIYA
    ["LT vz. 35", "Chexoslovakiya", 1935, "Chexoslovakiyaning urushdan oldingi yengil tanki.", "lt35.jpg"],
    ["LT vz. 38", "Chexoslovakiya", 1938, "Keyinchalik Germaniya tomonidan Panzer 38(t) sifatida ishlatilgan tank.", "lt38.jpg"],

    // 🇭🇺 VENGRIYA
    ["Toldi", "Vengriya", 1939, "Vengriyaning yengil tanki.", "toldi.jpg"],
    ["Turán I", "Vengriya", 1941, "Ikkinchi jahon urushidagi Vengriya o‘rta tanki.", "turan1.jpg"],

    // 🇦🇺 AVSTRALIYA
    ["AC1 Sentinel", "Avstraliya", 1942, "Avstraliyada ishlab chiqilgan o‘rta tank.", "ac1.jpg"],

    // 🇨🇦 KANADA
    ["Ram tank", "Kanada", 1941, "Kanadada ishlab chiqarilgan o‘rta tank.", "ram.jpg"],

    // 🇿🇦 JANUBIY AFRIKA
    ["Olifant", "Janubiy Afrika", 1978, "Centurion platformasining chuqur modernizatsiyasi.", "olifant.jpg"],

    // 🇺🇦 UKRAINA
    ["T-84", "Ukraina", 1999, "T-80 platformasi asosida Ukrainada ishlab chiqilgan tank.", "t84.jpg"],
    ["Oplot", "Ukraina", 2009, "Ukrainaning zamonaviy asosiy jangovar tanklaridan biri.", "oplot.jpg"],

    // 🇮🇳 HINDISTON
    ["Arjun", "Hindiston", 2004, "Hindiston tomonidan ishlab chiqilgan asosiy jangovar tank.", "arjun.jpg"],
    ["T-90 Bhishma", "Hindiston", 2001, "Hindiston armiyasi uchun moslashtirilgan T-90 varianti.", "t90bhishma.jpg"],

    // 🇧🇷 BRAZILIYA
    ["EE-T1 Osório", "Braziliya", 1986, "Braziliyada ishlab chiqilgan tajriba asosiy jangovar tanki.", "osorio.jpg"],

    // 🇦🇷 ARGENTINA
    ["TAM", "Argentina", 1979, "Argentina uchun ishlab chiqilgan o‘rta asosiy jangovar tank.", "tam.jpg"],

    // 🇨🇭 SHVEYTSARIYA
    ["Panzer 61", "Shveytsariya", 1961, "Shveytsariyaning asosiy jangovar tanki.", "panzer61.jpg"],
    ["Panzer 68", "Shveytsariya", 1968, "Panzer 61 ning rivojlantirilgan varianti.", "panzer68.jpg"],

    // 🇪🇸 ISPANIYA
    ["Leopard 2E", "Ispaniya", 2003, "Leopard 2A6 asosidagi Ispaniya asosiy jangovar tanki.", "leopard2e.jpg"],

    // 🇳🇱 NIDERLANDIYA
    ["Leopard 2NL", "Niderlandiya", 1982, "Niderlandiya tomonidan ishlatilgan Leopard 2 varianti.", "leopard2nl.jpg"],

    // 🇦🇹 AVSTRIYA
    ["Kürassier SK-105", "Avstriya", 1971, "Avstriyaning yengil tanklaridan biri.", "sk105.jpg"],

    // 🇧🇪 BELGIYA
    ["M24 Chaffee Belgian", "Belgiya", 1945, "Belgiya tomonidan xizmatda ishlatilgan M24 Chaffee varianti.", "m24belgium.jpg"]
];


/* TANK OBYEKTLARIGA O‘GIRISH */

const tankData = tanks.map((tank, index) => ({
    id: index + 1,
    name: tank[0],
    country: tank[1],
    year: tank[2],
    description: tank[3],
    image: "images/" + tank[4]
}));


let currentTanks = tankData;
let selectedTank = null;


/* TANKLARNI CHIQARISH */

function showTanks(list = currentTanks) {

    const container =
        document.getElementById("tankList");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(tank => {

        const card =
            document.createElement("article");

        card.className = "tankCard";

        card.innerHTML = `
            <div class="tankImage">
                <img
                    src="${tank.image}"
                    alt="${tank.name}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=&quot;noImage&quot;>🛡️</div>';"
                >
            </div>

            <div class="tankContent">

                <p class="tankCountry">
                    ${tank.country}
                </p>

                <h3>
                    ${tank.name}
                </h3>

                <p class="tankYear">
                    ${tank.year}
                </p>

                <p class="tankDescription">
                    ${tank.description}
                </p>

            </div>
        `;

        card.onclick = () => openTank(tank.id);

        container.appendChild(card);
    });

    const count =
        document.getElementById("tankCount");

    if (count) {
        count.textContent =
            `${list.length} tank`;
    }
}


/* TANK OCHISH */

function openTank(id) {

    selectedTank =
        tankData.find(tank => tank.id === id);

    if (!selectedTank) return;

    const details =
        document.getElementById("tankDetails");

    details.innerHTML = `

        <img
            class="tankDetailImage"
            src="${selectedTank.image}"
            alt="${selectedTank.name}"
            onerror="this.style.display='none'"
        >

        <div class="tankDetails">

            <p class="tankCountry">
                ${selectedTank.country}
            </p>

            <h1>
                ${selectedTank.name}
            </h1>

            <p class="detailLine">
                <b>Davlat:</b>
                ${selectedTank.country}
            </p>

            <p class="detailLine">
                <b>Yil:</b>
                ${selectedTank.year}
            </p>

            <p class="detailDescription">
                ${selectedTank.description}
            </p>

        </div>
    `;

    document
        .getElementById("tankModal")
        .classList
        .remove("hidden");
}


/* MODAL */

function closeTank() {

    document
        .getElementById("tankModal")
        .classList
        .add("hidden");
}


function closeModalOutside(event) {

    if (event.target.id === "tankModal") {
        closeTank();
    }
}


/* QIDIRUV */

function searchTanks() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const value =
        input.value
            .toLowerCase()
            .trim();

    currentTanks =
        tankData.filter(tank =>
            tank.name
                .toLowerCase()
                .includes(value) ||

            tank.country
                .toLowerCase()
                .includes(value)
        );

    showTanks(currentTanks);
}


/* DAVLAT BO‘YICHA FILTER */

function filterCountry(country) {

    if (country === "all") {

        currentTanks = tankData;

    } else {

        currentTanks =
            tankData.filter(
                tank =>
                    tank.country === country
            );
    }

    showTanks(currentTanks);
}


/* PROFIL */

function openProfile() {

    document
        .getElementById("profileModal")
        .classList
        .remove("hidden");
}


function closeProfile() {

    document
        .getElementById("profileModal")
        .classList
        .add("hidden");
}


/* SAQLASH */

function saveTank() {

    if (!selectedTank) return;

    const saved =
        JSON.parse(
            localStorage.getItem("savedTanks") || "[]"
        );

    if (!saved.includes(selectedTank.id)) {

        saved.push(selectedTank.id);

        localStorage.setItem(
            "savedTanks",
            JSON.stringify(saved)
        );

        alert("⭐ Tank saqlandi!");

    } else {

        alert("Bu tank allaqachon saqlangan.");
    }
}


/* SHARE */

async function shareTank() {

    if (!selectedTank) return;

    const text =
        `${selectedTank.name} — Tank Encyclopedia`;

    if (navigator.share) {

        try {

            await navigator.share({
                title: selectedTank.name,
                text: text,
                url: location.href
            });

        } catch {}
        
    } else {

        try {

            await navigator.clipboard
                .writeText(
                    `${text}\n${location.href}`
                );

            alert("🔗 Havola nusxalandi.");

        } catch {

            alert(location.href);
        }
    }
}


/* DOWNLOAD */

function downloadTank() {

    if (!selectedTank) return;

    const text = `
TANK ENCYCLOPEDIA

Nomi: ${selectedTank.name}
Davlati: ${selectedTank.country}
Yili: ${selectedTank.year}

Ma'lumot:
${selectedTank.description}
`;

    const blob =
        new Blob(
            [text],
            { type: "text/plain" }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        selectedTank.name
            .replaceAll(" ", "_") +
        ".txt";

    link.click();

    URL.revokeObjectURL(url);
}


/* NAVIGATION */

function home() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    currentTanks = tankData;

    showTanks(tankData);
}


function searchFocus() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    input.focus();

    input.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function about() {

    alert(
        "Tank Encyclopedia\n\n" +
        "150 ta tank haqida ensiklopedik " +
        "ma'lumotlar.\n\n" +
        "© 2026"
    );
}


/* START */

showTanks(tankData);
