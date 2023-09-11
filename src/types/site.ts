export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface ViewCourse1 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface ViewCourse2 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface ViewCourse3 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_course {
	courseName1?: string,
	degreeName1?: string,
	courseLoc1?: string,
	viewCourse1?: ViewCourse1,
	course1toLoc?: EntityReference[],
	courseName2?: string,
	degreename2?: string,
	courseLoc2?: string,
	viewCourse2?: ViewCourse2,
	course2toLoc?: EntityReference[],
	courseName3?: string,
	courseLoc3?: string,
	degreeName3?: string,
	viewCourse3?: ViewCourse3,
	course3toLoc?: EntityReference[],
}

export interface CTA1 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Cta2 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Cta3 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface CTA4 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_startJourney {
	img1?: Image,
	txt1?: string,
	cTA1?: CTA1,
	img2?: Image,
	txt2?: string,
	cta2?: Cta2,
	img3?: Image,
	txt3?: string,
	cta3?: Cta3,
	img4?: Image,
	txt4?: string,
	cTA4?: CTA4,
}

export interface C_whystudy {
	title?: string,
	titleDesc?: string,
	studyimage?: Image,
	title2?: string,
	titleDesc2?: string,
	studyimage2?: Image,
	title3?: string,
	titleDesc3?: string,
	studyimage3?: Image,
	title4?: string,
	titleDesc4?: string,
	studyimage4?: Image,
	title5?: string,
	titleDesc5?: string,
	studyimage5?: Image,
	title6?: string,
	titleDesc6?: string,
	studyimage6?: Image,
}

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export default interface Ce_site {
	landingPageUrl?: string,
	richTextDescription?: string,
	richTextDescriptionV2?: any,
	shortDescription?: string,
	shortDescriptionV2?: any,
	slug?: string,
	logo?: ComplexImage,
	name: string,
	c_course?: C_course,
	c_courseSelectorImage?: Image,
	c_desc_arden?: string,
	c_footerImage?: Image,
	c_header?: Image,
	c_headerImage?: Image,
	c_image_arden?: Image,
	c_journeybrochure?: Image,
	c_journeycallback?: Image,
	c_journeyenquiry?: Image,
	c_journeyopendays?: Image,
	c_startJourney?: C_startJourney,
	c_title_arden?: string,
	c_whystudy?: C_whystudy,
	id: string,
	websiteUrl?: WebsiteUrl,
}
