import { graphql, PageProps } from "gatsby";
import React from 'react'

import Layout from '../../components/Layout'
import * as styles from './index.module.css';

/* Utilizes https://gatsby.dev/gatsby-head. */
export const Head = () => (
  <>
    <title>Souvik Ghosh - Resume</title>
    <meta
			name="description"
			content="Resume outlining Souvik's work experience,
							 education, and skills." />
  </>
);

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

export default function Resume({ data }: PageProps<Queries.ResumeQuery>) {
  return (
  	<Layout>
    	<section className={styles.section}>
        <h2>EXPERIENCE</h2>
        {data.allJobsYaml.nodes.map((job) => (
        	<div key={job.id}>
						<h3 className={styles.header}>
							<a 
									href={job.link || undefined}
									target="_blank"
									rel="noreferrer"
									>
									{job.name}
							</a>, {job.title} - {}
							<span className={styles.location}>{job.location}</span>
						</h3>
						<div className={styles.dates}>
							<span>{job.start_date}</span> - {}
							<span>{job.end_date}</span>
						</div>
						<ul>
							{job.details?.map((detail) => (
									<li key={detail}>{detail}</li>
							))}
						</ul>
					</div>
				))}
			</section>
        
			<section className={styles.section}>
				<h2>EDUCATION</h2>
				<div>
					<h3 className={styles.header}>
						<a 
								href="https://www.umd.edu/"
								target="_blank"
								rel="noreferrer"
								>
								University of Maryland
						</a>, B.S. Computer Engineering - {}
						<span className={styles.location}>College Park, MD</span>
					</h3>
					<div className={styles.dates}>
						<span>AUG 2013</span> - {}
						<span>MAY 2017</span>
					</div>
					<ul>
						<li>GPA: 3.87</li>
						<li>Honors College</li>
					</ul>
				</div>
			</section>

			<section className={styles.section}>
				<h2>SKILLS</h2>
				<h3>Languages</h3>
					{data.resumeYaml?.languages?.join(", ")}                
				<h3>Frameworks</h3>
					{data.resumeYaml?.frameworks?.join(", ")} 
				<h3>Certifications</h3>
					{data.resumeYaml?.certifications?.join(", ")} 
			</section>
    </Layout>
  );
}
