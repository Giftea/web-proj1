import React from "react";
import BlogItemContainer from "../containers/blog/blog-item";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Blog" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Blog Post"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/blog/banner.png"
                    />
                    <BlogItemContainer data={BlogData} />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;
