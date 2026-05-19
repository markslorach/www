import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="..." {...props} />,
  p: (props) => <p className="..." {...props} />,
};