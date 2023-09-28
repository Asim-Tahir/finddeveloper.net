"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

export interface PopularSearchRecord {
  id: number;
  label: string;
}

export interface PopularSearchesSectionProps {
  title: string;
  searches: Array<PopularSearchRecord>;
}

export default function PopularSearchesSection({
  title,
  searches,
}: PopularSearchesSectionProps): JSX.Element {
  const isDown = useRef<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  function onMouseDown(event: React.MouseEvent<HTMLUListElement>) {
    const slider: HTMLUListElement = event.currentTarget as HTMLUListElement;

    isDown.current = true;
    setIsActive(true);
    startX.current = event.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;
  }

  function onMouseLeave(event: React.MouseEvent<HTMLUListElement>) {
    isDown.current = false;
    setIsActive(false);
  }

  function onMouseUp(event: React.MouseEvent<HTMLUListElement>) {
    isDown.current = false;
    setIsActive(false);
  }

  function onMouseMove(event: React.MouseEvent<HTMLUListElement>) {
    if (!isDown.current) return;

    event.preventDefault();
    const slider: HTMLUListElement = event.currentTarget as HTMLUListElement;

    const walk = (event.pageX - slider.offsetLeft - startX.current) * 1;
    slider.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <section className={styles.popularSearches}>
      <h3 className={styles.popularSearchesTitle}>{title}</h3>

      <ul
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className={clsx([styles.popularSearchesList, isActive && "active"])}
      >
        {searches.map((search) => (
          <li className={styles.popularSearchesListItem} key={search.id}>
            {search.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
