import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Forma.css"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


function Forma() {

     const { register, handleSubmit, formState: { errors } } = useForm()
     const onSubmit = data => console.log(data)
     console.log(errors);



      return (
        <div className="Form_payement text-white d-flex  align-items-center justify-content-center">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicNom">
                    <Form.Label>Nom</Form.Label>
                         <input className="input_legal input bg-primary is-rounded  " type="text"  placeholder="Nom" {...register("name", {required: true, maxLength: 80})} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicMontant">
                    <Form.Label>Montant</Form.Label>
                         <input className="input_legal input bg-primary is-rounded " type="number" placeholder="2000" {...register("Montant", {required: true, maxLength: 100})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                         <input className="input_legal input bg-primary is-rounded " type="password" placeholder="Mot de passe" {...register("password", {required: true, maxLength: 100})} />
                </Form.Group>
                <Link to="/Envoyer" className='button is-success' variant="primary" type="submit">
                    Evoyer
                </Link>
            </Form>
        </div>
      );
    }
    



    // function Reclamation (){
    //     const { register, handleSubmit, formState: { errors } } = useForm();
    //     const onSubmit = data => console.log(data);
    //     console.log(errors);
    
    
    //     return (
    //         <div className="contenaire_reclamation d-flex flex-column align-items-center justify-content-between ">
    //             <div className="block_head d-flex flex-column align-items-center ">
    //                 <div className="head_legalisation d-flex flex-row align-items-center justify-content-between">
    //                     <Link to="/Menu"><Icon className="icon_head cursor" icon="material-symbols:menu-rounded" color="white" /></Link>
    //                     <Link to="/Compte"><Icon className="icon_head  cursor" icon="carbon:user-avatar-filled-alt" color="white" /></Link>
    //                 </div>
    //                 <div className="header_legalisation d-flex align-items-center justify-content-center">
    //                     <Icon icon="carbon:request-quote" color="#0496FF" width="150" height="150" />
    //                 </div>
    //             </div>
    //             <div className="foot-reclamation d-flex align-items-center justify-content-center">
    //                 <form className=" form_legalisation d-flex flex-column align-items-center justify-content-between" onSubmit={handleSubmit(onSubmit)}>
    //                     <div className=" placeholder-glow text-white d-flex flex-column align-items-center justify-content-center">
    //                         <label htmlFor="">Telecharger la copie de l'acte a legaliser ici<Icon icon="mdi:cursor-pointer" color="white" width="30" height="30" rotate={2} /></label>
    //                         <input className="input placeholder text-white bg-primary" type="file" {...register("file", {required: true, maxLength: 80})} />
    //                     </div>
    
    //                     <div className="input_legal">
    //                         <input className="input_legal input bg-primary is-rounded  " type="text"  placeholder="Nom" {...register("First name", {required: true, maxLength: 80})} />
    //                     </div>
    
    //                     <div className="input_legal">
    //                         <input className="input_legal input bg-primary is-rounded " type="text" placeholder="Prenom" {...register("Last name", {required: true, maxLength: 100})} />
    //                     </div>
    
    //                     <div className="input_legal">
    //                         <input className="input_legal input bg-primary is-rounded " type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    //                     </div>
    
    //                     <div className="input_legal">
    //                         <input className="input_legal input bg-primary is-rounded " type="number" placeholder="Tel" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
    //                     </div>
    
    //                     <Link to="/Facture" className="button is-success" type="submit" >Envoyer</Link>
    //                 </form>
    
    //             </div>
    //         </div>
    //     )
    // }



export default Forma;






























