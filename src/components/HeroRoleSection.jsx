// HeroRoleSection.jsx
import { motion } from "framer-motion";
import { useClerk } from "@clerk/clerk-react";
import {
  Shield,
  Microscope,
  GraduationCap,
  BookOpen,
  Users,
  Database,
  Settings,
  Lock,
  FlaskConical,
  FileCheck,
  ClipboardList,
  Beaker,
  Globe,
  Calendar,
  Clock,
  FileText
} from "lucide-react";

function HeroRoleSection() {
  const { openSignIn } = useClerk();

  const handleRoleSelect = (roleId) => {
    localStorage.setItem("selectedRole", roleId);
    openSignIn({
      afterSignInUrl: "/dashboard",
      afterSignUpUrl: "/dashboard",
    });
  };

  const roles = [
    {
      id: "admin",
      title: "Admin",
      subtitle: "Full system access and control",
      icon: Shield,
      gradient: "from-purple-400 via-purple-600 to-purple-800",
      badgeColor: "bg-purple-300/20 border-purple-300/30 text-purple-200",
      badgeText: "FULL ACCESS",
      glowColor: "hover:shadow-purple-500/30",
      features: [
        { icon: Users, text: "Manage all users" },
        { icon: Database, text: "Full inventory access" },
        { icon: Settings, text: "System configuration" },
        { icon: Lock, text: "Security controls" },
      ],
    },
    {
      id: "lab-manager",
      title: "Lab Manager",
      subtitle: "Oversee lab operations",
      icon: Microscope,
      gradient: "from-violet-400 via-violet-600 to-violet-800",
      badgeColor: "bg-violet-300/20 border-violet-300/30 text-violet-200",
      badgeText: "MANAGER",
      glowColor: "hover:shadow-violet-500/30",
      features: [
        { icon: FlaskConical, text: "Manage inventory" },
        { icon: FileCheck, text: "Approve requests" },
        { icon: ClipboardList, text: "Generate reports" },
        { icon: Users, text: "Assign equipment" },
      ],
    },
    {
      id: "faculty",
      title: "Faculty",
      subtitle: "Request and manage resources",
      icon: GraduationCap,
      gradient: "from-indigo-400 via-indigo-600 to-indigo-800",
      badgeColor: "bg-indigo-300/20 border-indigo-300/30 text-indigo-200",
      badgeText: "FACULTY",
      glowColor: "hover:shadow-indigo-500/30",
      features: [
        { icon: Beaker, text: "Request equipment" },
        { icon: Database, text: "View inventory" },
        { icon: FileCheck, text: "Track requests" },
        { icon: ClipboardList, text: "Project management" },
      ],
    },
    {
      id: "student",
      title: "Student",
      subtitle: "Access assigned resources",
      icon: BookOpen,
      gradient: "from-fuchsia-400 via-fuchsia-600 to-fuchsia-800",
      badgeColor: "bg-fuchsia-300/20 border-fuchsia-300/30 text-fuchsia-200",
      badgeText: "STUDENT",
      glowColor: "hover:shadow-fuchsia-500/30",
      features: [
        { icon: Beaker, text: "View assignments" },
        { icon: ClipboardList, text: "Check equipment" },
        { icon: FileCheck, text: "Submit reports" },
        { icon: BookOpen, text: "Access projects" },
      ],
    },
    {
      id: "visitor",
      title: "Visitor",
      subtitle: "External research access",
      icon: Globe,
      gradient: "from-pink-400 via-pink-600 to-pink-800",
      badgeColor: "bg-pink-300/20 border-pink-300/30 text-pink-200",
      badgeText: "GUEST",
      glowColor: "hover:shadow-pink-500/30",
      features: [
        { icon: Calendar, text: "Book slots" },
        { icon: FileText, text: "View guidelines" },
        { icon: Clock, text: "Temporary access" },
        { icon: FileCheck, text: "Submit proposal" },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-8 md:pb-12 lg:pb-20 px-4">
      <div className="container mx-auto max-w-\[90rem\]"> 
        {/* Title Section */}
        <motion.div
          className="text-center mb-6 md:mb-10 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
            Select Your{" "}
            <motion.span
              className="inline-block bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.4 }}
            >
              Role
            </motion.span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300">
            Choose your role to access the Lab Inventory System
          </p>
        </motion.div>

        {/* Role Cards Flex Container */}
        {/* Switched to flex for better 5-card centering and improved responsiveness */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                // Optimized width classes for responsiveness (1 col, 2 cols, 3 cols, 5 cols)
                className="cursor-pointer w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] xl:w-[calc(20%-1.25rem)] max-w-[320px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }} // Slightly reduced delay
                whileHover={{ y: -5, transition: { duration: 0.08 } }} // Faster hover transition
                onClick={() => handleRoleSelect(role.id)}
              >
                <div
                  // Reduced transition duration to make hover feel snappier
                  className={`relative bg-linear-to-br ${role.gradient} ${role.glowColor} rounded-2xl p-4 md:p-6 lg:p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-75 h-full flex flex-col justify-between`}
                >
                  {/* Content */}
                  <div className="relative z-10 grow">
                    {/* Icon */}
                    <div className="flex justify-center mb-3 md:mb-4">
                      <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 lg:p-5 rounded-full border-2 border-white/20">
                        <Icon
                          className="w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center mb-1 md:mb-2">
                      {role.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-white/80 text-center mb-4 text-xs md:text-sm hidden lg:block">
                      {role.subtitle}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4 hidden lg:block">
                      {role.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 text-white/90"
                          >
                            <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm shrink-0">
                              <FeatureIcon className="w-3 h-3" />
                            </div>
                            <span className="text-xs">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Badge */}
                    <div className="absolute top-0 right-0 lg:top-3 lg:right-3">
                      <div
                        className={`${role.badgeColor} backdrop-blur-sm px-1.5 py-0.5 lg:px-2 lg:py-1 rounded-bl-lg lg:rounded-full border-b border-l lg:border text-[10px] lg:text-xs font-semibold`}
                      >
                        {role.badgeText}
                      </div>
                    </div>
                  </div>

                  {/* Button - Moved outside content div to align at bottom */}
                  <div className="relative z-10 mt-auto pt-4">
                    <motion.button
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 px-3 md:py-2 lg:py-2.5 lg:px-4 rounded-xl font-semibold text-white text-xs md:text-sm transition-colors duration-100 border border-white/20 mt-2 lg:mt-0"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Select Role
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Text */}
        <motion.div
          className="text-center mt-6 md:mt-8 lg:mt-12 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs md:text-sm">Made by Technical Club</p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroRoleSection;