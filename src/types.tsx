export type Puppies = Puppy[];

export type Puppy = {
  slug?: string;
  image?: string | null;
  breed: string;
  name: string;
  birthDate: string;
  info?: string | null;
};

export type UpdateReq = {
  image?: string | null;
  breed?: string;
  name?: string;
  birthDate?: string;
  info?: string | null;
};
