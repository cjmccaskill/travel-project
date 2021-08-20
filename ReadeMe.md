# Travel Project

## Description

Following the provided UX/UI design mockup and user flow chart, this mobile-friendly website provides users with information about different travel agency options and the packages each has on offer. The intended use is f

### Project Links

- [Back end git](https://github.com/cjmccaskill/travel-project-api)
- [Front end git](https://github.com/cjmccaskill/travel-project)

### Wireframes and Architecture

- Case Study/Wireframes: -[Travel UX/UI Case Study](https://www.behance.net/gallery/113994573/Travel-UX-UI-Case-Study)

### Time/Priority Matrix

| Component                        | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Git management                   |    H     |      8hrs      |     10hrs     |    10hrs    |
| Q&A and bug fixes                |    H     |      4hrs      |     10hrs     |    10hrs    |
| Connection                       |    H     |      1hr       |     1hrs      |    2hrs     |
| Express                          |    H     |      1hr       |     1hrs      |    1hrs     |
| Routes                           |    H     |      2hrs      |     2hrs      |    2hrs     |
| Controllers                      |    H     |      3hrs      |     8hrs      |    8hrs     |
| Seed                             |    H     |      4hrs      |     1hrs      |    1hrs     |
| Deployment                       |    H     |      2hrs      |     1hrs      |    1hrs     |
| Install and set up react router  |    H     |     0.5hrs     |    0.5hrs     |   0.5hrs    |
| Switch, Links, Routes            |    H     |      2hrs      |     1hrs      |    1hrs     |
| Header                           |    H     |      2hrs      |     2hrs      |    2hrs     |
| Home Display List from Backend   |    H     |      4hrs      |     1hrs      |    1hrs     |
| CRUD options                     |    H     |      6hrs      |     20hrs     |    20hrs    |
| Create Form                      |    H     |      5hrs      |     10hrs     |    10hrs    |
| Connecting Form to backend       |    H     |      4hrs      |     6hrs      |    6hrs     |
| Presentation Outline             |    H     |      4hrs      |     1hrs      |    1hrs     |
| Timer                            |    H     |      8hrs      |     7hrs      |    7hrs     |
| Talking point synchronized timer |    H     |     4hr s      |     5hrs      |    5hrs     |
| Responsiveness                   |    H     |      5hrs      |     8hrs      |    8hrs     |
| Progress Bar                     |    L     |      5hrs      |     5hrs      |    5hrs     |
| Timer Interface                  |    L     |      4hrs      |     6hrs      |    6hrs     |
| Dark mode/lightmode              |    L     |      1hrs      |     3hrs      |    3hrs     |
| Extra Styling                    |    L     |      2hrs      |     4hrs      |    4hrs     |
| Talking points drop down menu    |    L     |      2hrs      |     0hrs      |    0hrs     |
| Confetti                         |    L     |      2hrs      |     0hrs      |    0hrs     |
| Alert                            |    L     |      1hrs      |     0hrs      |    0hrs     |
| Total                            |    H     |    86.5hrs     |   114.5hrs    |  114.5hrs   |

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

- Install and set up “react router” in index and app
- Switch Routes in App (Home, Trip Details, Agency, User)
- Header
  -Nav Bar
- Footer
  - Copyright by us
- Home Page
  - Menu Button
  - User Profile Button (Icon)
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
- Styling each page

### Post-MVP

- Trip Details
  - Multiple photos displayed in trip details
  - Functioning Google Map (replace stock photo)
  - Functioning Book Now button that takes user to Wallet (Stripe)
  - Bookmarks (favorites)
- User Profile Page
  - Bookmarks Displayed
  - Wallet component
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
