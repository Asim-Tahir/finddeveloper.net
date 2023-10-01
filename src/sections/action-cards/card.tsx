import Image from "next/image";
import { Fragment } from "react";

import "./card.scss";
import clsx from "clsx";

export interface ActionCardLink {
  id: string;
  label: string;
  url: string;
}

export interface ActionCardProps {
  image: SampledStaticImageDataWithAlternateText;
  links: Array<ActionCardLink>;
}

export default function ActionCard({
  image,
  links,
}: ActionCardProps): JSX.Element {
  return (
    <div className="action-card">
      <picture className="action-card__picture">
        <source srcSet={image["3x"].src} media="(min-width: 768px)" />
        <source srcSet={image["2x"].src} media="(min-width: 640px)" />
        <Image
          className="action-card__image"
          src={image["1x"]}
          alt={image.alt}
        />
      </picture>

      <ul className="action-card__action-list">
        {links.map((link, index) => (
          <Fragment key={link.id}>
            {0 < index && index <= links.length ? (
              <li
                role="separator"
                aria-orientation="horizontal"
                className={clsx([
                  "action-card__action-list-item",
                  "action-card__action-list-item--seperator",
                ])}
              >
                |
              </li>
            ) : null}

            <li className="action-card__action-list-item">
              <a href={link.url} className="link">{link.label}</a>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
