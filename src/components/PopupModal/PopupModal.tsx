import React, { useRef, useEffect, ReactNode } from "react";
import { PopupModalStyled, Content, ExitIcon } from "./styled";
import { Text } from "../Text";
import { Grid } from "../Grid";
import { Colors } from "../Global";
import { BuildThresholdList } from "../utils/BuildThresholdList";

export type PopupModalProps = {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
  title: string;
  subTitle?: string;
};

let isModalVisible = false;
let closeByClick = false;

export let closeModal: () => void;

export const PopupModal = ({
  children,
  open,
  onClose,
  title,
  subTitle,
}: PopupModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (open && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    if (scrollRef.current && modalRef.current && open) {
      const options = {
        root: scrollRef.current,
        rootMargin: "0px",
        threshold: BuildThresholdList(),
      };

      const callback = (entries: { intersectionRatio: number }[]) => {
        entries.forEach((entry: { intersectionRatio: number }) => {
          if (entry.intersectionRatio > 0.3 && !isModalVisible) {
            isModalVisible = true;
          }
          if (
            scrollRef.current &&
            entry.intersectionRatio < 0.3 &&
            isModalVisible &&
            !closeByClick
          ) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
          }
          if (entry.intersectionRatio < 0.05 && isModalVisible) {
            onClose?.();
            isModalVisible = false;
            closeByClick = false;
          }
          if (scrollRef.current) {
            scrollRef.current.style.background = `rgba(0,0,0,${Math.min(
              entry.intersectionRatio,
              0.6
            )})`;
          }
        });
      };

      observer = new IntersectionObserver(callback, options);
      observer.observe(modalRef.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, [scrollRef, modalRef, open]);

  closeModal = () => {
    if (scrollRef.current && modalRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      closeByClick = true;
    }
  };

  return (
    <>
      {open && (
        <PopupModalStyled ref={scrollRef}>
          <Content ref={modalRef}>
            <ExitIcon color={Colors.black} onClick={() => closeModal()} />
            <Grid gap="16px">
              <div>
                <Text textType="h2">{title}</Text>
                <Text>{subTitle}</Text>
              </div>
              {children}
            </Grid>
          </Content>
        </PopupModalStyled>
      )}
    </>
  );
};
