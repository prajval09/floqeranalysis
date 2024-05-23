// src/components/TableauEmbed.tsx
import React, { useEffect, useRef } from 'react';

const Vis: React.FC<{ url: string }> = ({ url }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vizRef = ref.current;

    if (vizRef) {
      const { tableau } = window as any;
      const vizUrl = url;

      const options = {
        width: '40vw',
        height: '60vh',
        hideTabs: true,
        hideToolbar: true,
      };

      const viz = new tableau.Viz(vizRef, vizUrl, options);

      return () => {
        viz.dispose();
      };
    }
  }, [url]);

  return <div ref={ref} className="w-full h-full" />;
};

export default Vis;
