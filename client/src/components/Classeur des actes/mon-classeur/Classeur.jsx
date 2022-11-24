import React, { useState, useEffect } from "react";
import "./Classeur.css";
import { Icon } from '@iconify/react';
import Accordion from 'react-bootstrap/Accordion';
// import bebe from '../../../images/bebe.png';
import { Link } from "react-router-dom";
import axios from 'axios';






const naissances = axios.create({
	baseURL: 'http://localhost:3500/api/getAll/naissance',

});



const PhotosNaissance = () => {
	const [posts, setPosts] = useState([]);

	// GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await naissances.get('?_limit=10');
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);

	return (
		<div className="naissance d-flex flex-column align-items-center justify-content-evenly ">
			<div className=" form-control mt-2  d-flex flex-column align-items-center justify-content-center">
				<h2 className='text-center form-control'>MES ACTES DE NAISSANCE ENREGISTERER</h2>
				{posts.map((post) => {
					return (
						<div className="form-control post-card d-flex flex-column align-items-center" key={post.id}>
							<h2 className="post-nom form-control">{post.nom}</h2>
               <div className=''>{post.image}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};




function AllCollapseExample() {
    return (
      <Accordion className="accordion_classeur mx-auto">
        <Accordion.Item className="naissance" eventKey="0">
          <Accordion.Header className="border border-4" > <p className="fs-4 col ">Actes de naissance</p>  <Icon className="fs-1 me-5" icon="noto:person-feeding-baby-medium-dark-skin-tone" /></Accordion.Header>
          <Accordion.Body>

            <PhotosNaissance />

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="border border-4 mt-2"> <p className="fs-4 col"> Actes de décès</p><Icon className="col-deces fs-1 me-5" icon="mdi:coffin" /></Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  







const Classeur =()=>{
    return(
        <div className="contenaire_classeur">
            <div className="head_clsseur">
                <div className="menu_classeur">
                <Link to="/Menu"><Icon className="ms-4" icon="material-symbols:menu-rounded" /></Link>
                <Link to="/Accueil"><Icon className="me-4" icon="game-icons:return-arrow" /></Link>
                </div>
                <div className="text_classeur">
                    <h2 className="fs-2 ms-4">Mon classeur de <br /> document</h2>
                    <Icon className="fs-classeur me-4" icon="wpf:books" />
                </div>

            </div>
            <AllCollapseExample />
        </div>
    )
}

export default Classeur