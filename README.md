# DHIS2 API Dashboards List

## Description
A React App that fetches information about dashboards from a DHIS2 dummy API, and displays them as a list of collapsible cards. When a card is clicked and opened, it displays a list of the items belonging to the dashboard in question, with a different icon for each item type.

The app includes funcitonality for starring the different cards and saving the starred cards in local storage. It is also possible to filter the different item types.

The official DHIS2 UI library was not used for this project, all styles are made from basic CSS, in addition to some imported icons from the React Icons library. The default DHIS2 font Roboto was used.

To avoid unnecessary re-rendering, I applied the "useEffect" hook from the React library, so that the data from the API only was fetched once.

## Deployed application
https://spillingweb-dhis2-dashboards.netlify.app/
