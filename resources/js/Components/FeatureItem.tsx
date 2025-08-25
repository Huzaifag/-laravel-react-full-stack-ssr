import { feature } from "@/types";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import FeatureActionsDropdown from "./FeatureActionsDropdown";
import FeatureUpvoteDownVote from "./FeatureUpvoteDownVote";

export default function FeatureItem({ feature }: { feature: feature }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className="mb-6 rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="flex p-6 gap-6 sm:gap-8">
        <FeatureUpvoteDownVote feature={feature} />

        {/* Content Section */}
        <div className="flex-1">
          <Link
            prefetch
            href={route('features.show', feature.id)}
            className="group block"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
              {feature.name}
            </h2>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {isExpanded || (feature.description || '').length <= 200
              ? feature.description
              : `${(feature.description || '').slice(0, 200)}...`}
          </p>
          {(feature.description || '').length > 200 && (
            <button
              onClick={toggleReadMore}
              className="mt-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* Comment Count */}
        <div className="self-end flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <MessageSquare size={18} />
          <span className="text-sm">4 Comments</span>
        </div>
        <FeatureActionsDropdown feature={feature} />
      </div>
    </motion.div>
  );
}