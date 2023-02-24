import { StaticImageData } from "next/image";
import cvg_shuttle from "../public/images/cvg_shuttle.jpg";
import tax_classes from "../public/images/tax_classes.jpg";
import career_services from "../public/images/career_services.jpg"; 
import syllabus_bank from "../public/images/syllabus_bank.jpg";
import food_courts from "../public/images/food_courts.jpg"; 
import workers_union from "../public/images/workers_union.jpg";  
import campus_wifi from "../public/images/campus_wifi.jpg";

export type dataType = {
    id: number;
    name: string;
    shortDescription: string;
    shortNote: string;
    // imgURL: string;
    imgURL: StaticImageData;
    longDescription: string;
}[]

export const campaignPoints : dataType = [
    {
        id: 1,
        name: "Free CVG Shuttle",
        shortDescription: "Short Description",
        shortNote: "5",
        imgURL: cvg_shuttle,
        longDescription: "Free shutles to and from campus and airport for all students at the beginning and end of each semester",

    },
    {
        id: 2,
        name: "Tax Classes",
        shortDescription: "Short Description",
        shortNote: "5",
        imgURL: tax_classes,
        longDescription: "Bringing in experts to teach and assist students in filing their taxes",
    },
    {
        id: 3,
        name: "Career Services Orientation",
        shortDescription: "Short Description",
        shortNote: "5",
        imgURL: career_services,
        longDescription: "An orientation every semester for the incoming and exisiting international students to assist in navigating job opportunities and understanding CPT-OPT policies best suited to their needs",
    },
    {
        id: 4,
        name: "Syllabus Bank",
        shortDescription: "Short Description",
        shortNote: "5",
        imgURL: syllabus_bank,
        longDescription: "A compilation of the syllabi of different courses from different professors in all colleges to help students better pick their classes",
    },
    {
        id: 5,
        name: "Inclusive Food Courts",
        shortDescription: "Short Description",
        shortNote: "5",
        imgURL: food_courts,
        longDescription: "Food courts that accommodate the diverse food preferences of our student body such as halal meat and kosher food",
    },
    // {
    //     id: 6,
    //     name: "Your Platform",
    //     shortDescription: "Short Description",
    //     shortNote: "5",
    //     imgURL: "https://assets.revolutionuc.com/website-images/2023/photos/2x/home-1.png",
    //     longDescription: "We believe that every student at UC has many wonderful ideas and changes they want to see implemented. Here's the chance to do so! Moreover it's your right to demand what you want!",
    // },
    {
        id: 6,
        name: "Workers Union",
        shortDescription: "Short Description",
        shortNote: "5",
        imgURL: workers_union,
        longDescription: "Forming a workers' union to represent the student workers at UC and to help them voice their concerns and needs",
    },
    // {
    //     id: 8,
    //     name: "Housing Crisis",
    //     shortDescription: "Short Description",
    //     shortNote: "5",
    //     imgURL: "https://assets.revolutionuc.com/website-images/2023/photos/2x/home-1.png",
    //     longDescription: "Many students, especially with the increase in enrollment at UC, are facing a lot of difficulties finding on-campus housing. We want to bring in more on-campus housing options and not let any of our students miss out on the college dorm experience!",
    // },
    {
        id: 7,
        name: "Upgrading Campus Wifi",
        shortDescription: "Short Description",
        shortNote: "5",
        imgURL: campus_wifi,
        longDescription: "The slow and unreliable wifi on campus has been a constant problem for us. We want to upgrade the Wifi infrastructure and provide our students with the best possible conditions to work on campus.",
    },
    // {
    //     id: 10,
    //     name: "Bearcat Fest",
    //     shortDescription: "Short Description",
    //     shortNote: "5",
    //     imgURL: "https://assets.revolutionuc.com/website-images/2023/photos/2x/home-1.png",
    //     longDescription: "A week long fest in which students and faculty can let loose and engage in activities related to an overarching theme of the day. Imagine UC's campus, like a state fair, filled with stalls where students can play games, eat snacks, and watch performances",
    // }, 
]