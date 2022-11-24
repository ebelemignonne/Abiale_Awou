import React from "react";
import "./Deces.css";
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mairie from "../../images/Mairie.png"



const Deces =()=>{
    return(
        <div className="contenaire_deces">
            <HeaderDeces />
            <ContenuDeces /> 
        </div>
    )
}

function HeaderDeces (){
    return(
        <div className="header_deces d-flex flex-column">
            <div className="head_deces d-flex flex-row justify-content-between ">
                <Link to="/Menu"><Icon icon="ic:round-menu" className="ms-4 mt-3" color="white" width="40" height="40" /></Link>
                <Link to="/Accueil"><Icon icon="game-icons:return-arrow" className="me-4 mt-3" color="white" width="40" height="40" /></Link>
            </div>
            <div className="image_deces d-flex flex-column align-items-center justify-content-center ">
                <TextAnnime1 />
                  <img src={mairie} height="80" width="80" className="deces_img" alt="imag" />
                <TextAnnime />
            </div>
            <div className="titre_deces d-flex align-items-center text-white fs-1 justify-content-center">Declaration d'un déces</div>
        </div>
    )
}

function Information() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    
    return (
        <div ref={ref} className='m-4 d-flex'>
        <div className=" d-md-block">
        <Button className="btn btn-info " onClick={handleClick}><Icon icon="icon-park-outline:attention" color="white" width="40" height="40" /></Button>
        </div>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Tous les champs sont obligatoir</Popover.Header>
            <Popover.Body>
              Importez <strong>tous les documents</strong> demandé dans le formulair pour que votre demande soit prise en compte
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    );
}

function ContenuDeces () {
    return(
        <div className="contenu_deces d-flex align-items-center flex-column">
            <Information />
            <Formulairs />           
        </div>
    )
}

// Text annime
const TextAnnime = ()=>{


    return(
        <div className="taxt_deces fs-1 text-white">
            <div className="text_intro">
                <div className="text_anim ms-2 text-warning">
                    <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings:[
                        "la mort",
                        "est un passage",
                        "obigatoir a tous le monde ",
                    ],
                    }} />
                </div>
            </div>
        </div>
    )
}

const TextAnnime1 = ()=>{
    return(
        <div className="taxt_deces fs-1 text-white">
            <div className="text_intro">
                <div className="text_anim ms-2 text-info">
                    <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 800,
                    strings:[
                        "ETABLISSEMENT",
                        "D'ACTE",
                        "DE DECES",
                    ],
                    }} />
                </div>
            </div>
        </div>
    )
}




function Formulairs() {
  return (
    <Accordion className="form_deces" defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="d-flex border border-5 mb-2">Ville<Icon className="d-flex icon_ville" icon="game-icons:deadly-strike" color="#6d6875" width="40" height="40" hFlip={true} /></Accordion.Header>
        <Accordion.Body>
          <Ville1 />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>informations du defunt<Icon className="ms-5" icon="emojione-monotone:mens-room" color="#6d6875" width="40" height="40" /></Accordion.Header>
        <Accordion.Body>
          <Defunt />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}











// // paramettre declation de deces

function Ville1() {
  return (
    <Form.Select aria-label="Default select example">
<option>Choisissez le nom d'une ville</option>
            <option value="1">Libreville</option>
            <option value="2">Port-Gentil</option>
            <option value="3">Franceville</option>
            <option value="4">Oyem</option>
            <option value="5">Moanda</option>
            <option value="6">Mouila</option>
            <option value="7">Lambaréné</option>
            <option value="8">Tchibanga</option>
            <option value="9">Koulamoutou</option>
            <option value="10">Makokou</option>
            <option value="11">Bitam</option>
            <option value="12">Tsogni</option>
            <option value="13">Gamba</option>
            <option value="14">Mounana</option>
            <option value="15">Ntoum</option>
            <option value="16">Nkan</option>
            <option value="17">Lastourville</option>
            <option value="18">Okondja</option>
            <option value="19">Ndendé</option>
            <option value="20">Booué</option>
            <option value="21">Fougamou</option>
            <option value="22">Ndjolé</option>
            <option value="23">Mbigou</option>
            <option value="24">Mayumba</option>
            <option value="25">Mitzic</option>
            <option value="26">Mékambo</option>
            <option value="27">Lékoni</option>
            <option value="28">Mimongo</option>
            <option value="29">Minvoul</option>
            <option value="30">Medouneu</option>
            <option value="31">Omboué</option>
            <option value="32">Cocobeach</option>
            <option value="33">Kango</option>
    </Form.Select>
  );
}

function Defunt() {
  return (
    <Form>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Control type="text" placeholder="Nom" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Control type="text" placeholder="Prenom" />
    </Form.Group>
    </Row>
    <fieldset>
    <Row className="mb-3">
    <legend>sexe</legend>
    <Form.Group className="d-flex" as={Col} controlId="formGridCheckbox">
      <Form.Label for="max">Masculin</Form.Label>
      <Form.Check className="ms-3" id="max" value='homme' name="homme" type="checkbox" />
    </Form.Group>
    <Form.Group className="d-flex" as={Col} controlId="formGridFirstName">
      <Form.Label for="fem">Feminin</Form.Label>
      <Form.Check className="ms-3" id="fem" value='femme' name="femme" type="checkbox"/>
    </Form.Group>
    </Row>
    </fieldset>
<Form>
</Form>
  <Form.Group className="mb-3" controlId="formGridDate">
    <Form.Label>Date de naissance</Form.Label>
    <Form.Control type="date" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridCity">
    <Form.Control type="text" placeholder="Lieu de naissance" />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridTime">
      <Form.Label>Heure</Form.Label>
      <Form.Control type="time" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Attestation de naissance</Form.Label>
    <Form.Control type="file" accept="image" placeholder="Apartment, studio, or floor" />
  </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
}




export default Deces;