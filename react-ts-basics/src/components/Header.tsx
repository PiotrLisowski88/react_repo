import { type ReactNode } from "react";

interface Props {
    image: {
        src: string;
        alt: string;
        };
    children: ReactNode;
  }

  export default function Header({ image, children }: Props) {
    return (
      <header>
        <img {...image} />
        <h1>{children}</h1>
      </header>
    );
  }