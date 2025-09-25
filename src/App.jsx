import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Smartphone,
  ChevronDown,
  Menu,
  X,
  Star,
  Download,
  MapPin,
  Calendar,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Trophy,
  Target,
  IndianRupee,
  CheckCircle,
  Video
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentProjectVideo, setCurrentProjectVideo] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'activities', label: 'Activities' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'contact', label: 'Contact' }
  ]

  const webTechnologies = [
    { name: 'React', level: 70, icon: Code },
    { name: 'Node.js', level: 70, icon: Code },
    { name: 'HTML', level: 90, icon: Palette },
    { name: 'CSS', level: 90, icon: Palette },
    { name: 'JavaScript', level: 85, icon: Palette },
    { name: 'SQL', level: 88, icon: Code },

  ]

  const programmingLanguages = [
    { name: 'C', level: 85, icon: Code },
    { name: 'Python', level: 85, icon: Code },
    { name: 'Java', level: 95, icon: Code },
    { name: 'DSA', level: 90, icon: Code },

  ]

  const softSkills = [
    { name: 'Team Work', icon: User },
    { name: 'Communication', icon: User },
    { name: 'Problem Solving', icon: User },
    { name: 'Adaptability', icon: User },
    
  ]

  const projects = [
    {
      id: 1,
      title: 'Courier Tracking Application',
      description: 'A web application that allows users to register, log in, and track their shipments using a unique tracking ID. The system includes distinct user and admin roles, where admins can perform CRUD operations to manage shipment data. All data is stored in local storage to ensure smooth functionality during development and testing.',
      image: '/CourierTracking.png',
      tags: ['HMTL', 'CSS', 'JS', 'JSON Server'],
      github: 'https://github.com/SaiVidyaSri/CourierTracking',
      live: 'https://couriertracking-1-xf0j.onrender.com/',
      video: 'https://drive.google.com/file/d/1jolQmNOF72-9Mymwif9FyO0he_MLcnVU/view?usp=sharing', // Add your actual video link here
      featured: true
    },
    {
      id: 2,
      title: 'Online Complaint Management System',
      description: 'A digital solution to replace slow, paper-based complaint handling. Users can quickly submit and track complaints, while agents and admins manage and resolve them through a transparent workflow. The system improves communication, accountability, and efficiency in complaint resolution.',
      image: '/ComplaintManagement.png',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/SaiVidyaSri/ComplaintCare_OnlineManagementSystem',
      live: 'https://complaintcare-frontend.onrender.com/',
      video: 'https://drive.google.com/file/d/1HrgPwKiYzd5Ui7VzmCTFID29agwjSFTX/view?usp=sharing', // Add your actual video link here
      featured: true
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'A web-based platform designed to make learning more organized and interactive. It allows instructors to create courses, students to enroll, and both to track progress easily. With a clean and user-friendly interface, the LMS ensures smooth interaction and enhances the overall learning experience.',
      image: '/LMS.png',
      tags: ['HMTL', 'CSS', 'JS', 'Node.js', 'MongoDB'],
      github: 'https://github.com/SaiVidyaSri/LearningManagementSystem',
      live: 'https://learningmanagementsystem-backend.onrender.com/',
      video: 'https://drive.google.com/file/d/15hSP9JOj9DvGR0njVmhie08kD1mzUjq-/view?usp=sharing', // Add your actual video link here
      featured: true
    },
    {
      id: 4,
      title: 'URL Shortener',
      description: 'A modern full-stack URL shortener that provides instant link shortening, custom codes, and real-time analytics. Designed with mobile responsiveness and a smooth UI, QuickLink also supports CRUD operations and a REST API, making it both powerful and user-friendly.',
      image: '/URLShortener.png',
      tags: ['React', 'Middleware', 'API'],
      github: 'https://github.com/SaiVidyaSri/URLShortener',
      live: 'https://urlshortenerr-42yp.onrender.com/',
      video: 'https://drive.google.com/file/d/1GCGRR_ogdRUbKvsQvSPBmaWPJJqmNxpJ/view?usp=sharing', // Add your actual video link here
      featured: true
    },
    {
      id: 5,
      title: 'Resume Builder',
      description: 'A web application that allows users to create professional resumes by filling in their details and choosing from multiple customizable templates. Users can preview and download resumes in pdf format, while the admin panel provides features to manage users and templates efficiently.',
      image: '/Resume.png',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'MongoDB'],
      github: 'https://github.com/SaiVidyaSri/ResumeBuilder',
      live: 'https://resumebuilderr-ptqv.onrender.com/',
      video: 'https://drive.google.com/file/d/1LPNGYfXkURorupo6Ta1YCI6P6XC7aAwn/view?usp=sharing', // Add your actual video link here
      featured: true
    }
  ]

  const experiences = [
    {
      id: 1,
      title: 'Web Full Stack Developer (Virtual)',
      company: 'EduSkills & AICTE',
      period: 'Oct - Dec 2024',
      description: 'Developed a Learning Management System (LMS) website with three user interfaces, enabling effective course management and seamless interaction between learners and instructors.',
      skills: ['HTML', 'JavaScript', 'CSS', 'NOde.js', 'MongoDB'],
      certificateUrl: 'https://drive.google.com/file/d/1cJw4m4LvaeZlTXXw5Szz5jCXrEwVFzCg/view?usp=drive_link'
    },
    {
      id: 2,
      title: 'Full Stack Developer (Virtual)',
      company: 'APSCHE & SMARTBRIDGE',
      period: 'May-July 2025',
      description: 'Built an Online Complaint Management System with three interfaces, streamlining the process of lodging, tracking, and resolving complaints efficiently. ',
      skills: ['React', 'Node.js', 'MongoDB'],
      certificateUrl: 'https://drive.google.com/file/d/1M5hYjWCOMyDbDJDhdLekyO2qAxZHAuBJ/view?usp=drive_link'
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'Programming in Java',
      provider: 'IIT Kharagpur - NPTEL',
      duration: 'Jan - Apr 2024',
      viewUrl: 'https://drive.google.com/file/d/1tHNT3oPckWKc3fYqxZAp592ZhYXmk4T4/view?usp=drive_link',
      description: 'Completed an NPTEL-certified course covering core and advanced Java concepts including OOP, exception handling, multithreading, collections, JDBC, and networking, with hands-on coding and problem-solving. Achieved Elite certification with Silver Medal, ranking in the top 5% of candidates.'
    },
    {
      id: 2,
      name: 'Python for Data Science',
      provider: 'IIT Madras - NPTEL',
      duration: 'Jul - Aug 2024',
      viewUrl: 'https://drive.google.com/file/d/12dzYX-5GeiFmIrkE7DXezj0Xmi8eAszH/view?usp=drive_link',
      description: 'Completed an NPTEL-certified course on Python for Data Science, covering essential concepts such as data handling with NumPy and Pandas, data visualization with Matplotlib and Seaborn, exploratory data analysis, and introduction to machine learning. Earned an Elite certification with Silver Medal for good performance.'
    },
    {
      id: 3,
      name: 'Social Network Analysis',
      provider: 'IIT Madras - NPTEL',
      duration: 'Jul - Oct 2024',
      viewUrl: 'https://drive.google.com/file/d/1yBkmnmO64VK1pg_6d7njSHIYdvW2Yisi/view?usp=drive_link',
      description: 'Completed an NPTEL-certified course on Social Network Analysis, covering concepts like network structure, centrality measures, community detection, graph theory, and real-world applications in social media and data analytics. Achieved Elite certification with Silver Medal, ranked in the top 5%, and received special appreciation from NPTEL for good performance.'
    },
    {
      id: 4,
      name: 'Database & SQL',
      provider: 'Infosys SpringBoard',
      duration: 'Mar - May 2025',
      viewUrl: 'https://drive.google.com/file/d/1TkCIjEtwMMxJ_Ld-rvOIOJbjUYApXts8/view?usp=drive_link',
      description: 'Completed the Infosys Springboard certification on Database Management and SQL, learning relational database concepts, SQL queries, joins, normalization, transactions, and efficient data handling. Gained practical experience in designing and managing databases for real-world applications.'
    }
  ]

  const extracurricularActivities = [
    {
      id: 1,
      title: 'Event Manager',
      organization: "Institution's Innovation council",
      period: '2024 - 2026',
      description: "Organized and managed multiple campus events under the Institution's Innovation Council (IIC), including competitions, workshops, and startup initiatives. Responsibilities included coordinating with teams, planning event logistics, managing registrations, handling participant queries, and ensuring smooth execution of events. Developed strong leadership, communication, and organizational skills while fostering a collaborative and engaging environment.",
      skills: ['Leadership', 'Event Management', 'Team Coordination'],
      achievements: ['Organized many events promoting innovation', 'Mentored many junior students']
    },
    {
      id: 2,
      title: 'NSS Volunteer',
      organization: 'National Service Scheme',
      period: '2023 - 2025',
      description: 'Actively participated in community service initiatives, including social awareness campaigns, environmental drives, health camps, and educational outreach programs. Developed teamwork, leadership, and organizational skills while contributing to societal development and fostering a sense of social responsibility. Assisted in mobilizing volunteers and resources to achieve maximum community impact during events and drives.',
      skills: ['Organizational Skills', 'Communication', 'Social Responsibility'],
      achievements: ['Organized environmental and social initiatives', 'Participated in community service and awareness programs']
    }
  ]

  const scholarships = [
    {
      id: 1,
      name: 'Pragathi Scholarship',
      provider: 'All India Council for Technical Education (AICTE)',
      amount: '50,000',
      year: '2022 - 2026',
      description: 'Awarded the AICTE Pragati Scholarship for outstanding academic performance, including merit in 12th (Intermediate) and top merit in each year of B.Tech. Received financial support of ₹50,000 per year, recognizing consistent excellence and dedication in academics throughout the course.',
      criteria: ['Academic Excellence']
    },
    {
      id: 2,
      name: 'Koundinya Scholarship',
      provider: 'Koundinya Educational Trust',
      amount: '5,000',
      year: '2022 - 2026',
      description: 'Awarded for outstanding academic merit and consistent performance, receiving ₹5,000 per year in recognition of dedication and excellence in studies. This scholarship supported my higher education and motivated continued academic achievement.',
      criteria: ['Academic Excellence']
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Create Gmail compose URL with form data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vidyadonthagani@gmail.com&su=${subject}&body=${body}`
      
      // Open Gmail compose in new tab
      window.open(gmailComposeUrl, '_blank')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      alert('Gmail compose window opened! Please click Send in the Gmail tab to send your message.')
      
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error. Please try again or contact directly at vidyadonthagani@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResumeDownload = () => {
    try {
      // Create a link element and trigger download
      const link = document.createElement('a')
      link.href = '/VidyaUpdatedResume.pdf' // Updated to PDF file
      link.download = 'Donthagani_Sai_Vidya_Sri_Resume.pdf' // The name for the downloaded file
      link.target = '_blank' // Open in new tab as fallback
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback: open in new tab
      window.open('/Resume.pdf', '_blank')
    }
  }

  // Convert Google Drive sharing URL to embeddable format
  const convertDriveUrlToEmbed = (url) => {
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (fileIdMatch) {
      const fileId = fileIdMatch[1]
      return `https://drive.google.com/file/d/${fileId}/preview`
    }
    return url
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              My Portfolio
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item.id ? 'text-purple-400' : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button - REMOVED */}
          </div>
        </div>

        {/* Mobile Navigation - REMOVED */}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <motion.div 
          className="text-center z-10 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/Vidyaaa.jpg" 
                  alt="Donthagani Sai Vidya Sri"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to User icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-slate-900 flex items-center justify-center" style={{display: 'none'}}>
                  <User size={72} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DONTHAGANI SAI VIDYA SRI
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/SaiVidyaSri', external: true },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/saividyasri', external: true },
              { icon: Video, href: 'https://drive.google.com/file/d/1Yz-M_C_2NnrMnPTcdnvwOG7JUt2yTSBN/view?usp=drive_link', external: false, isVideo: true },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vidyadonthagani@gmail.com&su=Portfolio Contact', external: true }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.isVideo ? "#" : social.href}
                target={social.external ? "_blank" : "_self"}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  if (social.isVideo) {
                    e.preventDefault();
                    setCurrentProjectVideo(null);
                    setIsVideoModalOpen(true);
                  } else if (!social.external) {
                    // For mailto links, let the browser handle it naturally
                    console.log('Mailto clicked:', social.href);
                  }
                }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/60" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              I’m a Front-End Developer aspiring to design and build intuitive, responsive, and high-performance user interfaces. I enjoy working on impactful projects, collaborating with dynamic teams, and keeping up with the latest front-end frameworks and design trends. I’m passionate about continually improving my skills and delivering exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-purple-400" size={20} />
                      <span className="text-gray-300">Tenali, India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-purple-400" size={20} />
                      <span className="text-gray-300">Fresher</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="text-purple-400" size={20} />
                      <span className="text-gray-300">Computer Science Degree</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="text-purple-400" size={20} />
                      <span className="text-gray-300">APSCHE Certified Developer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development started with a curiosity about how things work on the internet. 
                Today, I specialize in creating scalable web applications using modern technologies like React, 
                Node.js, and cloud platforms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I’m not coding, I love exploring emerging web technologies, working on creative projects, and building my skills through certifications and hands-on practice. I also enjoy collaborating with peers, mentoring juniors when I can, and sharing knowledge to grow together as a community.
              </p>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Web Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Web Technologies</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webTechnologies.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                          <skill.icon className="text-white" size={24} />
                        </div>
                        <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Proficiency</span>
                          <span className="text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Programming</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingLanguages.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                          <skill.icon className="text-white" size={24} />
                        </div>
                        <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Proficiency</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Soft Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-4 text-center">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full">
                          <skill.icon className="text-white" size={20} />
                        </div>
                        <h4 className="text-sm font-semibold text-white leading-tight">{skill.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <Star size={12} className="mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center" style={{display: 'none'}}>
                      <Code size={48} className="text-white/60" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white hover:border-purple-400 transition-all duration-300 shadow-lg backdrop-blur-sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white hover:border-pink-400 transition-all duration-300 shadow-lg backdrop-blur-sm"
                        onClick={() => {
                          setCurrentProjectVideo(project.video);
                          setIsVideoModalOpen(true);
                        }}
                      >
                        <Video size={16} className="mr-2" />
                        Demo
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg transition-all duration-300"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Site
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              My professional journey and the experiences that shaped my career.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                        <p className="text-purple-400 text-lg">{experience.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end space-y-3 mt-4 md:mt-0">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="text-gray-400" size={16} />
                          <span className="text-gray-400">{experience.period}</span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                          onClick={() => window.open(experience.certificateUrl, '_blank')}
                        >
                          <Award size={16} className="mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-400/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Professional certifications and achievements that validate my technical expertise and commitment to continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                          <Award className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{certification.name}</h3>
                          <p className="text-purple-400">{certification.provider}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                        onClick={() => window.open(certification.viewUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="text-gray-400" size={16} />
                      <span className="text-gray-400">Duration: {certification.duration}</span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {certification.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-curricular Activities Section */}
      <section id="activities" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Extra-curricular <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Leadership roles, community involvement, and activities that showcase my commitment beyond academics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {extracurricularActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                        <Users className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                        <p className="text-purple-400 mb-2">{activity.organization}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <Calendar className="text-gray-400" size={16} />
                          <span className="text-gray-400">{activity.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((skill) => (
                          <Badge key={skill} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-400/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {activity.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <CheckCircle className="text-green-400" size={14} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section id="scholarships" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Scholarships</span> & Awards
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Recognition and financial support received for academic excellence and community contributions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                          <Trophy className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{scholarship.name}</h3>
                          <p className="text-purple-400">{scholarship.provider}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-green-400 font-bold">
                          <IndianRupee size={16} />
                          <span>{scholarship.amount}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{scholarship.year}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {scholarship.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Selection Criteria:</h4>
                      <div className="flex flex-wrap gap-2">
                        {scholarship.criteria.map((criterion) => (
                          <Badge key={criterion} className="bg-gradient-to-r from-green-600/20 to-blue-600/20 text-green-300 border-green-400/30">
                            {criterion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                          <Mail className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-gray-300">Email</p>
                          <p className="text-white">vidyadonthagani@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                          <Linkedin className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-gray-300">LinkedIn</p>
                          <p className="text-white">http://www.linkedin.com/in/saividyasri/</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                          <Github className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-gray-300">GitHub</p>
                          <p className="text-white">https://github.com/SaiVidyaSri</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                      />
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Donthagani Sai Vidya Sri.
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {currentProjectVideo ? 'Project Demo Video' : 'Introduction Video'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    setCurrentProjectVideo(null);
                  }}
                  className="text-white hover:text-purple-400"
                >
                  <X size={24} />
                </Button>
              </div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={convertDriveUrlToEmbed(
                    currentProjectVideo || 'https://drive.google.com/file/d/1Yz-M_C_2NnrMnPTcdnvwOG7JUt2yTSBN/view?usp=drive_link'
                  )}
                  title={currentProjectVideo ? 'Project Demo Video' : 'Introduction Video'}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <p className="text-gray-300 text-center mt-4">
                {currentProjectVideo 
                  ? 'Watch this project demonstration to see it in action!' 
                  : 'Get to know me better through this introduction video!'
                }
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

