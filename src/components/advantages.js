import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Advantage from "../components/advantage";

const Advantages = () => {
    const { allContentfulAdvantages } = useStaticQuery(
        graphql`
            query {
                allContentfulAdvantages(
                sort: {fields: sort, order: ASC}
                filter: {node_locale: {eq: "ru-RU"}}
              ) {
                nodes {
                  id,
                  sort
                  title {
                    title
                  }
                  icon {
                    file {
                      url
                    }
                  }
                }
              }
            }
        `
    )


    return(
        <div className="advantages" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    {
                        allContentfulAdvantages.nodes.map((node) => (
                            <Advantage key={node.id} content={node} />
                        ))
                    }
                </div>
            </div> 
        </div>
    );
}

export default Advantages