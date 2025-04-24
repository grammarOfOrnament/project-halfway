# 🗺️ Halfway

**Find the perfect halfway point between two locations.**  
Built with Node.js and the Google Maps API, Halfway helps people meet up in the middle—easily, intuitively, and with a clean user experience.

🔗 [Try the Web App](https://halfwaylowfidelity.netlify.app/)  

---

## ✨ Overview

Halfway is a lightweight web app designed to solve a common real-world problem: *Where should we meet that's fair for both of us?*  

It takes two addresses and calculates the geographical midpoint using Google Maps APIs, returning a clickable map link so users can quickly plan their meetups.

This was a collaborative passion project, born from a designer’s need for a simple, professional tool to make social meetups easier.

---

## 🔧 Tech Stack

- **Frontend:** HTML, CSS
- **Backend:** Node.js
- **APIs:** Google Maps Geocoding API
- **Hosting:** Netlify

---

## 🧠 How It Works

1. **Input**  
   User enters two valid addresses and clicks "Find Halfway Point".

2. **Geocoding**  
   The app sends each address to the Google Maps API, converting them to latitude and longitude.

3. **Midpoint Calculation**  
   A simple algorithm averages the coordinates to find the midpoint.

4. **Link Generation**  
   The app reverse-engineers a Google Maps link pointing to the halfway spot.

5. **Results Display**  
   A shareable map link is returned to the user, ready to explore.

---

## 🎯 My Process & Contributions

Although my background is in product design, I built the backend and integrated all API logic for this project. This required thoughtful problem-solving and a willingness to dive into unknowns like geolocation math and API link structures.

Key challenges:
- Accurately converting and averaging geographic coordinates
- Generating reliable, user-friendly map links
- Designing fallback strategies for incomplete or invalid inputs

I approached the build with an iterative, risk-averse mindset, prioritizing usability and clarity over feature creep.

---

## 👥 Collaborator Feedback

> “Jason met me where I was and developed my app with a risk-averse, iterative approach. He strives to build things correctly in a way that reflects your vision. He would be a great partner for any project.”  
> — *Project Designer*

---

## 💡 Why I Built It

This tool started as a personal side project after a designer friend shared her frustration with clunky midpoint-finder tools. Most alternatives were cluttered or hard to use, so we built a better one—simple, effective, and user-friendly.

---

## 🚀 Future Enhancements

- Support for more than two addresses
- Suggest nearby restaurants or landmarks at the halfway point
- Save/share functionality for repeated meetups

---

Thanks for checking out **Halfway**!

