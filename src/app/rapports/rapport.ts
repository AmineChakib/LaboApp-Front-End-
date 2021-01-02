export class Rapport {
  public id: number;
  public titre: string;
  public path: string;
  public file: File;
}

export class RapportProf {
  public autheur: string;
  public titre: string;
  public sousautheur: string;
  public fonctionsa: string;
  public descritpion: string;
  public volume: number;
  public issue: number;
  public date: number;
  public numero: number;
  public page: number;
  public file: File;
  constructor(autheur?, titre?, sousautheur?, fonctionsa?, description?, volume?, issue?, date?, numero?, page?, file?) {
    this.autheur = autheur;
    this.titre = titre;
    this.sousautheur = sousautheur;
    this.fonctionsa = fonctionsa;
    this.descritpion = description;
    this.volume = volume;
    this.issue = issue;
    this.date = date;
    this.numero = numero;
    this.page = page;
    this.file = file;

  }
}
