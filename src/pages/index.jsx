import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

function Index() {
  const { title } = useSiteMetadata();

  return <>{title}</>;
}

export default Index;
