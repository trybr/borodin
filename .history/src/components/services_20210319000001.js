import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Service from "../components/service";

const Services = () => {
    const { data } = useStaticQuery(
        graphql`
            query {
                allContentfulService(sort: {order: DESC, fields: id}, filter: {id: {}}) {
                    edges {
                    node {
                        id
                        title
                        days
                        icon {
                        file {
                            url
                        }
                        }
                        price
                        description {
                        description
                        }
                        checkList
                    }
                    }
                }
            }
        `
    )

    console.log(data);

    return (
        <section className="services section" data-aos="fade-up" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="services-title title-h2">Возможности и цены</h2>
                </div>
            </div>
            <div className="row">
                {/* {
                    edges.map(({ node }) => (
                        <Service key={node.id} content={node} />
                    ))
                } */}
            </div>
        </div>
      </section>
    )
}




export default Services