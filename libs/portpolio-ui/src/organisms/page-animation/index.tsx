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
      hidden: { opacity: 0, scale: 0, y: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 64,
        transition: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            ease: 'easeOut',
          },
        },
      },
    }),
    []
  );

  const onViewportEnter = useCallback(() => {
    callback(`#${id}`);
  }, [callback, id]);

  return (
    <MotionDiv
      ref={ref}
      id={id}
      className="max-w-screen-xl mx-auto"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.15,
      }}
      onViewportEnter={onViewportEnter}
    >
      {children}
    </MotionDiv>
  );
};
