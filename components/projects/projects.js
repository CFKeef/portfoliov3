import React from "react";
import styles from "../../styles/Projects.module.scss";
import NonSelected from "./nonSelected";
import SelectedProjects from "./selected";

const Projects = ({ data }) => {
	// Returns the images each component needs
	const getImages = (filteredData) => {
		const selectedImages = data.includes.Asset.filter((asset) => {
			const searchResult = filteredData.filter(
				(item) => item.fields.image.sys.id === asset.sys.id
			);
			return searchResult.length > 0;
		});
		return selectedImages;
	};
	// Will process the data in the format the components need
	const processData = (filter) => {
		let filteredData;

		if (filter)
			filteredData = data.items.filter(
				(item) => item.fields.selected === true
			);
		else
			filteredData = data.items.filter(
				(item) => item.fields.selected !== true
			);

		return { items: filteredData, images: getImages(filteredData) };
	};

	return (
		<section className={styles.projectsContainer}>
			<div className={styles.posContainer}>
				<SelectedProjects items={processData(true)} />
				<NonSelected items={processData(false)} />
			</div>
		</section>
	);
};

export default Projects;
