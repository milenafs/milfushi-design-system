import { type ReactNode } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";

interface ComponentPreviewProps {
  code: string;
  children: ReactNode;
  title?: string;
  description?: string;
  /** Lay the rendered example out as a column instead of a row */
  stacked?: boolean;
}

export default function ComponentPreview({
  code,
  children,
  title,
  description,
  stacked = false,
}: ComponentPreviewProps) {
  return (
    <div className={styles.preview}>
      {(title || description) && (
        <div className={styles.header}>
          {title && <div className={styles.title}>{title}</div>}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </div>
      )}
      <div
        className={`ds-preview ${styles.renderArea} ${
          stacked ? styles.renderAreaStacked : ""
        }`}
      >
        {children}
      </div>
      <div className={styles.code}>
        <CodeBlock language="tsx">{code}</CodeBlock>
      </div>
    </div>
  );
}
