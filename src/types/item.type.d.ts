export type Item = {
  readonly id: number;

  title: string;

  description: string;

  user_id?: string | null;

  finished: boolean;

  readonly createdAt?: Date;

  readonly updatedAt?: Date;
}
