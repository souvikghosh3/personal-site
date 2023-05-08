import { graphql, PageProps } from "gatsby";
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from './index.module.css';

export default function Resume({ data }: PageProps<Queries.ResumeQuery>) {
  return (
    <Layout>
        <section>
            <h2>EXPERIENCE</h2>
            {data.allJobsYaml.nodes.map((job) => (
                <div key={job.id} className={styles.row}>
                    <div className={styles.jobLogoColumn}>
                        <h3>
                            <a 
                                href={job.link || undefined}
                                target="_blank"
                                rel="noreferrer"
                                >
                                {job.name}
                            </a>
                        </h3>
                        <div>
                            <span>{job.start_date}</span> - {}
                            <span>{job.end_date}</span>
                        </div>
                        <div className={styles.location}>{job.location}</div>
                    </div>
                    <div className={styles.jobDetailColumn}>
                        <h3>{job.title}</h3>
                        <ul>
                            {job.details?.map((detail) => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
        
        <section>
            <h2>EDUCATION</h2>
            <div className={styles.row}>
                <div className={styles.jobLogoColumn}>
                    <h3>
                        <a 
                            href="https://www.umd.edu/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            University of Maryland
                        </a>
                    </h3>
                    <div>
                        <span>AUG 2013</span> - {}
                        <span>MAY 2017</span>
                    </div>
                    <div className={styles.location}>College Park, MD</div>
                </div>
                <div className={styles.jobDetailColumn}>
                    <h3>B.S. Computer Engineering</h3>
                    <ul>
                        <li>GPA: 3.87</li>
                        <li>Honors College</li>
                    </ul>
                </div>
            </div>

        </section>

        <section>
            <h2>SKILLS</h2>

            <h3>Languages</h3>
                {data.resumeYaml?.languages?.join(", ")}                
            <h3>Frameworks</h3>
                {data.resumeYaml?.frameworks?.join(", ")} 
            <h3>Certifications</h3>
                {data.resumeYaml?.certifications?.join(", ")}

            
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