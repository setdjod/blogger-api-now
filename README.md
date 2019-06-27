# Blogger API Zeit Now

Based from [blogger-api](https://github.com/setdjod/blogger-api)

## Table of Contents

- [Setup](#setup)
- [Running localy](#run-localy)
- [Get All Label](#all-label)
- [Get Spesific Label](#spesific-label)
- [Get All Pages](#all-pages)
- [Get Spesific Pages](#spesific-pages)
- [Get All Posts](#all-posts)
- [Get Spesific Posts](#spesific-posts)

## Setup

```bash
npm install
```

## Run Localy

```bash
npm run dev
```

## Now Environment Variables and Secrets

```bash
# Default or you can change it
now -e NODE_ENV="development"
now -e API_URL="https://www.blogger.com/feeds"
now -e BLOG_ID="6732289991114793651"
```

## All Label

- Production: <https://blogger-api.now.sh/label>

| Query         | Type             | Default | Description |
| ------------- |:----------------:| :------:| - |
| blog_id       | number           | -       | - |
| order         | enum (asc, desc) | asc     | - |
| limit         | number           | 5       | - |
| pages         | number           | 1       | - |

## Spesific Label

- Production: <https://blogger-api.now.sh/label/:id>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blog_id       | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## All Pages

- Production: <https://blogger-api.now.sh/pages>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blog_id       | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## Spesific Pages

- Production: <https://blogger-api.now.sh/pages/:id>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blog_id       | number                    | -         | - |
| isjson        | boolean                   | false     | - |

## All Posts

- Production: <https://blogger-api.now.sh/posts>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blog_id       | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## Spesific Posts

- Production: <https://blogger-api.now.sh/posts/:id>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blog_id       | number                    | -         | - |
| isjson        | boolean                   | false     | - |
