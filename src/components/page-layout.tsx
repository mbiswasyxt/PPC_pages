import * as React from "react";
import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";
import "./Pagelayout.css";

type Props = {
  _site?: Site;
  children?: React.ReactNode;
};

const PageLayout = ({ _site, children }: Props) => {
  const { richTextDescriptionV2 } = _site;
  return (
    <div className="min-h-screen">
      <Header _site={_site} />
      {/* {children} */}
      <section className="py-0 m-sub-landing-header u-color-white m-sub-landing-header--basic u-bg-midnight-100">
        <div className="inner">
          <div className="container-fluid">
            <div className="row align-items-end h-100">
              <div className="col-lg-6">
                <div className="content">
                  <h1 className="title" style={{ fontSize: "51px" }}>
                    {_site.name}
                  </h1>
                  <div className="copy"></div>

                  <div className="buttons"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="region">
          <div className="breadcrumbs">
            <span>
              <a href="https://arden.ac.uk/?" className="link">
                Home - Study your Law Degree in Manchester
              </a>
            </span>
            {/* <span>
              <div>Study your Law Degree in Manchester</div>
            </span> */}
          </div>
        </div>
      </section>

      <div
        style={{
          background: "#eef4fa",
          display: "flex",
        }}
      >
        <div
          style={{
            padding: "5em",
          }}
        >
          <div
            style={{
              color: "#3f4952",
              fontSize: "18px",
              marginBottom: "24px",
              width: "38em",
              fontFamily: "sans-serif",
              fontWeight: 300,
            }}
          >
            {richTextDescriptionV2.json.root.children[0].children[0].text}
          </div>
          <div
            style={{
              color: "#3f4952",
              fontSize: "18px",
              width: "38em",
              fontFamily: "sans-serif",
              fontWeight: 300,
            }}
          >
            {richTextDescriptionV2.json.root.children[1].children[0].text}
          </div>
        </div>
        <div style={{ width: "70%", padding: "6em 4em" }}>
          <img
            data-src="https://cdn.arden.ac.uk/s3fs-public/2021-03/WhatUni_Review_10.png?VersionId=cupbQ9A0RrwUKCRgY3bhKqxjLFHVRzxt"
            alt="Arden University rated 4.2 out of 5 by WhatUni"
            src="https://cdn.arden.ac.uk/s3fs-public/2021-03/WhatUni_Review_10.png?VersionId=cupbQ9A0RrwUKCRgY3bhKqxjLFHVRzxt"
          />
        </div>
      </div>
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
