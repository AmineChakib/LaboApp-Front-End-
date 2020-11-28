export class User {
  public id: number;
  public username: string;
  public email: string;
  public nom: string;
  public prenom: string;
  public password: string;
  public repassword: string;
  public fonction: string;
  public isAdmin: boolean = false;
  public isSuperAdmin: boolean = false;

  constructor(id?, username?, email?, nom?, prenom?, pwd?, fonction?, repwd?, admin?, superAdmin?) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.password = pwd;
    this.fonction = fonction;
    this.repassword = repwd;
    this.isAdmin = admin;
    this.isSuperAdmin = superAdmin;
  }
}
