import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="" {...props} />,
  h2: (props) => <h2 className="" {...props} />,
  h3: (props) => <h3 className="" {...props} />,
  h4: (props) => <h4 className="" {...props} />,
  p: (props) => <p className="" {...props} />,
  a: (props) => <a className="" {...props} />,
  strong: (props) => <strong className="" {...props} />,
  em: (props) => <em className="" {...props} />,
  blockquote: (props) => <blockquote className="" {...props} />,
  ul: (props) => <ul className="" {...props} />,
  ol: (props) => <ol className="" {...props} />,
  li: (props) => <li className="" {...props} />,
  hr: (props) => <hr className="" {...props} />,
  pre: (props) => <pre className="" {...props} />,
  code: (props) => <code className="" {...props} />,
  img: (props) => <img className="" {...props} />,
  figure: (props) => <figure className="" {...props} />,
  figcaption: (props) => <figcaption className="" {...props} />,
};
