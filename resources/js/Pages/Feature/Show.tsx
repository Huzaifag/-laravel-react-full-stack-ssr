import FeatureActionsDropdown from '@/Components/FeatureActionsDropdown';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { feature } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

export default function Show({ feature }: { feature: feature }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Feature {feature.name}
        </h2>
      }
    >
      <Head title={`Feature ${feature.name}`} />

      <motion.div
        whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
        className="mb-6 rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="flex p-6 gap-6 sm:gap-8">
          {/* Vote buttons container */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-green-500 transition-colors"
            >
              <ThumbsUp size={24} strokeWidth={1.5} />
            </motion.button>
            <div className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              {12}
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <ThumbsDown size={24} strokeWidth={1.5} />
            </motion.button>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <Link
              prefetch
              href={route('features.show', feature)}
              className="group block"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                {feature.name}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description || ''}
            </p>
          </div>

          {/* Comment Count */}
          <div className="self-end flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <MessageSquare size={18} />
            <span className="text-sm">4 Comments</span>
          </div>
          <FeatureActionsDropdown feature={feature}/>
        </div>
      </motion.div>
    </AuthenticatedLayout>
  );
}
