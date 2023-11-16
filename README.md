# Doctors Portal | Frontend

This is a nextjs project that I made to practice my frontend skills. Here, you can book an appointment with a doctor online. The UI design is taken from a figma file [found in a GitHub repo](https://github.com/ProgrammingHero1/doctors-portal-resources). Here's the live site of the project:

[https://gs-doctors-portal-frontend.vercel.app/](https://gs-doctors-portal-frontend.vercel.app/)

My goal was to create a website which would have an authentication system, a dashboard, and a payment system. Currently it has the following features:

- You can register/login as a user
- You can book appointments
- You can manage the users and doctors as an admin

## Technologies

I used the following technologies in this project:

- next.js
- typescript
- react-redux
- shadcn
- tailwindcss

## Lessons Learned

There are a lot of things that I figured out such as:

- I can write `weight: "variable"` instead of specifying each and every weight of a font in `layout.tsx`.
- The `theme.container` object in `tailwind.config.ts` creates a `container` class, which is very helpful to make the pages responsive.
- If there's a component that requires full height in normal screen but a max-height in larger screens, these classes can handle it: `h-screen min-[1440px]:max-h-[810px]`.
- I can swap the position of two sibling components using `flex-direction: row-reverse;` css property.

## Achievements

- Created my own hamburger menu component
- Learned how animation works in css
