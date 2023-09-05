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
  const {
    richTextDescriptionV2,
    c_whystudy,
    c_title_arden,
    c_desc_arden,
    c_image_arden,
    shortDescriptionV2,
    c_courseSelectorImage,
    c_course,
    c_journeyenquiry,
    c_journeycallback,
    c_journeyopendays,
    c_journeybrochure,
  } = _site;
  console.log(c_course);
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
      <div style={{ background: "#eef4fa", padding: "5em 4em" }}>
        <div style={{ position: "relative" }}>
          <div className="section-title">
            <h2 className="title" style={{ color: "#3f4952" }}>
              {c_title_arden}
            </h2>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}></div>
            <div style={{ width: "50%" }}>
              <img src={c_image_arden.url} />
            </div>
          </div>
          <div
            style={{
              background: "white",
              padding: "5em",
              width: "50%",
              position: "absolute",
              bottom: "25%",
              marginLeft: "6em",
              color: "#3f4952",
            }}
          >
            {c_desc_arden}
          </div>
        </div>
        <div className="section-title" style={{ marginTop: "5em" }}>
          <h2 className="title" style={{ color: "#3f4952" }}>
            Find your perfect Law degree
          </h2>
        </div>
        <div>
          <img src={c_courseSelectorImage.url} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1em",

            justifyContent: "space-between",
          }}
        >
          <div
            style={{ width: "32%", backgroundColor: "white", padding: "2em" }}
          >
            <div
              style={{
                borderBottom: "solid 1px #bfcad3",
                paddingBottom: "1em",
                fontSize: "1.5em",
              }}
            >
              {c_course.courseName1}
            </div>
            <div style={{ marginBottom: "4em" }}>
              <div style={{ display: "flex", padding: "1em 0em 0em" }}>
                <img
                  src="https://cdn.arden.ac.uk/s3fs-public/icons/about/award.svg"
                  className="img-icon"
                />
                {c_course.degreeName1}
              </div>
              <div style={{ display: "flex", padding: "1em 0em 0em" }}>
                <img
                  src="https://cdn.arden.ac.uk/s3fs-public/icons/about/locations.svg"
                  className="img-icon"
                />
                {c_course.courseLoc1}
              </div>
            </div>
            <a
              href="/our-courses/undergraduate/law-degrees/llb-hons"
              className="view-course"
              role="button"
            >
              View course →
            </a>
          </div>
          <div
            style={{ width: "32%", backgroundColor: "white", padding: "2em" }}
          >
            <div
              style={{
                borderBottom: "solid 1px #bfcad3",
                paddingBottom: "1em",
                fontSize: "1.5em",
              }}
            >
              {c_course.courseName2}
            </div>
            <div style={{ marginBottom: "4em" }}>
              <div style={{ display: "flex", padding: "1em 0em 0em" }}>
                <img
                  src="https://cdn.arden.ac.uk/s3fs-public/icons/about/award.svg"
                  className="img-icon"
                />
                {c_course.degreeName3}
                {/* ABCD */}
              </div>
              <div style={{ display: "flex", padding: "1em 0em 0em" }}>
                <img
                  src="https://cdn.arden.ac.uk/s3fs-public/icons/about/locations.svg"
                  className="img-icon"
                />
                {c_course.courseLoc2}
              </div>
            </div>
            <a
              href="/our-courses/undergraduate/law-degrees/llb-hons"
              className="view-course"
              role="button"
            >
              View course →
            </a>
          </div>
          <div
            style={{ width: "30%", backgroundColor: "white", padding: "2em" }}
          >
            <div
              style={{
                borderBottom: "solid 1px #bfcad3",
                paddingBottom: "1em",
                fontSize: "1.5em",
              }}
            >
              {c_course.courseName3}
            </div>
            <div style={{ marginBottom: "4em" }}>
              <div style={{ display: "flex", padding: "1em 0em 0em" }}>
                <img
                  src="https://cdn.arden.ac.uk/s3fs-public/icons/about/award.svg"
                  className="img-icon"
                />
                {c_course.degreeName3}
              </div>
              <div style={{ display: "flex", padding: "1em 0em 0em" }}>
                <img
                  src="https://cdn.arden.ac.uk/s3fs-public/icons/about/locations.svg"
                  className="img-icon"
                />
                {c_course.courseLoc3}
              </div>
            </div>
            <a
              href="/our-courses/undergraduate/law-degrees/llb-hons"
              className="view-course"
              role="button"
            >
              View course →
            </a>
          </div>
        </div>
        <div className="section-title" style={{ marginTop: "7em" }}>
          <h2 className="title" style={{ color: "#3f4952" }}>
            Start your journey with Arden University
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2em",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "24%", background: "white" }}>
            <a href="https://arden.ac.uk/blended-law-manchester-lp">
              <img src={c_journeyenquiry.url} />
            </a>
          </div>
          <div style={{ width: "24%", background: "white" }}>
            <a href="https://arden.ac.uk/blended-law-manchester-lp">
              <img src={c_journeycallback.url} />
            </a>
          </div>
          <div style={{ width: "24%", background: "white" }}>
            <a href="https://arden.ac.uk/knowledge-base/virtual-events-webinars/upcoming-events">
              <img src={c_journeyopendays.url} />
            </a>
          </div>
          <div style={{ width: "24%", background: "white" }}>
            <a href="https://arden.ac.uk/blended-law-manchester-lp">
              <img src={c_journeybrochure.url} />
            </a>
          </div>
        </div>
      </div>
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
