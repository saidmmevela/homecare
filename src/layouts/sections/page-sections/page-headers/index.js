/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";

// PageHeaders page components
// import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import Team from "layouts/sections/page-sections/page-headers/components/HeaderOne/Team";
import Testimonials from "layouts/sections/page-sections/page-headers/components/HeaderOne/Testimonials";

// PageHeaders page components code
// import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Testimonial"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "Testimonial" },
      ]}
    >
      {/* <View title="Header 1" code={headerOneCode} height="40rem"> */}
      <Team />
      <Testimonials />
      {/* </View> */}
    </BaseLayout>
  );
}

export default PageHeaders;
