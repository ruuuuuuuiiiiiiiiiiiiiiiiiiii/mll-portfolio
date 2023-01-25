import React, { useRef, useEffect } from "react";

const CustomCursor = () => {
  const delay = 18;
  const delay2 = 30;

  const dot = useRef(null);
  const dotOutline1 = useRef(null);
  const dotOutline2 = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);
  const _x2 = useRef(0);
  const _y2 = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline1.current.style.opacity = 1;
      dotOutline2.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline1.current.style.opacity = 0;
      dotOutline2.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline1.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
      dotOutline2.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline1.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline2.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    _x2.current += (endX.current - _x.current) / delay2;
    _y2.current += (endY.current - _y.current) / delay2;

    dotOutline1.current.style.top = _y.current + 'px';
    dotOutline1.current.style.left = _x.current + 'px';

    dotOutline2.current.style.top = _y.current + 'px';
    dotOutline2.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };


  return (
    <>
    <div ref={dotOutline1} className="cursor-dot-outline1"></div>
    <div ref={dotOutline2} className="cursor-dot-outline2"></div>
    <div ref={dot} className="cursor-dot"></div>
        
    </>
  );
};

export default CustomCursor;