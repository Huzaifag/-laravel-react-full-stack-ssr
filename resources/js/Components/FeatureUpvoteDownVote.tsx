import { feature } from "@/types";
import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function FeatureUpvoteDownVote({ feature }: { feature: feature }) {
  const upvoteForm = useForm({
    feature_id: feature.id,
    upvote: true,
  });
  const downvoteForm = useForm({
    feature_id: feature.id,
    upvote: false,
  });

  const upvoteDownvote = (upvote : boolean)=>{
    if(feature.user_has_upvoted && upvote || feature.user_has_downvoted && !upvote){
      upvoteForm.delete(route('features.upvote', feature.id));
    }else{
      let form = null;

      if(upvote){
        form = upvoteForm;
      }else{
        form = downvoteForm;
      }
      form.post(route('upvote.store', feature.id), {
        preserveScroll: true
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {/* Upvote button */}
      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={()=>upvoteDownvote(true)}
        className={`p-2 transition-colors 
          ${feature.user_has_upvoted ? "text-green-500" : "text-gray-400 hover:text-green-500"}`}
      >
        <ThumbsUp size={24} strokeWidth={1.5} />
      </motion.button>

      {/* Vote count */}
      <div
        className={`font-semibold text-lg 
          ${feature.user_has_upvoted 
            ? "text-green-500" 
            : feature.user_has_downvoted 
              ? "text-red-500" 
              : "text-gray-700 dark:text-gray-300"}`}
      >
        {feature.upvotes_count}
      </div>

      {/* Downvote button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={()=>upvoteDownvote(false)}
        className={`p-2 transition-colors 
          ${feature.user_has_downvoted ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
      >
        <ThumbsDown size={24} strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}
