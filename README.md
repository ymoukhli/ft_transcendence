# ft_transcendence

Note: each env file will need a copy of an environment variable if required.

## Env variables for app [.env.app.*]

| Name                | Required | Type     | Default value               | Scope    | Description                                                          |
| ------------------- | -------- | -------- | --------------------------- | -------- | -------------------------------------------------------------------- |
| `POSTGRES_USER`     | true     | `string` | -                           | pg       | Used to connect to the database service from pg                      |
| `POSTGRES_PASSWORD` | true     | `string` | -                           | pg       | Used to connect to the database service from pg                      |
| `POSTGRES_DB`       | true     | `string` | -                           | pg       | Used to connect to the database service from pg                      |
| `POSTGRES_HOST`     | true     | `string` | -                           | pg       | Used to connect to the database service from pg                      |
| `POSTGRES_PORT`     | true     | `number` | - 5432                      | pg       | Used to connect to the database service from pg                      |
| `DB_TYPE`           | true     | `string` | -                           | node app | Used to connect to the database service from pg                      |
| `NODE_ENV`          | true     | `string` | -                           | node app | used to inform the application about the node server mode (prod.dev) |
| `CLIENT_ID`         | true     | `string` | -                           | node app | Public identifier of 42 OAuth application                            |
| `CLIENT_SECRET`     | true     | `string` | -                           | node app | Application secret key know only by the application and auth server  |
| `CALLBACK_URL`      | true     | `string` | -                           | node app | URL to redirect to after a successful authentication                 |
| `CALLBACK_URL`      | true     | `string` | -                           | node app | URL to redirect to after a successful authentication                 |
| `SESSION_SECRET`    | true     | `string` | -redis://redis              | node app | Random generated key used to encrypt cookies                         |
| `APP_PORT`          | false    | `number` | - 4000                      | node app | Port that the app listens to                                         |

## Env variables for database [.env.db.*]

| Name                | Required | Type     | Default value | Description       |
| ------------------- | -------- | -------- | ------------- | ----------------- |
| `POSTGRES_USER`     | true     | `string` | -             | postgres username |
| `POSTGRES_PASSWORD` | true     | `string` | -             | postgres password |
| `POSTGRES_DB`       | true     | `string` | -             | postgres database |

## Documentation:

You can find the documentation for this api here [[Documentation]](http://localhost:4000/api)

## Getting Started

run the development server:

```bash
docker-compose up --build
```

## Git workflow

### Pull requests Naming:

```
[JIRA_PROJECT_IDENTIFIER-TICKET_NUMBER][FEAT/FIX/DOC/STYLE/REFACTOR] Jira Ticket title
- FEAT: (new feature)
- FIX: (bug fix)
- DOC: (changes to the documentation)
- STYLE: (formatting, missing semi colons, etc)
- REFACTOR: (refactoring code, eg. renaming a variable)

ft_transcendence jira identifier: TRAN

Example:
Pull request title: [TRAN-1][FEAT] Ticket title
```

### Branch Naming:

```
[CONTRIBUTORId]-[FEAT/FIX/DOC/STYLE/REFACTOR]-[JIRA_PROJECT_IDENTIFIER]-[TICKET_NUMBER]

Example:
branch name: AF-FEAT-TRAN-1
```

### Commit message naming:

```
[JIRA_PROJECT_IDENTIFIER-TICKET_NUMBER] commit message

Example:
commit message: [TRAN-1] Create X feature
```
