import React from "react";
import styles from "../css/home.module.css";
import { Link } from "react-router-dom";

function Home() {
	document.title = "Quizzer";
	return (
		<div>
			<div className="mask"></div>
			<div className={styles.container}>
				<div className={styles.main}>
					<div className="center">
						<h1
							style={{
								fontSize: "5rem",
								color: "#c9e4b5",
								marginBottom: "5px",
							}}
						>
							{" "}
							Quizzer{" "}
						</h1>
						<em style={{ color: "white" }}>
							Create fun quizzes and share with friends
						</em>
						<Link to="/createquiz">
							<button className={styles.btnCreate}>
								CREATE QUIZ
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
