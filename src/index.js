import './style.css';
import GitIcon from './github-mark-white.svg';
import Daily from './daily';
import Big from './big';
import Groceries from './groceries';
import Xmas from './xmas';
import Gifts from './gifts';
import Gym from './gym';
import General from './general';

function App() {

    const main = document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);

    // MAIN HEADER //

    const header = document.createElement("div");
    header.classList.add("header");
    main.appendChild(header);

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("headerTitle");
    headerTitle.innerText = "PERSONAL LISTS"
    header.appendChild(headerTitle);

    // SIDEBAR FOR LIST SELECTION //

    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");
    main.appendChild(sideBar);

    const dailySelect = document.createElement("div");
    dailySelect.classList.add("dailySelect");
    dailySelect.classList.add("sidebarBtn");
    sideBar.appendChild(dailySelect);
    dailySelect.onclick = Daily;

    const dailyH1 = document.createElement("h1");
    dailyH1.classList.add("sidebarTitle");
    dailyH1.innerText = "DAILY";
    dailySelect.appendChild(dailyH1);

    const bigSelect = document.createElement("div");
    bigSelect.classList.add("bigSelect");
    bigSelect.classList.add("sidebarBtn");
    sideBar.appendChild(bigSelect);
    bigSelect.onclick = Big;

    const bigH1 = document.createElement("h1");
    bigH1.classList.add("sidebarTitle");
    bigH1.innerText = "BIG";
    bigSelect.appendChild(bigH1);

    const grocerySelect = document.createElement("div");
    grocerySelect.classList.add("grocerySelect");
    grocerySelect.classList.add("sidebarBtn");
    sideBar.appendChild(grocerySelect);
    grocerySelect.onclick = Groceries;

    const groceryH1 = document.createElement("h1");
    groceryH1.classList.add("sidebarTitle");
    groceryH1.innerText = "GROCERIES";
    grocerySelect.appendChild(groceryH1);

    const xmasSelect = document.createElement("div");
    xmasSelect.classList.add("xmasSelect");
    xmasSelect.classList.add("sidebarBtn");
    sideBar.appendChild(xmasSelect);
    xmasSelect.onclick = Xmas;

    const xmasH1 = document.createElement("h1");
    xmasH1.classList.add("sidebarTitle");
    xmasH1.innerText = "XMAS";
    xmasSelect.appendChild(xmasH1);

    const giftIdeasSelect = document.createElement("div");
    giftIdeasSelect.classList.add("giftIdeasSelect");
    giftIdeasSelect.classList.add("sidebarBtn");
    sideBar.appendChild(giftIdeasSelect);
    giftIdeasSelect.onclick = Gifts;

    const giftH1 = document.createElement("h1");
    giftH1.classList.add("sidebarTitle");
    giftH1.innerText = "GIFT IDEAS";
    giftIdeasSelect.appendChild(giftH1);

    const gymSelect = document.createElement("div");
    gymSelect.classList.add("gymSelect");
    gymSelect.classList.add("sidebarBtn");
    sideBar.appendChild(gymSelect);
    gymSelect.onclick = Gym;

    const gymH1 = document.createElement("h1");
    gymH1.classList.add("sidebarTitle");
    gymH1.innerText = "GYM";
    gymSelect.appendChild(gymH1);

    const generalSelect = document.createElement("div");
    generalSelect.classList.add("generalSelect");
    generalSelect.classList.add("sidebarBtn");
    sideBar.appendChild(generalSelect);
    generalSelect.onclick = General;

    const generalH1 = document.createElement("h1");
    generalH1.classList.add("sidebarTitle");
    generalH1.innerText = "GENERAL";
    generalSelect.appendChild(generalH1);

    // DYNAMIC LIST CONTENT //

    const content = document.createElement("div");
    content.setAttribute("id", "content");
    main.appendChild(content);

    // FOOTER //

    const footer = document.createElement("div");
    footer.classList.add("footer");
    main.appendChild(footer);

    const gitHub = document.createElement("p");
    gitHub.classList.add("gitHub");
    gitHub.innerText = "Created By ";
    footer.appendChild(gitHub);

    const Icon = new Image();
    Icon.src = GitIcon;
    Icon.classList.add("gitLogo");

    const gitHubLink = document.createElement("a");
    gitHubLink.setAttribute("href", "https://github.com/BenjaminJMcD");
    gitHubLink.appendChild(Icon)
    const gitName = document.createElement("span");
    gitName.innerText = "BenjaminJMcD";
    gitHubLink.appendChild(gitName);
    gitHub.appendChild(gitHubLink);


}

App();