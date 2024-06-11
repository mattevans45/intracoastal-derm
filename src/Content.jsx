import { TvIcon } from "@heroicons/react/16/solid";
import { CursorArrowRaysIcon, DevicePhoneMobileIcon, HeartIcon, MagnifyingGlassMinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { ShareIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/24/outline";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useState } from "react";
import { IconBase } from "react-icons";
const EXPANDED_HEIGHT = 800;
const COLLAPSED_HEIGHT = 400;
const TOGGLE_HEIGHT_THRESHOLD = (EXPANDED_HEIGHT + COLLAPSED_HEIGHT) / 2;
const CaretSortIconMotion = motion(TvIcon);
export const Content = () => {
  const [hasOutline, setHasOutline] = useState(true);
  const contentHeight = useMotionValue(EXPANDED_HEIGHT);
  const contentAnimationControls = useAnimation();
  const heightTransitionSettings = {
    duration: 0.5,
    ease: [0.32, 0.72, 0, 1],
  };
  const contentScale = useTransform(
    contentHeight,
    [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
    [1, 0.9]
  );
  const contentRoundedCorners = useTransform(
    contentHeight,
    [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
    [0, 24]
  );
  const contentPaddingTop = useTransform(
    contentHeight,
    [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
    [80, 0]
  );
  const actionAreaHeight = useTransform(
    contentHeight,
    [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
    [92, 20]
  );
  const actionButtonSize = useTransform(
    contentHeight,
    [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
    [28, 4]
  );
  const actionIconScale = useTransform(
    contentHeight,
    [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
    [1, 0]
  );
  const sheetShadowIntensity = useTransform(
    contentHeight,
    [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
    [
      "0 0px 0px 0px rgb(0 0 0 / 0.1), 0 0px 0px 0px rgb(0 0 0 / 0.1)",
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    ]
  );
  const onDragAdjustHeight = (_event, { delta: { y } }) => {
    let newHeight = contentHeight.get() + y;
    if (newHeight > COLLAPSED_HEIGHT && newHeight <= EXPANDED_HEIGHT) {
      contentHeight.set(newHeight);
    }
  };
  
  const onDragEndAdjustHeight = async () => {
    if (
      contentHeight.get() === COLLAPSED_HEIGHT ||
      contentHeight.get() === EXPANDED_HEIGHT
    ) {
      return;
    }
    const finalHeight =
      contentHeight.get() < TOGGLE_HEIGHT_THRESHOLD
        ? COLLAPSED_HEIGHT
        : EXPANDED_HEIGHT;
    await contentAnimationControls.start({
      height: finalHeight,
      transition: heightTransitionSettings,
    });
  };
  const openSheet = () => {
    if (contentHeight.get() === COLLAPSED_HEIGHT) {
      return;
    }
    contentAnimationControls.start({
      height: COLLAPSED_HEIGHT,
      transition: heightTransitionSettings,
    });
  };
  const closeSheet = () => {
    contentAnimationControls.start({
      height: EXPANDED_HEIGHT,
      transition: heightTransitionSettings,
    });
  };
  const toggleOutline = () => {
    setHasOutline(!hasOutline);
  };
  return (
    <>
      {/* <div className="absolute left-4 top-4">
        <button onClick={toggleOutline} className="active:scale-95">
          <MoonIcon className="h-4 w-4 text-black dark:text-mauve-dark-12" />
        </button>
      </div>
      <div className="p-12">
        <div
          className="relative w-full overflow-hidden bg-mauve-light-2"
          style={{
            height: EXPANDED_HEIGHT,
            outline: hasOutline ? "12px solid #000" : "none",
            borderRadius: hasOutline ? "54px" : "4px",
            width: "344px",
          }}
        >
          <div>
            <motion.div
              className="relative overflow-hidden bg-mauve-light-2"
              style={{
                height: contentHeight,
                scale: contentScale,
                borderRadius: contentRoundedCorners,
                boxShadow: sheetShadowIntensity,
              }}
              animate={contentAnimationControls}
            >
              <motion.div
                className="flex h-full flex-col space-y-2 overflow-y-scroll px-5 pb-20"
                style={{
                  // remove scrollbar for demo phone screen
                  scrollbarWidth: "none",
                  paddingTop: contentPaddingTop,
                }}
              >
                </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-mauve-light-2 via-mauve-light-2 to-transparent"
                style={{
                  height: actionAreaHeight,
                }}
                animate={contentAnimationControls}
              >
                <motion.div
                  drag="y"
                  dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                  dragElastic={0}
                  dragMomentum={false}
                  onDrag={onDragAdjustHeight}
                  onDragEnd={onDragEndAdjustHeight}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                  whileDrag={{ cursor: "grabbing" }}
                  className="flex h-[80%] w-full items-center justify-center"
                >
                  <motion.button
                    onClick={openSheet}
                    className="z-10 flex items-center justify-center rounded-[12px] bg-mauve-light-6 text-black px-2 text-black transition-colors hover:bg-mauve-light-7"
                    style={{
                      height: actionButtonSize,
                    }}
                    animate={contentAnimationControls}
                  >
                    <CaretSortIconMotion
                      className="h-5 w-5 text-black "
                      style={{
                        scaleY: actionIconScale,
                      }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="flex flex-col space-y-2 px-4">
            <div className="flex items-center space-x-2 pb-5 pt-3">
              <div className="flex-1">
                <button className="rounded-full bg-mauve-light-3 p-1 transition-colors hover:bg-mauve-light-4">
                  <PlusIcon className="h-4 w-4 text-black" />
                </button>
              </div>
              <div className="flex-1 text-center text-black">
                Actions
              </div>
              <div className="flex flex-1 justify-end" onClick={closeSheet}>
                <button className="hover:bg-mauve-light-4-4 rounded-full bg-mauve-light-3 p-1 transition-colors">
                  <CursorArrowRaysIcon className="h-4 w-4 text-black" />
                </button>
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="flex flex-1 flex-col items-center justify-center space-y-1 rounded-xl bg-mauve-light-3 p-4 text-sm">
                <HeartIcon className="h-4 w-4 text-black" />
                <span className="text-sm text-black">Like</span>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-1 rounded-xl bg-mauve-light-3 p-4 text-sm">
                <ShareIcon className="h-4 w-4 text-black" />
                <span className="text-black">Share</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 rounded-xl bg-mauve-light-3 p-4">
                <MagnifyingGlassMinusIcon className="h-4 w-4 text-black" />
                <span className="text-sm text-black">Regenerate</span>
              </div>
              <div className="flex items-center space-x-2 rounded-xl bg-mauve-light-3 p-4 text-sm">
                <LockClosedIcon className="h-4 w-4 text-black" />
                <span className="text-sm text-black">Lock</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}
    </>
  );
};
export default Content;