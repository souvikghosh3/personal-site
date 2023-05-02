import { graphql, PageProps } from "gatsby";
import React from 'react'
import Layout from '../../components/Layout'

export default function Resume({ data }: PageProps<Queries.ResumeQuery>) {
  return (
    <Layout>
        <section>
            <h2>Experience</h2>
            {data.allJobsYaml.nodes.map((job) => (
                <div key={job.id}>
                    <div>
                        <h3>
                            <a 
                                href={job.link || undefined}
                                target="_blank"
                                rel="noreferrer"
                                >
                                {job.name}</a>, {job.title} {}
                            <span>
                                - {job.location}
                            </span>
                        </h3>
                        <div>
                            <span>{job.start_date}</span> - {}
                            <span>{job.end_date}</span>
                        </div>
                    </div>
                    <ul>
                        {job.details?.map((detail) => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
           
        </section>
        
        <section>
            <h2>EDUCATION</h2>

        </section>

        <section>
            <h2>SKILLS</h2>

            <h3>Languages</h3>
                {data.resumeYaml?.languages?.map((language) => (
                    <li key={language}>{language}</li>
                ))}                
            <h3>Frameworks</h3>
                {data.resumeYaml?.frameworks?.map((framework) => (
                    <li key={framework}>{framework}</li>
                ))} 
            <h3>Certifications</h3>
                {data.resumeYaml?.certifications?.map((certification) => (
                    <li key={certification}>{certification}</li>
                ))} 

            
        </section>
    </Layout>
    
  )
}

export const query = graphql`
  query Resume {
    allJobsYaml {
      nodes {
        id
        name
        link
        title
        location
        start_date
        end_date
        details
      }
    }
    resumeYaml {
      languages
      frameworks
      certifications
    }
  }
`;