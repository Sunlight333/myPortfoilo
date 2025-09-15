/**
 * @fileoverview Lazy-loaded Projects page component
 */

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

// Lazy load the main Projects component
const Projects = lazy(() => import("./Projects"));

const ProjectsLazy = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <Loader2 className="h-8 w-8 animate-spin text-brand-purple" />
            <p className="text-muted-foreground">Loading projects...</p>
          </motion.div>
        </div>
      }
    >
      <Projects />
    </Suspense>
  );
};

export default ProjectsLazy;
