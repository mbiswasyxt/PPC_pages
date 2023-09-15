/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Cta from "../components/cta";
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import "../index.css";
import "../components/PageLayout.css";
import { LexicalRichText } from "@yext/react-components";
import { Image } from "@yext/sites-components";
/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-2",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "c_locationBanner",
      "c_richTextDescription",
      "c_image_separator",
      "c_imageAndDescription",
      "c_contactOptions",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    services,
    c_locationBanner,
    c_richTextDescription,
    c_image_separator,
    c_imageAndDescription,
    description,
    c_contactOptions,
  } = document;

  return (
    <>
      <PageLayout _site={_site} showStaticContent={false}>
        {/* <Banner name={name} address={address} openTime={openTime}>
          <div className="bg-white h-40 w-1/5 flex items-center justify-center text-center flex-col space-y-4 rounded-lg">
            <div className="text-black text-base">Visit Us Today!</div>
            <Cta
              buttonText="Get Directions"
              url="http://google.com"
              style="primary-cta"
            />
          </div>
        </Banner> */}
        <section className="py-0 m-sub-landing-header u-color-white  u-bg-midnight-100">
          <div className="inner">
            <div className="container-fluid" style={{ width: "50%" }}>
              <div className="row align-items-end h-100">
                <div className="">
                  <div className="content" style={{ marginTop: "20em" }}>
                    <h2>
                      <LexicalRichText
                        serializedAST={JSON.stringify(
                          c_locationBanner.bannerDescription.json
                        )}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "50",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                margin: "4em",
              }}
            >
              {c_locationBanner ? (
                <Image
                  image={c_locationBanner.bannerImage}
                  style={{ height: "30em" }}
                />
              ) : null}
            </div>
          </div>
          <div className="region">
            <div className="breadcrumbs" style={{ border: "none" }}>
              <Image image={c_image_separator} />
            </div>
          </div>
        </section>
        <div style={{ background: "#eef4fa" }}>
          <div className="section-title" style={{ margin: "4em" }}>
            <h2
              className="title"
              style={{
                color: "#3f4952",
              }}
            >
              {description}
            </h2>
            <div
              style={{
                color: "#3f4952",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "10em",
                marginTop: "3em",
              }}
            >
              <div>{c_richTextDescription}</div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", margin: "4em" }}>
                <div style={{ width: "50%" }}>
                  <Image image={c_imageAndDescription[0].bannerImage} />
                </div>
                <div style={{ width: "50%" }}></div>
              </div>
              <div
                style={{
                  background: "white",
                  padding: "4em",
                  width: "40%",
                  position: "absolute",
                  bottom: "8%",
                  color: "#3f4952",
                  left: "45%",
                }}
              >
                <LexicalRichText
                  serializedAST={JSON.stringify(
                    c_imageAndDescription[0].bannerDescription.json
                  )}
                />
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%" }}></div>
              <div style={{ width: "50%" }}>
                <Image image={c_imageAndDescription[1].bannerImage} />
              </div>
            </div>
            <div
              style={{
                background: "white",
                padding: "5em",
                width: "50%",
                position: "absolute",
                bottom: "8%",
                marginLeft: "6em",
                color: "#3f4952",
              }}
            >
              <LexicalRichText
                serializedAST={JSON.stringify(
                  c_imageAndDescription[1].bannerDescription.json
                )}
              />
            </div>
          </div>
          <div className="centered-container">
            <div className="section">
              <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                <div className="bg-gray-100 p-5 space-y-12">
                  <Contact address={address} phone={mainPhone}></Contact>
                  {services && <List list={services}></List>}
                </div>
                <div className="col-span-2 pt-5 space-y-10">
                  <div>
                    {hours && (
                      <Hours title={"Restaurant Hours"} hours={hours} />
                    )}
                  </div>
                  {geocodedCoordinate && (
                    <StaticMap
                      latitude={geocodedCoordinate.latitude}
                      longitude={geocodedCoordinate.longitude}
                    ></StaticMap>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 flex justify-between w-full mx-auto">
            {c_contactOptions.map((item: any, index: any) => (
              <div className="flex gap-2 items-center w-1/2">
                <div className="w-3/4">
                  <LexicalRichText
                    serializedAST={JSON.stringify(item.bannerDescription.json)}
                  />
                </div>
                <div>
                  <Image
                    image={item.bannerImage}
                    className="!w-3/5 h-3/4"
                  ></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Location;
