 import User from './User'

 function Tableau({titre}){
    const utilisateurs = [
    {nom:"BADIANE", prenom : "Assia" },{nom:"SY", prenom : "Sokhna Aishatou" },
  ]
    return(
    <div>    
    <h1>Tableau {titre}</h1>
    {
        //.map permet de parcourir les elements
        utilisateurs.map(({nom,prenom},index) => (<User key={index} nom={nom}  prenom={prenom} />))
    }
    <User nom={"Niang"} prenom={"Fatou Befa"}/>
    </div>
)
}
export default Tableau;