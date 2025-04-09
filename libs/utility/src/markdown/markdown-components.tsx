import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

export const markdownComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="font-medium pt-12 mb-0 text-4xl text-black" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-black font-medium mt-8 mb-3 text-3xl" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-black font-medium mt-8 mb-3 text-2xl" {...props}>
      {props.children}
    </h3>
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-xl text-black" {...props}>
      {props.children}
    </h4>
  ),
  h5: (props: HeadingProps) => (
    <h5 className="font-medium text-lg text-black" {...props}>
      {props.children}
    </h5>
  ),
  h6: (props: HeadingProps) => (
    <h6 className="font-medium text-base text-black" {...props}>
      {props.children}
    </h6>
  ),
  p: (props: ParagraphProps) => (
    <p className="text-black leading-snug" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="text-black list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-black list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1 text-black" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium text-black" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium text-black" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      'text-black hover:text-burnt-orange underline underline-offset-2 decoration-black';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="text-black">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index} className="text-black">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-black pl-4 text-black"
      {...props}
    />
  ),
};
