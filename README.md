## Libraries & frameworks used
I set up the project using the default SvelteKit setup with TypeScript, Svelte, Tailwind, Vitest, Playwright, and Prettier. I also added `@lucide/svelte` to use some icons, and `remeda` to handle sorting in the list.

## Steps to run
Install all dependencies with `npm install` (or `pnpm install` or `yarn`)

Start a development server: `npm run dev`.

To create a production version of your app: `npm run build`.

You can preview the production build with `npm run preview`.


## What areas of the web app did you focus on?
I focused on delivering a good experience using the mobile-first concept and automating tests according to the goals described in the document. I also added some extra features, such as sorting and dark mode. To make it easy to preview the project, I deployed it to a CDN (Vercel) and configured the DNS to point to the domain, completing the full front-end development cycle.

## What was the reason for your focus? What problems were you trying to solve?
Using a mobile-first approach, I tried to avoid creating layouts that would look bad on other devices. I aimed to highlight the most important information. With the automatic tests, I made sure everything that was requested was working correctly.

## How long did you spend on this project?
I used the tool Toggl to track the time spent on the project. Excluding the README, I spent a total of 3 hours and 44 minutes.

## Did you make any trade-offs for this project? What would you have done differently with more time?
Yes. I'm not very familiar with Svelte, I chose to do things in the simplest way possible, using the SvelteKit way. I also avoided using extra dependencies.
If I had more time, I would probably use TanStack Query (which I usually work with in React) to handle the requests, and I would try to improve the list rendering performance, as there's a small flicker when the list updates.

## What do you think is the weakest part of your project?
The use of Svelte, I think that was the hardest part of the project (for me, I don't know to much of Svelte yet). Besides that, the small flicker on the screen when updating the list was also a problem.

## Is there any other information you’d like us to know?
I took a chance on a technology I'm far from mastering, but I loved it. Svelte has some amazing features, and thanks to this challenge, I'll definitely look at it with more appreciation and a sparkle in my eyes.
