const trendingArticles = [
  {
    id: 1,
    author: "Tom Cooper",
    publication: null,
    title: "Ukraine War, 23 October 2022",
    date: "Oct 23, 2022",
    readTime: "5 min",
    image: "image01.jpeg",
  },
  {
    id: 2,
    author: "Arthur Hayes",
    publication: "Entrepreneur's Handbook",
    title: "Comeback",
    date: "Oct 26, 2022",
    readTime: "24 min",
    image: "image02.png",
  },
  {
    id: 3,
    author: "Tom Cooper",
    publication: null,
    title: "How I Learned to Love My Breasts Even Though One Is A Horcrux For Voldemort",
    date: "Oct 26, 2022",
    readTime: "2 min",
    image: "image03.jpeg",
  },
  {
    id: 4,
    author: "Frank Mastropolo",
    publication: "The Riffk",
    title: "The Night Paul McCartney Donned a Disguise at Fillmore East",
    date: "Oct 22, 2022",
    readTime: "3 min",
    image: "image04.png",
  },
  {
    id: 5,
    author: "Frank Andrade",
    publication: "Towards Data Science",
    title: "5 Python Projects to Automate Your Life: From Beginner to Advanced",
    date: "Oct 13, 2022",
    readTime: "6 min",
    image: "image05.jpeg",
  },
  {
    id: 6,
    author: "Wesley Smits",
    publication: "JavaScript in Plain English",
    title: "How To Make Visual Studio Code Look Amazing",
    date: "Oct 20, 2022",
    readTime: "7 min",
    image: "image06.png",
  },
];

const featuredArticles = [
  {
    author: "Robert Roy Britt",
    publication: null,
    title: "How Old is Old?",
    desc: "What we consider “old” changes dramatically with age, and our perspectives can be predictive of how well we age",
    date: "Oct 27",
    readTime: "5 min",
    topic: "Aging",
    authorImage: "image07.jpeg",
    featImage: "image08.jpeg",
  },
  {
    author: "Taru Anniina Liikanen",
    publication: null,
    title: "Is Taylor Swift Allowed to Speak About Fat?",
    desc: "Can you speak about your trauma if you don't look traumatized?",
    date: "Oct 24",
    readTime: "6 min",
    topic: "Health",
    authorImage: "image09.jpeg",
    featImage: "image10.jpeg",
  },
  {
    author: "David Rodenas, Ph. D.",
    publication: null,
    title: "Don’t Screw Up, You Will Be Found Guilty",
    desc: "Software Engineer, yours is the right to produce high-quality work at all times, also the liability.",
    date: "Oct 15",
    readTime: "5 min",
    topic: "Software Engineering",
    authorImage: "image11.jpeg",
    featImage: "image12.png",
  },
  {
    author: "Microsoft Design",
    publication: null,
    title: "Leave No Trace",
    desc: "How product designers can break from the status quo and help our planet",
    date: "Oct 25",
    readTime: "11 min",
    topic: "Sustainability",
    authorImage: "image13.png",
    featImage: "image14.png",
  },
  {
    author: "Scott H. Young",
    publication: null,
    title: "Variability, Not Repetition, is the Key to Mastery",
    desc: "Bruce Lee is reported to have said, “I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000...",
    date: "Oct 26",
    readTime: "7 min",
    topic: "Health",
    authorImage: "image15.jpeg",
    featImage: "image16.jpg",
  },
  {
    author: "Paul A. DeStefano",
    publication: "Human Parts",
    title: "What I Overheard as an Escape Room Actor",
    desc: "Lock a group of people in a room and you’ll witness some surprising confessions",
    date: "Jan 18, 2020",
    readTime: "6 min",
    topic: "Experiences",
    authorImage: "image17.png",
    featImage: "image18.jpeg",
  },
  {
    author: "Kim Scott",
    publication: null,
    title: "6 Steps for Setting Measurable Goals to Avoid “Productivity Paranoia”",
    desc: "With more people working in remote and hybrid environments than ever before, company, team and individual goals must be explicit and…",
    date: "Oct 24",
    readTime: "6 min",
    topic: "Health",
    authorImage: "image19.jpeg",
    featImage: "image20.jpg",
  },
];

const discoverTags = [
  "Programming",
  "Data Science",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
  "Politics",
];

const trendingList = document.getElementById("trending-list");

const renderTrendingArticles = () => {
  let html = "";
  for (const article of trendingArticles) {
    html += `
    <div class="trending-item">
        <p class="number-of-item">0${article.id}</p>
        <div class="trending-item-text">
            <p class="trending-item-writer"
                ><img src="./assets/imgs/${article.image}" alt="article thumbnail" />
                <span >${article.author}</span
            >${article.publication ? `<span class="gray-text">\&nbsp; in  \&nbsp;</span>${article.publication}</span>` : ""}
            <p class="trending-item-title">${article.title}</p>
            <div class="trending-specs gray-text"
                <p>${article.date}\&nbsp;·\&nbsp;${article.readTime}
                </p>
            </div>
        </div> 
    </div> `;
  }
  trendingList.innerHTML = html;
};

const articleList = document.getElementById("article-list");

const renderFeaturedArticles = () => {
  let html = "";
  for (const article of featuredArticles) {
    html += `
    
        <div class="article-item">
            <div class="article-text">
              <p class="article-writer"
                ><img src="./assets/imgs/${article.authorImage}" alt="${article.author} picture" />
                <span>${article.author}</span></p
              >
              <h6 class="article-title">${article.title}</h6>
              <p class="article-desc">${article.desc}</p>
              <div class="article-specs ">
                <p class="gray-text">${article.date}\&nbsp;·\&nbsp;
                ${article.readTime}\&nbsp;·\&nbsp;
               <span class="tag"> ${article.topic}</span> </p>
               <img src="./assets/imgs/svg/star.svg" alt="star icon" class="star-img" />
                
                <img src="./assets/imgs/svg/bookmark.svg" alt="bookmark icon" class="bookmark-img " />
              </div>
            </div>
            <img src="./assets/imgs/${article.featImage}" alt="featured article image" class="article-img" />
          </div>

        `;
  }
  articleList.innerHTML = html;
};

const discoverTagsList = document.getElementById("discover-tags-list");
console.log(discoverTagsList);

const renderDiscoverTags = () => {
  html = "";
  for (const tag of discoverTags) {
    html += `<p class="discover-tag">${tag}</p>
`;
  }
  discoverTagsList.innerHTML = html;
};

const triggerPoint = 480;

const navBar = document.getElementById("navBar");

window.addEventListener("scroll", () => {
  navBar.classList.toggle("white", window.scrollY > triggerPoint);
});

renderTrendingArticles();
renderFeaturedArticles();
renderDiscoverTags();
