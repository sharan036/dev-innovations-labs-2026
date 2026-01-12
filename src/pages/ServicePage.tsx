import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Code, Smartphone, Cloud, Shield, Database, Cpu, Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Service data with slugs for URL routing
const services = [
    {
        icon: Code,
        slug: "webdevelopment",
        title: "Web Development",
        description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
        fullDescription: "Web development is a crucial service for any IT company. As technology evolves, more and more businesses are moving online to reach their target audience. Therefore, having a strong web presence is essential for businesses to stay competitive. Our expert team delivers cutting-edge web applications using modern technologies like React, Next.js, Node.js, and more. We focus on creating responsive, scalable, and high-performance web solutions tailored to your unique business needs.",
        image: "assets/web-development.jpg"
    },
    {
        icon: Smartphone,
        slug: "mobiledevelopment",
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
        fullDescription: "Mobile development is a crucial service for any IT company. As technology evolves, more and more people are using mobile devices to access the internet and carry out daily activities. Therefore, having a mobile presence is essential for businesses to reach their target audience. Our team specializes in creating native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. We ensure your mobile app delivers exceptional user experiences across all devices.",
        image: "assets/mobile-development.jpg"
    },
    {
        icon: Cloud,
        slug: "cloudsolutions",
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
        fullDescription: "Cloud solutions are essential for modern businesses looking to scale and optimize their operations. Our cloud services include infrastructure setup, migration, and management on major platforms like AWS, Azure, and Google Cloud. We help businesses reduce costs, improve scalability, and enhance security through comprehensive cloud strategies tailored to your specific requirements.",
        image: "assets/cloud-solutions.jpg"
    },
    {
        icon: Shield,
        slug: "cybersecurity",
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets and ensure data privacy.",
        fullDescription: "Cybersecurity is paramount in today's digital landscape. Our comprehensive security solutions protect your business from cyber threats, data breaches, and unauthorized access. We offer vulnerability assessments, penetration testing, security audits, and implementation of robust security protocols to safeguard your digital assets and ensure compliance with industry standards.",
        image: "assets/cybersecurity.jpg"
    },
    {
        icon: Database,
        slug: "dataanalytics",
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with our advanced analytics and BI solutions.",
        fullDescription: "Data Analytics transforms raw data into actionable business insights. Our services include data warehousing, business intelligence, predictive analytics, and custom dashboard development. We help organizations make data-driven decisions by uncovering patterns, trends, and insights that drive growth and operational efficiency.",
        image: "assets/data-analytics.jpg"
    },
    {
        icon: Cpu,
        slug: "aimachinelearning",
        title: "AI & Machine Learning",
        description: "Intelligent automation and AI-powered solutions to drive innovation and efficiency.",
        fullDescription: "AI and Machine Learning are revolutionizing how businesses operate. Our AI solutions include natural language processing, computer vision, predictive modeling, and intelligent automation. We help businesses leverage the power of artificial intelligence to streamline operations, enhance customer experiences, and gain competitive advantages in their industries.",
        image: "assets/ai-ml.jpg"
    },
];

const ServicePage = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");

    // Get the service type from URL query params
    const serviceType = searchParams.get("type") || "webdevelopment";

    // Find the current service
    const currentService = services.find(s => s.slug === serviceType) || services[0];

    // Filter services based on search query
    const filteredServices = services.filter(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#d6dae5" }}>
            {/* Header with matching color */}
            <div className="[&_header]:bg-[#c8ced9]/90 [&_header]:backdrop-blur-lg [&_header]:border-[#b8bfcc] [&_header]:text-gray-800 [&_a]:text-gray-700 [&_a:hover]:text-primary">
                <Header />
            </div>

            <main className="flex-1 pt-[80px]">
                <div className="container mx-auto px-4 lg:px-8 py-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm mb-6">
                        <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <Link to="/services?type=webdevelopment" className="text-gray-600 hover:text-primary transition-colors">
                            Services
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900 font-medium">{currentService.title}</span>
                    </nav>

                    {/* Page Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                        {currentService.title}
                    </h1>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Content - Main Content */}
                        <div className="lg:col-span-2">
                            {/* Service Image */}
                            <div className="rounded-2xl overflow-hidden mb-8 bg-gray-300 aspect-video flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                                    <currentService.icon className="w-12 h-12 text-primary" />
                                </div>
                            </div>

                            {/* Service Description */}
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {currentService.fullDescription}
                                </p>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Search Box */}
                            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="Enter your keywords ..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pr-10 bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-500"
                                    />
                                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Services</h3>
                                <ul className="space-y-3">
                                    {filteredServices.map((service) => (
                                        <li key={service.slug}>
                                            <Link
                                                to={`/services?type=${service.slug}`}
                                                className={`flex items-center gap-2 py-2 transition-colors ${service.slug === serviceType
                                                    ? "text-gray-900 font-semibold"
                                                    : "text-gray-600 hover:text-primary"
                                                    }`}
                                            >
                                                <ChevronRight className={`w-4 h-4 ${service.slug === serviceType ? "text-primary" : "text-gray-400"
                                                    }`} />
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-[#0a1628] rounded-2xl p-6 mt-6 shadow-sm">
                                <h3 className="text-xl font-bold text-white mb-6">Contact</h3>

                                <div className="space-y-4">
                                    {/* Phone */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-sm">+91 7973 977 956</span>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-sm">contact@devinnovationslabs.com</span>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-sm">Punjab, India</span>
                                    </div>
                                </div>

                                {/* Logo */}
                                <div className="mt-6 pt-4 border-t border-gray-700">
                                    <div className="w-fit p-1 rounded-lg bg-white shadow-sm">
                                        <img
                                            src="assets/Logo-dil.png"
                                            alt="Dev Innovations Labs"
                                            className="h-10 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer with matching color */}
            <div className="[&_footer]:bg-[#c8ced9] [&_footer]:border-[#b8bfcc] [&_footer]:text-gray-800 [&_footer_a]:text-gray-700 [&_footer_a:hover]:text-primary [&_footer_h4]:text-gray-900 [&_footer_p]:text-gray-700">
                <Footer />
            </div>
        </div>
    );
};

export default ServicePage;
