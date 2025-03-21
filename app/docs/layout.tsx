import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { docsBaseOptions } from './layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout  tree={source.pageTree}  {...docsBaseOptions} >
      {children}
    </DocsLayout>
  );
}
