import React from "react";
import styles from "../../styles/Selected.module.scss";

const SelectedProjects = ({ items }) => {
	const generateCards = () => {
		const data = items.items;
		const images = items.images;

		const getImage = (id) => {
			const res = images.find((image) => image.sys.id === id);
			return res.fields.file.url;
		};

		return (
			<ul>
				{data.map((element, index) => {
					return (
						<li
							key={element.sys.id}
							className={styles.selectedProject}
						>
							<div className={styles.imgContainer}>
								<img
									src={getImage(element.fields.image.sys.id)}
									draggable={false}
								/>
							</div>
							<div className={styles.description}>
								<div className={styles.infoContainer}>
									<h2>{element.fields.projectName}</h2>
									<p>{element.fields.desc}</p>
								</div>
								<div className={styles.techContainer}>
									<h4>Technology Used:</h4>
									<ul>
										{element.fields.techUsed.map(
											(tech, selfIndex) => {
												return (
													<li
														key={
															element.fields
																.projectName +
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
								</div>

								<div className={styles.buttonContainer}>
									{element.fields.githubLink ? (
										<a
											draggable={false}
											href={element.fields.githubLink}
											className={
												"button" + index + " button"
											}
										>
											Github
										</a>
									) : null}
									{element.fields.deployedLink ? (
										<a
											draggable={false}
											href={element.fields.deployedLink}
											className={
												"button" + index + " button"
											}
										>
											Visit
										</a>
									) : null}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		);
	};
	return (
		<div className={styles.selectedContainer}>
			<h1>Selected Projects</h1>
			<div>{generateCards()}</div>
		</div>
	);
};

export default SelectedProjects;
