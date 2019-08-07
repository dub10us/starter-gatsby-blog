import React from 'react'
import get from 'lodash/get'
import {Helmet} from 'react-helmet'
import Hero from '../components/hero'
import Social from '../components/sociallinks'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Logo from '../img/logo.png'
import LogoWhite from '../img/logo-white.png'

class RootIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')
        const social = get(this, 'props.data.allContentfulSocialLinks.edges')

        return (
            <div style={{
                background: '#fff'
            }}>
                <Helmet>
                    <title>{siteTitle}</title>
                    <link href="../css/font-awesome.min.css" rel="stylesheet"/>
                    <link href="../css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="../css/style.css" rel="stylesheet"/>
                    <link href="../css/responsive-style.css" rel="stylesheet"/>

                </Helmet>

                <div className="wrapper">

                    <header id="header">

                        <div className="header--topbar">
                            <div className="container">
                                <div className="pull-left clearfix">
                                    <div className="vc--parent">
                                        <div className="vc--child"></div>
                                    </div>
                                </div>

                                <div className="header--topbar-logo">
                                    <a href="index.html"><img src={Logo} alt="" data-rjs="2"/></a>
                                </div>

                                <div className="pull-right">
                                    <div className="vc--parent">
                                        <div className="vc--child">

                                            <div className="header--topbar-info pull-left hidden-xs">
                                                <ul className="nav">
                                                    {social.map(({node}) => {
                                                        return (
                                                            <li>
                                                                <Social data={node}/>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sticky="true">
                            <nav className="header--navbar-wrapper">
                                <div className="container">

                                    <div className="header--navbar navbar bg--color-theme">

                                        <div className="navbar-header">

                                            <ul className="header--nav-links cart nav navbar-nav hidden-md hidden-lg ">
                                                <li>
                                                    <a href="index.html"><img src={LogoWhite} alt="" className="nav-logo"/></a>
                                                </li>
                                            </ul>

                                            <button
                                                type="button"
                                                className="navbar-toggle collapsed"
                                                data-toggle="collapse"
                                                data-target="#headerNav">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>

                                        </div>

                                        <div id="headerNav" className="header--nav navbar-collapse collapse">

                                            <ul
                                                className="header--nav-links cart nav navbar-nav navbar-right hidden-sm hidden-xs ">
                                                <li>
                                                    <a href="index.html"><img src={LogoWhite} alt="" className="nav-logo"/></a>
                                                </li>
                                            </ul>

                                            <ul className="header--nav-links nav navbar-nav">
                                                <li className="active">
                                                    <a href="index.html">Home</a>
                                                </li>

                                            </ul>

                                        </div>

                                    </div>

                                </div>
                            </nav>
                        </div>

                    </header>

                    <div id="banner">
                        <div className="banner--slider">
                            <div className="container">
                                <div className="row">
                                    <h2 className="section-headline">Recent articles</h2>
                                    <ul className="article-list">
                                        {posts.map(({node}) => {
                                            return (
                                                <li key={node.slug}>
                                                    <ArticlePreview article={node}/>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="portfolio" className="pd--100-0">
            <div className="container">
                {/*<!-- Portfolio Filter Nav Start -->*/}
                <div className="portfolio--filter-nav triangle--on">
                    <ul>
                        <li className="active"><a href="*" className="btn btn-default">Featured Projects</a></li>
                        <li><a href="gtd" className="btn btn-default">GTD</a></li>
                        <li><a href="research" className="btn btn-default">Research</a></li>
                        <li><a href="web-development" className="btn btn-default">Web Development</a></li>
                        <li><a href="automation" className="btn btn-default">Automation</a></li>
                    </ul>
                </div>
                {/* <!-- Portfolio Item End -->*/}

                    {/*<!-- Portfolio Item Start -->*/}
                <div className="portfolio--items row">
                    
                    <div className="portfolio--item col-md-4 col-xs-6" data-cat="gtd research">
                        <a href="#">
                            <div className="portfolio--item-img">
                                <img src="https://res.cloudinary.com/devtinker/image/upload/c_scale,h_300,w_370/v1562376226/62543556_427750221143339_4595615794209280428_n.jpg_y9h56n.png" alt="" data-rjs="2"/>
                                <i className="fa fa-link"></i>
                            </div>

                            <div className="portfolio--item-info">
                                <h2 className="h4">GTD: Becoming more Present</h2>
                                <p>Productivity</p>
                            </div>
                        </a>
                    </div>
                    {/* <!-- Portfolio Item End -->*/}

                    {/*<!-- Portfolio Item Start -->*/}
                    <div className="portfolio--item col-md-4 col-xs-6" data-cat="gtd web-development">
                        <a href="#">
                            <div className="portfolio--item-img">
                                <img src="https://res.cloudinary.com/devtinker/image/upload/c_scale,h_300,w_370/v1562376232/52789835_1988741964755051_6822076881941494494_n.jpg_j6riry.png" alt="" data-rjs="2"/>
                                <i className="fa fa-link"></i>
                            </div>

                            <div className="portfolio--item-info">
                                <h2 className="h4">GTD and Technology</h2>
                                <p>Productivity</p>
                            </div>
                        </a>
                    </div>
                   {/* <!-- Portfolio Item End -->*/}

                    {/*<!-- Portfolio Item Start -->*/}
                    <div className="portfolio--item col-md-4 col-xs-6" data-cat="research automation">
                        <a href="#">
                            <div className="portfolio--item-img">
                                <img src="https://res.cloudinary.com/devtinker/image/upload/c_scale,h_300,w_370/v1562461265/compass-on-map-PV2YG4Y_xo8t6g.png" alt="" data-rjs="2"/>
                                <i className="fa fa-link"></i>
                            </div>

                            <div className="portfolio--item-info">
                                <h2 className="h4">Fantasy Cartography</h2>
                                <p>Research</p>
                            </div>
                        </a>
                    </div>
                    {/*<!-- Portfolio Item End -->*/}

                </div>
                
                <div className="portfolio--footer">
                    <div className="load-more-btn text-center">
                        <a href="#" className="btn btn-default">Load More</a>
                    </div>
                </div>
                
            </div>
        </div>

                    <div id="footer" className="pd--50-0-0 bg--color-lightgray">

                        <div className="footer--widgets">
                            <div className="container">
                                <div className="row AdjustRow">

                                    <div className="footer--widget col-md-6 col-sm-6">

                                        <div className="footer--title">
                                            <div className="logo">
                                                <img src={Logo} alt="" data-rjs="2"/>
                                            </div>
                                        </div>

                                        <div className="about--widget">
                                            <p></p>

                                            <a href="#" className="btn-link">More About Us</a>
                                        </div>

                                        <div className="social--widget">
                                            <ul>
                                                <li>
                                                    <span>Follow Us:</span>
                                                </li>
                                                {social.map(({node}) => {
                                                    return (
                                                        <li>
                                                            <Social data={node}/>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="footer--widget col-md-6 col-sm-6"></div>

                                </div>
                            </div>
                        </div>

                        <div className="footer--menu">
                            <div className="container-fluid bg--color-theme">
                                <div className="footer--menu-wrapper">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="footer--copyright bg--color-theme">
                            <div className="container">
                                <p>&copy; Copyright 2019 &nbsp;
                                    <a href="#">DevTinker</a>. All Rights Reserved</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}
export default RootIndex;

export const pageQuery = graphql ` query
                    HomeQuery {allContentfulBlogPost(sort : {
                        fields: [publishDate],
                        order: DESC
                    }) {
                        edges {
                            node {
                                title
                                slug
                                publishDate(formatString : "MMMM Do, YYYY")
                                tags
                                heroImage {
                                    sizes(maxWidth : 350, maxHeight : 196, resizingBehavior : SCALE) {
                                        ...GatsbyContentfulSizes_withWebp
                                    }
                                }
                                description {childMarkdownRemark {html}}
                            }
                        }
                    }
                    allContentfulSocialLinks(sort : {
                        fields: [id],
                        order: ASC
                    }) {
                        edges {
                            node {
                                title
                                url
                                icon
                                active
                            }
                        }
                    }
                    allContentfulPerson(filter : {
                        id: {
                            eq: "c15jwOBqpxqSAOy2eOO4S0m"
                        }
                    }) {
                        edges {
                            node {
                                name
                                shortBio {shortBio}
                                title
                                heroImage : image {
                                    sizes(maxWidth : 1180 maxHeight : 480 resizingBehavior : PAD background : "rgb:000000") {
                                        ...GatsbyContentfulSizes_withWebp
                                    }
                                }
                            }
                        }
                    }
}
`