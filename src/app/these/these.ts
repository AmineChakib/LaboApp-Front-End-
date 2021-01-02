export class These {
  public id: number;
  public titre: string;
  public axe_recherch: string;
  public responsable: string;

  constructor(id?, titre?, axe_recherch?, responsable?) {
    this.id = id;
    this.titre = titre;
    this.axe_recherch = axe_recherch;
    this.responsable = responsable;
  }
}
