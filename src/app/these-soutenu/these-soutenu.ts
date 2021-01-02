export class TheseSoutenu {
  public id: number;
  public titre: string;
  public date: Date;
  public axe_recherch: string;
  public responsable: string;

  constructor(id?, titre?, date?, axe_recherch?, responsable?) {
    this.id = id;
    this.titre = titre;
    this.date = date;
    this.axe_recherch = axe_recherch;
    this.responsable = responsable;
  }
}
