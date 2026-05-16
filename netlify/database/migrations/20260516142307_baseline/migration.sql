CREATE TABLE "posts" (
  "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "content" text NOT NULL DEFAULT ''
);
