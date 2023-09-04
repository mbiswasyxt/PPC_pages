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
  const { richTextDescriptionV2, c_whystudy } = _site;
  console.log(c_whystudy);
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

      <div style={{ background: "white", marginTop: "5em" }}>
        <div className="container-fluid">
          <div className="section-title">
            <h2 className="title" style={{ color: "#3f4952" }}>
              Why study with Arden University?
            </h2>
          </div>
          <div style={{ marginBottom: "4em" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "45%" }}>
                <div style={{ marginBottom: "1em" }}>
                  <img
                    src={c_whystudy.studyimage.url}
                    style={{ height: "120px" }}
                  />
                </div>
                <div style={{ width: "40em", lineHeight: "30px" }}>
                  <h3
                    style={{
                      fontFamily: "initial",
                      fontWeight: 500,
                      color: "darkslategrey",
                      fontSize: "xx-large",
                    }}
                  >
                    {c_whystudy.title}
                  </h3>
                  <div className="head-line"></div>
                </div>
                <div
                  style={{ marginTop: "2em", width: "40em", color: "#3f4952" }}
                >
                  {c_whystudy.titleDesc}
                </div>
              </div>
              <div style={{ width: "45%" }}>
                <div style={{ marginBottom: "1em" }}>
                  <img
                    src={c_whystudy.studyimage2.url}
                    // style={{ height: "120px" }}
                  />
                </div>
                <div style={{ width: "40em", lineHeight: "30px" }}>
                  <h3
                    style={{
                      fontFamily: "initial",
                      fontWeight: 500,
                      color: "darkslategrey",
                      fontSize: "xx-large",
                    }}
                  >
                    {c_whystudy.title2}
                  </h3>
                  <div className="head-line"></div>
                </div>
                <div
                  style={{ marginTop: "2em", width: "40em", color: "#3f4952" }}
                >
                  {c_whystudy.titleDesc2}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "4em" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "45%" }}>
                <div style={{ marginBottom: "1em" }}>
                  <img
                    src={c_whystudy.studyimage3.url}
                    // style={{ height: "120px" }}
                  />
                </div>
                <div style={{ width: "40em", lineHeight: "30px" }}>
                  <h3
                    style={{
                      fontFamily: "initial",
                      fontWeight: 500,
                      color: "darkslategrey",
                      fontSize: "xx-large",
                    }}
                  >
                    {c_whystudy.title3}
                  </h3>
                  <div className="head-line"></div>
                </div>
                <div
                  style={{ marginTop: "2em", width: "40em", color: "#3f4952" }}
                >
                  {c_whystudy.titleDesc3}
                </div>
              </div>
              <div style={{ width: "45%" }}>
                <div style={{ marginBottom: "1em" }}>
                  <img
                    src={c_whystudy.studyimage4.url}
                    // style={{ height: "120px" }}
                  />
                </div>
                <div style={{ width: "40em", lineHeight: "30px" }}>
                  <h3
                    style={{
                      fontFamily: "initial",
                      fontWeight: 500,
                      color: "darkslategrey",
                      fontSize: "xx-large",
                    }}
                  >
                    {c_whystudy.title4}
                  </h3>
                  <div className="head-line"></div>
                </div>
                <div
                  style={{ marginTop: "2em", width: "40em", color: "#3f4952" }}
                >
                  {c_whystudy.titleDesc4}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "4em" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "45%" }}>
                <div style={{ marginBottom: "1em" }}>
                  <img
                    src={c_whystudy.studyimage5.url}
                    style={{ height: "200px" }}
                  />
                </div>
                <div style={{ width: "40em", lineHeight: "30px" }}>
                  <h3
                    style={{
                      fontFamily: "initial",
                      fontWeight: 500,
                      color: "darkslategrey",
                      fontSize: "xx-large",
                    }}
                  >
                    {c_whystudy.title5}
                  </h3>
                  <div className="head-line"></div>
                </div>
                <div
                  style={{ marginTop: "2em", width: "40em", color: "#3f4952" }}
                >
                  {c_whystudy.titleDesc5}
                </div>
              </div>
              <div style={{ width: "45%" }}>
                <div style={{ marginBottom: "1em" }}>
                  <img
                    src={c_whystudy.studyimage6.url}
                    // style={{ height: "130px" }}
                  />
                </div>
                <div style={{ width: "40em", lineHeight: "30px" }}>
                  <h3
                    style={{
                      fontFamily: "initial",
                      fontWeight: 500,
                      color: "darkslategrey",
                      fontSize: "xx-large",
                    }}
                  >
                    {c_whystudy.title6}
                  </h3>
                  <div className="head-line"></div>
                </div>
                <div
                  style={{ marginTop: "2em", width: "40em", color: "#3f4952" }}
                >
                  {c_whystudy.titleDesc6}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
