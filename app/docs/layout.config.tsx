import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */



export const docsBaseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <h1 className=" text-2xl font-semibold">
        PathVisualizer<span className="text-sm ">.io</span></h1>
    ),
  },
  links: [
    {
      text:'Home',
      url:'/',
      active:"nested-url"
    },
    {
      text:'Docs',
      url:'/docs',
      active:"nested-url"
    },
    {
      text:'Dashboard',
      url:'/dashboard',
      active:"nested-url"
    },
    {
      text:'Visualizer',
      url:'/visualizer',
      active:"nested-url"
    }
  ],
};
