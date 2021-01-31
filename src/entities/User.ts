import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity("user")
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column("varchar")
  name: string;

  @Column("varchar")
  surname: string;

  @Column("varchar", { unique: true })
  email: string;

  @Column("varchar")
  image: string;

  @Column("varchar")
  phone: string;

  @Column("varchar")
  github: string;

  @Column("varchar")
  linkedin: string;

  @Column("varchar")
  behance: string;

  @Column("varchar")
  password: string;
}
