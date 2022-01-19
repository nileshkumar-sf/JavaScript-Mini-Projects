const data = [
    {
        id: 1,
        name: "Nilesh Kumar",
        designation: "FullStack Engineer",
        img: "https://github.com/nileshkr9919.png",
        about: "I'm a man of ambitions consistently striving to learn more and more. Having a keen interest in programming, I have explored the domains of competitive programming, Android Application development and Web Development . Participated in various global contests like Google Codejam, Kickstart and Qualified in Facebook HackerCup 2021."
    },
    {
        id: 2,
        name: "Person 2",
        designation: "ML Engineer",
        img: "https://github.com/nileshkumar-sf.png",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore laudantium, adipisci molestias esse pariatur, ad quia ipsam qui cumque repellat? Neque excepturi assumenda quae cum, iure accusamus. Repellat, est."
    },
    {
        id: 3,
        name: "Person 3",
        designation: "Cloud Engineer",
        img: "https://github.com/pr0PM.png",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore laudantium, adipisci molestias esse pariatur, ad quia ipsam qui cumque repellat? Neque excepturi assumenda quae cum, iure accusamus. Repellat, est."
    },
    {
        id: 4,
        name: "Person 4",
        designation: "Web Developer",
        img: "https://github.com/nileshkr9919.png",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore laudantium, adipisci molestias esse pariatur, ad quia ipsam qui cumque repellat? Neque excepturi assumenda quae cum, iure accusamus. Repellat, est."
    },
    {
        id: 5,
        name: "Person 5",
        designation: "FrontEnd Engineer",
        img: "https://github.com/androidmalware.png",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore laudantium, adipisci molestias esse pariatur, ad quia ipsam qui cumque repellat? Neque excepturi assumenda quae cum, iure accusamus. Repellat, est."
    },
    {
        id: 6,
        name: "Ayush Shankhwar",
        designation: "FrontEnd Engineer",
        img: "https://github.com/ayushshankhwar.png",
        about: "I'm a man of ambitions consistently striving to learn more and more. Having a keen interest in programming, I have explored the domains of competitive programming, Android Application development and Web Development . Participated in various global contests like Google Codejam, Kickstart and Qualified in Facebook HackerCup 2021."
    }
];
const img = document.getElementById("image");
const aname = document.getElementById("name");
const designation = document.getElementById("designation");
const about = document.getElementById("about");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    loadData(currentItem);
});

function loadData(currentItem) {
    const item = data[currentItem];
    img.src = item.img;
    aname.textContent = item.name;
    designation.textContent = item.designation;
    about.textContent = item.about;
}

prev.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = data.length - 1;
    }
    loadData(currentItem);
});
next.addEventListener("click", function() {
    currentItem++;
    if(currentItem > data.length - 1){
        currentItem = 0;
    }
    loadData(currentItem);
})