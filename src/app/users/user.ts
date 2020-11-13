export class User {
  public id: number;
  public username: string;
  public email: string;
  public nom: string;
  public prenom: string;
  public pwd: string;
  public fonction: string;

  constructor(id?, username?, email?, nom?, prenom?, pwd?, fonction?) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.pwd = pwd;
    this.fonction = fonction;

  }
}
