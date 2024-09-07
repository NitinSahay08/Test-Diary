class Flipbook {
    constructor(element) {
        this.element = element;
        this.pages = [];
        this.currentPage = 0;
        this.addEntryButton = document.getElementById("add-entry");
        this.saveDiaryButton = document.getElementById("save-diary");
        this.loadDiaryButton = document.getElementById("load-diary");
        this.addEntryButton.addEventListener("click", () => this.addEntry());
        this.saveDiaryButton.addEventListener("click", () => this.saveDiary());
        this.loadDiaryButton.addEventListener("click", () => this.loadDiary());
        this.element.addEventListener("click", () => this.flipPage());
    }

    addEntry() {
        const newEntry = prompt("Enter your diary entry:");
        if (newEntry) {
            const newPage = document.createElement("div");
            newPage.className = "page";
            const front = document.createElement("div");
            front.className = "front";
            const back = document.createElement("div");
            back.className = "back";
            const entryElement = document.createElement("div");
            entryElement.className = "entry";
            entryElement.textContent = newEntry;
            front.appendChild(entryElement);
            newPage.appendChild(front);
            newPage.appendChild(back);
            this.element.appendChild(newPage);
            this.pages.push(newPage);
            this.flipPage();
        }
    }

    saveDiary() {
        const diaryData = this.pages.map((page) => {
            const entry = page.querySelector(".entry");
            return entry.textContent;
        });
        localStorage.setItem("diary", JSON.stringify(diaryData));
    }

    loadDiary() {
        const diaryData = localStorage.getItem("diary");
        if (diaryData)
