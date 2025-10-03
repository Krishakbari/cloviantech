
import { motion } from "framer-motion";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import logo1 from "../assets/ll1.png"
import logo2 from "../assets/ll2.png"
import logo3 from "../assets/ll3.png"
import logo4 from "../assets/ll4.png"
import logo5 from "../assets/ll5.png"
import logo6 from "../assets/ll6.png"
import logo7 from "../assets/ll7.png"
import logo8 from "../assets/ll8.png"

const services = [
    {
        id: 1,
        number: "01",
        title: "Generative AI Solution",
        subtitle: "for Creative and Automated Content",
        description:
            "Unlock creative potential and automate content creation with our Generative AI solutions. We harness advanced models to generate high-quality text, images, and code tailored to your brand's voice, helping you scale creativity, enhance customer engagement, and build next-generation applications.",
        iconBg: "#FF4FE4",
        iconImg: logo1,
        headingColor: "text-pink-500",
        subtitleColor: "text-pink-300 italic",
        illustration: s1,
        bg: "#FF4FE4",
    },
    {
        id: 2,
        number: "02",
        title: "Agentic AI & Automation",
        subtitle: "for Intelligent Digital Agents",
        description:
            "Go beyond simple automation with intelligent AI agents that execute complex, multi-step tasks autonomously. We deploy digital agents to handle intricate workflows, from data processing to customer support, freeing up your team to focus on high-value strategic initiatives.",
        iconBg: "#FF927B",
        iconImg: logo2,
        headingColor: "text-orange-500",
        subtitleColor: "text-orange-300 italic",
        illustration: s2,
        bg: "#FF927B",
    },
    {
        id: 3,
        number: "03",
        title: "Machine Learning & Deep Learning",
        subtitle: "for Data-Driven Insights",
        description:
            "Turn your data into your most valuable asset. Our Machine Learning and Deep Learning services uncover predictive insights hidden in your datasets. We build custom models for forecasting, recommendation engines, and fraud detection, enabling smarter, data-driven decisions.",
        iconBg: "#00C8C8",
        iconImg: logo3,
        headingColor: "text-teal-400",
        subtitleColor: "text-teal-200 italic",
        illustration: s3,
        bg: "#74D9C3",
    },
    {
        id: 4,
        number: "04",
        title: "Computer Vision Solutions",
        subtitle: "for Smart Visual Recognition",
        description:
            "Empower your systems to see and understand the world. We develop sophisticated Computer Vision solutions that analyze images and videos to automate tasks like quality control, object detection, and facial recognition, enhancing security and operational efficiency.",
        iconBg: "#B7E333",
        iconImg: logo4,
        headingColor: "text-green-400",
        subtitleColor: "text-teal-200 italic",
        illustration: s4,
        bg: "#B7E333",
    },
    {
        id: 5,
        number: "05",
        title: "Cloud Computing Services",
        subtitle: "for Scalable Infrastructure",
        description:
            "Build a scalable, secure, and resilient infrastructure with our expert Cloud Computing services. We help you migrate, manage, and optimize your workloads on leading platforms like AWS and Azure, ensuring your business leverages the full potential of the cloud for agility and growth.",
        iconBg: "#CA55FC",
        iconImg: logo5,
        headingColor: "text-purple-400",
        subtitleColor: "text-teal-200 italic",
        illustration: s5,
        bg: "#CA55FC",
    },
    {
        id: 6,
        number: "06",
        title: "Website Development",
        subtitle: "for Modern Digital Presence",
        description:
            "Create a powerful digital presence with a modern, responsive, and high-performance website. We specialize in building custom websites that are not only visually stunning but also SEO-friendly and optimized for conversions, delivering seamless user experiences that drive results.",
        iconBg: "#D72D2D",
        iconImg: logo6,
        headingColor: "text-red-500",
        subtitleColor: "text-red-300 italic",
        illustration: s6,
        bg: "#D72D2D",
    },
    {
        id: 7,
        number: "07",
        title: "Application Development",
        subtitle: "for Intuitive Mobile & Web Apps",
        description:
            "Bring your ideas to life with our end-to-end application development services. We design and build intuitive, scalable, and secure mobile and web applications for any platform, ensuring your product meets user needs and aligns perfectly with your business goals.",
        iconBg: "#1E90FF",
        iconImg: logo7,
        headingColor: "text-blue-500",
        subtitleColor: "text-blue-300 italic",
        illustration: s7,
        bg: "#1E90FF",
    },
    {
        id: 8,
        number: "08",
        title: "Custom Software Development",
        subtitle: "for Tailored Business Solutions",
        description:
            "Solve your unique business challenges with software built specifically for you. When off-the-shelf solutions fall short, we create robust and scalable solutions that streamline your operations, boost productivity, and provide a lasting competitive advantage.",
        iconBg: "#F5A623",
        iconImg: logo8,
        headingColor: "text-yellow-500",
        subtitleColor: "text-yellow-300 italic",
        illustration: s8,
        bg: "#F5A623",
    },
];


const ServiceCard = () => {
    return (
        <>
            <div className="w-full relative  justify-between">

                <ul className="">
                    {services.map((items) => (
                        <li key={items.id} className="sticky top-0 p-20 md:ml-15 bg-[#F9Fafb]">
                            <div className="w-full   mt-10 flex-col md:flex-row flex">
                                <div className="w-[2px] md:h-[100vh] h-[80vh] mt-15 bg-black absolute left-10 top-0">
                                    <div className="w-4 h-4 rounded-full right-[7px] relative bg-black"></div>
                                </div>
                                <div className="w-full  items-center">
                                    <h2 className="text-black font-[Nunito]">{items.number}</h2>
                                    <img src={items.iconImg} alt="" className="md:w-40 md:h-40 w-10 h-10" />
                                    <h2 className="md:text-[40px] text-[20px] font-[700]" style={{ color: items.iconBg, fontFamily: 'PT Sans' }}>{items.title}</h2>
                                    <h1 className="text-black md:text-[40px] text-[20px] font-[400] font-[Allison]">{items.subtitle}</h1>
                                    <h2 className="text-black font-[Nunito] text-[8px] md:text-[16px] text-justify">{items.description}</h2>
                                </div>
                                <div className="w-full relative ml-6 md:ml-20 xl:ml-32">
                                    <img src={items.illustration} alt="" />
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div></>
    );
};

export default ServiceCard;


const Service7 = () => {
    return (
        <section className="w-full  py-12 px-4 sm:py-14 md:py-16 sm:px-6 md:px-8">
            <motion.div
                className="text-justify max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto ml-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="inline-block  text-black px-5 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3 rounded-full text-sm sm:text-base font-semibold mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Our Services
                </motion.div>
                <p className="text-black mt-4 leading-relaxed text-base sm:text-lg md:text-xl">
                    We offer a comprehensive range of IT services to help your business grow and succeed in the digital world.
                    From custom software development and cloud solutions to cybersecurity and UI/UX design, our expert team ensures seamless digital transformation.
                    Partner with us to enhance efficiency, drive innovation, and stay ahead of the competition.
                </p>
            </motion.div>

            {/* Call ServiceCard ONLY ONCE */}
            <ServiceCard />
        </section>
    );
};