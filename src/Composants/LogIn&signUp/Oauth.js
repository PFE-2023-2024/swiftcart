import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Oauth() {
    const location = useLocation();
    const navigate = useNavigate(); // Corrigé : Utilisez navigate comme une fonction

    useEffect(() => {
        // Ici, vous extrayez le token directement dans l'effet pour assurer
        // qu'il s'agit de la dernière valeur à chaque rendu.
        const queryString = location.search;
        const queryParams = new URLSearchParams(queryString);
        const token = queryParams.get('token');

        console.log(token);

        if (!token) {
            // Redirige vers la page de connexion si le token n'est pas présent
            navigate('/Swiftcart/logIn');
        } else {
            // Sauvegarde le token dans localStorage et redirige
            localStorage.setItem("token", token);
            navigate('/Swiftcart');
        }
    }, [location, navigate]); // Ajoutez location et navigate comme dépendances de l'effet

    return null; // Renvoie null puisque ce composant ne doit rien afficher par lui-même
}

export default Oauth;
