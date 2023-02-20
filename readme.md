# 20/02/2023 Update
I've been enjoying learning how to use Lit and working on this project. Unfortunately, I find that using a graph isn't much fun from a user's perspective. For now I am halting my direct focus on this particular repo in favor of planning out a better UX. I learned a lot from these developments, both technical and personal, and I'm looking forward to what the future holds.

## About

The keto food graph is a single page website built using Google's Lit framework. It takes an array of objects and dynamically generates an HTML table that can be filtered by 'group' property, or sorted by each table head to either ascending order (low-high), or descending order (high-low).

## Why use Lit?

Lit is a boiler plate framework for open web components which makes the codebase framework agnostic. This allows developers to create reusable, modular components that can be used across different projects and platforms because web components are built using standard web technologies such as HTML, CSS, and JavaScript, and they do not require any specific framework or library to function.

## How to view the site:

1. First, clone the repo.
2. Install the project dependencies with ```npm install```
3. Install Python onto your local machine.
4. Bundle it with ```npm run build```
5. Create a local http server environment with ```npm run web```
6. Navigate to, ```http://localhost:8000/``` within a browser.
