export const isMobileLikeDevice = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrowViewport = window.matchMedia("(max-width: 768px)").matches;
  const touchPoints = navigator.maxTouchPoints ?? 0;

  return coarsePointer || narrowViewport || touchPoints > 0;
};

export const isDesktopLikeDevice = () => {
  if (typeof window === "undefined") {
    return true;
  }

  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const wideViewport = window.matchMedia("(min-width: 1024px)").matches;
  const touchPoints = navigator.maxTouchPoints ?? 0;

  return finePointer && wideViewport && touchPoints === 0;
};