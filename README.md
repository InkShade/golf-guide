# Golf Guide

This project is a Next.js application designed to provide a comprehensive swing improvement solution for golfers. It includes features such as:

- A homepage that displays different goals based on URL query parameters.
- A `CoachingSection` component with a video player that includes timestamps for various drills, a progress bar, and collapsible sections that update based on the video's current timestamp.
- An analytics service that tracks events like page views and video completions, logging them to `analytics.log`.

## Getting Started

First, install npm packages:

```bash
npm install
```

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

To build and run the project using Docker, follow these steps:

1. Build the Docker images:
    ```bash
    docker-compose build
    ```

2. Run the Docker containers:
    ```bash
    docker-compose up
    ```

The application will be available at [http://localhost:3000](http://localhost:3000) and the analytics service at [http://localhost:4000](http://localhost:4000).

## URL Queries

You can change the goal displayed on the homepage by adding a query parameter to the URL. For example:

- `http://localhost:3000?goal=break%2080`
- `http://localhost:3000?goal=break%2090`

Valid goals are: "break par", "break 80", "break 90", "break 100".

## Video Scrolling and Collapsible Components

The `CoachingSection` component includes a video player with timestamps for different drills. The progress bar and collapsible sections update based on the video's current timestamp.

## Analytics

The project includes an analytics service that tracks events such as page views and video completions. Events are logged to `analytics.log`.

To access the `analytics.log` file when running the project using Docker, use the following commands:

1. Find the container ID or name:
    ```bash
    docker ps
    ```

2. Access the container's shell:
    ```bash
    docker exec -it <container_id_or_name> bash
    ```

3. View the `analytics.log` file:
    ```bash
    cat analytics.log
    ```


