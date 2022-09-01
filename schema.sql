DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS users;

CREATE TABLE accounts
(
  id                 SERIAL,
  userId             VARCHAR(255),
  type                VARCHAR(255),
  provider                VARCHAR(255),
  providerAccountId                VARCHAR(255),
  refresh_token                VARCHAR(255),
  access_token                VARCHAR(255),
  expiresAt                INTEGER,
  token_type                VARCHAR(255),
  scope                   VARCHAR(255),
  id_token                TEXT,
  sessionState                VARCHAR(255),
  created_at            TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE sessions
(
  id            SERIAL,
  userId        INTEGER NOT NULL,
  expires       TIMESTAMPTZ NOT NULL,
  session_token  VARCHAR(255) NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id             SERIAL,
  name           VARCHAR(255),
  email          VARCHAR(255),
  emailVerified  TIMESTAMPTZ,
  image          TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);