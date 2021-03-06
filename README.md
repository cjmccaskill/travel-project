# Travel Project

## Description

Following the provided UX/UI design mockup and user flow chart, this mobile-friendly website provides users with information about different travel agency options and the packages each has on offer.

### Project Links

- [Back end git](https://github.com/cjmccaskill/travel-project-api)
- [Heroku Deployment](https://git.heroku.com/act-travel-project-api.git)
- [Front end git](https://github.com/cjmccaskill/travel-project)
- [Vercel Deployment](https://travel-project-roan.vercel.app/)

### Wireframes and Architecture

- Case Study/Wireframes: -[Travel UX/UI Case Study](https://www.behance.net/gallery/113994573/Travel-UX-UI-Case-Study)
- React Architecture: -[Google Drawing](https://docs.google.com/drawings/d/109tQeno3x7RAncPOPWyMaAGegVcCYWDEcV__CNTLyWM/edit?usp=sharing)

### Time/Priority Matrix

| Component                        | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Build Repositories               |    H     |     15mins     |     .25 hrs      |     .25hrs     |
| Add dependencies, folders, files |    H     |     15mins     |      .25 hrs      |     .25 hrs     |
| Set up Heroku / Deploy           |    H     |     15mins     |      .25 hrs      |     .25 hrs     |
| Connecting Server                |    H     |      1hrs      |      .5hrs      |     .5hrs     |
| Routes                           |    H     |      2hrs      |      2hrs      |     2hrs     |
| Controllers                      |    H     |      2hrs      |      1hrs      |     1hrs     |
| Agents/Seed Data                 |    H     |      2hrs      |      2hrs      |     2hrs     |
| Install and set up react router  |    H     |     15mins     |      .25hrs      |     .25hrs     |
| Set up pages and components      |    H     |      2hrs      |      2hrs      |     2hrs     |
| Switch, Links, Routes            |    H     |      2hrs      |      1hrs      |     1hrs     |
| Header (Menu Button & Login)     |    H     |      3hrs      |      3hrs      |     3hrs     |
| Search bar                       |    H     |      2hrs      |      3hrs      |     3hrs     |
| Packages Display                 |    H     |      3hrs      |      4hrs      |     4hrs     |
| List of Agencies                 |    H     |      3hrs      |      3hrs      |     3hrs     |
| Reusable components on trip page |    H     |      3hrs      |      3hrs      |     3hrs     |
| Signup/Login form                |    H     |      3hrs      |      4hrs      |     4hrs     |
| Making everything communicates   |    H     |      2hrs      |      2hrs      |     2hrs     |
| Group debugging                  |    H     |      3hrs      |      3hrs      |     3hrs     |
| Responsiveness                   |    M     |      3hrs      |      3hrs      |     3hrs     |
| Home Page Styling                |    M     |      3hrs      |      3hrs      |     3hrs     |
| Agencies Page Styling            |    M     |      3hrs      |      3hrs      |     3hrs     |
| Trip Details Page Styling        |    M     |      3hrs      |      3hrs      |     3hrs     |
| User Page Styling                |    M     |      3hrs      |      1hrs      |     1hrs     |
| Git pull requests/approval       |    H     |      4hrs      |      3hrs      |     3hrs     |
| Group stand ups                  |    M     |      2hrs      |      2hrs      |     2hrs     |
| Total                            |    H     |     55hrs      |     52.5 hrs      |    52.5 hrs     |

| Component                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Trip Details multi-photo array |    H     |      3hrs      |      hrs      |     hrs     |
| Google map API - backend       |    H     |      4hrs      |      hrs      |     hrs     |
| Google map - front-end         |    H     |      3hrs      |      hrs      |     hrs     |
| User wallet                    |    H     |      3hrs      |      hrs      |     hrs     |
| Stripe API - backend           |    H     |      3hrs      |      hrs      |     hrs     |
| Stripe - frontend              |    H     |      3hrs      |      hrs      |     hrs     |
| Bookmarks                      |    H     |      3hrs      |      hrs      |     hrs     |
| Booking component              |    H     |      2hrs      |      hrs      |     hrs     |
| Pop up when booking complete   |    H     |      2hrs      |      hrs      |     hrs     |
| Git pulls                      |    H     |      1hrs      |      hrs      |     hrs     |
| Group stand ups                |    M     |      2hrs      |      hrs      |     hrs     |
| Total                          |    H     |     26hrs      |      hrs      |     hrs     |

## MVP/Post-MVP

### MVP

BACKEND

- Build Repositories
- Add dependencies
- Create standard components files and folders: server.js, controllers, models, db
- Set up Heroku
- Create files for MVP databases and schema: Agency, Trip Details, User
- Connect server
- Set up routes in server
- Build controllers / set up routes

Frontend

- Install and set up ???react router??? in index and app
- Switch Routes in App (Home, Trip Details, Agency, User)
- Header
  -Nav Bar
  - Menu Button
  - User Profile Button (Icon)
- Footer
  - Copyright by us
- Home Page
  - Search bar (if unavailable: no package available)
  - Popular Packages: Short list (3) of an example packages from agencies (pulled from API)
  - List of agencies (pulled from API)
- Agency Profile Pages- TEAM PAGE! We are the agents.
  - Agency Information (pulled from API)
  - Available packages (pulled from API)
  - Contact Details (pulled from API)
- Trip Details Page
  - Package info (pulled from API)
  - Stock photo of google map
  - Non-functioning Book Now button
- User Profile Page (pulled from API)
  - Form for login (username & password) + forgot password
  - Simple Authorization
- Styling each page

### Post-MVP

- Trip Details
  - Multiple photos displayed in trip details
  - Functioning Google Map API (replace stock photo)
  - Functioning Book Now button that takes user to Wallet (Stripe)
  - Bookmarks (favorites)
- User Profile Page
  - Bookmarks Displayed
  - Wallet component
  - Stripe API
- Booking details page (onClick Book Now)
  - Booking component
  - Pop up (Thank you for booking with {agency name}!)

## Components - Descriptions

- Detailed in MVP/Post-MVP

## Additional Libraries

- Sass CSS
- React, react-router-dom
- Node
- Express
