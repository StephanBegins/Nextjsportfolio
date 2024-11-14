"use client";

import CountUp from "react-countup";

const stats = [
    { num: 12, text: "Years of Experience" },
    { num: 1200, text: "LinkedIn Followers" },
    { num: 3.9, text: "Current CGPA" },
    { num: 26, text: "Projects Completed" },
    { num: 8, text: "Technologies Mastered" },
    { num: 500, text: "Code Commits" },
    { num: 20, text: "Certifications Earned" },
    { num: 15, text: "Workshops Attended" },
];

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 bg-primary px-4">
            {/* Stats section with dark gray background */}
            <div className="relative -ml-17 pl-8 bg-alternative rounded-2xl border-4 border-transparent bg-clip-padding animate-glowing-border">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[80vw] mx-auto">
                        {stats.map((item, index) => (
                            <div className="flex flex-col items-center text-center lg:items-start lg:text-left" key={index}>
                                <CountUp 
                                    end={item.num} 
                                    duration={7} 
                                    delay={2} 
                                    className="text-5xl xl:text-6xl font-extrabold text-white" 
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-gray-200`}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
