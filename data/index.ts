export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Committed to effective teamwork and continuous improvement. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Seeking new opportunities to apply my skills and expertise.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Finance Flow",
    des: "Track your finances, manage income and expenses, and budget effortlessly with Finance Flow.",
    img: "/financeflow.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://finance-flow-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Echo - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://echo-green.vercel.app/",
  },
  {
    id: 3,
    title: "Imaginify-AI Image SaaS",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://imaginify-sand-five.vercel.app/",
  },
  {
    id: 4,
    title: "CarePulse",
    des: "A comprehensive healthcare management platform designed to streamline operations and enhance patient care—CarePulse.",
    img: "/carepulse.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://carepulse-lime.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Nova is an intelligent virtual assistant powered by PyTorch, designed to provide personalized assistance and engage in natural language conversations with users. With its advanced natural language processing capabilities, Nova can understand user queries, provide relevant information, and offer assistance in various tasks, all thanks to the robust machine learning capabilities of PyTorch.",
    name: "Chatbot-Nova",
    title: "",
  },
  {
    quote:
      "This project leverages a trained deep learning model to perform real-time facial emotion analysis. It uses a convolutional neural network (CNN) to detect emotions in faces captured through a webcam. The emotions detected include anger, disgust, fear, happiness, sadness, surprise, and neutrality.",
    name: "Emotion Detector",
    title: "",
  },
  {
    quote:
      "This project is a Music Recommendation System built using Streamlit and the Spotify API. It leverages natural language processing (NLP) and cosine similarity to recommend songs based on lyrics.",
    name: "Music Recommendation System",
    title: "",
  },
  {
    quote:
      "This project is an implementation of the classic Minesweeper game along with an AI solver. The game provides a graphical interface for the user to interact with the grid, revealing cells and flagging potential mines. The AI solver uses logical inference to make moves and strategize in order to solve the game automatically.",
    name: "Minesweeper",
    title: "",
  },
  {
    quote:
      "This project aims to predict taxi fares using a Random Forest algorithm. The Random Forest algorithm is a powerful machine learning technique capable of handling large datasets and capturing complex relationships between features and target variables. By leveraging this algorithm, we can accurately estimate taxi fares based on various factors such as distance, time of day, location, and additional surcharges.",
    name: "NY Taxi Fare Prediction ",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Capabl India: Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    desc: "Team Infits: Developed and optimized machine learning models, enhancing data-driven insights and improving decision-making processes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
