// src/components/shared/SectionHeading.tsx

import { cn } from "@/lib/utils";
import { HeadingProps } from "@/types";

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: HeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto", className)}
    >
      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "text-primary font-semibold mb-2",
            alignmentClasses[align]
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Main Title */}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          alignmentClasses[align]
        )}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "text-lg text-muted-foreground",
            alignmentClasses[align]
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// src/components/shared/AnimatedSection.tsx
("use client");

import { motion } from "framer-motion";
import { SectionProps } from "@/types";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends SectionProps {
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionVariants[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// src/components/shared/GradientText.tsx

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return <span className={cn("gradient-text", className)}>{children}</span>;
}

// src/components/shared/IconWrapper.tsx

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  variant?: "default" | "gradient" | "outline";
}

export default function IconWrapper({
  icon: Icon,
  className,
  size = 24,
  variant = "default",
}: IconWrapperProps) {
  const variantClasses = {
    default: "bg-muted text-foreground",
    gradient: "bg-gradient-primary text-white",
    outline: "border-2 border-primary text-primary bg-transparent",
  };

  return (
    <div
      className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center",
        variantClasses[variant],
        className
      )}
    >
      <Icon size={size} />
    </div>
  );
}
