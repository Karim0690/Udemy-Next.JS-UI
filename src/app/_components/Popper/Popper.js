"use client"
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";

const PopperComponent = ({
  trigger,
  content,
  buttonContent,
  placement = "bottom",
}) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef();
  const [popperElement, setPopperElement] = useState(null);
  const timeoutRef = useRef(null);

  const { styles, attributes } = usePopper(triggerRef.current, popperElement, {
    placement: placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [-90, 30],
        },
      },
    ],
  });

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowPopper(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopper(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={triggerRef}
    >
      {trigger}

      {showPopper && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-white shadow-lg border max-w-[300px] z-20"
        >
          <div className="px-6 py-4 w-full flex flex-col items-center">
            <div className="font-bold text-xl mb-4 text-center">{content}</div>
            <Link
              href="/teaching"
              className="py-3 w-full bg-gray-800 text-white text-sm font-semibold hover:bg-gray-900 text-center"
            >
              {buttonContent}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopperComponent;
