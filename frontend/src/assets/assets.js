import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'

import corporate_lawyer from './corporate-lawyer.svg'
import criminal_lawyer from './criminal-lawyer.svg'
import family_lawyer from './family-lawyer.svg'
import immigration_lawyer from './immigration-lawyer.svg'
import insurance_lawyer from './insurance-lawyer.svg'
import real_estate_lawyer from './real-estate-lawyer.svg'

import Corporate_lawyer from './corporate-lawyer.svg'
import Criminal_lawyer from './criminal-lawyer.svg'
import Family_lawyer from './family-lawyer.svg'
import Immigration_lawyer from './immigration-lawyer.svg'
import Insurance_lawyer from './insurance-lawyer.svg'
import Real_estate_lawyer from './real-estate-lawyer.svg'

import law1 from './law1.png';
import law2 from './law2.png';
import law3 from './law3.png';
import law4 from './law4.png';
import law5 from './law5.png';
import law6 from './law6.png';
import law7 from './law7.png';
import law8 from './law8.png';
import law9 from './law9.png';
import law10 from './law10.png';
import law11 from './law11.png';
import law12 from './law12.png';
import law13 from './law13.png';
import law14 from './law14.png';
import law15 from './law15.png';


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Corporate Lawyer',
        image: corporate_lawyer
    },
    {
        speciality: 'Criminal Lawyer',
        image: criminal_lawyer
    },
    {
        speciality: 'Family Lawyer',
        image: family_lawyer
    },
    {
        speciality: 'Immigration Lawyer',
        image: immigration_lawyer
    },
    {
        speciality: 'Insurance Lawyer',
        image: insurance_lawyer
    },
    {
        speciality: 'Real Estate Lawyer',
        image: real_estate_lawyer
    }
]

