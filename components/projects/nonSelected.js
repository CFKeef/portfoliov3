import React from "react";
import styled from "styled-components";
import styles from "../../styles/Nonselected.module.scss";
const SectionContainer = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

const PositionContainer = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1100px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`;

const ProjectContainer = styled.ul`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	list-style-type: none;
	@media (min-width: 30em) {
		flex-direction: row;
		flex-wrap: wrap;
		margin: 2rem 0;
	}
	@media (max-width: 30em) {
		flex-direction: column;
	}

	padding: 0;
`;

const NonSelected = ({ items }) => {
	const findImageForProject = (id) => {
		let temp = items.images.filter((element) => element.sys.id === id);
		return temp[0].fields.file.url;
	};
	const generateProjectCards = () => {
		return (
			<ProjectContainer>
				{items.items.map((element, index) => {
					return (
						<li
							className={styles.projectCard}
							key={"project" + index + element}
						>
							<h1>{element.fields.projectName}</h1>
							<p>{element.fields.desc}</p>
							<h4>Tech Used</h4>
							<ul>
								{element.fields.techUsed.map(
									(tech, selfIndex) => {
										return (
											<li
												key={
													element.fields.projectName +
													"tech" +
													selfIndex
												}
											>
												<p>{tech}</p>
											</li>
										);
									}
								)}
							</ul>
							<div className={styles.buttonContainer}>
								{element.fields.githubLink ? (
									<a
										draggable={false}
										href={element.fields.githubLink}
										className={"button" + index + " button"}
									>
										Github
									</a>
								) : null}
								{element.fields.deployedLink ? (
									<a
										draggable={false}
										href={element.fields.deployedLink}
										className={"button" + index + " button"}
									>
										Visit
									</a>
								) : null}
							</div>
						</li>
					);
				})}
			</ProjectContainer>
		);
	};
	return (
		<SectionContainer>
			<PositionContainer>
				<h1
					style={{ textAlign: "left", margin: "2REM 1rem 1rem 1rem" }}
				>
					More Projects
				</h1>
				{generateProjectCards()}
			</PositionContainer>
		</SectionContainer>
	);
};

export default NonSelected;
