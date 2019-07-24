import React from "react";
import Layout from "layouts/Default";

const withLayout = WrappedComponent => {
  const WithLayout = props => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
  WithLayout.displayName = `WithLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
};

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || "Component";

export default withLayout;