export const lawyers = [

    { _id: 'law1', name: 'Amit Sharma', image: law1, speciality: 'Corporate Lawyer', degree: 'LLB', experience: '8 Years', about: 'Amit Sharma is a skilled corporate lawyer with extensive experience in helping businesses navigate complex legal landscapes. He provides strategic advice on contracts, regulatory compliance, and corporate governance, ensuring clients make informed decisions and minimize legal risks.', fees: 250, address: { line1: '12th Street, Downtown', line2: 'Mumbai, India' } },

    { _id: 'law2', name: 'Mei Wong', image: law2, speciality: 'Criminal Lawyer', degree: 'JD', experience: '10 Years', about: 'Mei Wong is a tenacious criminal defense attorney with a decade of experience handling high-stakes cases. She is known for her meticulous preparation, sharp legal strategies, and unwavering commitment to protecting her clients\' rights in the courtroom.', fees: 300, address: { line1: '56 Orchard Road', line2: 'Singapore' } },

    { _id: 'law3', name: 'Priya Desai', image: law3, speciality: 'Family Lawyer', degree: 'LLM', experience: '7 Years', about: 'Priya Desai specializes in family law, offering compassionate and strategic legal support during challenging times. She handles divorce, child custody, and inheritance cases with sensitivity, focusing on achieving fair and amicable resolutions that prioritize family well-being.', fees: 200, address: { line1: 'Avenue 5, Green Park', line2: 'Delhi, India' } },

    { _id: 'law4', name: 'Darnell Johnson', image: law4, speciality: 'Immigration Lawyer', degree: 'JD', experience: '12 Years', about: 'Darnell Johnson is a highly experienced immigration lawyer dedicated to helping individuals and businesses navigate complex immigration challenges. He provides expert guidance on visas, citizenship applications, and appeals, ensuring clients understand their options and legal pathways.', fees: 350, address: { line1: '89 Lexington Ave', line2: 'New York, USA' } },

    { _id: 'law5', name: 'Ananya Iyer', image: law5, speciality: 'Insurance Lawyer', degree: 'LLB', experience: '6 Years', about: 'Ananya Iyer is a skilled insurance lawyer who specializes in resolving complex policy disputes and claims. She provides strategic legal advice to clients, helping them navigate the intricate world of insurance settlements, negotiations, and litigation.', fees: 220, address: { line1: 'Lakeview Towers', line2: 'Bangalore, India' } },

    { _id: 'law6', name: 'Kenji Takahashi', image: law6, speciality: 'Real Estate Lawyer', degree: 'JD', experience: '9 Years', about: 'Kenji Takahashi is an expert real estate lawyer who assists clients with property transactions, land disputes, and zoning regulations. He provides comprehensive legal guidance, ensuring smooth and legally sound real estate dealings for individuals and businesses.', fees: 280, address: { line1: 'Shibuya Crossing', line2: 'Tokyo, Japan' } },

    { _id: 'law7', name: 'Rohit Verma', image: law7, speciality: 'Corporate Lawyer', degree: 'LLB', experience: '7 Years', about: 'Rohit Verma is a dynamic corporate lawyer specializing in mergers, acquisitions, and corporate governance. He provides strategic legal advice to companies, helping them navigate complex business landscapes and make informed decisions that align with legal requirements.', fees: 260, address: { line1: 'Infinity Towers', line2: 'Gurgaon, India' } },

    { _id: 'law8', name: 'Emma Collins', image: law8, speciality: 'Criminal Lawyer', degree: 'JD', experience: '11 Years', about: 'Emma Collins is a formidable criminal defense attorney with extensive experience handling felony and misdemeanor cases. She is known for her strategic approach, thorough case preparation, and unwavering commitment to protecting her clients\' legal rights.', fees: 320, address: { line1: 'Regent Street', line2: 'London, UK' } },

    { _id: 'law9', name: 'Neha Kapoor', image: law9, speciality: 'Family Lawyer', degree: 'LLM', experience: '8 Years', about: 'Neha Kapoor is a compassionate family lawyer specializing in divorce, child custody, and alimony settlements. She provides sensitive legal support, helping clients navigate complex family dynamics and achieve fair, amicable resolutions that prioritize family well-being.', fees: 230, address: { line1: 'Sunset Residency', line2: 'Chandigarh, India' } },

    { _id: 'law10', name: 'Arjun Mehta', image: law10, speciality: 'Immigration Lawyer', degree: 'LLB', experience: '9 Years', about: 'Arjun Mehta is a dedicated immigration lawyer who assists individuals and businesses with visa applications, work permits, and immigration appeals. He provides comprehensive legal guidance, helping clients understand and navigate complex immigration processes.', fees: 270, address: { line1: 'Embassy Road', line2: 'Dubai, UAE' } },

    { _id: 'law11', name: 'Sophia Williams', image: law11, speciality: 'Insurance Lawyer', degree: 'JD', experience: '10 Years', about: 'Sophia Williams is an experienced insurance lawyer specializing in litigation, fraud cases, and policyholder disputes. She provides strategic legal representation, helping clients navigate complex insurance challenges and achieve favorable outcomes.', fees: 290, address: { line1: 'Maple Street', line2: 'Toronto, Canada' } },

    { _id: 'law12', name: 'Vikram Singh', image: law12, speciality: 'Real Estate Lawyer', degree: 'LLB', experience: '7 Years', about: 'Vikram Singh is a skilled real estate lawyer focusing on property transactions, landlord-tenant disputes, and title issues. He provides comprehensive legal guidance to ensure smooth and legally sound real estate dealings for clients.', fees: 240, address: { line1: 'Royal Enclave', line2: 'Jaipur, India' } },

    { _id: 'law13', name: 'Sunita Rao', image: law13, speciality: 'Corporate Lawyer', degree: 'LLM', experience: '6 Years', about: 'Sunita Rao is an innovative corporate lawyer advising startups and multinational corporations on legal matters and compliance. She provides strategic guidance, helping businesses navigate complex legal landscapes and make informed decisions.', fees: 250, address: { line1: 'Business Hub', line2: 'Pune, India' } },

    { _id: 'law14', name: 'Aaliyah Carter', image: law14, speciality: 'Criminal Lawyer', degree: 'JD', experience: '10 Years', about: 'Aaliyah Carter is a distinguished criminal defense attorney known for her strong courtroom presence and strategic legal approach. She provides vigorous defense for clients, handling complex criminal cases with expertise and unwavering dedication.', fees: 310, address: { line1: 'Harbor Avenue', line2: 'Los Angeles, USA' } },

    { _id: 'law15', name: 'Manoj Patel', image: law15, speciality: 'Family Lawyer', degree: 'LLB', experience: '5 Years', about: 'Manoj Patel is a compassionate family lawyer specializing in legal support for family disputes, inheritance issues, and custody battles. He provides sensitive and strategic guidance, helping clients navigate complex family legal challenges.', fees: 210, address: { line1: 'Main Street', line2: 'Ahmedabad, India' } }
    
];