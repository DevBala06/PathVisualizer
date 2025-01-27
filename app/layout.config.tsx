import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import NavLinks from './components/NavLinks';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */



export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: (
      <h1 className=" text-2xl font-semibold">
        PathVisualizer<span className="text-sm ">.io</span></h1>
    ),
  },
  links: [
    {
      type:'custom',
      children:<NavLinks/>  
      },
    
  ],
};
