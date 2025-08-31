import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Heart, 
  Users, 
  Church, 
  Globe, 
  Award,
  Calendar,
  MapPin,
  Maximize2,
  Download,
  Share2,
  Filter,
  Grid,
  List,
  Search,
  Play,
  Volume2,
  VolumeX
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Gallery images organized by categories
  const galleryImages = [
    // Leadership & Events
    {
      id: 1,
      src: "/dsk7.jpeg",
      alt: "ZBCZ Church Leadership Conference",
      title: "Leadership Conference 2024",
      category: "leadership",
      description: "Annual gathering of bishops and pastors from across Africa",
      date: "2024-03-15",
      location: "Harare, Zimbabwe",
      type: "image"
    },
    {
      id: 2,
      src: "/mb5.jpeg",
      alt: "Compassionate Services Ministry",
      title: "Community Outreach Program",
      category: "community",
      description: "Supporting orphans and vulnerable families",
      date: "2024-02-28",
      location: "Bulawayo, Zimbabwe",
      type: "image"
    },
    {
      id: 3,
      src: "/cong.jpeg",
      alt: "Sunday Service Congregation",
      title: "United in Worship",
      category: "worship",
      description: "Sunday morning service with full congregation",
      date: "2024-04-07",
      location: "Johannesburg, South Africa",
      type: "image"
    },
    {
      id: 4,
      src: "/cong2.jpeg",
      alt: "Youth Ministry Gathering",
      title: "Future Leaders Conference",
      category: "youth",
      description: "Empowering the next generation of Christian leaders",
      date: "2024-01-20",
      location: "Maputo, Mozambique",
      type: "image"
    },
    {
      id: 5,
      src: "/dsk3.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 6,
      src: "/pic1.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 7,
      src: "/pic2.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 8,
      src: "/pic3.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 9,
      src: "/pic4.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 10,
      src: "/pic5.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 11,
      src: "/pic10.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 12,
      src: "/pic11.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 13,
      src: "/pic12.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 14,
      src: "/pic13.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
        {
      id: 15,
      src: "/pic14.jpeg",
      alt: "Church Community Fellowship",
      title: "Inter-Church Fellowship",
      category: "community",
      description: "Churches from different nations coming together",
      date: "2024-03-10",
      location: "Lilongwe, Malawi",
      type: "image"
    },
    {
      id: 16,
      src: "/pic15.jpeg",
      alt: "Prayer and Worship Session",
      title: "Prayer Mountain Experience",
      category: "worship",
      description: "Spiritual retreat and intensive prayer sessions",
      date: "2024-02-15",
      location: "Matopo Hills, Zimbabwe",
      type: "image"
    },
    {
      id: 17,
      src: "/church.jpeg",
      alt: "Church Building Dedication",
      title: "New Church Dedication",
      category: "milestones",
      description: "Dedication of newly constructed church building",
      date: "2024-04-01",
      location: "Cape Town, South Africa",
      type: "image"
    },
    {
      id: 18,
      src: "/dsk1.jpeg",
      alt: "Baptism Ceremony",
      title: "Baptism by the River",
      category: "ceremonies",
      description: "Mass baptism ceremony for new believers",
      date: "2024-03-25",
      location: "Zambezi River, Zimbabwe",
      type: "image"
    },
    {
      id: 19,
      src: "/mb4.jpeg",
      alt: "Bishop's Ordination",
      title: "Ordination Service",
      category: "ceremonies",
      description: "Ordination of new bishops and pastors",
      date: "2024-02-10",
      location: "Harare, Zimbabwe",
      type: "image"
    },
    {
      id: 20,
      src: "/sg.jpeg",
      alt: "Secretary General Meeting",
      title: "Administrative Council",
      category: "leadership",
      description: "Quarterly administrative and planning meeting",
      date: "2024-01-15",
      location: "Harare, Zimbabwe",
      type: "image"
    },
    {
      id: 21,
      src: "/logo.png",
      alt: "ZBCZ Official Logo",
      title: "Our Identity",
      category: "branding",
      description: "Official logo representing our unity and mission",
      date: "2024-01-01",
      location: "Official",
      type: "image"
    },
    // Video placeholder (would be actual videos in real implementation)
    {
      id: 22,
      src: "/cong.jpeg",
      alt: "Worship Service Video",
      title: "Sunday Service Highlights",
      category: "worship",
      description: "Experience our vibrant worship service",
      date: "2024-04-14",
      location: "Harare, Zimbabwe",
      type: "video",
      duration: "15:30"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera, count: galleryImages.length },
    { id: 'worship', name: 'Worship', icon: Church, count: galleryImages.filter(img => img.category === 'worship').length },
    { id: 'community', name: 'Community', icon: Heart, count: galleryImages.filter(img => img.category === 'community').length },
    { id: 'leadership', name: 'Leadership', icon: Users, count: galleryImages.filter(img => img.category === 'leadership').length },
    { id: 'youth', name: 'Youth', icon: Globe, count: galleryImages.filter(img => img.category === 'youth').length },
    { id: 'ceremonies', name: 'Ceremonies', icon: Award, count: galleryImages.filter(img => img.category === 'ceremonies').length },
    { id: 'milestones', name: 'Milestones', icon: Calendar, count: galleryImages.filter(img => img.category === 'milestones').length },
    { id: 'branding', name: 'Branding', icon: MapPin, count: galleryImages.filter(img => img.category === 'branding').length }
  ];

  // Filter images based on category and search
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle lightbox navigation
  const openLightbox = (image) => {
    setSelectedImage(image);
    const index = filteredImages.findIndex(img => img.id === image.id);
    setCurrentLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsVideoPlaying(false);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentLightboxIndex + 1) % filteredImages.length
      : (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
    setIsVideoPlaying(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentLightboxIndex]);

  const ImageCard = ({ image, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className={`relative group cursor-pointer rounded-2xl xs:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        viewMode === 'list' ? 'flex bg-white p-3 xs:p-4 sm:p-6' : 'bg-white'
      }`}
      onClick={() => openLightbox(image)}
    >
      {viewMode === 'grid' ? (
        <>
          <div className="relative aspect-square overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {image.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Play className="w-8 h-8 xs:w-12 xs:h-12 text-white" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold text-sm xs:text-base sm:text-lg mb-1 truncate">
                {image.title}
              </h3>
              <p className="text-white/80 text-xs xs:text-sm truncate">
                {image.location}
              </p>
            </div>
          </div>
          <div className="p-3 xs:p-4 sm:p-6">
            <h3 className="font-semibold text-gray-900 text-sm xs:text-base sm:text-lg mb-1 xs:mb-2 line-clamp-2">
              {image.title}
            </h3>
            <p className="text-gray-600 text-xs xs:text-sm mb-2 xs:mb-3 line-clamp-2">
              {image.description}
            </p>
            <div className="flex items-center justify-between text-xs xs:text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                {new Date(image.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <MapPin className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                {image.location.split(',')[0]}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-3 xs:mr-4 sm:mr-6">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl xs:rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm xs:text-base sm:text-lg mb-1 xs:mb-2 truncate">
              {image.title}
            </h3>
            <p className="text-gray-600 text-xs xs:text-sm mb-2 xs:mb-3 line-clamp-2">
              {image.description}
            </p>
            <div className="flex items-center justify-between text-xs xs:text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                {new Date(image.date).toLocaleDateString()}
              </span>
              <span className="flex items-center truncate ml-2">
                <MapPin className="w-3 h-3 xs:w-4 xs:h-4 mr-1 flex-shrink-0" />
                {image.location}
              </span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );

  return (
    <div className="pt-12 xs:pt-16 sm:pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 lg:mb-8 px-2">
              Photo{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Capturing the beautiful moments of our faith journey across Africa. 
              From worship services to community outreach, these images tell the story of ZBCZ's mission and impact.
            </p>
          </motion.div>

          {/* Search and Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-6 xs:mb-8 sm:mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-3 xs:p-4 sm:p-6 shadow-xl border border-white/20">
              <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 items-center">
                {/* Search */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 xs:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 xs:w-5 xs:h-5" />
                  <input
                    type="text"
                    placeholder="Search photos by title, description, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2 xs:py-3 bg-white rounded-xl xs:rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm xs:text-base"
                  />
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 xs:gap-2 bg-gray-100 rounded-lg xs:rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 xs:p-3 rounded-lg xs:rounded-xl transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid className="w-4 h-4 xs:w-5 xs:h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 xs:p-3 rounded-lg xs:rounded-xl transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4 xs:w-5 xs:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 xs:py-6 sm:py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-center"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-1 xs:gap-2 px-3 xs:px-4 sm:px-6 py-2 xs:py-3 rounded-full text-xs xs:text-sm sm:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <IconComponent className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <span>{category.name}</span>
                  <span className={`px-1.5 xs:px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={
                viewMode === 'grid'
                  ? 'grid gap-4 xs:gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'space-y-4 xs:space-y-6'
              }
            >
              {filteredImages.length > 0 ? (
                filteredImages.map((image, index) => (
                  <ImageCard key={image.id} image={image} index={index} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12 xs:py-16 sm:py-20"
                >
                  <Camera className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-3 xs:mb-4 sm:mb-6" />
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 mb-2 xs:mb-3">
                    No photos found
                  </h3>
                  <p className="text-gray-600 text-sm xs:text-base max-w-md mx-auto">
                    Try adjusting your search terms or selecting a different category.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 xs:p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] w-full bg-white rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 xs:top-4 sm:top-6 right-3 xs:right-4 sm:right-6 z-30 bg-black/20 hover:bg-black/40 text-white p-2 xs:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox('prev')}
                    className="absolute left-2 xs:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-2 xs:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={() => navigateLightbox('next')}
                    className="absolute right-2 xs:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-2 xs:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}

              <div className="grid md:grid-cols-3 h-full">
                {/* Image/Video Section */}
                <div className="md:col-span-2 relative bg-gray-900">
                  {selectedImage.type === 'video' ? (
                    <div className="relative h-48 xs:h-64 sm:h-80 md:h-full flex items-center justify-center">
                      <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button
                          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 xs:p-6 rounded-full transition-all duration-300"
                        >
                          {isVideoPlaying ? (
                            <VolumeX className="w-8 h-8 xs:w-12 xs:h-12" />
                          ) : (
                            <Play className="w-8 h-8 xs:w-12 xs:h-12" />
                          )}
                        </button>
                      </div>
                      {selectedImage.duration && (
                        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                          {selectedImage.duration}
                        </div>
                      )}
                    </div>
                  ) : (
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-48 xs:h-64 sm:h-80 md:h-full object-cover"
                    />
                  )}
                </div>

                {/* Info Section */}
                <div className="p-4 xs:p-6 sm:p-8 bg-white overflow-y-auto">
                  <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3">
                        {selectedImage.title}
                      </h2>
                      <p className="text-gray-600 text-sm xs:text-base leading-relaxed">
                        {selectedImage.description}
                      </p>
                    </div>

                    <div className="grid gap-2 xs:gap-3 sm:gap-4">
                      <div className="flex items-center text-gray-600 text-sm xs:text-base">
                        <Calendar className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3 text-blue-600" />
                        {new Date(selectedImage.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm xs:text-base">
                        <MapPin className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3 text-purple-600" />
                        {selectedImage.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm xs:text-base">
                        <Camera className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3 text-green-600" />
                        {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 xs:gap-3 pt-2 xs:pt-4">
                      <button className="flex items-center gap-1 xs:gap-2 px-3 xs:px-4 py-2 xs:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg xs:rounded-xl text-sm xs:text-base font-medium transition-colors duration-200">
                        <Download className="w-3 h-3 xs:w-4 xs:h-4" />
                        Download
                      </button>
                      <button className="flex items-center gap-1 xs:gap-2 px-3 xs:px-4 py-2 xs:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg xs:rounded-xl text-sm xs:text-base font-medium transition-colors duration-200">
                        <Share2 className="w-3 h-3 xs:w-4 xs:h-4" />
                        Share
                      </button>
                      <button className="flex items-center gap-1 xs:gap-2 px-3 xs:px-4 py-2 xs:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg xs:rounded-xl text-sm xs:text-base font-medium transition-colors duration-200">
                        <Maximize2 className="w-3 h-3 xs:w-4 xs:h-4" />
                        Full Screen
                      </button>
                    </div>

                    {/* Image Counter */}
                    {filteredImages.length > 1 && (
                      <div className="text-center text-sm xs:text-base text-gray-500 pt-2 xs:pt-4 border-t border-gray-100">
                        {currentLightboxIndex + 1} of {filteredImages.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Statistics Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
              Gallery Statistics
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our journey captured in numbers - moments of faith, community, and service
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {[
              { 
                number: galleryImages.length.toString(),
                label: "Total Photos",
                icon: Camera,
                color: "from-blue-500 to-blue-600"
              },
              { 
                number: categories.filter(cat => cat.id !== 'all').length.toString(),
                label: "Categories",
                icon: Filter,
                color: "from-purple-500 to-purple-600"
              },
              { 
                number: "4",
                label: "Countries",
                icon: Globe,
                color: "from-green-500 to-green-600"
              },
              { 
                number: "50+",
                label: "Churches",
                icon: Church,
                color: "from-orange-500 to-orange-600"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${stat.color} rounded-xl xs:rounded-2xl flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-6`}>
                  <stat.icon className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 xs:mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 xs:mb-4 sm:mb-6">
              Share Your Moments
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-blue-100 mb-6 xs:mb-8 sm:mb-10 leading-relaxed">
              Have photos from ZBCZ events or activities? We'd love to feature them in our gallery. 
              Share your moments and help us tell the complete story of our community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 xs:gap-3 px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 bg-white text-blue-600 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Camera className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              Submit Your Photos
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;