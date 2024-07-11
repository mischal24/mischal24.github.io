let current_page = 0;
let project_scroll = 0;
let is_interping = true;

let bg = document.getElementById("background");
let pj = document.getElementById("projects");
let am = document.getElementById("about");
let sc = document.getElementById("social");

let mn = document.getElementById("main-nav");
let pn = document.getElementById("projects-nav");

function set_page(x) {
    current_page = x;
    handle_pages();
}

function handle_pages() {
    if (current_page == 0) {
        bg.style.setProperty("transform", "translateX(0vh)");
        pj.style.setProperty("opacity", "0");
        pj.style.setProperty("transform", "translate(50vw, 30vh)");
        pn.style.setProperty("opacity", "0");
        pn.style.setProperty("pointer-events", "none");
        am.style.setProperty("opacity", "0");
        sc.style.setProperty("opacity", "0");
    }

    if (current_page == 1) {
        bg.style.setProperty("transform", "translateX(-60vh)");
        pj.style.setProperty("opacity", "1");
        pj.style.setProperty("transform", "translate(" + project_scroll + "vh, 30vh)");
        pn.style.setProperty("opacity", "1");
        pn.style.setProperty("pointer-events", "all");
        am.style.setProperty("opacity", "0");
        sc.style.setProperty("opacity", "0");
    }
    
    if (current_page == 2) {
        bg.style.setProperty("transform", "translateX(-150vh)");
        pj.style.setProperty("opacity", "0");
        pj.style.setProperty("transform", "translate(50vw, 30vh)");
        pn.style.setProperty("opacity", "0");
        pn.style.setProperty("pointer-events", "none");
        am.style.setProperty("opacity", "1");
        sc.style.setProperty("opacity", "1");
    }
}

function scroll_projects(event) {
    if (event.deltaY < 0)
    {
        project_scroll += 5;
    }
    else if (event.deltaY > 0)
    {
        project_scroll -= 5;
    }

    pj.style.setProperty("transform", "translate(" + project_scroll + "vw, 30vh)");

    if (project_scroll < (-60 * pj.childElementCount)) {
        pj.classList.add("notransition");
        project_scroll = (60 * pj.childElementCount);
        setTimeout(() => {pj.classList.remove("notransition");}, 500)
    }
    if (project_scroll > (60 * pj.childElementCount)) {
        pj.classList.add("notransition");
        project_scroll = (-60 * pj.childElementCount);
        setTimeout(() => {pj.classList.remove("notransition");}, 500)
    }
}

document.body.addEventListener("wheel", scroll_projects);

function jump_projects(x) {
    project_scroll = -x;
    pj.style.setProperty("transform", "translate(" + project_scroll + "vw, 30vh)");
}