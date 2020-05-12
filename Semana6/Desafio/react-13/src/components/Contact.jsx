import React from 'react';

import data from "../data/data.json";

class Contact extends React.Component {
  
  render() {
    
    return (
      <div>    
          <article className="contact" data-testid="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
          </article>  

          {data.map(contact => {              
            const admissionDate = new Date(contact.admissionDate).toLocaleDateString('pt-BR');
            return (                  
              <article className="contact" key={contact.id}>
                <span className="contact__avatar"> <img src={contact.avatar} alt="Avatar" /> </span>
                <span className="contact__data">{contact.name}</span>
                <span className="contact__data">{contact.phone}</span>
                <span className="contact__data">{contact.contry}</span>
                <span className="contact__data">{admissionDate}</span>
                <span className="contact__data">{contact.company}</span>
                <span className="contact__data">{contact.department}</span>
              </article>
            );
          })}  
      </div>
     );
  }
}

export default Contact;
