
import { motion } from "framer-motion";
import { LucideIcon, Github, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/LazyImage";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  code: string;
  liveDemo?: string;
  category: string;
  icon: LucideIcon;
  featured?: boolean;
  onViewDetails?: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  code, 
  liveDemo, 
  category, 
  icon: Icon, 
  featured = false,
  onViewDetails 
}: ProjectCardProps) => {
  const getCategoryName = (category: string) => {
    return category === "iot" ? "IoT" : category === "ai" ? "AI & ML" : category;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.3)" }}
      transition={{ duration: 0.4 }}
      className={`glass-panel rounded-lg overflow-hidden flex flex-col relative ${
        featured ? "ring-2 ring-brand-purple/50" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-brand-purple text-white">
            Featured
          </Badge>
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-3 left-3 bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-xs font-medium z-10">
          <Icon className="w-5 h-5" />
          <span className="ml-1.5 capitalize">{getCategoryName(category)}</span>
        </div>
        <LazyImage 
          src={image} 
          alt={title}
          className="w-full h-full"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <motion.h3 
          className="text-xl font-semibold mb-2"
          whileHover={{ color: "#9b87f5" }}
        >
          {title}
        </motion.h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 4).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 4} more
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2 justify-center">
          {onViewDetails && (
            <Button
              variant="outline"
              size="sm"
              onClick={onViewDetails}
              className="flex-1"
            >
              <Eye className="mr-1.5 h-4 w-4" />
              View Details
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="flex-1"
          >
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="mr-1.5 h-4 w-4" />
              Code
            </a>
          </Button>
          {liveDemo && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
