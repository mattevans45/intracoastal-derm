const Hero = () => {
  const logoControls = useAnimation();
  const contentControls = useAnimation();
  const flipClockControls = useAnimation();

  const ref = useRef(null);
  const cardContentRef = useRef(null);
  const logoRef = useRef(null);

  const isInView = useInView(ref, { threshold: 0.8 });
  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ["start end", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const backgroundImages = [
    { src: smallwave, loaded: false },
    { src: background3, loaded: false },
    { src: background2, loaded: false },
    { src: background4, loaded: false },
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      backgroundImages.forEach((imageObj) => {
        const img = new Image();
        img.onload = () => {
          imageObj.loaded = true;
          setCurrentBackgroundIndex((prevIndex) => prevIndex); // Force update to re-render with the loaded image
        };
        img.onerror = (error) => {
          console.error(`Failed to preload image: ${imageObj.src}`, error);
        };
        img.src = imageObj.src;
        img.loading = "lazy";
        img.srcset = `${imageObj.src} 1x, ${imageObj.src} 2x`;
        img.sizes = "(max-width: 600px) 100vw, 50vw";
        // You can add alt text here if needed: img.alt = "Alt text";
      });
    };

    preloadImages();
  }, [backgroundImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    logoControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [logoControls]);

  useEffect(() => {
    if (isInView) {
      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.3 },
      });
      flipClockControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5 },
      });
    }
  }, [isInView, contentControls, flipClockControls]);

  const calculateTimeLeft = () => {
    const targetDate = new Date("August 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);