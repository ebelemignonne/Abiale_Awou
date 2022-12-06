import React from "react";
import "./Modification.css";
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Icon } from '@iconify/react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";


function Modification (){
    return(
        <div className="contenaire_modification">
            <div className="head_modification d-flex  justify-content-between">
                <Link to="/Menu"><Icon icon="material-symbols:menu-rounded" color="white" width="40" height="40" /></Link>
                <Link to="/Naissance"><Icon icon="game-icons:return-arrow" color="white" width="40" height="40" hFlip={true} vFlip={true} /></Link>
            </div>
            <div className="inf_modification flex-row align-items-center justify-content-center d-flex ">
              <Icon className="m-2 ms-5" icon="mdi:application-edit" color="#0496ff" width="150
              " height="150" />
              <Information />
            </div>
            <div className="mon_bb pt-1 ">
                <h2 className="fs-3 col_modification ms-4  ">modification d'acte de naissance</h2>
            </div>
            <div className="cont_modification d-flex">
                <Formulairs />

            </div>
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
    <div ref={ref} className='mt-5'>
      <div className="d-grid gap-2 d-md-block">
      <Button className="btn btn-primary " onClick={handleClick}><Icon icon="icon-park-outline:attention" color="white" width="40" height="40" /></Button>
      </div>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Ne faite pas comme lui</Popover.Header>
          <Popover.Body>
          Partant en mission pour quelques mois, MOUKOKO prend soin de laisser à sa copine enceinte, tous les papiers nécessaires afin de reconnaitre son enfant à naitre. A son retour il découvre que son fils ne porte pas son nom 😯! La famille a exigé que le bébé porte le nom du grand-père maternel. Fou de rage 😤, MOUKOKO prend carrément le blanco, efface le nom qui figure sur l’acte de naissance et écrit le sien ! 😅 Depuis lors, que ce soit pour l’école, la CNAMGS, l'acte de naissance de l'enfant est refusé ! Que doit faire MOUKOKO ?
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function Formulairs() {
    return (
        <Form className="form_modification_group flex-column d-flex">
      <Accordion className="Form_modification mt-2" defaultActiveKey="">
        <Accordion.Item className="border border-5 mb-1" eventKey="0">
          <Accordion.Header >Ville et arrondissement <Icon className="fs-4 col ms-1" icon="mdi:town-hall" color="#006BA6" width="40" height="40" /></Accordion.Header>
          <Accordion.Body >
          <Ville />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="border border-5 mb-1" eventKey="1">
          <Accordion.Header>Informations de L'enfant <Icon className="fs-4 col me-1" icon="ph:baby-fill" color="#006BA6" width="40" height="40" /></Accordion.Header>
          <Accordion.Body>
          <Formulair />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="border border-5" eventKey="2">
          <Accordion.Header>Informations du pere <Icon className="fs-4 col ms-4" icon="mdi:father" color="#006BA6" width="40" height="40" /></Accordion.Header>
          <Accordion.Body>
            <Pere />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="border border-5" eventKey="3">
          <Accordion.Header>Informations de la mere <Icon className="fs-4 col ms-2" icon="mdi:mom" color="#006BA6" width="40" height="40" /></Accordion.Header>
          <Accordion.Body>
            <Mere />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h2 class="badge h2_modification text-wrap fs-3" >Verifier toutes vos informations avant d'envoyer le formulair.</h2>
      <Link to="/Envoyer" className="button p-3 is-info text-white text-decoration-none" variant="primary" type="submit">
          Envoyer <Icon className="ms-2" icon="grommet-icons:validate" color="white" width="40" height="40" />
        </Link>
      </Form>
    );
  }




  function Ville() {
    return (
      <Form className="">
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
        <Form.Select aria-label="Default select example">
            <option>Choisissez l'arrondissement</option>
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
        </Form.Select>
        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    );
  }

  function Formulair() {
    return (
      <Form>
        <Row className="rien">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Control type="text" placeholder="Nom du bebe" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Control type="text" placeholder="Prenom du bebe" />
        </Form.Group>
        </Row>
        <fieldset>
        <Row className="rien">
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
      <Form.Group className="rien" controlId="formGridDate">
        <Form.Label>Date de naissance</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridCity">
        <Form.Control type="text" placeholder="Lieu de naissance" />
      </Form.Group>
      <Row className="rien">
        <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Heure</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
      </Row>
      <Form.Group className="rien" controlId="formGridAddress2">
        <Form.Label>Attestation de naissance</Form.Label>
        <Form.Control type="file" accept="image" placeholder="Apartment, studio, or floor" />
      </Form.Group>
        <Button variant="primary" type="submit">
          Enregister
        </Button>
      </Form>
    );
  }



  function Pere() {
    return (
      <Form>
        <Row className="rien">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Control type="text" placeholder="Nom du pere" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Control type="text" placeholder="Prenom" />
        </Form.Group>
      </Row>
      <Form.Group className="rien" controlId="formGridProfession">
        <Form.Control type="text" placeholder="Profession" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridNationalité">
        <Form.Control type="text" placeholder="Nationalité" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridAddress2">
        <Form.Label>Carte de séjour uniquement pour les étranger</Form.Label>
        <Form.Control type="file" accept="image" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridAddress2">
        <Form.Label>Copie d'acte de naissance du pere</Form.Label>
        <Form.Control type="file" accept="image" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridAddress2">
        <Form.Label>Reconnaissance de paternité</Form.Label>
        <Form.Control type="file" accept="image" placeholder="Apartment, studio, or floor" />
      </Form.Group>
        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    );
  }


  function Mere() {
    return (
        <Form>
        <Row className="rien">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Control type="text" placeholder="Nom de la mere" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>
      </Row>
      <Form.Group className="rien" controlId="formGridProfession">
        <Form.Control type="text" placeholder="Profession" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridNationalité">
        <Form.Control type="text" placeholder="Nationalité" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridAddress2">
        <Form.Label>Carte de séjour uniquement pour les étranger</Form.Label>
        <Form.Control type="file" accept="image" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group className="rien" controlId="formGridAddress2">
        <Form.Label>Copie d'acte de la </Form.Label>
        <Form.Control type="file" accept="image" placeholder="Apartment, studio, or floor" />
      </Form.Group>
        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    );
  }


export default Modification;