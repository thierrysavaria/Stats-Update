# Hockey Stats Data Automation

This repository contains Google Apps Script files designed to automate the collection of hockey player statistics from two different sources: **Elite Prospects** and the **HockeyTech** network of leagues.

The scripts work in tandem to pull data and populate Google Sheets, making it easy to create and maintain a comprehensive, up-to-date database for hockey analytics.

---

## Features

- **Automated Data Collection**  
  Scripts can be set up with Google Apps Script triggers to run automatically, keeping your data fresh.

- **Two Data Sources**  
  - Pulls player stats from Elite Prospects using the `IMPORTHTML` function for various leagues (OHL, QMJHL, WHL, NCDC, etc.).  
  - Pulls raw JSON data from the HockeyTech API for a wide range of junior leagues (BCHL, SJHL, AJHL, etc.).

- **Robust Data Handling**  
  The `players_StatsUpdate.js` file includes a custom function to fetch, parse, and sanitize JSON data before writing it to a Google Sheet.

---

## How to Use

1. **Create a Google Sheet**  
   Open a new Google Sheet and create a separate tab for each league you want to track (e.g., `BCHL STATS`, `OHL STATS`).  
   The script will write data to these sheets based on the tab name.

2. **Create an Apps Script Project**  
   Go to Extension < Apps Scripts and start a new project.

3. **Copy the Code**  
   Copy the content of the `.js` files in this repository into your new Apps Script project.  

4. **Set up Triggers**  
   To automate the daily updates, go to the **Triggers** section in your Apps Script project and set up a time-driven trigger for each of the main functions (e.g., `OHLStatsDailyUpdate`, `HockeyTech_Stats_Update`).

---

## File Breakdown

- **`function_EP_Leagues_DailyUpdate.js`**  
  Contains functions that use `IMPORTHTML` to pull and populate player stats directly from Elite Prospects' league pages into a Google Sheet.

- **`players_StatsUpdate.js`**  
  Includes a `HockeyTech_Stats_Update` function that fetches and processes JSON data from the HockeyTech API, along with a helper function to sanitize the data and write it to a Google Sheet.

---

## Disclaimer

Please note that these scripts rely on the specific HTML and JSON structure of the source websites.  
If the websites change their structure, the scripts may break and require updates.

---

## Contributing
I welcome contributions to this project! If you have any ideas for new features, bug fixes, or improvements, please feel free to open a pull request.

---

## License
This project is licensed under the MIT License—see the `LICENSE.md` file for details.

---

## Contact
* **Thierry Savaria**
* **GitHub:** [thierrysavaria](https://github.com/thierrysavaria)
