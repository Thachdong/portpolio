'use client';
import { useCallback, useMemo } from 'react';
import { MotionDiv } from '../../atoms';

type TPageAnimationProps = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
  id: string;
  callback: (id: string) => void;
};

export const PageAnimation: React.FC<TPageAnimationProps> = ({
  children,
  ref,
  id,
  callback,
}) => {
  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.75, y: 54 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            ease: 'easeOut',
            duration: 0.5,
          },
        },
      },
    }),
    []
  );

  const onViewportEnter = useCallback(() => {
    setTimeout(() => {
      callback(id);
    }, 500);
  }, [callback, id]);

  return (
    <MotionDiv
      ref={ref}
      id={id}
      className="max-w-screen-xl mx-auto py-4 md:py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0,
      }}
      onViewportEnter={onViewportEnter}
    >
      {children}
    </MotionDiv>
  );
};
