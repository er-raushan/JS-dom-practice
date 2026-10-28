const users = [
  {
    name: "Rahul Sharma",
    bio: "Web developer who loves coding and exploring new technologies.",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Priya Singh",
    bio: "UI/UX designer passionate about creating beautiful interfaces.",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Aman Verma",
    bio: "Software engineer who enjoys solving challenging problems.",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    name: "Sneha Gupta",
    bio: "Photographer who loves capturing special moments.",
    image: "https://i.pravatar.cc/300?img=44",
  },
  {
    name: "Vikash Kumar",
    bio: "Full-stack developer learning AI and machine learning.",
    image: "https://i.pravatar.cc/300?img=14",
  },
  {
    name: "Ananya Das",
    bio: "Creative designer who enjoys art and digital illustrations.",
    image: "https://i.pravatar.cc/300?img=45",
  },
  {
    name: "Rohit Mishra",
    bio: "Tech enthusiast who enjoys building useful applications.",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    name: "Neha Kumari",
    bio: "Student exploring web development and modern technologies.",
    image: "https://i.pravatar.cc/300?img=46",
  },
  {
    name: "Arjun Patel",
    bio: "Backend developer interested in APIs and databases.",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Kavya Reddy",
    bio: "Content creator who loves storytelling and creativity.",
    image: "https://i.pravatar.cc/300?img=48",
  },
  {
    name: "Saurabh Yadav",
    bio: "Competitive programmer who enjoys solving DSA problems.",
    image: "https://i.pravatar.cc/300?img=16",
  },
  {
    name: "Pooja Mehta",
    bio: "Digital marketer passionate about branding and social media.",
    image: "https://i.pravatar.cc/300?img=49",
  },
  {
    name: "Karan Malhotra",
    bio: "Mobile app developer who enjoys building creative products.",
    image: "https://i.pravatar.cc/300?img=17",
  },
  {
    name: "Isha Roy",
    bio: "Music lover who enjoys singing and discovering new artists.",
    image: "https://i.pravatar.cc/300?img=50",
  },
  {
    name: "Aditya Singh",
    bio: "Computer science graduate preparing for software engineering roles.",
    image: "https://i.pravatar.cc/300?img=18",
  },
  {
    name: "Meera Joshi",
    bio: "Fashion enthusiast who loves styling and exploring trends.",
    image: "https://i.pravatar.cc/300?img=51",
  },
  {
    name: "Nikhil Jain",
    bio: "Cloud computing enthusiast learning DevOps and automation.",
    image: "https://i.pravatar.cc/300?img=19",
  },
  {
    name: "Riya Kapoor",
    bio: "Book lover who enjoys fiction, poetry, and coffee.",
    image: "https://i.pravatar.cc/300?img=52",
  },
  {
    name: "Deepak Kumar",
    bio: "Python developer interested in data science and automation.",
    image: "https://i.pravatar.cc/300?img=20",
  },
  {
    name: "Simran Kaur",
    bio: "Travel enthusiast who loves exploring new places.",
    image: "https://i.pravatar.cc/300?img=53",
  },
  {
    name: "Mohit Agarwal",
    bio: "Entrepreneur interested in startups and product development.",
    image: "https://i.pravatar.cc/300?img=21",
  },
  {
    name: "Aditi Sharma",
    bio: "Frontend developer who enjoys creating interactive websites.",
    image: "https://i.pravatar.cc/300?img=54",
  },
  {
    name: "Harsh Raj",
    bio: "Gamer who enjoys competitive games and streaming.",
    image: "https://i.pravatar.cc/300?img=22",
  },
  {
    name: "Tanya Bose",
    bio: "Illustrator passionate about visual storytelling and design.",
    image: "https://i.pravatar.cc/300?img=55",
  },
  {
    name: "Abhishek Tiwari",
    bio: "Cybersecurity learner interested in ethical hacking.",
    image: "https://i.pravatar.cc/300?img=23",
  },
  {
    name: "Nisha Verma",
    bio: "Fitness enthusiast who enjoys yoga and healthy living.",
    image: "https://i.pravatar.cc/300?img=56",
  },
  {
    name: "Pranav Shah",
    bio: "Machine learning enthusiast exploring intelligent systems.",
    image: "https://i.pravatar.cc/300?img=24",
  },
  {
    name: "Divya Nair",
    bio: "HR professional who enjoys connecting with people.",
    image: "https://i.pravatar.cc/300?img=57",
  },
  {
    name: "Manish Pandey",
    bio: "Cricket fan and aspiring software developer.",
    image: "https://i.pravatar.cc/300?img=25",
  },
  {
    name: "Shreya Sinha",
    bio: "Psychology student interested in human behavior.",
    image: "https://i.pravatar.cc/300?img=58",
  },
  {
    name: "Varun Khanna",
    bio: "Product designer focused on simple and user-friendly experiences.",
    image: "https://i.pravatar.cc/300?img=26",
  },
  {
    name: "Muskan Ali",
    bio: "Blogger who loves writing about lifestyle and personal growth.",
    image: "https://i.pravatar.cc/300?img=59",
  },
  {
    name: "Rajat Sinha",
    bio: "Java developer interested in scalable backend systems.",
    image: "https://i.pravatar.cc/300?img=27",
  },
  {
    name: "Payal Choudhary",
    bio: "Food lover who enjoys cooking and trying new recipes.",
    image: "https://i.pravatar.cc/300?img=60",
  },
  {
    name: "Akash Thakur",
    bio: "Blockchain enthusiast exploring decentralized applications.",
    image: "https://i.pravatar.cc/300?img=28",
  },
  {
    name: "Komal Mishra",
    bio: "Artist who loves painting, sketching, and creative projects.",
    image: "https://i.pravatar.cc/300?img=61",
  },
  {
    name: "Yash Gupta",
    bio: "Aspiring game developer who enjoys 3D design and animation.",
    image: "https://i.pravatar.cc/300?img=29",
  },
  {
    name: "Sakshi Patel",
    bio: "Data analyst interested in statistics and visualization.",
    image: "https://i.pravatar.cc/300?img=62",
  },
  {
    name: "Gaurav Singh",
    bio: "Open-source contributor who enjoys learning new frameworks.",
    image: "https://i.pravatar.cc/300?img=30",
  },
  {
    name: "Aarohi Sen",
    bio: "Nature lover who enjoys photography and peaceful walks.",
    image: "https://i.pravatar.cc/300?img=63",
  },
];

let inp = document.querySelector("input");
let all = document.querySelector("#allposter");
let post = document.querySelector(".post");
// let nm=document.querySelector("h3");
// let bio=document.querySelector("p");

function dataadd(arr) {
  // let div=document.createElement("div").classList.add("post")
  arr.forEach((log) => {
    let div = document.createElement("div");
    div.classList.add("post");
    let h3 = document.createElement("h3");
    h3.textContent = log.name;
    let p = document.createElement("p");
    p.textContent = log.bio;

    div.append(h3);
    div.appendChild(p);
    all.append(div);
    div.style.backgroundImage = `url(${log.image})`;

    // console.log(log.name)
  });
}




dataadd(users);

inp.addEventListener("input", (e) => {
    all.innerHTML=""

  let temp = users.filter((news) => {
    return news.name.startsWith(e.target.value);

  });
  // console.log(temp)
  
  if(temp.length==0){
    all.textContent="No user Found";

  }
  else{
    dataadd(temp);

  }
});
