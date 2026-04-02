import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-bg/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-[95vw] max-h-[90vh] bg-surface-dark overflow-hidden rounded-2xl shadow-2xl border border-gold/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-bg/80 text-gold hover:bg-gold hover:text-bg transition-all rounded-full border border-gold/20"
            >
              <X size={20} />
            </button>
            <video 
              src={videoSrc} 
              className="w-full h-auto max-h-[90vh] object-contain" 
              controls 
              autoPlay
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
