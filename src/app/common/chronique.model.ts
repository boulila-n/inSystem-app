export interface Chronique {
    code_station: string;
    libelle_station: string;
    uri_station: string;
    longitude: Date
    latitude: Date
    code_commune: string;
    libelle_commune: string;
    code_cours_eau: string;
    libelle_cours_eau: string;
    uri_cours_eau: string;
    code_parametre: string;
    libelle_parametre: string;
    date_mesure_temp: Date;
    heure_mesure_temp: string;
    resultat: number;
    code_unite: string;
    symbole_unite: string;
    code_qualification: string;
    libelle_qualification: string
}
